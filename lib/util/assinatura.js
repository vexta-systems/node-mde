let SignedXml = require("xml-crypto").SignedXml;

class InfoProvider {
    constructor(e) {
        this.getKeyInfo = function() {
            return `<X509Data><X509Certificate>${e.split("-----")[2].replace(/[\r\n]/g, "")}</X509Certificate></X509Data>`;
        };
    }
}

class Assinatura {
    static assinarXml(e, t, n) {
        var r = "//*[local-name(.)='infEvento']", i = [ "http://www.w3.org/2000/09/xmldsig#enveloped-signature", "http://www.w3.org/TR/2001/REC-xml-c14n-20010315" ], a = new SignedXml();
        return a.keyInfoProvider = new InfoProvider(e), a.addReference(r, i), a.canonicalizationAlgorithm = i[1], 
        a.signingKey = t, a.computeSignature(n, {
            location: {
                reference: r,
                action: "after"
            }
        }), a.getSignedXml();
    }
}

module.exports = Object.freeze(Assinatura);