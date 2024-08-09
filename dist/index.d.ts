declare namespace _default {
    export { DistribuicaoNFe };
    export { RecepcaoEvento };
    export { DistribuicaoCTe };
}
export default _default;
export namespace mde {
    export { DistribuicaoNFe };
    export { RecepcaoEvento };
    export { DistribuicaoCTe };
}
import DistribuicaoNFe = require("./apis/distribuicaoNFe-api");
import RecepcaoEvento = require("./apis/recepcaoEvento-api");
import DistribuicaoCTe = require("./apis/distribuicaoCTe-api");
export { DistribuicaoNFe, RecepcaoEvento, DistribuicaoCTe };
