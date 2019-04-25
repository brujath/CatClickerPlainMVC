(function(){
  var options = {
    template : {
      catList : "#catListtemplate",
      catClicker: "#catClicker"
    },
    elements : {
      addCountContainer: "#addCount",
      catContainer : ".catImage",
      catListContainer : "#catListContainer",
      catName: ".catNameRow",
      displayCatContainer : '.displayCatContainer'
    }
  };

  var renderList = function (valueObject) {
    var rowTemplate = $($(options.template.catList).html()),
    displayCatContainer = $(options.elements.displayCatContainer),
    cattemplate;
    rowTemplate = rowTemplate.clone();

    //render catName list
    rowTemplate.find(options.elements.catName).html(valueObject.catName);
    $(options.elements.catListContainer).append(rowTemplate);

    rowTemplate.on('click', (function(valueObject){
      return function () {
        var catCount = 0;

        cattemplate = $($(options.template.catClicker).html());
        cattemplate = cattemplate.clone();
        //populate cats
        cattemplate.find('.catImage img').attr('src', valueObject.imageurl);
        cattemplate.find('.catName p').html(valueObject.catName);
        cattemplate.find('img').on('click', function () {
          catCount = catCount + 1;
          cattemplate.find(options.elements.addCountContainer).html(catCount);
        });
        displayCatContainer.empty();
        displayCatContainer.append(cattemplate);
      }
    })(valueObject));

  };

  var CatClickerAppDomHandler = function(obj) {
    this.init();
  };

  CatClickerAppDomHandler.prototype.init = function () {

  };

  CatClickerAppDomHandler.prototype.renderSelectedCat = function (list) {
    // render list of cats
    for(var i=0 ; i<list.length; i++) {
      renderList(list[i]);
    }
  };

  window.CatClickerAppDomHandler = CatClickerAppDomHandler;
})();
