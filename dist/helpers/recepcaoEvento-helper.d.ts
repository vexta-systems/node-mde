declare const _exports: typeof RecepcaoHelper;
export = _exports;
declare class RecepcaoHelper {
    /**
     *
     * @param {string} data
     * @param {Object} opts
     * @returns
     */
    static enviarEvento(data: string, opts: any): Promise<{
        status: number;
        data: string;
    }>;
    /**
     *
     * @param {Object} opts
     * @returns {string}
     */
    static montarRequest(opts: any): string;
    /**
     *
     * @param {string} data
     * @returns {{idLote: string,tpAmb: string,verAplic: string,cOrgao: string,cStat: string,xMotivo: string, infEvento:[{tpAmb: string,verAplic: string,cOrgao: string,cStat: string,xMotivo: string,chNFe: string,tpEvento: string,xEvento: string,nSeqEvento: string,CNPJDest: string,dhRegEvento: string,nProt: string}], error: string}}
     */
    static montarResponse(data: string): {
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
        error: string;
    };
}
