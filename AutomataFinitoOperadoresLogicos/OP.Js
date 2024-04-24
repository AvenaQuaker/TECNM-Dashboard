let Fila;
let Columna ;
let Alfabeto = {
    'A':0,
    'D' :1,
    'N' :2,
    'O' :3,
    'R' :4,
    'T' :5,
    ' ':6,
    'undefined':6,
};
let pilaBanderas = []

let Matriz = [
[1,0,5,9,0,0,0,0],
[0,0,2,0,0,0,0,0],
[0,3,0,0,0,0,0,0],
[0,0,0,0,0,0,'Acepta','OPL2'],
[0,0,0,0,0,0,0,0],
[0,0,0,6,0,0,0,0],
[0,0,0,0,0,7,0,0],
[0,0,0,0,0,0,'Acepta','OPL1'],
[0,0,0,0,0,0,0,0],
[0,0,0,0,10,0,0,0],
[0,0,0,0,0,0,'Acepta','OPL3'],
[0,0,0,0,0,0,0,0],
];

let Estado = document.getElementById('message')
let Operador = document.getElementById('operador')
let cad = document.getElementById('cadena')

function VerificarCadena() {
    Fila = 0;
    Columna = 0;
    console.clear()
    pilaBanderas = []
    Estado.textContent = 'No se encontraron operadores validos'
    Operador.textContent = 'Operadores Logicos Encontrados: '
    cad.textContent = 'No se acepta la Cadena'
    
    let Cadena = document.getElementById('input').value.trim();
    let Palabras = Cadena.split(' ');
    console.log(Palabras)

    for(p = 0; p < Palabras.length; p++)
    {
        Fila = 0;
        Columna = 0;

        for(i = 0; i < Palabras[p].length; i++){
            let palabra = Palabras[p]
            console.log(palabra[i])
            Columna = Alfabeto[palabra[i]]
            let accion = (Matriz[Fila][Columna])

                console.log('%c' + palabra[i] + ' Caracter Actual', 'color: cyan');
                console.log('%c' + Fila + ' Fila Actual', 'color: cyan');
                console.log('%c' + Columna + ' Columna Actual', 'color: cyan');
                console.log('%c' + accion + ' Valor almacenado en el la posicion designada', 'color: cyan');
                console.log('%cMatriz de Posiciones', 'color: cyan', Matriz);
    
            if(Columna != 'undefined')
            {
                if(accion > 0){
                    Fila = accion;

                    let ColumnaPrueba = Alfabeto[palabra[i+1]]
                    let accionPrueba = (Matriz[Fila][ColumnaPrueba])
                        console.log('%c[' + Fila + '][' + ColumnaPrueba + '] Proxima Posicion usando el sig caracter', 'color: cyan');
                        console.log('%c' + accionPrueba + ' Valor del siguiente movimiento', 'color: cyan');

                    if(accionPrueba == 'Acepta'){
                        Estado.textContent = 'Operadores Logicos Encontrados!' 
                        Operador.textContent = Operador.textContent + (Matriz[Fila][ColumnaPrueba+1]) + ' '
                        pilaBanderas.push(1)
                    }

                }
                else    
                {
                    pilaBanderas.push(0)
                    break;
                }
            }
        }

        VerificarAceptabilidad()
    }
}

function VerificarAceptabilidad() {
    for(i=0;pilaBanderas.length > i ;i++)
    {
        if(pilaBanderas[i] == 0)
        {
            cad.textContent = 'No se acepta la Cadena'
            break;
        }
        else
        {
            cad.textContent = 'Se acepta la Cadena'
        }
    }
}