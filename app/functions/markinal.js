var input = document.querySelector('#input');
var loginState = false

function ping () { // ping
        newCommandLine('pong')
}

function login() { // login <uname> <password>
  let args = input.value.slice(5).trim().split(/ +/g);
  console.log(args)
  // login
  if (args[0] == '') {
    newCommandLine('no login cridentials found')
    newCommandLine('usage: login <username> <password>')
  }

  if (args[0] === 'mark' && args[1] === 'rover') {
    newCommandLine('login succes')
    loginState = true
  }

  else if (args[0] !== 'mark' && args[1] !== 'rover') {
    newCommandLine('wrong login cridentials')
  }
}

function logout() {
  if (loginState == true) {
    loginState = false;
    newCommandLine('logged you out')
  }

  else {
    newCommandLine('you have to be logged in to use this')
  }
}

document.onload = console.log('Markinal basic functions are ready')
