let LOTE_MIN_LENGTH = 1, LOTE_MAX_LENGTH = 20;

class LoteValidator {
    constructor(t) {
        var {
            idLote: t,
            lote: e
        } = t;
        this.idLote = t, this.lote = e, this.error = "";
    }
    isValid() {
        return this.idLote || (this.idLote = "1"), Array.isArray(this.lote) ? !(this.lote.length < LOTE_MIN_LENGTH || this.lote.length > LOTE_MAX_LENGTH) || (this.error = `Um lote deve possuir no mínimo ${LOTE_MIN_LENGTH} e no máximo ${LOTE_MAX_LENGTH} eventos.`, 
        !1) : !(this.error = "Lote não informado.");
    }
    getValues() {
        return {
            idLote: this.idLote,
            lote: this.lote
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(LoteValidator);