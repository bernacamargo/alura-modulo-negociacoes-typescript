class NegociacoesView {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(modelo: Negociacoes): void {
        this._elemento.innerHTML = this.template(modelo);
    }

    template(modelo: Negociacoes): string {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${modelo.paraArray().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.exibeData(negociacao.data)}</td>
                                <td>${negociacao.qtd}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>               
        `;
    }

    exibeData(data: Date): string{
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }

}