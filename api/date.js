module.exports = (req, res) => {
  let respuesta = "La capital de __"+"__ es ";
  res.status(200).send({ fulfillmentText: respuesta });
};
