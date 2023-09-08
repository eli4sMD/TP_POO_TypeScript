import { Component } from 'react';

class FiguraGeometrica {
  constructor(public tipo: string) {}

  calcularArea(): number {
    return 0;
  }

  calcularPerimetro(): number {
    return 0;
  }
}

class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo');
  }

  calcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo extends FiguraGeometrica {
  constructor(public base: number, public altura: number) {
    super('Rectángulo');
  }

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(public base: number, public altura: number) {
    super('Triángulo');
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro(): number {
    // En un triángulo, el perímetro sería la suma de los tres lados, pero asumiremos un triángulo rectángulo
    const hipotenusa = Math.sqrt(this.base * this.base + this.altura * this.altura);
    return this.base + this.altura + hipotenusa;
  }
}

class GeometryCalculator extends Component {
  state = {
    figura: 'circulo',
    calculo: 'area', 
    resultado: 0,
    radio: 0,
    base: 0,
    altura: 0,
  };

  calcular = () => {
    const { figura, calculo, radio, base, altura } = this.state;

    let resultado = 0;

    switch (figura) {
      case 'circulo':
        const circulo = new Circulo(radio);
        if (calculo === 'area') {
          resultado = circulo.calcularArea();
        } else if (calculo === 'perimetro') {
          resultado = circulo.calcularPerimetro();
        }
        break;
      case 'rectangulo':
        const rectangulo = new Rectangulo(base, altura);
        if (calculo === 'area') {
          resultado = rectangulo.calcularArea();
        } else if (calculo === 'perimetro') {
          resultado = rectangulo.calcularPerimetro();
        }
        break;
      case 'triangulo':
        const triangulo = new Triangulo(base, altura);
        if (calculo === 'area') {
          resultado = triangulo.calcularArea();
        } else if (calculo === 'perimetro') {
          resultado = triangulo.calcularPerimetro();
        }
        break;
      default:
        break;
    }

    this.setState({ resultado });
  };

  render() {
    const { figura, calculo, resultado, radio, base, altura } = this.state;

    return (
      <div>
        <h1>Calculadora de Geometría</h1>
        <div>
          <label>Selecciona una figura:</label>
          <select onChange={(e) => this.setState({ figura: e.target.value })} value={figura}>
            <option value="circulo">Círculo</option>
            <option value="rectangulo">Rectángulo</option>
            <option value="triangulo">Triángulo</option>
          </select>
          <label>Calcular:</label>
          <select onChange={(e) => this.setState({ calculo: e.target.value })} value={calculo}>
            <option value="area">Área</option>
            <option value="perimetro">Perímetro</option>
          </select>
        </div>
        {figura === 'circulo' && (
          <div>
            <label>Radio:</label>
            <input
              type="number"
              value={radio}
              onChange={(e) => this.setState({ radio: parseFloat(e.target.value) })}
            />
          </div>
        )}
        {(figura === 'rectangulo' || figura === 'triangulo') && (
          <div>
            <label>Base:</label>
            <input
              type="number"
              value={base}
              onChange={(e) => this.setState({ base: parseFloat(e.target.value) })}
            />
            <label>Altura:</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => this.setState({ altura: parseFloat(e.target.value) })}
            />
          </div>
        )}
        <button onClick={this.calcular}>Calcular</button>
        {resultado !== 0 && (
          <p>
            Resultado del cálculo del {calculo}: {resultado}
          </p>
        )}
      </div>
    );
  }
}

export default GeometryCalculator;
