var input = document.querySelector('#input');

function ping () {
        console.log('pong');
        newCommandLine('pong')
}

function help() {
  newCommandLine('help no')
}

document.onload = console.log('Markinal basic functions are ready')
