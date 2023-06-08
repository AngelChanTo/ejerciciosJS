//definimos la clase
class empleadoDatosSueldo{
    nombre="";
    edad=0;
    RFC="";
    diasTrabajados=0;
    sueldoDiario=0;
    
    //constructor

    constructor (nombre, edad, RFC, diasTrabajados, sueldoDiario){
        this.nombre=nombre;
        this.edad=edad;
        this.RFC=RFC;
        this.diasTrabajados=diasTrabajados;
        this.sueldoDiario=sueldoDiario;
    }
    consultarInfo(){
        console.log("Nombre del empleado: " +this.nombre);
        console.log("Edad del empleado: " + this.edad);
        console.log("RFC del empleado: " + this.RFC);
        console.log("numero de dias para la consulta del salario: " + this.diasTrabajados);


    }

    sueldo(){
        const DescIsrMensual=0.69;
        const DesIsrQuincenal=0.845;
        let resultBruto=0;
        let resultNeto=0;
        if(this.diasTrabajados==15){
            resultBruto = this.diasTrabajados*this.sueldoDiario;
            resultNeto =resultBruto*DesIsrQuincenal;
            console.log("el sueldo quincenal bruto es de: " + resultBruto.toFixed(2));
            console.log("el sueldo quincenal neto es de: " + resultNeto.toFixed(2));
        }else if(this.diasTrabajados==30){
            resultBruto = this.diasTrabajados*this.sueldoDiario;
            resultNeto =resultBruto*DescIsrMensual;
            console.log("el sueldo mensual bruto es de: " + resultBruto.toFixed(2));
            console.log("el sueldo mensual neto es de: " + resultNeto.toFixed(2));
        }else{
            console.log("Unicamente puede consultar para 15 y 30 dias");
        }

    }

}

let angel = new empleadoDatosSueldo("Angel", "22", "jghfsjglegr", 15, 156.78 );
let alexandra = new empleadoDatosSueldo("Alexandra", "22", "jghfyuyegr", 30, 156.78 );
let esteban = new empleadoDatosSueldo("Esteban", "23", "ajkflhfyuyegr", 15, 156.78 );
let manuel = new empleadoDatosSueldo("Manuel", "25", "muytloooegr", 30, 156.78 );
let aaron = new empleadoDatosSueldo("Aaron", "23", "aaedytloooegr", 15, 156.78 );


angel.consultarInfo();
angel.sueldo();

console.log("----------------")

alexandra.consultarInfo();
alexandra.sueldo();

console.log("----------------")

esteban.consultarInfo();
esteban.sueldo()

console.log("----------------")

manuel.consultarInfo();
manuel.sueldo();

console.log("----------------")
aaron.consultarInfo();
aaron.sueldo();

