let {
    DistribuicaoCTeHelper,
    RetornoHelper
} = require("../helpers");

class DistribuicaoCTeController {
    static async enviar(e) {
        return this.enviarInterno(e);
    }
    static async enviarInterno(e) {
        let t = !0;
        for (var a = []; t; ) {
            var r = DistribuicaoCTeHelper.montarRequest(e), o = await DistribuicaoCTeHelper.enviarConsulta(r, e), n = await DistribuicaoCTeHelper.montarResponse(o.data), n = RetornoHelper.montarRetorno({
                json: n,
                data: r,
                retornoSefaz: o
            });
            n && a.push(n), console.log(`CTe -> ultNSU: ${n.data.ultNSU}; maxNSU: ${n.data.maxNSU}; cStat: ${n.data.cStat} - ` + n.data.xMotivo), 
            t = "true" !== String(process.env.DEBUG || "false").toLowerCase() && "138" === n.data.cStat && !e.nsu && !e.chNFe && Number(n.data.ultNSU) < Number(n.data.maxNSU);
        }
        return RetornoHelper.juntarRetornos(a);
    }
}

module.exports = Object.freeze(DistribuicaoCTeController);