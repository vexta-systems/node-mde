let {
    DistribuicaoNFeHelper,
    RetornoHelper
} = require("../helpers");

class DistribuicaoNFeController {
    static async enviar(e) {
        return this.enviarInterno(e);
    }
    static async enviarInterno(e) {
        let r = !0;
        for (var t = []; r; ) {
            var a = DistribuicaoNFeHelper.montarRequest(e), o = await DistribuicaoNFeHelper.enviarConsulta(a, e), i = await DistribuicaoNFeHelper.montarResponse(o.data), i = RetornoHelper.montarRetorno({
                json: i,
                data: a,
                retornoSefaz: o
            });
            i && t.push(i), r = "true" !== String(process.env.DEBUG || "false").toLowerCase() && "138" === i.data.cStat && Number(i.data.ultNSU) < Number(i.data.maxNSU);
        }
        return RetornoHelper.juntarRetornos(t);
    }
}

module.exports = Object.freeze(DistribuicaoNFeController);