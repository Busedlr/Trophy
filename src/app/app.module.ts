import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { LinksComponent } from './links/links.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './contact/messages/messages.component';
import { DataService } from './services/data.service';


const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'links', component: LinksComponent },
  { path: 'news', component: NewsComponent },
  { path: 'our-project', component: OurProjectComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'sponsor', component: SponsorComponent},
  { path: 'messages', component: MessagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SponsorComponent,
    PresentationComponent,
    AboutUsComponent,
    ContactComponent,
    OurProjectComponent,
    LinksComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
