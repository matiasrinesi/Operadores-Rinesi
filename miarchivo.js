
//OPERADOR TERNARIO


let nota = 7
nota = 4
nota >= 6 ? console.log("Materia aprobada") : console.log("Materia desaprobada")

//Acceso condicional a un objeto

const alumno = {
    nombre: "Matias",
    edad: 21,
    materias: {
        matematica: "Aprobada"
    }
}

console.log(alumno?.materias?.matematica || "La materia no fue cursada")
console.log(alumno?.materias?.historia || "La materia no fue cursada")