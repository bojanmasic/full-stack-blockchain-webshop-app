const express = require("express");
const router = express.Router();
const { Api, JsonRpc, RpcError, JsSignatureProvider } = require('ineryjs');


//express koristimo da kreiramo server i glomazna je aplikacija bez express
//var je promenjiva za sve const se ne menja let je promenjica unutra funk al kad se izadje ista je

/**
 * @param {Request} requset
 * @param {Response} response
 */
router.get("/info", (requset, response) => {
  return response.json({
    message: "App info",
  });
});

router.post("/user/signup", (requset, response) => {
    try {
        const data = {
            username : requset.body.data.username
        };
        console.log(data);

        return response.status(200).json({
            success : {
                status : true,
                message :"User signup"
            }
        })
    } catch (error) {
        return response.status(500).json({
            error: {
                status : false,
                message : "internal server failed"
            }
        });
    }
  });

module.exports = router; //eksportovanje modula tj samo ruter
