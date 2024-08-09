declare const _exports: typeof LoteValidator;
export = _exports;
declare class LoteValidator {
    /**
     *
     * @param {Object} config
     * @param {string} [config.idLote]
     * @param {{chNFe: string, tipoEvento: 210200 | 210210 | 210220 | 210240, justificativa?: string}[]} config.lote
     */
    constructor(config: {
        idLote?: string;
        lote: {
            chNFe: string;
            tipoEvento: 210200 | 210210 | 210220 | 210240;
            justificativa?: string;
        }[];
    });
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
}
