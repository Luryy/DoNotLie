const BaseController = require('../controller/base-controler');
const baseController = new BaseController();

module.exports= (app) => {
    const rotasBase = BaseController.rotes();

    app.get(rotasBase.home, baseController.home())

}