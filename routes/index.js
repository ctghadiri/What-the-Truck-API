// Requiring our models
var controller = require("../controllers/controller");
var db = require("../models/")

// Routes
// =============================================================
module.exports = function(app) {

  // Post something to the front page
  app.get("/", function (req, res) {
    console.log("DATABASE: ", db)
    res.send("Welcome to the food trucks API!");
  });


  // Update truck info

  app.put("/api/trucks/:id", controller.updateTruck)


  // find all trucks

  app.get("/api/trucks", controller.findAllTrucks)


  // Get specific truck 

  app.get("/api/trucks/:id", controller.findOneTruck)


  // add new truck

  app.post("/api/trucks", controller.createTruck)
  

  // find all trucks with an open application

  app.get("/api/trucks/open", function(req,res){
    controller.open(req, res)
  }) 

  // find all trucks that are approved

  app.get("/api/trucks/approved", function(req,res){
    controller.approved(req, res)
  }) 

  // find all trucks with applications that are denied

  app.get("/api/trucks/denied", function(req,res){
    controller.denied(req, res)
  }) 

  // find truck via email

  // app.get("/api/trucks/info", controller.findTruckThroughEmail)

};