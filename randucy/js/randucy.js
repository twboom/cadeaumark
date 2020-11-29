function newLine() {
  let input = document.querySelector('#input')

    document.write(input);
};

document.getElementById("input").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newLine();
                }
            }
