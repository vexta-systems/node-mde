let {
    CA,
    DISTRIBUICAOCTE
} = require("../env"), DistribuicaoCTeSchema = require("../schemas").DistribuicaoCTeSchema, SefazService = require("../services/sefaz-service"), {
    Gzip,
    Xml
} = require("../util");

class DistribuicaoCTeHelper {
    static async enviarConsulta(e, t) {
        var r = DISTRIBUICAOCTE[t.tpAmb], e = {
            method: "POST",
            data: e
        };
        return await new SefazService({
            baseURL: r,
            ca: CA,
            cert: t.cert,
            key: t.key,
            requestOptions: t.requestOptions,
            httpsOptions: t.httpsOptions
        }).request(e);
    }
    static montarRequest(e) {
        e = DistribuicaoCTeSchema.montarSchema(e), e = Xml.jsonToXml(e);
        return Xml.envelopar(e);
    }
    static async montarResponse(e) {
        var t = {}, e = Xml.xmlToJson(e), {
            "soap:Envelope": {
                "soap:Body": {
                    cteDistDFeInteresseResponse: {
                        cteDistDFeInteresseResult: {
                            retDistDFeInt: e = {}
                        } = {}
                    } = {}
                } = {}
            } = {}
        } = (e.error && (t.error = {
            xml: e.error,
            json: Xml.xmlToJson(e.error)
        }), e), {
            loteDistDFeInt: r = {}
        } = e, r = (r.docZip ? Array.isArray(r.docZip) || (r.docZip = [ r.docZip ]) : r.docZip = [], 
        await Promise.all(r.docZip.map(async e => {
            var t = await Gzip.unzip(e.value);
            return {
                xml: t,
                json: Xml.xmlToJson(t),
                nsu: e["@_NSU"],
                schema: e["@_schema"]
            };
        })));
        return t.tpAmb = e.tpAmb || "", t.verAplic = e.verAplic || "", t.cStat = e.cStat || "", 
        t.xMotivo = e.xMotivo || "", t.dhResp = e.dhResp || "", t.ultNSU = e.ultNSU || "", 
        t.maxNSU = e.maxNSU || "", t.docZip = r, t;
    }
}

module.exports = Object.freeze(DistribuicaoCTeHelper);