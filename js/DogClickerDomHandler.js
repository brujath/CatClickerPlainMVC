(function(){
  var options = {
    template : {
      dogList : "#dogListtemplate",
      dogClicker: "#dogClicker"
    },
    elements : {
      addCountContainer: "#addCount",
      dogContainer : ".dogImage",
      dogListContainer : "#dogListContainer",
      dogName: ".dogNameRow",
      displaydogContainer : '.displaydogContainer'
    }
  };

  var renderList = function (valueObject) {
    var rowTemplate = $($(options.template.dogList).html()),
    displaydogContainer = $(options.elements.displaydogContainer),
    dogtemplate;
    rowTemplate = rowTemplate.clone();

    //render dogName list
    rowTemplate.find(options.elements.dogName).html(valueObject.dogName);
    $(options.elements.dogListContainer).append(rowTemplate);

    rowTemplate.on('click', (function(valueObject){
      return function () {
        var dogCount = 0;

        dogtemplate = $($(options.template.dogClicker).html());
        dogtemplate = dogtemplate.clone();
        //populate dogs
        dogtemplate.find('.dogImage img').attr('src', valueObject.imageurl);
        dogtemplate.find('.dogName p').html(valueObject.dogName);
        dogtemplate.find('img').on('click', function () {
          dogCount = dogCount + 1;
          dogtemplate.find(options.elements.addCountContainer).html(dogCount);
        });
        displaydogContainer.empty();
        displaydogContainer.append(dogtemplate);
      }
    })(valueObject));

  };

  var DogClickerAppDomHandler = function(obj) {
    this.init();
  };

  DogClickerAppDomHandler.prototype.init = function () {

  };

  DogClickerAppDomHandler.prototype.renderSelectedDog = function (list) {
    // render list of dogs
    for(var i=0 ; i<list.length; i++) {
      renderList(list[i]);
    }
  };

  window.DogClickerAppDomHandler = DogClickerAppDomHandler;
})();
