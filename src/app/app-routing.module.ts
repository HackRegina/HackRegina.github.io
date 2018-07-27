import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ServicesComponent } from './services/services.component'
import { SponsorsPageComponent } from './sponsorsPage/sponsorsPage.component'
import { StoryComponent } from './story/story.component'
import { ContactComponent } from './contact/contact.component'
import { EventsPageComponent } from './events-page/events-page.component'
import { JobsComponent } from './jobs/jobs.component'
import { JobComponent } from './job/job.component'
import { CallForPresentersModule } from './call-for-presenters/call-for-presenters.module'

export function loadCallForPresentersModule () {
  return CallForPresentersModule
}

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
    component: SponsorsPageComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'events',
    component: EventsPageComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'job/:jobId',
    component: JobComponent
  },
  {
    path: 'cfp',
    loadChildren: loadCallForPresentersModule
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
