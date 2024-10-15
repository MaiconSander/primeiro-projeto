import { Routes } from "@angular/router";
import { DataBindingComponent } from "./data-binding/DataBindingComponent";
import { DirectivesComponent } from "./directives/directives.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilhoAComponent } from "./filho-a/filho-a.component";
import { FilhoBComponent } from "./filho-b/filho-b.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { guardiaoGuard } from "./guardiao.guard";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WeatherComponent } from "./weather/weather.component";
import { PipesComponent } from "./pipes/pipes.component";


export const routes: Routes = [
    { path: 'hello-world', title: "Hello-world", component: HelloWorldComponent, children: [
          {path: 'filho-a', title: "Filho A", component: FilhoAComponent},
          {path: 'filho-b', title: "Filho B", component: FilhoBComponent}
    ]},
    { path: 'data-binding', title: "data-biding", component: DataBindingComponent, canActivate: [guardiaoGuard] },
    { path: 'directives', title: "directives", component: DirectivesComponent },
    { path: 'customers', title: "customers", component:  CustomerListComponent },
    {path: 'customer/:id', title: "Customer Details", component: CustomerDetailsComponent},
    {path: 'reactive-form', title: "Reactive Form", component: ReactiveFormComponent},
    {path: 'template-form', title: "Template Form", component: ReactiveFormComponent},
    {path: 'weather', title: "Clima", component: WeatherComponent},
    {path: 'pipes', title: "Pipes", component: PipesComponent},
    {path: '', redirectTo: '/hello-world', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];
