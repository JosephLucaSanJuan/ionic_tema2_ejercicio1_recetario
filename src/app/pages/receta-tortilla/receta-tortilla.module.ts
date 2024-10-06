import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaTortillaPageRoutingModule } from './receta-tortilla-routing.module';

import { RecetaTortillaPage } from './receta-tortilla.page';
import { TortillaImageComponent } from './components/tortilla-image/tortilla-image.component';
import { TortillaIngredientsComponent } from './components/tortilla-ingredients/tortilla-ingredients.component';
import { TortillaPreparacionComponent } from './components/tortilla-preparacion/tortilla-preparacion.component';
import { TortillaInformationComponent } from './components/tortilla-information/tortilla-information.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaTortillaPageRoutingModule
    /*RouterModule.forChild([
      {
        path: '',
        component: RecetaTortillaPage
      }
    ])*/
  ],
  declarations: [
    RecetaTortillaPage,
    TortillaImageComponent,
    TortillaIngredientsComponent,
    TortillaPreparacionComponent,
    TortillaInformationComponent
  ]
})
export class RecetaTortillaPageModule {}
