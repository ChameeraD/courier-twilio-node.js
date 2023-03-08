const express = require("express");
const router = express.Router();
const courier =  require("@trycourier/courier");
const courierClient = courier.CourierClient({ authorizationToken: "YOUR_AUTH_TOKEN" });

router.post("/notification", (req, res) => {
    var res = courierClient.send({
        message: {
        to: {
          phone_number: "5558675309",
        },
        template: "TQZVC5CQ32M23QMSY1RW4TWYE1HJ",
        data: {
          name: "name",
          doctor: "doctor",
          time: "time",
          date: "date",
        },
      },
    });

    console.log(res);
});

module.exports = router;