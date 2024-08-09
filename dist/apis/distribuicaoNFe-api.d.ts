export = DistribuicaoNFe;
declare class DistribuicaoNFe {
    /**
     * @param {Object} config
     * @param {Buffer} [config.pfx]
     * @param {string} [config.passphrase]
     * @param {Buffer | string} [config.cert]
     * @param {Buffer | string} [config.key]
     * @param {'11' | '12' | '13' | '14' | '15' | '16' | '17' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '31' | '32' | '33' | '35' | '41' | '42' | '43' | '50' | '51' | '52' | '53'} config.cUFAutor
     * @param {string} [config.cnpj]
     * @param {string} [config.cpf]
     * @param {'1' | '2'} config.tpAmb
     * @param {Object} [config.options]
     * @param {import('axios').AxiosRequestConfig} [config.options.requestOptions]
     * @param {import('https').AgentOptions} [config.options.httpsOptions]
     */
    constructor(config: {
        pfx?: Buffer;
        passphrase?: string;
        cert?: Buffer | string;
        key?: Buffer | string;
        cUFAutor: "11" | "12" | "13" | "14" | "15" | "16" | "17" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "31" | "32" | "33" | "35" | "41" | "42" | "43" | "50" | "51" | "52" | "53";
        cnpj?: string;
        cpf?: string;
        tpAmb: "1" | "2";
        options?: {
            requestOptions?: import("axios").AxiosRequestConfig;
            httpsOptions?: import("https").AgentOptions;
        };
    });
    config: Readonly<{
        cUFAutor: "11" | "12" | "13" | "14" | "15" | "16" | "17" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "31" | "32" | "33" | "35" | "41" | "42" | "43" | "50" | "51" | "52" | "53";
        cnpj: string;
        cpf: string;
        tpAmb: "1" | "2";
        cert: string;
        key: string;
        requestOptions: Readonly<import("axios").AxiosRequestConfig<any>>;
        httpsOptions: Readonly<import("https").AgentOptions>;
    }>;
    /**
     * @param {string} chNFe
     */
    consultaChNFe(chNFe: string): Promise<{
        data: {
            tpAmb: string;
            verAplic: string;
            cStat: string;
            xMotivo: string;
            dhResp: string;
            ultNSU: string;
            maxNSU: string;
            docZip: [{
                xml: string;
                json: any;
                nsu: string;
                schema: string;
            }];
        };
        error: string;
        reqXml: string;
        resXml: string;
        status: number;
    }>;
    /**
     * @param {string} nsu
     */
    consultaNSU(nsu: string): Promise<{
        data: {
            tpAmb: string;
            verAplic: string;
            cStat: string;
            xMotivo: string;
            dhResp: string;
            ultNSU: string;
            maxNSU: string;
            docZip: [{
                xml: string;
                json: any;
                nsu: string;
                schema: string;
            }];
        };
        error: string;
        reqXml: string;
        resXml: string;
        status: number;
    }>;
    /**
     * @param {string} ultNSU
     */
    consultaUltNSU(ultNSU: string): Promise<{
        data: {
            tpAmb: string;
            verAplic: string;
            cStat: string;
            xMotivo: string;
            dhResp: string;
            ultNSU: string;
            maxNSU: string;
            docZip: [{
                xml: string;
                json: any;
                nsu: string;
                schema: string;
            }];
        };
        error: string;
        reqXml: string;
        resXml: string;
        status: number;
    }>;
}
