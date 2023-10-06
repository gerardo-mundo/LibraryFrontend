import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NotFoundPageComponent],
})
export class SharedModule {}
