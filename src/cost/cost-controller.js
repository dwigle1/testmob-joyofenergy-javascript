const { meterPricePlanMap } = require("../meters/meters");

const getCost = (getReadings,req) => {
   const meterId = req.params.smartMeterId;
   // look up price plan associated with this smart meter id
   
   return {
      lastWeeksCost: 1
 };
} 

module.exports = { getCost }