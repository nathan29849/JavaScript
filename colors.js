let Links = {
    setColor: function(color){
    let links = document.querySelectorAll('a');
    let i = 0;
      while(i < links.length){
        links[i].style.color = color;
        i++;           
    }
  }
}
  // function setColor(color){
  //   let links = document.querySelectorAll('a');
  //   let i = 0;
  //     while(i < links.length){
  //       links[i].style.color = color;
  //       i++; 
  //     }
  // }
  let Body = {
            setColor: function(color){
                document.querySelector('#target').style.color = color;
              },
            setBackgroundColor: function(color){
                document.querySelector('#target').style.backgroundColor = color;
            }

        } 
  // function BodySetColor(color){
  //   document.querySelector('#target').style.color = color;
  // }
  // function BodySetBackgroundColor(color){
  //   document.querySelector('#target').style.backgroundColor = color;
  // }
  function handlerButton(self){
    const target = document.querySelector('#target');
    if(self.dataset.mode === 'day'){
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.dataset.mode = 'night';
      self.value = 'day';
      Links.setColor('blue');
    }
    else{
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.dataset.mode = 'day';
      self.value = 'night';
      Links.setColor('yellow');
    }
  }