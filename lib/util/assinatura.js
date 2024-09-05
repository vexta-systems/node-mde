let SignedXml = require("xml-crypto").SignedXml, HashAlgorithms = [ "http://www.w3.org/2000/09/xmldsig#sha1", "http://www.w3.org/2001/04/xmlenc#sha256", "http://www.w3.org/2001/04/xmlenc#sha512" ], SignatureAlgorithms = [ "http://www.w3.org/2000/09/xmldsig#rsa-sha1", "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256", "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512" ];

class InfoProvider {
    constructor(t) {
        this.getKeyInfo = function() {
            return `<X509Data><X509Certificate>${t.split("-----")[2].replace(/[\r\n]/g, "")}</X509Certificate></X509Data>`;
        };
    }
}

class Assinatura {
    static assinarXml(t, e, r) {
        var a = "//*[local-name(.)='infEvento']", i = [ "http://www.w3.org/2000/09/xmldsig#enveloped-signature", "http://www.w3.org/TR/2001/REC-xml-c14n-20010315" ], t = new SignedXml({
            publicCert: t,
            privateKey: e,
            canonicalizationAlgorithm: i[1],
            signatureAlgorithm: SignatureAlgorithms[0]
        });
        return t.addReference({
            xpath: a,
            transforms: i,
            digestAlgorithm: HashAlgorithms[0]
        }), t.computeSignature(r, {
            location: {
                reference: a,
                action: "after"
            }
        }), t.getSignedXml();
    }
}

module.exports = Object.freeze(Assinatura);