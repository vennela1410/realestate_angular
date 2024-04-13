import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { AddHomeOwnerComponent } from './components/add-home-owner/add-home-owner.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateHomeDetailsComponent } from './components/update-home-details/update-home-details.component';
import { UpdateHomeOwnersComponent } from './components/update-home-owners/update-home-owners.component';
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : '', component : HomeComponent},
  {path:'addNewHome', component : AddNewHouseComponent},
  {path:'addNewAgent', component : AddAgentComponent},
  {path: 'updateHome', component: UpdateHomeDetailsComponent},
  {path:'updateHomeDetails', component : AddNewHouseComponent},
  {path:'advanced-search', component : AdvancedSearchComponent},
  {path:'addHomeOwner',component: AddHomeOwnerComponent},
  {path:'updateHomeOwnerDetails', component: AddHomeOwnerComponent},
  {path:'updateHomeOwner', component: UpdateHomeOwnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
