const checkboxes = document.querySelectorAll('tr input[type="checkbox"]');
const inputs = document.querySelectorAll('tr input[type="text"]');

const actividadesseleccionadas = new Set()
const casillasseleccionadas = new Map()

for(let i = 0; i < checkboxes.length; i++){
    const checkbox = checkboxes[i];
    const inputtexto = inputs[i];

    checkbox.addEventListener('change', (event) => {
        const actividad = inputtexto.value;
        console.log(`Tarea a realizada: ${actividad}`);

        if(event.target.checked){
            console.log(`Tarea agregada: ${actividad}`)
            actividadesseleccionadas.add(actividad);
        } else {
            console.log(`Tarea eliminada: ${actividad}`)
            actividadesseleccionadas.delete(actividad);
        }
        console.log('-------------------------')
    })
}