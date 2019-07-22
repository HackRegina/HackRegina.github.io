import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ServicesComponent } from './services/services.component'
import { StoryComponent } from './story/story.component'
import { SponsorsPageComponent } from './sponsorsPage/sponsorsPage.component'
import { ContentfulService } from './contentful.service'
import { SponsorsComponent } from './sponsors/sponsors.component'
import { SponsorComponent } from './sponsor/sponsor.component'
import { SponsorshipLevelPipe } from './sponsorship-level.pipe'

import { MarkdownModule } from 'ngx-md'
import { EventsPageComponent } from './events-page/events-page.component'
import { TeamComponent } from './team/team.component'
import { TeamMemberComponent } from './team-member/team-member.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { JobsComponent } from './jobs/jobs.component'
import { JobsService } from './jobs.service'
import { JobComponent } from './job/job.component'
import { CallForPresentersModule } from './call-for-presenters/call-for-presenters.module'
import { CfpCallbackService } from './cfp-callback.service'
// import { CalendarModule } from 'ap-angular-fullcalendar'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {JobFilterComponent} from "./job-filter/job-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    StoryComponent,
    SponsorsPageComponent,
    SponsorsComponent,
    SponsorComponent,
    SponsorshipLevelPipe,
    EventsPageComponent,
    TeamComponent,
    TeamMemberComponent,
    JobsComponent,
    JobComponent,
    NavbarComponent,
    FooterComponent,
    JobFilterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    // CalendarModule,
    CallForPresentersModule
  ],
  providers: [
    ContentfulService,
    JobsService,
    CfpCallbackService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
