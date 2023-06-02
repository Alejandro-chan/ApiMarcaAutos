const tbody = document.querySelector('tbody')


async function obtenerDatos() {
    const response = await fetch('https://davesystem.com.mx/')
    const data = await response.json()

    let info = ''

    data.forEach( data => {

        const {marca,anio,modelo,color,placa} = data

        info += 
        `   <tr>
        <td>${marca}</td>
        <td>${anio}</td>
        <td>${modelo}</td>
        <td>${color}</td>
        <td>${placa}</td>
        </tr>`
        
    });

    tbody.innerHTML = info
}



obtenerDatos()