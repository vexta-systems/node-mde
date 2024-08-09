class DistribuicaoCTeSchema {
    static montarSchema(t) {
        var e = {
            tpAmb: t.tpAmb,
            cUFAutor: t.cUFAutor
        };
        return t.cnpj ? e.CNPJ = t.cnpj : e.CPF = t.cpf, t.ultNSU ? e.distNSU = {
            ultNSU: t.ultNSU
        } : t.chNFe ? e.consChCTe = {
            chNFe: t.chNFe
        } : e.consNSU = {
            NSU: t.nsu
        }, e["@_versao"] = "1.00", e["@_xmlns"] = "http://www.portalfiscal.inf.br/cte", 
        {
            cteDistDFeInteresse: {
                cteDadosMsg: {
                    distDFeInt: e
                },
                "@_xmlns": "http://www.portalfiscal.inf.br/cte/wsdl/CTeDistribuicaoDFe"
            }
        };
    }
}

module.exports = Object.freeze(DistribuicaoCTeSchema);