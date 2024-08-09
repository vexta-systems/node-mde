declare const _exports: typeof RetornoHelper;
export = _exports;
declare class RetornoHelper {
    /**
     *
     * @param {Object} options
     * @param {Object} options.json
     * @param {string} options.data
     * @param {Object} options.retornoSefaz
     * @param {string} options.retornoSefaz.data
     * @param {number} options.retornoSefaz.status
     * @returns
     */
    static montarRetorno(options: {
        json: any;
        data: string;
        retornoSefaz: {
            data: string;
            status: number;
        };
    }): {
        data: any;
        reqXml: string;
        resXml: string;
        status: number;
    };
    static juntarRetornos(retornos: any): {
        data: {
            tpAmb: string;
            verAplic: string;
            cStat: string;
            xMotivo: string;
            dhResp: string;
            ultNSU: string;
            maxNSU: string;
            docZip: any[];
        };
        status: number;
    };
}
