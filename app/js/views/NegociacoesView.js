var NegociacoesView = (function () {
    function NegociacoesView(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    NegociacoesView.prototype.update = function (modelo) {
        this._elemento.innerHTML = this.template(modelo);
    };
    NegociacoesView.prototype.template = function (modelo) {
        var _this = this;
        return "\n            <table class=\"table table-hover table-bordered\">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                        <th>VOLUME</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    " + modelo.paraArray().map(function (negociacao) {
            return "\n                            <tr>\n                                <td>" + _this.exibeData(negociacao.data) + "</td>\n                                <td>" + negociacao.qtd + "</td>\n                                <td>" + negociacao.valor + "</td>\n                                <td>" + negociacao.volume + "</td>\n                            </tr>\n                        ";
        }).join('') + "\n                </tbody>\n\n                <tfoot>\n                </tfoot>\n            </table>               \n        ";
    };
    NegociacoesView.prototype.exibeData = function (data) {
        return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    };
    return NegociacoesView;
}());
