class RestApiController {

  static getIndex(req, res) {
    res.send("Hello restApiController");
  }
}

module.exports = RestApiController;