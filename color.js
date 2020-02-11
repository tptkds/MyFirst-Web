var Body = {
  setBackgroundColor : function(color) {
    document.querySelector('#apply').style.backgroundColor=color;
  },

  setColor : function(color) {
    document.querySelector('#apply').style.color=color;
  },
  seth1Color : function(color) {
    document.querySelector('#h1').style.color=color;
  }

}


function onOffHandler(self){
  if(self.value === 'Off'){
    Body.setBackgroundColor("black");
    self.value = 'On';
    Body.setColor("white");
    Body.seth1Color("white");
    var target = document.querySelectorAll('a');
    var i = 1;

    while(i < target.length){
      if (i===3){
        target[3].style.color = 'white';
      }
      else {
        target[i].style.color = 'white';
      }
      i = i + 1;
    }
  }

  else{
    Body.setBackgroundColor("white");
    self.value = 'Off';
    Body.setColor("black");
    Body.seth1Color("brown");

    var target = document.querySelectorAll('a');
    var i = 1;
    while(i < target.length){
      if (i===3) {
        target[i].style.color = 'brown';
      }
      else{
      target[i].style.color = 'black';
    }
      i = i + 1;
    }
  }
}
