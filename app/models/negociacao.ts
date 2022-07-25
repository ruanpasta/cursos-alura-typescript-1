export class Negociacao {

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor
  }

  get data(): Date {
    return new Date(this._data.getTime())
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const data = new Date(dataString.replace(/-/g, ','))
    const quantidade = parseInt(quantidadeString)
    const valor = parseInt(valorString)
    return new Negociacao(data, quantidade, valor)
  }
}
