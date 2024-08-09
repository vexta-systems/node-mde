let Xml = require("../util").Xml;

class RetornoHelper {
    static montarRetorno(a) {
        var {
            json: a,
            data: t,
            retornoSefaz: d
        } = a, t = {
            data: a,
            reqXml: t,
            resXml: d.data,
            status: d.status
        };
        return a.error && (t.data = {}, t.error = {
            xml: a.error,
            json: Xml.xmlToJson(a.error)
        }), 2 < Math.floor(d.status / 100) && !a.error && (t.data = {}, t.error = {
            xml: d.data,
            json: Xml.xmlToJson(d.data)
        }), t;
    }
    static juntarRetornos(a) {
        let d = {
            data: {
                tpAmb: "",
                verAplic: "",
                cStat: "",
                xMotivo: "",
                dhResp: "",
                ultNSU: "000000000000000",
                maxNSU: "000000000000000",
                docZip: []
            },
            status: 0
        };
        return (a = Array.isArray(a) ? a : [ a ]).forEach((a, t) => {
            (d = 0 === t ? Object.assign(d, a) : d).data && a.data && ("138" !== d.data.cStat && (d.data.cStat = a.data.cStat, 
            d.data.xMotivo = a.data.xMotivo, d.data.dhResp = a.data.dhResp), d.data.ultNSU > a.data.ultNSU && (d.data.ultNSU = a.data.ultNSU), 
            d.data.ultNSU > a.data.maxNSU && (d.data.ultNSU = a.data.maxNSU), d.data.maxNSU < a.data.ultNSU && (d.data.maxNSU = a.data.ultNSU), 
            d.data.maxNSU < a.data.maxNSU && (d.data.maxNSU = a.data.maxNSU), 0 < t) && d.data.docZip && a.data.docZip && (d.data.docZip = d.data.docZip.concat(a.data.docZip));
        }), 1 < a.length && (d.resXml = "united", d.reqXml = "united"), d;
    }
}

module.exports = Object.freeze(RetornoHelper);