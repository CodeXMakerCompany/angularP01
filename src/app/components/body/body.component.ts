import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
      mensaje: 'Angular tiene un gran poder de desarrollo',
      autor: 'Codexmaker'
  }

  personajes: string[] = ['Trickstar Lycoris','Trickstar Lylibell','Trickstar Candina'];
  

}
