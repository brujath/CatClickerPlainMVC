(function () {
  var cats =
  [
    {
      imageurl: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
      catName: "Cat One"
    },
    {
      imageurl: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
      catName: "Cat Two"
    },
    {
      imageurl: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
      catName: "Cat Three"
    },
    {
      imageurl: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
      catName: "Cat Four"
    },
    {
      imageurl: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
      catName: "Cat Five"
    }
  ];
  var CatClickerAppModel = function () {
    this.cats = cats;
  };

  CatClickerAppModel.prototype = {
    getCats : function() {
      return this.cats;
    }
  };

  window.CatClickerAppModel = CatClickerAppModel;
})();
