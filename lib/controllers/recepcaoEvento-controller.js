let {
    RecepcaoHelper,
    RetornoHelper
} = require("../helpers");

class RecepcaoController {
    static async enviar(e) {
        var r = RecepcaoHelper.montarRequest(e), e = await RecepcaoHelper.enviarEvento(r, e), o = RecepcaoHelper.montarResponse(e.data);
        return RetornoHelper.montarRetorno({
            json: o,
            data: r,
            retornoSefaz: e
        });
    }
}

module.exports = Object.freeze(RecepcaoController);