export = RecepcaoEvento;
declare class RecepcaoEvento {
    /**
     * @param {Object} config
     * @param {Buffer} [config.pfx]
     * @param {string} [config.passphrase]
     * @param {Buffer | string} [config.cert]
     * @param {Buffer | string} [config.key]
     * @param {string} [config.cnpj]
     * @param {string} [config.cpf]
     * @param {'1' | '2'} config.tpAmb
     * @param {'America/Araguaina' | 'America/Bahia' | 'America/Belem' | 'America/Boa_Vista' | 'America/Campo_Grande' | 'America/Cuiaba' | 'America/Fortaleza' | 'America/Maceio' | 'America/Manaus' | 'America/Noronha' | 'America/Porto_Velho' | 'America/Recife' | 'America/Rio_Branco' | 'America/Sao_Paulo'} [config.timezone = 'America/Sao_Paulo']
     * @param {Object} [config.options]
     * @param {import('axios').AxiosRequestConfig} [config.options.requestOptions]
     * @param {import('https').AgentOptions} [config.options.httpsOptions]
     */
    constructor(config: {
        pfx?: Buffer;
        passphrase?: string;
        cert?: Buffer | string;
        key?: Buffer | string;
        cnpj?: string;
        cpf?: string;
        tpAmb: "1" | "2";
        timezone?: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
        options?: {
            requestOptions?: import("axios").AxiosRequestConfig;
            httpsOptions?: import("https").AgentOptions;
        };
    });
    config: Readonly<{
        cnpj: string;
        cpf: string;
        tpAmb: "1" | "2";
        timezone: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
        cert: string;
        key: string;
        requestOptions: Readonly<import("axios").AxiosRequestConfig<any>>;
        httpsOptions: Readonly<import("https").AgentOptions>;
    }>;
    /**
     * @param {Object} options
     * @param {string} [options.idLote = '1']
     * @param {{chNFe: string, tipoEvento: 210200 | 210210 | 210220 | 210240, justificativa?: string}[]} options.lote
     */
    enviarEvento(options: {
        idLote?: string;
        lote: {
            chNFe: string;
            tipoEvento: 210200 | 210210 | 210220 | 210240;
            justificativa?: string;
        }[];
    }): Promise<{
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
