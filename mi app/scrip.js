const informacionVoleibol = {
    reglas: {
        titulo: "📜 Reglas Básicas del Voleibol",
        contenido: "• Se juegan 2 equipos de 6 jugadores cada uno en cancha.<br>" +
                   "• El objetivo es pasar el balón por encima de la red y tocar el suelo del equipo contrario.<br>" +
                   "• Cada equipo solo tiene un máximo de **3 toques** para pasar la pelota al otro lado.<br>" +
                   "• Un jugador no puede tocar el balón dos veces seguidas.<br>" +
                   "• Se gana un set al llegar a 25 puntos con una ventaja mínima de 2 puntos."
    },
    posiciones: {
        titulo: "🏃 Posiciones en la Cancha",
        contenido: "• **Colocador / Armador:** Es el cerebro del equipo que distribuye las jugadas.<br>" +
                   "• **Rematador / Punta:** Ataca desde las bandas y es clave en la recepción.<br>" +
                   "• **Central:** Se encarga del bloqueo en la red y remates rápidos.<br>" +
                   "• **Opuesto:** Principal anotador en los remates traseros y delanteros.<br>" +
                   "• **Líbero:** Especialista defensivo. Usa una camiseta diferente y no puede sacar ni rematar."
    },
    equipamiento: {
        titulo: "👟 Equipamiento Necesario",
        contenido: "• **Balón oficial:** Ligero, de cuero sintético o natural.<br>" +
                   "• **Red y Antenas:** Dividen el campo a una altura de 2.43m (hombres) o 2.24m (mujeres).<br>" +
                   "• **Rodilleras:** Esenciales para proteger las articulaciones en las caídas.<br>" +
                   "• **Zapatillas con agarre:** Evitan deslizamientos en la cancha de madera o sintética."
    },
    datos: {
        titulo: "⭐ Datos Curiosos",
        contenido: "• Fue inventado en 1895 por William G. Morgan en EE.UU.<br>" +
                   "• Originalmente se llamaba **Mintonette** antes de adoptar el nombre de voleibol.<br>" +
                   "• Se convirtió en deporte olímpico oficial en los Juegos Olímpicos de Tokio 1964."
    }
};

// Función para cambiar la información en pantalla al presionar un botón
function mostrarInfo(categoria) {
    const tituloElemento = document.getElementById('titulo-info');
    const textoElemento = document.getElementById('texto-info');

    if (informacionVoleibol[categoria]) {
        tituloElemento.innerHTML = informacionVoleibol[categoria].titulo;
        textoElemento.innerHTML = informacionVoleibol[categoria].contenido;
    }
}