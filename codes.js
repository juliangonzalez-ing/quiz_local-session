function recibe_datos(){
    /*Aca esta tomando los datos de los Input*/
    let tomaNombre=document.getElementById("nombre_user").value
    let tomaEdad=document.getElementById("edad_user").value
    let tomaGenero=document.getElementById("genero_user").value
    let tomaCorreo=document.getElementById("correo_user").value

    /* Aca esta guardando el contenido en una "key" llamada guardaLocalStorage*/
    let verifica=localStorage.getItem('guardaLocalStorage')
    /* inicializo los arreglos que se estan creando*/
    let primerArreglo /*este es mi arreglo incial*/
    let segundoArreglo /* aca se guarda lo que se ingrese de segundas */
    if (verifica ==null) { /*aca se valida si el local esta vacio para guardar datos */
        primerArreglo=[tomaNombre,tomaEdad,tomaGenero,tomaCorreo]/*entrega datos al arreglo uno */
        localStorage.setItem('guardaLocalStorage',primerArreglo)/* almacena en el locaStorage */
        }else{ /* aca guarda valores en el segundo arreglo, almacena datos en el segundo y hace la concatenacion de ambos arreglos*/
        segundoArreglo=[tomaNombre,tomaEdad,tomaGenero,tomaCorreo]
        primerArreglo=[localStorage.getItem('guardaLocalStorage')]
        primerArreglo=primerArreglo.concat(segundoArreglo)
        localStorage.setItem('guardaLocalStorage', primerArreglo)
        }
}