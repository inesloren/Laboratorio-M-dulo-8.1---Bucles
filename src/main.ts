type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1a
const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatria: Pacientes[] = [];
    
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        pacientesPediatria.push(pacientes[i]);
      }
    }
  
    return pacientesPediatria;
  };

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//Apartado 1b
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatriaMenosDeDiez: Pacientes[] = [];
    
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
        pacientesPediatriaMenosDeDiez.push(pacientes[i]);
      }
    }
  
    return pacientesPediatriaMenosDeDiez;
  };

  console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
            activarProtocolo = true;
        }
    }
    return activarProtocolo;
  };

console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra") {
            pacientes[i].especialidad = "Medico de familia";
        }
    } 
    return pacientes;
  };

console.log(reasignaPacientesAMedicoFamilia(pacientes));


//Apartado 4
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
    }
    return false; // No hay pacientes asignados a pediatría
  };

console.log(hayPacientesDePediatria(pacientes));

//Apartado 5

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    const contador: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
  
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Medico de familia") {
        contador.medicoDeFamilia++;
      } else if (pacientes[i].especialidad === "Pediatra") {
        contador.pediatria++;
      } else if (pacientes[i].especialidad === "Cardiólogo") {
        contador.cardiologia++;
      }
    }
  
    return contador;
  };
  
