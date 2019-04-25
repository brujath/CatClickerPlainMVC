(function (model,domHandler) {
  var DogClickerAppController = function () {
    this.model = new model();
    this.domHandler = new domHandler();
    this.init();
  };

  DogClickerAppController.prototype.init = function () {
    this.domHandler.renderSelectedDog(this.model.getDogs());
  };

  window.DogClickerAppController = DogClickerAppController;
})(DogClickerAppModel,DogClickerAppDomHandler);

new DogClickerAppController();
