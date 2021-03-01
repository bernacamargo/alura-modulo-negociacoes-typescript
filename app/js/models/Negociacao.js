var Negociacao = (function () {
    function Negociacao(_data, _qtd, _valor) {
        this._data = _data;
        this._qtd = _qtd;
        this._valor = _valor;
    }
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "qtd", {
        get: function () {
            return this._qtd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this._qtd * this._valor;
        },
        enumerable: true,
        configurable: true
    });
    return Negociacao;
}());
