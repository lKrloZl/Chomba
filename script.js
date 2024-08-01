document.addEventListener("DOMContentLoaded", () => {
    const dishes = document.querySelectorAll(".dish");

    // Cargar el estado de los platos desde localStorage
    dishes.forEach(dish => {
        const dishName = dish.textContent;
        const savedState = localStorage.getItem(dishName);

        if (savedState) {
            dish.classList.remove("available", "unavailable");
            dish.classList.add(savedState);
        }
    });

    // Añadir event listener para cambiar el estado y guardarlo en localStorage
    dishes.forEach(dish => {
        dish.addEventListener("click", () => {
            const dishName = dish.textContent;
            let newState;

            if (dish.classList.contains("available")) {
                dish.classList.remove("available");
                dish.classList.add("unavailable");
                newState = "unavailable";
            } else {
                dish.classList.remove("unavailable");
                dish.classList.add("available");
                newState = "available";
            }

            // Guardar el nuevo estado en localStorage
            localStorage.setItem(dishName, newState);
        });
    });
});