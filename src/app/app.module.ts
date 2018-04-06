import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ServicesComponent } from './services/services.component'
import { StoryComponent } from './story/story.component'
import { ContactComponent } from './contact/contact.component'
import { SponsorsPageComponent } from './sponsorsPage/sponsorsPage.component'
import { ContentfulService } from './contentful.service'
import { SponsorsComponent } from './sponsors/sponsors.component'
import { SponsorComponent } from './sponsor/sponsor.component'
import { SponsorshipLevelPipe } from './sponsorship-level.pipe'

import { MarkdownModule } from 'ngx-md'
import { EventsPageComponent } from './events-page/events-page.component'
import { CalendarModule } from 'ap-angular2-fullcalendar'
import { TeamComponent } from './team/team.component'
import { TeamMemberComponent } from './team-member/team-member.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    StoryComponent,
    ContactComponent,
    SponsorsPageComponent,
    SponsorsComponent,
    SponsorComponent,
    SponsorshipLevelPipe,
    EventsPageComponent,
    TeamComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    CalendarModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [
    ContentfulService,
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
