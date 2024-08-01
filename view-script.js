document.addEventListener("DOMContentLoaded", () => {
    const availableDishesContainer = document.getElementById("available-dishes");
    const unavailableDishesContainer = document.getElementById("unavailable-dishes");

    const dishes = [
        "Caldo de Costillar",
        "Caldo de Gallina",
        "Caldo de Malaya",
        "Caldo de Pecho",
        "Asado a la Olla",
        "Asado al Jugo",
        "Carne a la Brasa",
        "Chicharrón",
        "Choclo con Queso",
        "Chuleta de Cerdo",
        "Chuleta de res",
        "Corazón a la Brasa",
        "Costillar Frito",
        "Cuy al Horno",
        "Escabeche de Cuchicara",
        "Escabeche de Gallina",
        "Gallina Dorada",
        "Lechón con Tamal",
        "Lengua Atomatada",
        "Malaya Frita",
        "Mote con Queso",
        "Pecho Dorado",
        "Pernil al Horno",
        "Rocoto Relleno",
        "Suflé de Rocoto",
        "Tripa Dorada",
        "Trucha Frita",
        "Ubre Apanada",
        "Cerveza Cusqueña 620ml Dorada",
        "Cerveza Cusqueña 620ml Trigo",
        "Cerveza Cusqueña 620ml Negra",
        "Cerveza Pilsen 1L",
        "Frutillada",
        "Gaseosa Coca Cola 1L",
        "Gaseosa Coca Cola 2L",
        "Gaseosa Inka Cola 1L",
        "Gaseosa Inka Cola 2L",
        "Gaseosa Coca Cola Personal",
        "Gaseosa Fanta Personal",
        "Gaseosa Inka Cola Personal"
    ];

    dishes.forEach(dishName => {
        const dishState = localStorage.getItem(dishName) || "available";
        const dishElement = document.createElement("div");
        dishElement.className = `dish ${dishState}`;
        dishElement.textContent = dishName;

        if (dishState === "available") {
            availableDishesContainer.appendChild(dishElement);
        } else if (dishState === "unavailable") {
            unavailableDishesContainer.appendChild(dishElement);
        }
    });
});
