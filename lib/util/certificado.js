let forge = require("node-forge");

class Certificado {
    static p12ToPem(e, r) {
        e = e.toString("base64"), e = forge.asn1.fromDer(forge.util.decode64(e)), 
        e = forge.pkcs12.pkcs12FromAsn1(e, !0, r), r = e.getBags({
            bagType: forge.pki.oids.pkcs8ShroudedKeyBag
        })[forge.pki.oids.pkcs8ShroudedKeyBag].concat(e.getBags({
            bagType: forge.pki.oids.keyBag
        })[forge.pki.oids.keyBag]), e = e.getBags({
            bagType: forge.pki.oids.certBag
        })[forge.pki.oids.certBag].sort((e, r) => new Date(e.cert.validity.notAfter) - new Date(r.cert.validity.notAfter)), 
        r = forge.pki.privateKeyToAsn1(r[0].key), r = forge.pki.wrapRsaPrivateKey(r);
        return {
            cert: forge.pki.certificateToPem(e[0].cert),
            key: forge.pki.privateKeyInfoToPem(r)
        };
    }
}

module.exports = Object.freeze(Certificado);