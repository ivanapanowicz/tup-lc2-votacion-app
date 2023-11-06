const tipoEleccion=2;
const tipoRecuento=1;
fetch("https://resultados.mininterior.gob.ar/desarrollo")
    .then(response => {
    if (!response.ok) {
      throw new Error('Error al hacer la solicitud.');
    }
    return response.json(); // Parsea la respuesta como JSON
  })
  .then(data => {
    console.log(data); // Haz algo con los datos
  })
  .catch(error => {
    console.error(error);
  });

  

