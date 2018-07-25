import { NgModule } from '@angular/core'
import { CallForPresentersComponent } from './call-for-presenters.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: CallForPresentersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallForPresentersRoutingModule {}
