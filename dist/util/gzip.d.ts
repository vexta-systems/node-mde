declare const _exports: typeof Gzip;
export = _exports;
declare class Gzip {
    /**
     *
     * @param {string} str
     * @returns {Promise<string>}
     */
    static unzip(str: string): Promise<string>;
}
