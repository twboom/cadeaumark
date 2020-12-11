var input = document.querySelector('#input');

function newLine () {
  // create a new div element
  const newDiv = document.createElement('p');

  // and give it some content
  const newContent = document.createTextNode(input.value);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('p');
  document.body.insertBefore(newDiv, currentDiv);
}

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newLine();
                }
            }
