function calcularTiempo() {
    velocidad = parseFloat(document.getElementById("velocidad").value);
    peso = parseFloat(document.getElementById("peso").value);

    pesoEnMB = peso * 1024;

    tiempoEnSegundos = pesoEnMB / velocidad;

    tiempoEnMinutos = tiempoEnSegundos / 60;

    resultado = "Tiempo estimado de descarga: " + tiempoEnMinutos.toFixed(2) + " minutos";

    document.getElementById("tiempo").textContent = resultado;
}

