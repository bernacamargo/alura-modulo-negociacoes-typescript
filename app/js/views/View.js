var View = (function () {
    function View(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    View.prototype.update = function (modelo) {
        this._elemento.innerHTML = this.template(modelo);
    };
    return View;
}());
