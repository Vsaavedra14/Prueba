var persona = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid",
    "hobbies": ["leer", "viajar", "correr"]
    }

    console.log(persona.nombre); // Salida: Juan
console.log(persona.edad); // Salida: 30
console.log(persona.ciudad); // Salida: Madrid
console.log(persona.hobbies); // Salida: ["leer", "viajar", "correr"]

var personaJSON=JSON.stringify(persona);
console.log(personaJSON);