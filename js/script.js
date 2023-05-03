import { keyBoardEn, keyBoardRu} from './keyboard.js';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
document.body.append(textarea);
textarea.focus();

const keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
document.body.append(keyBoard);

function printKeyBoard(collection,parent){
  let out = '';
  for(let i = 0; i < collection.length; i++){
    if(collection[i].eventCode === 'Backsapce'){
      out += '<div class = "backspace special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Tab'){
      out += '<div class = "tab special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'NumpadDecimal'){
      out += '<div class = "numpaddecimal special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'CapsLock'){
      out += '<div class = "capslock special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Enter'){
      out += '<div class = "enter special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ShiftLeft'){
      out += '<div class = "shiftleft special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ShiftRight'){
      out += '<div class = "shiftright special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Space'){
      out += '<div class = "space special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ControlLeft'){
      out += '<div class = "controlleft special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'MetaLeft'){
      out += '<div class = "metaleft special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'AltLeft'){
      out += '<div class = "altleft special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'AltRight'){
      out += '<div class = "altright special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ArrowUp'){
      out += '<div class = "arrowup special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ArrowLeft'){
      out += '<div class = "arrowleft special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ArrowRight'){
      out += '<div class = "arrowright special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ArrowDown'){
      out += '<div class = "arrowdown special">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ControlRight'){
      out += '<div class = "controlright special">' + collection[i].name + '</div>';
    }else{
      out += '<div class = "button">' + collection[i].name + '</div>';
    }
    
  }
  parent.innerHTML = out;
}

printKeyBoard(keyBoardEn,keyBoard)

const buttons = document.querySelectorAll('.button')
for(let i = 0; i < buttons.length; i++){
  buttons[i].setAttribute('button_name', buttons[i].innerText);
  buttons[i].setAttribute('upper_case_name', buttons[i].innerText.toUpperCase());
}

const buttonsSpecial = document.querySelectorAll('.special');
for(let i = 0; i < buttonsSpecial.length; i++){
  let specialName = buttonsSpecial[i].className;
  buttonsSpecial[i].setAttribute('special', specialName.slice(0,specialName.length-8))
}

window.addEventListener('keydown', function(e){
  
  
  for(let i = 0; i < buttons.length; i++){
    if(e.key === buttons[i].getAttribute('button_name') || e.key === buttons[i].getAttribute('upper_case_name')){
      buttons[i].classList.add('active');
      document.querySelector('.textarea').value += e.key;
      e.preventDefault();
    }
  }
})

window.addEventListener('keydown', function(e){
  for(let i = 0; i < buttonsSpecial.length; i++){
    if((e.code).toLowerCase() === buttonsSpecial[i].getAttribute('special')){
      buttonsSpecial[i].classList.add('active');
    } 
  }
  if((e.code) === 'Space' || e.key === ' '){
    //buttonsSpecial[i].classList.add('active');
    document.querySelector('.textarea').value += e.key;
  }
})

window.addEventListener('keyup', function(e){
  for(let i = 0; i < buttons.length; i++){
    if(buttons[i].classList.contains('active')){
      buttons[i].classList.add('remove')
    }
    buttons[i].classList.remove('active');
    buttons[i].classList.remove('remove')
  }
})

window.addEventListener('keyup', function(e){
  for(let i = 0; i < buttonsSpecial.length; i++){
    if(buttonsSpecial[i].classList.contains('active')){
      buttonsSpecial[i].classList.add('remove')
    }
    buttonsSpecial[i].classList.remove('active');
    buttonsSpecial[i].classList.remove('remove');
  }
})

/*keyBoard.addEventListener('mousedown', function(e){
  if(e.target.className === 'keyboard'){return}
  e.target.classList.add('active');
  document.querySelector('.textarea').value += e.target.textContent;
});*/

keyBoard.addEventListener('mouseup', function(e){
  e.target.classList.add('remove');
  setTimeout(() => {
    e.target.classList.remove('remove');
    e.target.classList.remove('active');
  }, 100);
});

//document.body.childNodes[0] = 'hey';

keyBoard.addEventListener('mousedown', function(e){
  if(e.target.className === 'keyboard'){return};
  if(e.target.className === 'button'){
    e.target.classList.add('active');
    document.querySelector('.textarea').value += e.target.textContent;
  }
  if (e.target.hasAttribute('special')){
    e.target.classList.add('active')
  }
  
});

window.onkeydown = evt => {
  if (evt.key == 'Tab' || 'Alt') {
      evt.preventDefault();
  }
}

window.addEventListener('keyup', (e) => {
  const CapsLock = e.getModifierState('CapsLock');
  console.log('CapsLock', CapsLock);
  if (CapsLock){
    for(let i = 0; i < buttons.length; i++){
      buttons[i].innerText = buttons[i].innerText.toUpperCase(); 
    }
  }
  if (!CapsLock){
    for(let i = 0; i < buttons.length; i++){
      buttons[i].innerText = buttons[i].innerText.toLowerCase(); 
    }
  }
})












