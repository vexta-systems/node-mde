let {
    CA,
    RECEPCAO
} = require("../env"), RecepcaoSchema = require("../schemas").RecepcaoSchema, SefazService = require("../services/sefaz-service"), {
    Assinatura,
    Xml
} = require("../util");

class RecepcaoHelper {
    static async enviarEvento(e, t) {
        var o = RECEPCAO[t.tpAmb], e = {
            method: "POST",
            data: e
        };
        return await new SefazService({
            baseURL: o,
            ca: CA,
            cert: t.cert,
            key: t.key,
            requestOptions: t.requestOptions,
            httpsOptions: t.httpsOptions
        }).request(e);
    }
    static montarRequest(t) {
        var e = t.eventos.map(e => {
            e = RecepcaoSchema.montarSchema(e), e = Xml.jsonToXml(e);
            return Assinatura.assinarXml(t.cert, t.key, e);
        }), e = `<nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4"><envEvento xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.00"><idLote>${t.idLote}</idLote>${e.reduce((e, t) => e += t.substring(t.indexOf('<evento versao="1.00">'), t.indexOf("</envEvento>")), "")}</envEvento></nfeDadosMsg>`;
        return Xml.envelopar(e);
    }
    static montarResponse(e) {
        var t = {}, e = Xml.xmlToJson(e), {
            "soap:Envelope": {
                "soap:Body": {
                    nfeRecepcaoEventoNFResult: {
                        retEnvEvento: e = {}
                    } = {}
                } = {}
            } = {}
        } = (e.error && (t.error = {
            xml: e.error,
            json: Xml.xmlToJson(e.error)
        }), e);
        return e.retEvento ? Array.isArray(e.retEvento) || (e.retEvento = [ e.retEvento ]) : e.retEvento = [], 
        t.idLote = e.idLote || "", t.tpAmb = e.tpAmb || "", t.verAplic = e.verAplic || "", 
        t.cOrgao = e.cOrgao || "", t.cStat = e.cStat || "", t.xMotivo = e.xMotivo || "", 
        t.infEvento = e.retEvento.map(({
            infEvento: e
        }) => ({
            tpAmb: e.tpAmb || "",
            verAplic: e.verAplic || "",
            cOrgao: e.cOrgao || "",
            cStat: e.cStat || "",
            xMotivo: e.xMotivo || "",
            chNFe: e.chNFe || "",
            tpEvento: e.tpEvento || "",
            xEvento: e.xEvento || "",
            nSeqEvento: e.nSeqEvento || "",
            CNPJDest: e.CNPJDest || "",
            dhRegEvento: e.dhRegEvento || "",
            nProt: e.nProt || ""
        })), t;
    }
}

module.exports = Object.freeze(RecepcaoHelper);