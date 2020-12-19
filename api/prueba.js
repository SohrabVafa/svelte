export default (req, res) => {

    let bodyString = req.body;
    return res.send({ fulfillmentText: bodyString });
};
