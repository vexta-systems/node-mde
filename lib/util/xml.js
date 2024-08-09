let {
    XMLBuilder,
    XMLParser
} = require("fast-xml-parser");

class Xml {
    static envelopar(e) {
        return `<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Header/><soap12:Body>${e}</soap12:Body></soap12:Envelope>`;
    }
    static jsonToXml(e) {
        return new XMLBuilder({
            ignoreAttributes: !1
        }).build(e);
    }
    static xmlToJson(e) {
        return new XMLParser({
            attributeNamePrefix: "@_",
            textNodeName: "value",
            ignoreAttributes: !1,
            allowBooleanAttributes: !1,
            parseAttributeValue: !1,
            parseTagValue: !1,
            trimValues: !0
        }).parse(e);
    }
}

module.exports = Object.freeze(Xml);