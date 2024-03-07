function crearParrafo() {
    // Crear un elemento de párrafo
    var parrafo = document.createElement("p");
    
    parrafo.textContent = "Hola Mundo";
    
    document.body.appendChild(parrafo);
  }