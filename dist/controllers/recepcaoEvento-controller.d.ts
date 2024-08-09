declare const _exports: typeof RecepcaoController;
export = _exports;
declare class RecepcaoController {
    /**
     *
     * @param {Object} opts
     * @returns {Promise<{data:{idLote: string,tpAmb: string,verAplic: string,cOrgao: string,cStat: string,xMotivo: string, infEvento:[{tpAmb: string,verAplic: string,cOrgao: string,cStat: string,xMotivo: string,chNFe: string,tpEvento: string,xEvento: string,nSeqEvento: string,CNPJDest: string,dhRegEvento: string,nProt: string}]}, error: string, reqXml: string, resXml: string, status: number}>}
     */
    static enviar(opts: any): Promise<{
        data: {
            idLote: string;
            tpAmb: string;
            verAplic: string;
            cOrgao: string;
            cStat: string;
            xMotivo: string;
            infEvento: [{
                tpAmb: string;
                verAplic: string;
                cOrgao: string;
                cStat: string;
                xMotivo: string;
                chNFe: string;
                tpEvento: string;
                xEvento: string;
                nSeqEvento: string;
                CNPJDest: string;
                dhRegEvento: string;
                nProt: string;
            }];
        };
        error: string;
        reqXml: string;
        resXml: string;
        status: number;
    }>;
}
