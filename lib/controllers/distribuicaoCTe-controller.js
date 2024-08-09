let {
    DistribuicaoCTeHelper,
    RetornoHelper
} = require("../helpers");

class DistribuicaoCTeController {
    static async enviar(e) {
        return this.enviarInterno(e);
    }
    static async enviarInterno(e) {
        let r = !0;
        for (var t = []; r; ) {
            var a = DistribuicaoCTeHelper.montarRequest(e), o = await DistribuicaoCTeHelper.enviarConsulta(a, e), i = await DistribuicaoCTeHelper.montarResponse(o.data), i = RetornoHelper.montarRetorno({
                json: i,
                data: a,
                retornoSefaz: o
            });
            i && t.push(i), r = "true" !== String(process.env.DEBUG || "false").toLowerCase() && "138" === i.data.cStat && Number(i.data.ultNSU) < Number(i.data.maxNSU);
        }
        return RetornoHelper.juntarRetornos(t);
    }
}

module.exports = Object.freeze(DistribuicaoCTeController);