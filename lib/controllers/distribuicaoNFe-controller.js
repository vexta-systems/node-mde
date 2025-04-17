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
            var a = DistribuicaoNFeHelper.montarRequest(e), o = await DistribuicaoNFeHelper.enviarConsulta(a, e), n = await DistribuicaoNFeHelper.montarResponse(o.data), n = RetornoHelper.montarRetorno({
                json: n,
                data: a,
                retornoSefaz: o
            });
            n && t.push(n), r = "true" !== String(process.env.DEBUG || "false").toLowerCase() && "138" === n.data.cStat && !e.nsu && !e.chNFe && Number(n.data.ultNSU) < Number(n.data.maxNSU);
        }
        return RetornoHelper.juntarRetornos(t);
    }
}

module.exports = Object.freeze(DistribuicaoNFeController);