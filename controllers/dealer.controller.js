const { Dealer, Car } = require("../models");


module.exports.createDealer = async (req, res, next) => {
  try {
    const {body, car} = req;

    const dealer = await Dealer.create({
      ...body,
      carId: car._id
    })

    await car.updateOne({ $push: {dealers: dealer._id}});

    res.send({data: dealer});
  } catch (error) {
    next(error);
  }
}

module.exports.getAllDealer = async (req, res, next) => {
  try {
    const dealer = await Dealer.find();
    res.send({data: dealer})
  } catch (error) {
    next(error)
  }
}