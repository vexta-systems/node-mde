declare const _exports: typeof ChaveValidator;
export = _exports;
declare class ChaveValidator {
    /**
     *
     * @param {string} chave
     */
    constructor(chave: string);
    chave: string;
    error: string;
    isValid(): boolean;
    getValues(): string;
    getError(): string;
}
