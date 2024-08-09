let Certificado = require("../util").Certificado;

class CertificadoValidator {
    constructor(r) {
        var {
            pfx: r,
            passphrase: t,
            cert: e,
            key: i
        } = r;
        this.pfx = r, this.passphrase = t, this.cert = e, this.key = i, this.error = "";
    }
    isValid() {
        if (this.pfx) {
            if (!this.passphrase) return !(this.error = "Senha do Certificado não informada.");
            var r = Certificado.p12ToPem(this.pfx, this.passphrase);
            this.cert = r.cert, this.key = r.key;
        }
        return this.cert ? !!this.key || !(this.error = "Key não informada.") : !(this.error = "Cert não informado.");
    }
    getValues() {
        return {
            cert: this.cert.toString(),
            key: this.key.toString()
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(CertificadoValidator);