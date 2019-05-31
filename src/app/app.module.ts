import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OurProjectComponent } from './pages/our-project/our-project.component';
import { LinksComponent } from './pages/links/links.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { ContactData } from './services/contact-data';
import { StorageService } from './services/storage-service';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { NewsData } from './services/news-data';


const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'links', component: LinksComponent },
  { path: 'news', component: NewsComponent },
  { path: 'our-project', component: OurProjectComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'sponsor', component: SponsorComponent},
  { path: 'admin-contacts', component: AdminContactsComponent},
  { path: 'admin-news', component: AdminNewsComponent}
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
    AdminContactsComponent,
    AdminNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ContactData, StorageService, NewsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
