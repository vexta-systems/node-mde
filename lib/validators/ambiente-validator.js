class AmbienteValidator {
    constructor(t) {
        t = t.tpAmb;
        this.tpAmb = t, this.error = "";
    }
    isValid() {
        return this.tpAmb ? "1" === this.tpAmb || "2" === this.tpAmb || !(this.error = "Ambiente com valor inválido.") : !(this.error = "Ambiente não informado.");
    }
    getValues() {
        return {
            tpAmb: this.tpAmb
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(AmbienteValidator);