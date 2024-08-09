class CnpjCpfValidator {
    constructor(r) {
        var {
            cnpj: r,
            cpf: t
        } = r;
        this.cnpj = r, this.cpf = t, this.error = "";
    }
    isValid() {
        return !(!this.cnpj && !this.cpf && (this.error = "CNPJ/CPF não informado."));
    }
    getValues() {
        return {
            cnpj: this.cnpj,
            cpf: this.cpf
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(CnpjCpfValidator);