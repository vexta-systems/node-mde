class ZeroPad {
    static padNsu(e) {
        return e.padStart(15, "0");
    }
}

module.exports = Object.freeze(ZeroPad);