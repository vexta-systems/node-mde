let EVENTOS = require("../env").EVENTOS;

class EventoValidator {
    constructor(t) {
        var {
            chNFe: t,
            tipoEvento: i,
            justificativa: e
        } = t;
        this.chNFe = t, this.tipoEvento = i, this.justificativa = e, this.error = "";
    }
    isValid() {
        if (!this.chNFe) return !(this.error = "Chave da NF-e não informada.");
        if (!this.tipoEvento) return !(this.error = "Tipo Evento não informado.");
        if (!EVENTOS[this.tipoEvento]) return !(this.error = "Tipo Evento deve conter um dos valores: 210200, 210210, 210220 ou 210240");
        if (210240 === Number(this.tipoEvento)) {
            if (!this.justificativa) return !(this.error = "Justificativa não informada.");
            if (this.justificativa.length < 15 || 255 < this.justificativa.length) return !(this.error = "Justificativa com tamanho incorreto.");
        }
        var {
            tpEvento: t,
            descEvento: i
        } = EVENTOS[this.tipoEvento];
        return this.tpEvento = t, this.descEvento = i, !0;
    }
    getValues() {
        return {
            chNFe: this.chNFe,
            justificativa: this.justificativa,
            tpEvento: this.tpEvento,
            descEvento: this.descEvento
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(EventoValidator);