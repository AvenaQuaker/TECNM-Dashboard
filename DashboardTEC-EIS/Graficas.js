function generalGrafica1() {
    var datos = [
        {
            carrera: "Arquitectura",
            nuevoIngreso: { H: 23, M: 38 },
            reingreso: { H: 79, M: 110 },
            total: 250,
        },
        {
            carrera: "Ingeniería Civil",
            nuevoIngreso: { H: 29, M: 8 },
            reingreso: { H: 86, M: 19 },
            total: 142,
        },
        {
            carrera: "Ingeniería Electrónica",
            nuevoIngreso: { H: 19, M: 8 },
            reingreso: { H: 83, M: 12 },
            total: 122,
        },
        {
            carrera: "Ingeniería Eléctrica",
            nuevoIngreso: { H: 22, M: 1 },
            reingreso: { H: 88, M: 8 },
            total: 119,
        },
        {
            carrera: "Ingeniería Industrial",
            nuevoIngreso: { H: 104, M: 64 },
            reingreso: { H: 342, M: 277 },
            total: 787,
        },
        {
            carrera: "Ingeniería Mecánica",
            nuevoIngreso: { H: 30, M: 5 },
            reingreso: { H: 97, M: 14 },
            total: 146,
        },
        {
            carrera: "Ingeniería Mecatrónica",
            nuevoIngreso: { H: 55, M: 10 },
            reingreso: { H: 201, M: 34 },
            total: 300,
        },
        {
            carrera: "Gestión Empresarial",
            nuevoIngreso: { H: 34, M: 60 },
            reingreso: { H: 169, M: 253 },
            total: 516,
        },
        {
            carrera: "Ingeniería en Sistemas",
            nuevoIngreso: { H: 70, M: 16 },
            reingreso: { H: 255, M: 50 },
            total: 391,
        },
        {
            carrera: "Administración",
            nuevoIngreso: { H: 20, M: 41 },
            reingreso: { H: 70, M: 157 },
            total: 288,
        },
        {
            carrera: "Contador Público",
            nuevoIngreso: { H: 25, M: 33 },
            reingreso: { H: 83, M: 136 },
            total: 277,
        },
    ];

    let datoMayor = -Infinity;
    let SumaNIH = 0,
        SumaNIM = 0,
        SumaRIH = 0,
        SumaRIM = 0,
        SumaTotal = 0;

    datos.forEach((dato) => {
        if (dato.total > datoMayor) {
            datoMayor = dato.total;
        }
        SumaNIH += dato.nuevoIngreso.H;
        SumaNIM += dato.nuevoIngreso.M;
        SumaRIH += dato.reingreso.H;
        SumaRIM += dato.reingreso.M;
        SumaTotal += dato.total;
    });

    let graficageneral1 = document.getElementById("general1");
    let filas = datos
        .map(
            (dato) => `
    <tr>
        <td style="--size: calc(${dato.total} / ${datoMayor})" ${
                dato.total === datoMayor ? 'class="highlighted"' : ""
            }>
            ${dato.total}
            <span class="tooltip">
                ${dato.carrera} <br /><br />
                NuevoIngreso: <br />
                Hombres: ${dato.nuevoIngreso.H}<br />
                Mujeres: ${dato.nuevoIngreso.M}<br /><br />
                Reingreso: <br />
                Hombres: ${dato.reingreso.H}<br />
                Mujeres: ${dato.reingreso.M}<br />
            </span>
        </td>
    </tr>`
        )
        .join("");

    let legendas = datos.map((dato) => `<li>${dato.carrera}</li>`).join("");

    graficageneral1.innerHTML = `
    <table class="charts-css column data-size show-heading show-primary-axis show-8-secondary-axes show-data-axes data-spacing-5">
        <caption>Aporte a la matricula nacional</caption>
        <thead>
            <tr>
                <th scope="col">Carrera</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            ${filas}
        </tbody>
    </table>
    <ul class="charts-css legend legend-square legend-inline">
        ${legendas}
    </ul>
    <ul class="listotal">
        <li>Total de Hombres de Nuevo Ingreso: <br /><strong>${SumaNIH}</strong></li>
        <li>Total de Mujeres de Nuevo Ingreso:<br /><strong>${SumaNIM}</strong></li>
        <li>Total de Hombres de ReIngreso: <br /><strong>${SumaRIH}</strong></li>
        <li>Total de Mujeres de ReIngreso:<br /><strong>${SumaRIM}</strong></li>
        <li>Aporte total a la matricula:<br /><strong>${SumaTotal}</strong></li>
    </ul>`;
}

function generalGrafica2() {
    var datos = [
        {
            carrera: "Arquitectura",
            servicio: { H: 9, M: 11 },
            residencias: { H: 12, M: 13 },
            total: 45,
        },
        {
            carrera: "Ingeniería Civil",
            servicio: { H: 27, M: 7 },
            residencias: { H: 11, M: 4 },
            total: 49,
        },
        {
            carrera: "Ingeniería Electrónica",
            servicio: { H: 10, M: 2 },
            residencias: { H: 16, M: 2 },
            total: 30,
        },
        {
            carrera: "Ingeniería Eléctrica",
            servicio: { H: 4, M: 0 },
            residencias: { H: 7, M: 1 },
            total: 12,
        },
        {
            carrera: "Ingeniería Industrial",
            servicio: { H: 65, M: 61 },
            residencias: { H: 66, M: 71 },
            total: 263,
        },
        {
            carrera: "Ingeniería Mecánica",
            servicio: { H: 11, M: 0 },
            residencias: { H: 11, M: 0 },
            total: 22,
        },
        {
            carrera: "Ingeniería Mecatrónica",
            servicio: { H: 42, M: 12 },
            residencias: { H: 52, M: 8 },
            total: 114,
        },
        {
            carrera: "Gestión Empresarial",
            servicio: { H: 50, M: 56 },
            residencias: { H: 26, M: 45 },
            total: 177,
        },
        {
            carrera: "Ingeniería en Sistemas",
            servicio: { H: 46, M: 8 },
            residencias: { H: 41, M: 12 },
            total: 107,
        },
        {
            carrera: "Administración",
            servicio: { H: 25, M: 49 },
            residencias: { H: 11, M: 31 },
            total: 116,
        },
        {
            carrera: "Contador Público",
            servicio: { H: 14, M: 29 },
            residencias: { H: 24, M: 25 },
            total: 92,
        },
    ];

    let datoMayor = -Infinity;
    let SumaSSH = 0,
        SumaSSM = 0,
        SumaRH = 0,
        SumaRM = 0,
        TotalServicio = 0;
    TotalResidencias = 0;

    datos.forEach((dato) => {
        if (dato.total > datoMayor) {
            datoMayor = dato.total;
        }
        SumaSSH += dato.servicio.H;
        SumaSSM += dato.servicio.M;
        SumaRH += dato.residencias.H;
        SumaRM += dato.residencias.M;
    });
    TotalServicio = SumaSSH + SumaSSM;
    TotalResidencias = SumaRH + SumaRM;

    let graficageneral2 = document.getElementById("general2");
    let filas = datos
        .map(
            (dato) => `
    <tr>
        <td style="--size: calc(${dato.total} / ${datoMayor})" ${
                dato.total === datoMayor ? 'class="highlighted"' : ""
            }>
            ${dato.total}
            <span class="tooltip">
                ${dato.carrera} <br /><br />
                Servicio social: <br />
                Hombres: ${dato.servicio.H}<br />
                Mujeres: ${dato.servicio.M}<br /><br />
                Residencias: <br />
                Hombres: ${dato.residencias.H}<br />
                Mujeres: ${dato.residencias.M}<br />
            </span>
        </td>
    </tr>`
        )
        .join("");

    let legendas = datos.map((dato) => `<li>${dato.carrera}</li>`).join("");

    graficageneral2.innerHTML = `
    <table class="charts-css column data-size show-heading show-primary-axis show-8-secondary-axes show-data-axes data-spacing-5">
        <caption>Servicio social y Residencias profesionales</caption>
        <thead>
            <tr>
                <th scope="col">Carrera</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            ${filas}
        </tbody>
    </table>
    <ul class="charts-css legend legend-square legend-inline">
        ${legendas}
    </ul>
    <ul class="listotal">
        <li>Total de Hombres de Servicio social: <br /><strong>${SumaSSH}</strong></li>
        <li>Total de Mujeres de Servicio social:<br /><strong>${SumaSSM}</strong></li>
        <li>Total de Hombres de Residencias: <br /><strong>${SumaRH}</strong></li>
        <li>Total de Mujeres de Residencias:<br /><strong>${SumaRM}</strong></li>
        <li>Total de Servicio social:<br /><strong>${TotalServicio}</strong></li>
        <li>Total de Residencias:<br /><strong>${TotalResidencias}</strong></li>

    </ul>`;
}

function generalGrafica3() {
    var datos = [
        {
            carrera: "Arquitectura",
            capacidadInscripcion: 82,
            solicitudes: { H: 33, M: 52 },
            aceptados: { H: 23, M: 38 },
        },
        {
            carrera: "Ingeniería Civil",
            capacidadInscripcion: 50,
            solicitudes: { H: 32, M: 7 },
            aceptados: { H: 29, M: 8 },
        },
        {
            carrera: "Ingeniería Electrónica",
            capacidadInscripcion: 36,
            solicitudes: { H: 20, M: 8 },
            aceptados: { H: 19, M: 8 },
        },
        {
            carrera: "Ingeniería Eléctrica",
            capacidadInscripcion: 36,
            solicitudes: { H: 24, M: 1 },
            aceptados: { H: 22, M: 1 },
        },
        {
            carrera: "Ingeniería Industrial",
            capacidadInscripcion: 200,
            solicitudes: { H: 117, M: 68 },
            aceptados: { H: 114, M: 67 },
        },
        {
            carrera: "Ingeniería Mecánica",
            capacidadInscripcion: 47,
            solicitudes: { H: 36, M: 6 },
            aceptados: { H: 30, M: 5 },
        },
        {
            carrera: "Ingeniería Mecatrónica",
            capacidadInscripcion: 87,
            solicitudes: { H: 67, M: 11 },
            aceptados: { H: 55, M: 10 },
        },
        {
            carrera: "Gestión Empresarial",
            capacidadInscripcion: 120,
            solicitudes: { H: 35, M: 59 },
            aceptados: { H: 35, M: 59 },
        },
        {
            carrera: "Ingeniería en Sistemas",
            capacidadInscripcion: 115,
            solicitudes: { H: 106, M: 23 },
            aceptados: { H: 70, M: 16 },
        },
        {
            carrera: "Administración",
            capacidadInscripcion: 83,
            solicitudes: { H: 20, M: 43 },
            aceptados: { H: 20, M: 41 },
        },
        {
            carrera: "Contador Público",
            capacidadInscripcion: 78,
            solicitudes: { H: 30, M: 37 },
            aceptados: { H: 25, M: 33 },
        },
    ];

    let datoMayor = -Infinity;
    let SumaSH = 0,
        SumaSM = 0,
        SumaAH = 0,
        SumaAM = 0,
        TotalSolicitudes = 0;
    TotalAceptados = 0;

    datos.forEach((dato) => {
        dato.total = dato.aceptados.H + dato.aceptados.M;
    });

    datos.forEach((dato) => {
        if (dato.total > datoMayor) {
            datoMayor = dato.total;
        }

        SumaSH += dato.solicitudes.H;
        SumaSM += dato.solicitudes.M;
        SumaAH += dato.aceptados.H;
        SumaAM += dato.aceptados.M;
    });
    TotalSolicitudes = SumaSH + SumaSM;
    TotalAceptados = SumaAH + SumaAM;

    let graficageneral3 = document.getElementById("general3");
    let filas = datos
        .map(
            (dato) => `
    <tr>
        <th scope="row"> Cap.Insc</br><strong>${
            dato.capacidadInscripcion
        }</strong> </th>
        <td style="--size: calc(${dato.total} / ${datoMayor})" ${
                dato.total === datoMayor ? 'class="highlighted"' : ""
            }>
            ${dato.total}
            <span class="tooltip">
                ${dato.carrera} <br /><br />
                Solicitudes: <br />
                Hombres: ${dato.solicitudes.H}<br />
                Mujeres: ${dato.solicitudes.M}<br /><br />
                Aceptados: <br />
                Hombres: ${dato.aceptados.H}<br />
                Mujeres: ${dato.aceptados.M}<br />
            </span>
        </td>
    </tr>`
        )
        .join("");

    let legendas = datos.map((dato) => `<li>${dato.carrera}</li>`).join("");

    graficageneral3.innerHTML = `
    <table class="charts-css bar data-size show-labels show-heading show-primary-axis show-8-secondary-axes show-data-axes data-spacing-5 data-center">
        <caption>Atencion a la demanda</caption>
        <thead>
            <tr>
                <th scope="col">Carrera</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            ${filas}
        </tbody>
    </table>
    <ul class="charts-css legend legend-square legend-inline">
        ${legendas}
    </ul>
    <ul class="listotal">
        <li>Total de Solicitudes por Hombres: <br /><strong>${SumaSH}</strong></li>
        <li>Total de Solicitudes por Mujeres:<br /><strong>${SumaSM}</strong></li>
        <li>Total de Aceptados Hombres: <br /><strong>${SumaAH}</strong></li>
        <li>Total de Aceptados Mujeres:<br /><strong>${SumaAM}</strong></li>
        <li>Total de Solicitudes<br /><strong>${TotalSolicitudes}</strong></li>
        <li>Total de Aceptados<br /><strong>${TotalAceptados}</strong></li>

    </ul>`;
}

function generalGrafica4() {
    var datos = [
        {
            carrera: "Arquitectura",
            egresados: { H: 11, M: 11 },
            titulados: { H: 7, M: 7 },
        },
        {
            carrera: "Ingeniería Civil",
            egresados: { H: 8, M: 4 },
            titulados: { H: 10, M: 3 },
        },
        {
            carrera: "Ingeniería Electrónica",
            egresados: { H: 14, M: 2 },
            titulados: { H: 9, M: 1 },
        },
        {
            carrera: "Ingeniería Eléctrica",
            egresados: { H: 7, M: 1 },
            titulados: { H: 17, M: 1 },
        },
        {
            carrera: "Ingeniería Industrial",
            egresados: { H: 64, M: 66 },
            titulados: { H: 70, M: 80 },
        },
        {
            carrera: "Ingeniería Mecánica",
            egresados: { H: 9, M: 0 },
            titulados: { H: 14, M: 2 },
        },
        {
            carrera: "Ingeniería Mecatrónica",
            egresados: { H: 47, M: 9 },
            titulados: { H: 55, M: 14 },
        },
        {
            carrera: "Gestión Empresarial",
            egresados: { H: 24, M: 54 },
            titulados: { H: 28, M: 53 },
        },
        {
            carrera: "Ingeniería en Sistemas",
            egresados: { H: 40, M: 12 },
            titulados: { H: 65, M: 13 },
        },
        {
            carrera: "Administración",
            egresados: { H: 13, M: 34 },
            titulados: { H: 9, M: 15 },
        },
        {
            carrera: "Contador Público",
            egresados: { H: 24, M: 24 },
            titulados: { H: 19, M: 31 },
        },
    ];

    let datoMayor = -Infinity;
    let SumaEH = 0,
        SumaEM = 0,
        SumaTH = 0,
        SumaTM = 0,
        TotalEgresados = 0;
    TotalTitulados = 0;

    datos.forEach((dato) => {
        dato.total =
            dato.egresados.H +
            dato.egresados.M +
            dato.titulados.H +
            dato.titulados.M;
    });

    datos.forEach((dato) => {
        if (dato.total > datoMayor) {
            datoMayor = dato.total;
        }

        SumaEH += dato.egresados.H;
        SumaEM += dato.egresados.M;
        SumaTH += dato.titulados.H;
        SumaTM += dato.titulados.M;
    });
    TotalEgresados = SumaEH + SumaEM;
    TotalTitulados = SumaTH + SumaTM;

    let graficageneral4 = document.getElementById("general4");
    let filas = datos
        .map(
            (dato) => `
    <tr>
        <td style="--size: calc(${dato.total} / ${datoMayor})" ${
                dato.total === datoMayor ? 'class="highlighted"' : ""
            }>
            ${dato.total}
            <span class="tooltip">
                ${dato.carrera} <br /><br />
                Egresados: <br />
                Hombres: ${dato.egresados.H}<br />
                Mujeres: ${dato.egresados.M}<br /><br />
                Titulados: <br />
                Hombres: ${dato.titulados.H}<br />
                Mujeres: ${dato.titulados.M}<br />
            </span>
        </td>
    </tr>`
        )
        .join("");

    let legendas = datos.map((dato) => `<li>${dato.carrera}</li>`).join("");

    graficageneral4.innerHTML = `
    <table class="charts-css bar reverse data-size show-heading show-primary-axis show-8-secondary-axes show-data-axes data-spacing-5 data-center">
        <caption>Egresados y Titulados</caption>
        <thead>
            <tr>
                <th scope="col">Carrera</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            ${filas}
        </tbody>
    </table>
    <ul class="charts-css legend legend-square legend-inline">
        ${legendas}
    </ul>
    <ul class="listotal">
        <li>Total de Egresados Hombres: <br /><strong>${SumaEH}</strong></li>
        <li>Total de Egresados Mujeres:<br /><strong>${SumaEM}</strong></li>
        <li>Total de Titulados Hombres: <br /><strong>${SumaTH}</strong></li>
        <li>Total de Titulados Mujeres:<br /><strong>${SumaTM}</strong></li>
        <li>Total de Egresados<br /><strong>${TotalEgresados}</strong></li>
        <li>Total de Titulados<br /><strong>${TotalTitulados}</strong></li>

    </ul>`;
}
// function generalGrafica1() {
//     let Suma = 0;
//     let datosConvertidos = [];
//     let PosicionesIniciales = [];

//     datos.forEach((dato) => {
//         Suma = Suma + dato.total;
//     });
//     datos.forEach((dato) => {
//         let datoConvertido = dato.total / Suma;
//         datosConvertidos.push(datoConvertido);
//     });

//     let Posicion = 0;
//     datosConvertidos.forEach((dato) => {
//         Posicion = Posicion + dato;
//         PosicionesIniciales.push(Posicion);
//     });

//     let graficageneral1 = document.getElementById("general1");
//     graficageneral1.innerHTML = `<table
//                             class="charts-css pie show-heading show-2-secondary-axes data-spacing-5">
//                             <caption>
//                                 Aporte a la matricula nacional
//                             </caption>
//                             <thead>
//                                 <tr>
//                                     <th scope="col">Carrera</th>
//                                     <th scope="col">Value</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th>Arquitectura</th>
//                                     <td style="--start: 0; --size: ${PosicionesIniciales[0]}">
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngCivil</th>
//                                     <td style="--start:${PosicionesIniciales[0]}; --size: ${PosicionesIniciales[1]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngElectronica</th>
//                                     <td style="--start: ${PosicionesIniciales[1]}; --size: ${PosicionesIniciales[2]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngElectrica</th>
//                                     <td style="--start: ${PosicionesIniciales[2]}; --size: ${PosicionesIniciales[3]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>Ingindustrial</th>
//                                     <td style="--start: ${PosicionesIniciales[3]}; --size: ${PosicionesIniciales[4]}" class="highlighted">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngMecanica</th>
//                                     <td style="--start: ${PosicionesIniciales[4]}; --size: ${PosicionesIniciales[5]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngMecatronica</th>
//                                     <td style="--start: ${PosicionesIniciales[5]}; --size: ${PosicionesIniciales[6]}"></td>
//                                 </tr>
//                                 <tr>
//                                     <th>IngSistemas</th>
//                                     <td style="--start: ${PosicionesIniciales[6]}; --size: ${PosicionesIniciales[7]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>GestionEmpresarial</th>
//                                     <td style="--start: ${PosicionesIniciales[7]}; --size: ${PosicionesIniciales[8]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>Administracion</th>
//                                     <td style="--start: ${PosicionesIniciales[8]}; --size: ${PosicionesIniciales[9]}">

//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <th>ContadorPublico</th>
//                                     <td style="--start: ${PosicionesIniciales[9]}; --size: ${PosicionesIniciales[10]}">
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <ul
//                             class="charts-css legend legend-square legend-inline">
//                             <li>Arquitectura</li>
//                             <li>Ing.Civil</li>
//                             <li>Ing.Electronica</li>
//                             <li>Ing.Electrica</li>
//                             <li>Ing.Industrial</li>
//                             <li>Ing.Mecanica</li>
//                             <li>Gestion Empresarial</li>
//                             <li>Administracion</li>
//                             <li>Contador Publico</li>
//                         </ul>`;
// }
