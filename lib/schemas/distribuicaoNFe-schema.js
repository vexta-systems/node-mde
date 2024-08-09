class DistribuicaoNFeSchema {
    static montarSchema(e) {
        var t = {
            tpAmb: e.tpAmb,
            cUFAutor: e.cUFAutor
        };
        return e.cnpj ? t.CNPJ = e.cnpj : t.CPF = e.cpf, e.ultNSU ? t.distNSU = {
            ultNSU: e.ultNSU
        } : e.chNFe ? t.consChNFe = {
            chNFe: e.chNFe
        } : t.consNSU = {
            NSU: e.nsu
        }, t["@_versao"] = "1.01", t["@_xmlns"] = "http://www.portalfiscal.inf.br/nfe", 
        {
            nfeDistDFeInteresse: {
                nfeDadosMsg: {
                    distDFeInt: t
                },
                "@_xmlns": "http://www.portalfiscal.inf.br/nfe/wsdl/NFeDistribuicaoDFe"
            }
        };
    }
}

module.exports = Object.freeze(DistribuicaoNFeSchema);