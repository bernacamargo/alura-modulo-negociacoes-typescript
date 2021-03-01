var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MensagemView = (function (_super) {
    __extends(MensagemView, _super);
    function MensagemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MensagemView.prototype.template = function (modelo) {
        return "<p class=\"alert alert-info\">" + modelo + "</p>";
    };
    return MensagemView;
}(View));
