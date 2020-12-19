export default (req, res) => {

    let bodyString = req.body;
//     let entradaDialogFlow = JSON.parse(bodyString);
    //console.log("Entrada DialogFlow: "+entradaDialogFlow);
//     let nombreIntent = entradaDialogFlow['queryResult']['intent'].displayName;

    //console.log("Intent: "+nombreIntent);

    let respuesta = "Hola";

//     if (nombreIntent == "Informacion_actividad") {
//         var actividad = entradaDialogFlow['queryResult']['parameters'].actividad;
//         var rendimiento = "";

//         // Aquí cogeríamos la información de la aplicación nuestra, estos son datos simulados
//         // de distintas actividades que podríamos realizar con la app

//         var tiempo = "Tiempo: ";
//         var distancia = "Distancia: ";
//         var pasos = "Pasos: ";
//         var velocidad_media = "Velocidad media: ";
//         var repeticiones = "Repeticiones: ";
//         var series = "Series: ";

//         if (actividad == "Running") {
//             tiempo = tiempo + "1:30 horas";
//             distancia = distancia + "11,4 kilómetros";
//             pasos = pasos + "9.420 pasos";
//             velocidad_media = velocidad_media + "7,6 km/h";
//             rendimiento = "Rendimiento en running:\n" + tiempo + "\n" + distancia + "\n" + pasos + "\n" + velocidad_media;
//         } else if (actividad == "Ciclismo") {
//             tiempo = tiempo + "3:00 horas";
//             distancia = distancia + "37,1 kilómetros";
//             velocidad_media = velocidad_media + " 12,36 km/h";
//             rendimiento = "Rendimiento en ciclismo:\n" + tiempo + "\n" + distancia + "\n" + velocidad_media;
//         } else if (actividad == "Flexiones") {
//             series = series + "3";
//             repeticiones = repeticiones + "10";
//             tiempo = tiempo + "15 minutos";
//             rendimiento = "Rendimiento en flexiones:\n" + tiempo + "\n" + series + "\n" + repeticiones;
//         } else if (actividad == "Abdominales") {
//             series = series + "4";
//             repeticiones = repeticiones + "15";
//             tiempo = tiempo + "21 minutos";
//             rendimiento = "Rendimiento en abdominales:\n" + tiempo + "\n" + series + "\n" + repeticiones;
//         } else if (actividad == "Dominadas") {
//             series = series + "3";
//             repeticiones = repeticiones + "8";
//             tiempo = tiempo + "13 minutos";
//             rendimiento = "Rendimiento en dominadas:\n" + tiempo + "\n" + series + "\n" + repeticiones;
//         }


//         respuesta = rendimiento;
//     }
//     else if (nombreIntent == "Realizar_ejercicios") {
//         var actividad_tutorial = entradaDialogFlow['queryResult']['parameters'].actividad;

//         var tutorial = "";

//         if (actividad_tutorial == "Flexiones") {
//             tutorial = "Para realizar las flexiones de manera correcta, coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera.";
//         }
//         else if (actividad_tutorial == "Dominadas") {
//             tutorial = "Para realizar dominadas de forma correcta, lo primero que tenemos que hacer es sujetar la barra con ambas mano. Una vez sujetada la barra de forma segura, nos estabilizamos, cogemos aire para preparar el siguiente movimiento: apretamos fuerte la espalda, haciendo retracción escapular y sacando pecho, tiramos de la barra hacia nosotros para impulsarnos y pasamos la barbilla por encima de la barra, soltamos aire y controlamos la bajada para mayor ganancia de masa muscular (si es lo que queremos). Cuidado con descolgar los hombros en exceso.";
//         }
//         else if (actividad_tutorial == "Abdominales") {
//             tutorial = "Los principales errores al realizar abdominales son: usar en exceso la espalda, no respirar adecuadamente, moverse bruscamente y excederse con las repeticiones. Para las abdominales más básicas, deben doblarse las rodillas en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos, apoyamos las manos sobre la cabeza, acercamos el torso a las rodillas sin levantar la espalda del suelo pero haciendo presión en el abdomen.";
//         }

//         respuesta = tutorial;
//     }

    // Codigo de estado 200 (ok).
    res.status(200).send({ fulfillmentText: bodyString });
};

