class ChaveValidator {
    constructor(r) {
        this.chave = r, this.error = "";
    }
    isValid() {
        return this.chave ? (this.chave = String(this.chave), 44 === this.chave.length || !(this.error = "Chave da NF-e com tamanho incorreto.")) : !(this.error = "Chave da NF-e não informada.");
    }
    getValues() {
        return this.chave;
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(ChaveValidator);