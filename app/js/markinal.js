var input = document.querySelector('#input');
var cmdOut;

function newUserLine () {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode('>' + '' + input.value);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('>' + ' ' + input.value)
}

function newCommandLine(cmdOut) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdOut);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('Markinal:' + ' ' + cmdOut)
};

function newCmdNotFoundLine(cmdNotFound) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdNotFound);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('Markinal -' + ' ' + input.value + ':' + ' ' + 'command not found')
}

document.getElementById("input").onkeypress = function(event){
                if (event.code === 'Enter'){
                    newUserLine();
                    runFunction();
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
