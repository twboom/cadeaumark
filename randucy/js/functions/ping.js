var input = document.querySelector('#input');

function ping () {
  if (input == 'ping') {
        console.log('pong')
        return
      }
}

document.onload = console.log('Ping is ready')
