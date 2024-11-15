const checkboxes = document.querySelectorAll('.form-control');

const actividadesseleccionadas = new Set()
const casillasseleccionadas = new Map()

for(let i = 0; i < checkboxes.length; i++){
    const checkbox = checkboxes[i];
    const casilla = i + 1;

    checkbox.addEventListener('change', (event) => {
        const actividad = checkbox.value;
        console.log(`Tarea a realizada: ${actividad}`);

        if(event.target.checked){
            actividadesseleccionadas.add(actividad);
            casillasseleccionadas.set(casillaid, actividad);
        } else {
            actividadesseleccionadas.delete(actividad);
            casillasseleccionadas.delete(casilla);
        }
        console.log('-------------------------')
    })
}