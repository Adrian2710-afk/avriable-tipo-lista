var array=[];
function submit(){

    var a=document.getElementById("nombre_alumno_1").value;
    var b=document.getElementById("nombre_alumno_2").value;
    var c=document.getElementById("nombre_alumno_3").value;
    var d=document.getElementById("nombre_alumno_4").value;
    array.push(a);
    array.push(b);
    array.push(c);
    array.push(d);
    console.log(array)
    document.getElementById("ver_nombre").innerHTML=array
}