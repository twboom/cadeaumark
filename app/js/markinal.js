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
  console.log('ran' + ' ' + cmdOut)
};

function newCmdNotFoundLine(cmdNotFound) {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode(cmdNotFound);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
  console.log('ran' + ' ' + input.value + ':' + ' ' + 'command not found')
}

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newUserLine();
                    runFunction();
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
