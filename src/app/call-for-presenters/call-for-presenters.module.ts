import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CallForPresentersComponent } from './call-for-presenters.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CallForPresentersRoutingModule } from './call-for-presenters-routing.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CallForPresentersRoutingModule
  ],
  declarations: [CallForPresentersComponent]
})
export class CallForPresentersModule {}
