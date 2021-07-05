import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America', 'Vision'];
    heroeBorrado: String = '';
    borrarHeroe(): void{
        // const heroeBorrado = this.heroes.splice(this.heroes.length - 1, 1);
        this.heroeBorrado = this.heroes.shift() || '';
        console.log(this.heroeBorrado);
    }
}
