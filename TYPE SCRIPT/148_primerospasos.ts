console.log("Soy un mensaje de consola");
alert("Soy una alerta");

//Variables de tipos de datos
var cadena: string = "Soy una cadena";
var numero: number = 12;
var bool: boolean = true;
var cualquiera: any = "hola";
cualquiera = 12;
cualquiera = false;
var opcional: string | number | boolean = "hola";
opcional = 2;
opcional = true;

var array: Array<string> = ["a", "b", "c"];
var arrayCualquiera: Array<any> = [1, "dos", true];
var arrayDefinido: number[] = [1, 2, 3, 4, 5];
var arrayDefinido2: string[] = ["uno", "dos", "tres"];
var arrayDefinido3: any[] = [1, "dos", "3", false];


type alfanumerico = string | number;
//tipos de datos propios
var variblePersonal: alfanumerico = "letras o números";
variblePersonal = 3;

//funciones y tipados
function devuelveTexto(palabra: string): string {
    return "El número es: " + palabra;
}

function devuelveNumero(numero:number):number{
    return numero + 45;
}

function devuelveBool(estado:boolean):boolean{
    return true;
}