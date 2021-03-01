var Negociacoes = (function () {
    function Negociacoes() {
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.paraArray = function () {
        return [].concat(this._negociacoes);
    };
    return Negociacoes;
}());
