import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo1',
  templateUrl: './componente-hijo1.component.html',
  styleUrls: ['./componente-hijo1.component.css']
})
export class ComponenteHijo1Component implements OnInit {

  @Input() nombre: string = 'Componente Hijo 1';

  @Output() eventoSaludo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirSaludo() {
    this.eventoSaludo.emit('Hola desde el componente hijo 1');
  }

}
