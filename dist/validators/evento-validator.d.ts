declare const _exports: typeof EventoValidator;
export = _exports;
declare class EventoValidator {
    /**
     *
     * @param {Object} evento
     * @param {string} evento.chNFe
     * @param {210200 | 210210 | 210220 | 210240} evento.tipoEvento
     * @param {string} [evento.justificativa]
     */
    constructor(evento: {
        chNFe: string;
        tipoEvento: 210200 | 210210 | 210220 | 210240;
        justificativa?: string;
    });
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
}
