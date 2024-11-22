function calcularTiempo() {
    // Obtener los valores del formulario
    const velocidad = parseFloat(document.getElementById("velocidad").value); // En MB/s
    const peso = parseFloat(document.getElementById("peso").value); // En GB

    // Validar entradas
    if (isNaN(velocidad) || isNaN(peso) || velocidad <= 0 || peso <= 0) {
        document.getElementById("tiempo").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    // Calcular tiempo de descarga en segundos
    const tiempoSegundos = (peso * 1024) / velocidad; // Convertir GB a MB y dividir por velocidad

    // Convertir tiempo a minutos
    const tiempoMinutos = tiempoSegundos / 60;

    // Mostrar el resultado
    const resultado = `Tiempo estimado de descarga: ${tiempoMinutos.toFixed(2)} minutos`;
    document.getElementById("tiempo").textContent = resultado;
}