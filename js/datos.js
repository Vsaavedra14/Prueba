function mostrarDatos() {
    var persona = {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid",
        "hobbies": ["leer", "viajar", "correr"],
        "direccion": {
            "calle": "Avenida de la Constitución",
            "numero": "123",
            "piso": "5",
            "apartamento": "B",
            "ciudad": "Madrid",
            "codigo_postal": "28001",
            "provincia": "Madrid",
            "pais": "España"
        }
    };

    var resultado = "Nombre: " + persona.nombre + "\n";
    resultado += "Edad: " + persona.edad + "\n";
    resultado += "Ciudad: " + persona.ciudad + "\n";
    resultado += "Hobbies: " + persona.hobbies.join(", ") + "\n";
    resultado += "Dirección:\n";
    resultado += "  Calle: " + persona.direccion.calle + ", " + persona.direccion.numero + "\n";
    resultado += "  Piso: " + persona.direccion.piso + ", Apartamento: " + persona.direccion.apartamento + "\n";
    resultado += "  Ciudad: " + persona.direccion.ciudad + "\n";
    resultado += "  Código Postal: " + persona.direccion.codigo_postal + "\n";
    resultado += "  Provincia: " + persona.direccion.provincia + "\n";
    resultado += "  País: " + persona.direccion.pais + "\n";

    document.getElementById("resultado").textContent = resultado;}