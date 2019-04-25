(function (model,domHandler) {
  var CatClickerAppController = function () {
    this.model = new model();
    this.domHandler = new domHandler();
    this.init();
  };

  CatClickerAppController.prototype.init = function () {
    this.domHandler.renderSelectedCat(this.model.getCats());
  };

  window.CatClickerAppController = CatClickerAppController;
})(CatClickerAppModel,CatClickerAppDomHandler);

new CatClickerAppController();
