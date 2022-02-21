import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteHijo1Component } from './componente-hijo1/componente-hijo1.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';
import { ComponenteNieto1Component } from './componente-nieto1/componente-nieto1.component';
import { ComponenteNieto2Component } from './componente-nieto2/componente-nieto2.component';



@NgModule({
  declarations: [
    ComponenteHijo1Component,
    ComponenteHijo2Component,
    ComponenteNieto1Component,
    ComponenteNieto2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponenteHijo1Component,
    ComponenteHijo2Component,
    ComponenteNieto1Component,
    ComponenteNieto2Component
  ]
})
export class SharedModule { }
