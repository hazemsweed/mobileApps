import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPage } from './courses/courses.page';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CoursesPage
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
