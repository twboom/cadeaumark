// find <nr> [check if clues are unlocked]
// clue <nr> <validator> = unlocks clue
// clue list = list clues
var clue1state = true;
var clue2state = true;
var clue3state = false;
var clue4state = true;
var clue5state = true;
var clue6state = false;


function find() {

};

function clue() {
  let args = input.value.slice(4).trim().split(/ +/g)
  console.log(args)

  if (args == 'list') {
    printClueList();
  }
}






function printClueList() {
  if (clue1state == true) {
    newCommandLine(clue1.name + ':' + ' ' + clue1.description)
  }
  else if (clue1state == false) {
    newCommandLine(clue1.name + ':' + ' ' + 'is locked')
  }

  if (clue2state == true) {
    newCommandLine(clue2.name + ':' + ' ' + clue2.description)
  }
  else if (clue2state == false) {
    newCommandLine(clue2.name + ':' + ' ' + 'is locked')
  }

  if (clue3state == true) {
    newCommandLine(clue3.name + ':' + ' ' + clue3.description)
  }
  else if (clue3state == false) {
    newCommandLine(clue3.name + ':' + ' ' + 'is locked')
  }

  if (clue4state == true) {
    newCommandLine(clue4.name + ':' + ' ' + clue4.description)
  }
  else if (clue4state == false) {
    newCommandLine(clue4.name + ':' + ' ' + 'is locked')
  }

  if (clue5state == true) {
    newCommandLine(clue5.name + ':' + ' ' + clue5.description)
  }
  else if (clue5state == false) {
    newCommandLine(clue5.name + ':' + ' ' + 'is locked')
  }

  if (clue6state == true) {
    newCommandLine(clue6.name + ':' + ' ' + clue6.description)
  }
  else if (clue6state == false) {
    newCommandLine(clue6.name + ':' + ' ' + 'is locked')
  }
}
