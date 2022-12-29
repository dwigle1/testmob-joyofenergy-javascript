const { meters } = require("../meters/meters");
const { pricePlans } = require("../price-plans/price-plans");
const { readings } = require("../readings/readings");
const { getCost } = require("./cost-controller");

describe("cost", () => {
    it("should display cost", () => {

        const { getReadings } = readings({
            [meters.METER0]: [
                { time: 1607686125, reading: 0.26785 },
            ]
        });

        const expected = {
            lastWeeksCost: 1
        }

        const cost = getCost( getReadings, {
            params: {
                smartMeterId: meters.METER0,
            },
            query: {}
        });

        expect(cost).toEqual(expected);
    })
});