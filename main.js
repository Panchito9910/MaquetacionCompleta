function validar(){
    if(document.getElementById("nombre").value.length===0){
        alert("Favor de escribir su nombre");
        document.getElementById("nombre").focus();
        return 0;
    }
    document.formulario.submit();
}