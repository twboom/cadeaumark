var input = document.querySelector('#input');

function newUserLine () {
  const newLineElement = document.createElement('p');
  const outputContent = document.createTextNode('>' + '' + input.value);
  newLineElement.appendChild(outputContent);
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
}

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    console.log('>' + ' ' + input.value)
                    newUserLine();
                    runFunction();
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
