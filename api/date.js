module.exports = (req, res) => {
//   let respuesta = "La capital de __"+"__ es ";
//   res.status(200).send({ fulfillmentText: respuesta });
  fs = require('fs')
  fs.readFile('datos.txt', 'utf8', function (err,data) {
    if (err) {
      return res.status(200).send(err);
    }
    res.status(200).send(data);
  });
};
