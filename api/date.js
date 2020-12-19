module.exports = (request, response) => {
    let bodyString = request.body;
    var entradaDialogFlow = JSON.parse(bodyString);
    console.log("Entrada DialogFlow: "+entradaDialogFlow);
    var pais=entradaDialogFlow['queryResult']['intent'].displayName;
    
    
    var capital="Madrid";
    

    let respuesta = "La capital de __"+pais+"__ es "+capital;

    // Set the status code - by default it would return 200
    response.status = 200;

    // Set the headers the way you like
    response.headers['X-Custom-Header'] = 'CustomHeaderValue';
    return request.json().then((body) => {
        return response.send({ fulfillmentText: respuesta });
        //return response.send({speech: "What's up cool developer :)"});
    
    }).catch((err) => {
        return response.send("Malformed JSON body.");
    });
};
