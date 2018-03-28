import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
// Routes类型的数组
export const routes: Routes = [
    {
        path: 'index',
        component: AppComponent
    }, {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
