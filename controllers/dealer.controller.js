const { Dealer, Car } = require("../models");

module.exports.createDealer = async (req, res, next) => {
  try {
    const { body, car } = req;

    const dealer = await Dealer.create({
      ...body,
      carId: car._id,
    });

    await car.updateOne({ $push: { dealers: dealer._id } });

    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllDealer = async (req, res, next) => {
  try {
    const dealer = await Dealer.find();
    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};

module.exports.getDealer = async (req, res, next) => {
  try {
    const {
      params: { dealerId },
      car: { _id: carId },
    } = req;

    const dealer = await Dealer.findOne({
      _id: dealerId,
      carId,
    });

    console.log(req);
    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};

module.exports.updateDealer = async (req, res, next) => {
  try {
    const {
      params: { dealerId },
      car: { _id: carId },
      body,
    } = req;

    const updateDealer = await Dealer.findOneAndUpdate(
      {
        _id: dealerId,
        carId,
      },
      body,
      { new: true }
    );

    console.log(updateDealer);
    res.send({ data: updateDealer });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteDealer = async (req, res, next) => {
  try {
    const {
      params: { dealerId },
      car: { _id: carId },
      car
    } = req;

    const dealer = await Dealer.findOneAndDelete({
      _id: dealerId,
      carId,
    });

    await car.updateOne({ $pull: { dealers: dealerId } });

    console.log(req)

    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};
