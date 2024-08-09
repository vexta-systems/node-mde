declare const _exports: typeof NsuValidator;
export = _exports;
declare class NsuValidator {
    /**
     *
     * @param {string} nsu
     */
    constructor(nsu: string);
    nsu: string;
    error: string;
    isValid(): boolean;
    getValues(): string;
    getError(): string;
}
