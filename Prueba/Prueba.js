//ProgressBar
function move(valor, total) {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= (valor/total)*100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
        }
    }

move(2, 10); 