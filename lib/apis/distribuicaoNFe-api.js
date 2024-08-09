let DistribuicaoNFeController = require("../controllers").DistribuicaoNFeController, {
    AmbienteValidator,
    CertificadoValidator,
    ChaveValidator,
    CnpjCpfValidator,
    NsuValidator,
    UfValidator
} = require("../validators");

class DistribuicaoNFe {
    constructor(r) {
        var {
            requestOptions: e = {},
            httpsOptions: t = {}
        } = r.options || {}, i = new CertificadoValidator(r), o = new AmbienteValidator(r), a = new CnpjCpfValidator(r), r = new UfValidator(r);
        if (!i.isValid()) throw new Error(i.getError());
        if (!o.isValid()) throw new Error(o.getError());
        if (!a.isValid()) throw new Error(a.getError());
        if (!r.isValid()) throw new Error(r.getError());
        var {
            cert: i,
            key: l
        } = i.getValues(), o = o.getValues().tpAmb, {
            cnpj: a,
            cpf: s
        } = a.getValues(), r = r.getValues().cUFAutor;
        this.config = Object.freeze({
            cUFAutor: r,
            cnpj: a,
            cpf: s,
            tpAmb: o,
            cert: i,
            key: l,
            requestOptions: Object.freeze(e),
            httpsOptions: Object.freeze(t)
        }), Object.freeze(this);
    }
    consultaChNFe(r) {
        var e, r = new ChaveValidator(r);
        if (r.isValid()) return e = r.getValues(), e = {
            ...this.config,
            chNFe: e
        }, DistribuicaoNFeController.enviar(e);
        throw new Error(r.getError());
    }
    consultaNSU(r) {
        var e, r = new NsuValidator(r);
        if (r.isValid()) return e = r.getValues(), e = {
            ...this.config,
            nsu: e
        }, DistribuicaoNFeController.enviar(e);
        throw new Error(r.getError());
    }
    consultaUltNSU(r) {
        var e, r = new NsuValidator(r);
        if (r.isValid()) return e = r.getValues(), e = {
            ...this.config,
            ultNSU: e
        }, DistribuicaoNFeController.enviar(e);
        throw new Error(r.getError());
    }
}

module.exports = DistribuicaoNFe;