import { keyBoardEn, keyBoardRu} from './keyboard.js';



const keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
document.body.append(keyBoard);

/*function keyBoardEnNames(board){
  for(let i = 0; i < board.length; i++){
    console.log(board[i].name)
  }
}*/

//keyBoardEnNames(keyBoardEn)



function printKeyBoard(collection,parent){
  let out = '';
  for(let i = 0; i < collection.length; i++){
    if(collection[i].eventCode === 'Backsapce'){
      out += '<div class = "backspace">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Tab'){
      out += '<div class = "tab">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'CapsLock'){
      out += '<div class = "capslock">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Enter'){
      out += '<div class = "enter">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ShiftLeft'){
      out += '<div class = "shift_left">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ShiftRight'){
      out += '<div class = "shift_right">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'Space'){
      out += '<div class = "space">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ControlLeft'){
      out += '<div class = "ctrl_left">' + collection[i].name + '</div>';
    }else if(collection[i].eventCode === 'ControlRight'){
      out += '<div class = "ctrl_right">' + collection[i].name + '</div>';
    }else{
      out += '<div class = "button">' + collection[i].name + '</div>';
    }
    
  }
  
  parent.innerHTML = out;
}




printKeyBoard(keyBoardEn,keyBoard)


