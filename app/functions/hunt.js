// find <nr> [check if clues are unlocked]
// clue <nr> <validator> = unlocks clue
// clue list = list clues
var args;

var clue1state = false;
var clue2state = false;
var clue3state = false;
var clue4state = false;
var clue5state = false;
var clue6state = false;


function clue() {
  args = input.value.slice(4).trim().split(/ +/g)

  if (args[0] == 'list') {
    printClueList();
  }

  if (args[0] == 'unlock') {
    unlockClue();
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

function unlockClue() {
  clueNumber = args[1];
  pass = input.value.slice(13).trim()

  var clueName = 'clueName';
  var clueDescription = 'clueDescription';
  var quizAnswer = 'quizAnswer';
  var clueState = 'clueState';

  if (clueNumber == undefined) {
    newCommandLine('Usage:')
    newCommandLine('clue unlock <clueNumber> <quizAnswer>')
    return
  }

  if (pass == '') {
    newCommandLine('Usage:')
    newCommandLine('clue unlock <clueNumber> <quizAnswer>')
    return
  }

  if (clueNumber == '1') {
    clueName = clue1.name;
    clueDescription = clue1.description;
    quizAnswer = quiz1.answer;
    clueState = clue1state;
  }

  if (clueNumber == '2') {
    clueName = clue2.name;
    clueDescription = clue2.description;
    quizAnswer = quiz2.answer;
    clueState = clue2state;
  }

  if (clueNumber == '3') {
    clueName = clue3.name;
    clueDescription = clue3.descripton;
    quizAnswer = quiz3.answer;
    clueState = clue3state;
  }

  if (clueNumber == '4') {
    clueName = clue4.name;
    clueDescription = clue4.descripton;
    quizAnswer = quiz4.answer;
    clueState = clue4state;
  }

  if (clueNumber == '5') {
    clueName = clue5.name;
    clueDescription = clue5.descripton;
    quizAnswer = quiz5.answer;
    clueState = clue5state;
  }

  if (clueNumber == '6') {
    clueName = clue6.name;
    clueDescription = clue6.descripton;
    quizAnswer = quiz6.answer;
    clueState = clue6state;
  }

//
  if (clueNumber !== undefined) {
    if (clueState == false) {
      if (pass == quizAnswer) {

        if (clueNumber == '1') {
          clue1state = true;
        };

        if (clueNumber == '2') {
          clue2state = true;
        };

        if (clueNumber == '3') {
          clue3state = true;
        };

        if (clueNumber == '4') {
          clue4state = true;
        };

        if (clueNumber == '5') {
          clue5state = true;
        };

        if (clueNumber == '6') {
          clue6state = true;
        };


        newCommandLine('unlocked')
      }
      if (pass !== quizAnswer) {
        newCommandLine('Wrong answer')
      }
    }

    else if (clueState == true) {
      newCommandLine(clueName + ':' + ' ' + 'is already unlocked')
      newCommandLine(clueName + ':' + ' ' + clueDescription)
    }
  };
}
