let CODIGOS_UF = require("../env").CODIGOS_UF;

class UfValidator {
    constructor(r) {
        r = r.cUFAutor;
        this.cUFAutor = r, this.error = "";
    }
    isValid() {
        return this.cUFAutor ? !!CODIGOS_UF.includes(this.cUFAutor) || !(this.error = "Código UF inválido.") : !(this.error = "Código UF do Autor não informado.");
    }
    getValues() {
        return {
            cUFAutor: this.cUFAutor
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(UfValidator);