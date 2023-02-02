import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';
import { CodingPageComponent } from './pages/coding-page/coding-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SphericalGeometryComponent } from './components/art/spherical-geometry/spherical-geometry.component';
import { BenzineComponent } from './components/art/benzine/benzine.component';
import { GolComponent } from './components/art/gol/gol.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PagenotfoundComponent,
    HeaderComponent,
    MusicPageComponent,
    ArtPageComponent,
    CodingPageComponent,
    ContactPageComponent,
    FooterComponent,
    SphericalGeometryComponent,
    BenzineComponent,
    GolComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
