class ChaveValidator {
    constructor(e) {
        this.chave = e, this.error = "";
    }
    isValid() {
        return this.chave ? (this.chave = String(this.chave), 44 === this.chave.length || !(this.error = "Chave da NF-e/CT-e com tamanho incorreto.")) : !(this.error = "Chave da NF-e/CT-e não informada.");
    }
    getValues() {
        return this.chave;
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(ChaveValidator);