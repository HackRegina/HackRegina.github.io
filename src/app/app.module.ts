import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { SponsorsPageComponent } from './sponsorsPage/sponsorsPage.component';
import { ContentfulService } from './services/contentful.service';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorshipLevelPipe } from './sponsorship-level.pipe';

import { NgxMdModule } from 'ngx-md';
import { EventsPageComponent } from './events-page/events-page.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobsService } from './services/jobs.service';
import { JobComponent } from './job/job.component';
import { CallForPresentersModule } from './call-for-presenters/call-for-presenters.module';
import { CfpCallbackService } from './services/cfp-callback.service';
// import { CalendarModule } from 'ap-angular-fullcalendar'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerComponent } from './partner/partner.component';
import { LabelsService } from './services/labels.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    PartnersComponent,
    PartnerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMdModule.forRoot(),
    CallForPresentersModule
  ],
  providers: [
    ContentfulService,
    JobsService,
    LabelsService,
    CfpCallbackService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
