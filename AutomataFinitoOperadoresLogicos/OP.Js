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

function VerificarCadena() {
    Fila = 0;
    Columna = 0;
    console.clear()
    Estado.textContent = 'No se Acepta'
    
    let Cadena = document.getElementById('input').value.trim();
    
    for(i = 0; i < Cadena.length; i++){
        if(Cadena[i+1] == ' '){break;}

        Columna = Alfabeto[Cadena[i]]
        let accion = (Matriz[Fila][Columna])

            console.log('%c' + Cadena[i] + ' Caracter Actual', 'color: cyan');
            console.log('%c' + Fila + ' Fila Actual', 'color: cyan');
            console.log('%c' + Columna + ' Columna Actual', 'color: cyan');
            console.log('%c' + accion + ' Valor almacenado en el la posicion designada', 'color: cyan');
            console.log('%cMatriz de Posiciones', 'color: cyan', Matriz);

        if(Columna != 'undefined')
        {
            if(accion > 0){
                Fila = accion;

                let ColumnaPrueba = Alfabeto[Cadena[i+1]]
                let accionPrueba = (Matriz[Fila][ColumnaPrueba])
                    console.log('%c[' + Fila + '][' + ColumnaPrueba + '] Proxima Posicion usando el sig caracter', 'color: cyan');
                    console.log('%c' + accionPrueba + ' Valor del siguiente movimiento', 'color: cyan');

                if(accionPrueba == 'Acepta'){
                    Estado.textContent = 'Se Acepta!'
                    Operador.textContent = (Matriz[Fila][ColumnaPrueba+1])
                }
                
        }
        else
        {
            Estado.textContent = 'No se Acepta'
            Operador.textContent = 'Operador Logico:'
            break;
        }
    }
}
}