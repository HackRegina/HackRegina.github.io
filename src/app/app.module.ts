import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

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
    SponsorshipLevelPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
