export = Instance;
declare class Instance {
    constructor(opts: any);
    instance: import("axios").AxiosInstance;
    /**
     * @returns {Promise<{status: number, data: string}>}
     */
    request(config: any): Promise<{
        status: number;
        data: string;
    }>;
}
