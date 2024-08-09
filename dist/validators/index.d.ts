export = validator;
declare const validator: Readonly<{
    AmbienteValidator: {
        new (config: {
            tpAmb: "1" | "2";
        }): {
            tpAmb: "1" | "2";
            error: string;
            isValid(): boolean;
            getValues(): {
                tpAmb: "1" | "2";
            };
            getError(): string;
        };
    };
    CertificadoValidator: {
        new (config: {
            pfx?: Buffer;
            passphrase?: string;
            cert?: Buffer | string;
            key?: Buffer | string;
        }): {
            pfx: Buffer;
            passphrase: string;
            cert: string | Buffer;
            key: string | Buffer;
            error: string;
            isValid(): boolean;
            getValues(): {
                cert: string;
                key: string;
            };
            getError(): string;
        };
    };
    ChaveValidator: {
        new (chave: string): {
            chave: string;
            error: string;
            isValid(): boolean;
            getValues(): string;
            getError(): string;
        };
    };
    CnpjCpfValidator: {
        new (config: {
            cnpj?: string;
            cpf?: string;
        }): {
            cnpj: string;
            cpf: string;
            error: string;
            isValid(): boolean;
            getValues(): {
                cnpj: string;
                cpf: string;
            };
            getError(): string;
        };
    };
    EventoValidator: {
        new (evento: {
            chNFe: string;
            tipoEvento: 210200 | 210210 | 210220 | 210240;
            justificativa?: string;
        }): {
            chNFe: string;
            tipoEvento: 210200 | 210210 | 210220 | 210240;
            justificativa: string;
            error: string;
            isValid(): boolean;
            tpEvento: number;
            descEvento: string;
            getValues(): {
                chNFe: string;
                justificativa: string;
                tpEvento: number;
                descEvento: string;
            };
            getError(): string;
        };
    };
    LoteValidator: {
        new (config: {
            idLote?: string;
            lote: {
                chNFe: string;
                tipoEvento: 210200 | 210210 | 210220 | 210240;
                justificativa?: string;
            }[];
        }): {
            idLote: string;
            lote: {
                chNFe: string;
                tipoEvento: 210200 | 210210 | 210220 | 210240;
                justificativa?: string;
            }[];
            error: string;
            isValid(): boolean;
            getValues(): {
                idLote: string;
                lote: {
                    chNFe: string;
                    tipoEvento: 210200 | 210210 | 210220 | 210240;
                    justificativa?: string;
                }[];
            };
            getError(): string;
        };
    };
    NsuValidator: {
        new (nsu: string): {
            nsu: string;
            error: string;
            isValid(): boolean;
            getValues(): string;
            getError(): string;
        };
    };
    UfValidator: {
        new (config: {
            cUFAutor: "11" | "12" | "13" | "14" | "15" | "16" | "17" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "31" | "32" | "33" | "35" | "41" | "42" | "43" | "50" | "51" | "52" | "53";
        }): {
            cUFAutor: "11" | "12" | "13" | "14" | "15" | "16" | "17" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "31" | "32" | "33" | "35" | "41" | "42" | "43" | "50" | "51" | "52" | "53";
            error: string;
            isValid(): boolean;
            getValues(): {
                cUFAutor: "11" | "12" | "13" | "14" | "15" | "16" | "17" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "31" | "32" | "33" | "35" | "41" | "42" | "43" | "50" | "51" | "52" | "53";
            };
            getError(): string;
        };
    };
    ZoneValidator: {
        new (config: {
            timezone?: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
        }): {
            timezone: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
            error: string;
            isValid(): boolean;
            getValues(): {
                timezone: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
            };
            getError(): string;
        };
    };
}>;
