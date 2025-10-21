let {
    CA,
    DISTRIBUICAONFE
} = require("../env"), DistribuicaoNFeSchema = require("../schemas").DistribuicaoNFeSchema, SefazService = require("../services/sefaz-service"), {
    Gzip,
    Xml
} = require("../util");

class DistribuicaoNFeHelper {
    static async enviarConsulta(e, t) {
        var r = DISTRIBUICAONFE[t.tpAmb], e = {
            method: "POST",
            data: e
        };
        return await new SefazService({
            baseURL: r,
            ca: CA,
            cert: t.cert,
            key: t.key,
            tpAmb: t.tpAmb,
            requestOptions: t.requestOptions,
            httpsOptions: t.httpsOptions
        }).request(e);
    }
    static montarRequest(e) {
        e = DistribuicaoNFeSchema.montarSchema(e), e = Xml.jsonToXml(e);
        return Xml.envelopar(e);
    }
    static async montarResponse(e) {
        var t = {}, e = Xml.xmlToJson(e), {
            "soap:Envelope": {
                "soap:Body": {
                    nfeDistDFeInteresseResponse: {
                        nfeDistDFeInteresseResult: {
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

module.exports = Object.freeze(DistribuicaoNFeHelper);