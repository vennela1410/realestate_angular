import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatCardModule} from  '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './core/header/header.component';
import { MatListModule } from '@angular/material/list';
import { NavigationListComponent } from './core/navigation-list/navigation-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateHomeDetailsComponent } from './components/update-home-details/update-home-details.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import {AgGridModule} from "ag-grid-angular/main";
import { AddHomeOwnerComponent } from './components/add-home-owner/add-home-owner.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateHomeOwnersComponent } from './components/update-home-owners/update-home-owners.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NavigationListComponent,
    HomeContentComponent,
    AddNewHouseComponent,
    AddAgentComponent,
    UpdateHomeDetailsComponent,
    AdvancedSearchComponent,
    AddHomeOwnerComponent,
    UpdateHomeOwnersComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule, 
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    NgImageSliderModule,
    AgGridModule.withComponents([]),
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
