var guarda = function(){
    let infoFrente  = document.querySelector("#layout").value;
    let infoAtras = document.querySelector("#underside").value;
    let layout0 = undefined;
    let idT;
    let urlFimg= "url('images/00"+selection()+".jpg')";
    let urlBimg= "url('images/00"+selection()+"_.jpg')";
    const voltear = () => {
        let layout = !layout0;
        if (layout) {
            element.innerHTML="<p>"+infoFrente+"</p>";
            element.style.backgroundImage= urlFimg;
    
        } else {
            element.innerHTML="<p>"+infoAtras+"</p>"
            element.style.backgroundImage= urlBimg;

        }
        
        return layout;
    }
    function selection (){
        let option = document.getElementById("select").value;
        return option;
    } 
    const element = document.querySelector("#t"+selection());
    if (layout0 === undefined){
        element.innerHTML="<p>"+infoFrente+"</p>";
        element.style.backgroundImage= urlFimg;
        layout0 = true;
    } 

    function temporizadorDeRetraso() {
            idT = setTimeout(funcionConRetraso, 10000);   
    }
    function funcionConRetraso() {
        element.innerHTML = "<p>"+infoFrente+"</p>";
        element.style.backgroundImage= urlFimg;
        layout0 = true;        
    }

    function myStopFunction() {
        clearTimeout(idT);
    }
    element.addEventListener("click", () => {
        layout0 = voltear()
        
        if (layout0===false){
            temporizadorDeRetraso();
        } else {
            myStopFunction();
        }
    })

}

// let largolayout = document.querySelector("#layout").value.length;
// let largounderside = document.querySelector("#underside").value.length;


let boton=document.querySelector(".enviador");
boton.addEventListener("click",guarda)



// if (largolayout>0) {
//     infoAtras=salida[0];
//     infoFrente = salida[1];
// } else {
//     infoAtras="texto atras";
//     infoFrente = "texto adelante";
// }

