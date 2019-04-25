(function () {
  var dogs =
  [
    {
      imageurl: "assets/adorable-animal-breed-434090.jpg",
      dogName: "Dog One"
    },
    {
      imageurl: "assets/animal-animal-photography-blur-333083.jpg",
      dogName: "Dog Two"
    },
    {
      imageurl: "assets/animal-berner-sennen-bernese-mountain-dog-57708.jpg",
      dogName: "Dog Three"
    },
    {
      imageurl: "assets/animal-canine-dog-733416.jpg",
      dogName: "Dog Four"
    },
    {
      imageurl: "assets/animal-collar-dog-8700.jpg",
      dogName: "Dog Five"
    }
  ];
  var DogClickerAppModel = function () {
    this.dogs = dogs;
  };

  DogClickerAppModel.prototype = {
    getDogs : function() {
      return this.dogs;
    }
  };

  window.DogClickerAppModel = DogClickerAppModel;
})();
