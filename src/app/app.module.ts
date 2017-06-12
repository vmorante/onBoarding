import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BasicDataComponent } from './pages/basic-data/basic-data.component';
import { ConsentComponent } from './pages/consent/consent.component';
import { ScanDNIComponent } from './pages/scan-dni/scan-dni.component';
import { RecordComponent } from './pages/record/record.component';
import { CompleteDataComponent } from './pages/complete-data/complete-data.component';
import { FinishComponent } from './pages/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BasicDataComponent,
    ConsentComponent,
    ScanDNIComponent,
    RecordComponent,
    CompleteDataComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
