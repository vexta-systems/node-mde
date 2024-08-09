let RecepcaoController = require("../controllers").RecepcaoController, Data = require("../util").Data, {
    AmbienteValidator,
    CertificadoValidator,
    CnpjCpfValidator,
    EventoValidator,
    LoteValidator,
    ZoneValidator
} = require("../validators");

class RecepcaoEvento {
    constructor(e) {
        var {
            requestOptions: t = {},
            httpsOptions: r = {}
        } = e.options || {}, o = new CertificadoValidator(e), a = new AmbienteValidator(e), i = new CnpjCpfValidator(e), e = new ZoneValidator(e);
        if (!o.isValid()) throw new Error(o.getError());
        if (!a.isValid()) throw new Error(a.getError());
        if (!i.isValid()) throw new Error(i.getError());
        if (!e.isValid()) throw new Error(e.getError());
        var {
            cert: o,
            key: n
        } = o.getValues(), a = a.getValues().tpAmb, {
            cnpj: i,
            cpf: l
        } = i.getValues(), e = e.getValues().timezone;
        this.config = Object.freeze({
            cnpj: i,
            cpf: l,
            tpAmb: a,
            timezone: e,
            cert: o,
            key: n,
            requestOptions: Object.freeze(t),
            httpsOptions: Object.freeze(r)
        }), Object.freeze(this);
    }
    enviarEvento(e) {
        let n = {
            ...this.config
        };
        e = new LoteValidator(e);
        if (!e.isValid()) throw new Error(e.getError());
        let {
            idLote: l,
            lote: t
        } = e.getValues();
        e = t.map(e => {
            var t, r, o, a, i = {}, e = new EventoValidator(e);
            if (e.isValid()) return {
                chNFe: t,
                justificativa: r,
                tpEvento: o,
                descEvento: a
            } = e.getValues(), r && (i.xJust = r), i.idLote = l, i.nSeqEvento = "1", 
            i.cOrgao = "91", i.tpAmb = n.tpAmb, i.cnpj = n.cnpj, i.cpf = n.cpf, 
            i.tpEvento = o, i.descEvento = a, i.chNFe = t, i.infEventoId = `ID${o}${t}01`, 
            i.dhEvento = Data.toFormat(new Date(), n.timezone), i;
            throw new Error(e.getError());
        });
        return n.idLote = l, n.eventos = e, RecepcaoController.enviar(n);
    }
}

module.exports = RecepcaoEvento;