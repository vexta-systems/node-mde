let ZeroPad = require("../util").ZeroPad;

class NsuValidator {
    constructor(r) {
        this.nsu = r, this.error = "";
    }
    isValid() {
        return this.nsu ? (this.nsu = String(this.nsu), 15 < this.nsu.length ? !(this.error = "NSU com tamanho incorreto.") : (this.nsu = ZeroPad.padNsu(this.nsu), 
        !0)) : !(this.error = "NSU não informado.");
    }
    getValues() {
        return this.nsu;
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(NsuValidator);