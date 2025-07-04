const Joi = require("joi");


const listingJoi = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.object({
      url: Joi.string().allow("", null)
    }).required()
  }).required()
});
const reviewJoi= Joi.object({
  review:Joi.object({
    comment:Joi.string().required(),
    rating:Joi.number().min(1).max(5).required(),
  }).required()
})


module.exports = {listingJoi,reviewJoi};