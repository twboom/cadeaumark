var input = document.querySelector('#input');

function newLine () {
  // create a new div element
  const newLineElement = document.createElement('p');

  // and give it some content
  const outputContent = document.createTextNode(input.value);

  // add the text node to the newly created div
  newLineElement.appendChild(outputContent);

  // add the newly created element and its content into the DOM
  const parent = document.querySelector('#outputField');
  document.querySelector('#output').insertBefore(newLineElement, parent);
}

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newLine();
                    window.scrollTo(0,document.body.scrollHeight);
                    document.querySelector('#input').value = '';
                }
            }
