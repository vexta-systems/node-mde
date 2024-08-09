let {
    CA,
    DISTRIBUICAONFE
} = require("../env"), DistribuicaoNFeSchema = require("../schemas").DistribuicaoNFeSchema, SefazService = require("../services/sefaz-service"), {
    Gzip,
    Xml
} = require("../util");

class DistribuicaoNFeHelper {
    static async enviarConsulta(e, r) {
        var t = DISTRIBUICAONFE[r.tpAmb], e = {
            method: "POST",
            data: e
        };
        return await new SefazService({
            baseURL: t,
            ca: CA,
            cert: r.cert,
            key: r.key,
            requestOptions: r.requestOptions,
            httpsOptions: r.httpsOptions
        }).request(e);
    }
    static montarRequest(e) {
        e = DistribuicaoNFeSchema.montarSchema(e), e = Xml.jsonToXml(e);
        return Xml.envelopar(e);
    }
    static async montarResponse(e) {
        var r = {}, e = Xml.xmlToJson(e), {
            "soap:Envelope": {
                "soap:Body": {
                    nfeDistDFeInteresseResponse: {
                        nfeDistDFeInteresseResult: {
                            retDistDFeInt: e = {}
                        } = {}
                    } = {}
                } = {}
            } = {}
        } = (e.error && (r.error = {
            xml: e.error,
            json: Xml.xmlToJson(e.error)
        }), e), {
            loteDistDFeInt: t = {}
        } = e, t = (t.docZip ? Array.isArray(t.docZip) || (t.docZip = [ t.docZip ]) : t.docZip = [], 
        await Promise.all(t.docZip.map(async e => {
            var r = await Gzip.unzip(e.value);
            return {
                xml: r,
                json: Xml.xmlToJson(r),
                nsu: e["@_NSU"],
                schema: e["@_schema"]
            };
        })));
        return r.tpAmb = e.tpAmb || "", r.verAplic = e.verAplic || "", r.cStat = e.cStat || "", 
        r.xMotivo = e.xMotivo || "", r.dhResp = e.dhResp || "", r.ultNSU = e.ultNSU || "", 
        r.maxNSU = e.maxNSU || "", r.docZip = t, r;
    }
}

module.exports = Object.freeze(DistribuicaoNFeHelper);