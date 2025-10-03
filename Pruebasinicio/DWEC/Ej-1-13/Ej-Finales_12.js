const estudiantes = {
  "Ana": [10, 9, 8, 9, 7, 8],
  "Luis": [6, 7, 8, 5, 6, 7],
  "Marta": [9, 9, 10, 8, 9, 9],
  "Pedro": [4, 5, 6, 5, 4, 6]
};

function mediaAritmetica(...nums) {
  return nums.reduce((acc, n) => acc + n, 0) / nums.length;
}

function mostrarMedias(estudiantes) {
  for (let nombre in estudiantes) {
    const notas = estudiantes[nombre];
    const media = mediaAritmetica(...notas);
    console.log(`${nombre} tiene una media de ${media.toFixed(2)}`);
  }
}

function mejorEstudiante(estudiantes) {
  let mejor = "";
  let mejorMedia = 0;

  for (let nombre in estudiantes) {
    const media = mediaAritmetica(...estudiantes[nombre]);
    if (media > mejorMedia) {
      mejorMedia = media;
      mejor = nombre;
    }
  }
  console.log(`El mejor estudiante es ${mejor} con una media de ${mejorMedia.toFixed(2)}`);
}

function ordenarPorMedia(estudiantes) {
  const lista = [];

  for (let nombre in estudiantes) {
    const media = mediaAritmetica(...estudiantes[nombre]);
    lista.push({ nombre, media });
  }

  lista.sort((a, b) => b.media - a.media);

  console.log("Estudiantes ordenados por media:");
  lista.forEach(est => console.log(`${est.nombre}: ${est.media.toFixed(2)}`));
}

mostrarMedias(estudiantes);
mejorEstudiante(estudiantes);
ordenarPorMedia(estudiantes);
