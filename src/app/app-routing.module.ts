import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ServicesComponent } from './services/services.component'
import { SponsorsComponent } from './sponsors/sponsors.component'
import { StoryComponent } from './story/story.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
