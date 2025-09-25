function ordenaPersonas(personas) {
    return personas.sort((a, b) => a.edad - b.edad);
}

let personas =[new personasOrdenadas("Maecos",33),
        new personasOrdenadas("María",19),
        new personasOrdenadas("Santiago",28),
        new personasOrdenadas("Cristina",40)     
];
let personasOrdenadas = personasOrdenadas(personas);
console.log(personasOrdenadas);