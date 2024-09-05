'use strict'

const SignedXml = require('xml-crypto').SignedXml
const HashAlgorithms = [
  'http://www.w3.org/2000/09/xmldsig#sha1',
  'http://www.w3.org/2001/04/xmlenc#sha256',
  'http://www.w3.org/2001/04/xmlenc#sha512',
]

const SignatureAlgorithms = [
  'http://www.w3.org/2000/09/xmldsig#rsa-sha1',
  'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
  'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512',
  // Disabled by default due to key confusion concerns.
  // 'http://www.w3.org/2000/09/xmldsig#hmac-sha1'
]

class InfoProvider {
  /**
   *
   * @param {string} cert
   */
  constructor(cert) {
    this.getKeyInfo = function () {
      return `<X509Data><X509Certificate>${cert
        .split('-----')[2]
        .replace(/[\r\n]/g, '')}</X509Certificate></X509Data>`
    }
  }
}

class Assinatura {
  /**
   *
   * @param {string} cert
   * @param {string} key
   * @param {string} xml
   * @returns {string}
   */
  static assinarXml(cert, key, xml) {
    const xpath = "//*[local-name(.)='infEvento']"
    const transforms = [
      'http://www.w3.org/2000/09/xmldsig#enveloped-signature',
      'http://www.w3.org/TR/2001/REC-xml-c14n-20010315',
    ]
    const sig = new SignedXml({
      publicCert: cert,
      privateKey: key,
      canonicalizationAlgorithm: transforms[1],
      signatureAlgorithm: SignatureAlgorithms[0],
    })

    sig.addReference({ xpath, transforms, digestAlgorithm: HashAlgorithms[0] })
    // sig.signingKey = key

    sig.computeSignature(xml, {
      location: {
        reference: xpath,
        action: 'after',
      },
    })

    return sig.getSignedXml()
  }
}

module.exports = Object.freeze(Assinatura)
