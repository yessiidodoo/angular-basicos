import { Component } from '@angular/core'; //importamos el componente

//creamos el decorador.
@Component({
    selector: 'app-contador',
    template: `

        <h1> {{ titulo }} </h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <!-- incrementará 5 en 5 al agregarle el evento (click) -->
        <button (click)=" acumular(base)">+ {{ base }}</button> 
        <!-- imprimos el resultado -->
        <span> {{ numero }} </span>
        <!-- decrementará 5 en 5 al agregarle el evento (click) -->
        <button (click)=" acumular(-base)">- {{ base }}</button> 

    `
})
export class ContadorComponent { // la exporto porque quiero ocuparla fuera de este archivo.
    titulo: string = 'Contador App';
    numero: number = 10; //Declaramos otra propiedad de tipo number con el valor asignado por default de 10
    base:   number = 5; //la base será de 5

    acumular( valor: number){ //indicamos que valor es de tipo number 
        this.numero += valor;   //numero tendrá el valor a incrementar o decrementar
    }
}

