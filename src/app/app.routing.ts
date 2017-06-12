import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BasicDataComponent } from './pages/basic-data/basic-data.component';
import { ConsentComponent } from './pages/consent/consent.component';
import { ScanDNIComponent } from './pages/scan-dni/scan-dni.component';
import {  RecordComponent } from './pages/record/record.component';
import { CompleteDataComponent } from './pages/complete-data/complete-data.component';
import { FinishComponent } from './pages/finish/finish.component';

const routes: Routes = [
    {
        path: "welcome",
        component: WelcomeComponent,
       
    },
     {
        path: "basic-data",
        component: BasicDataComponent,
       
    },
     {
        path: "consent",
        component:ConsentComponent,
       
    },
     {
        path: "scan-dni",
        component: ScanDNIComponent,
       
    },
     {
        path: "record",
        component: RecordComponent,
       
    },
     {
        path: "complete-data",
        component: CompleteDataComponent,
       
    },
     {
        path: "finish",
        component:FinishComponent,
       
    },
   
    {
        path: "**",
        redirectTo: "/welcome"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
