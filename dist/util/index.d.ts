export = util;
declare const util: Readonly<{
    Assinatura: {
        new (): {};
        assinarXml(cert: string, key: string, xml: string): string;
    };
    Certificado: {
        new (): {};
        p12ToPem(pfx: Buffer, passphrase: string): {
            cert: string;
            key: string;
        };
    };
    Data: {
        new (): {};
        toFormat(date: Date, zone: string): string;
    };
    Gzip: {
        new (): {};
        unzip(str: string): Promise<string>;
    };
    Xml: {
        new (): {};
        envelopar(xml: string): string;
        jsonToXml(json: any): string;
        xmlToJson(xml: string): any;
    };
    ZeroPad: {
        new (): {};
        padNsu(str: string): string;
    };
}>;
