import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { AddPersonComponent } from "app/addperson/addperson.component";
import { InstructionsComponent } from "app/instructions/instructions.component";

const routes: Routes = [
    { 'path': '', 'redirectTo': 'Home', 'pathMatch': 'full' },
    { 'path': 'Home', 'component': HomeComponent },
    { 'path': 'Instructions', 'component': InstructionsComponent },
    { 'path': 'AddPerson', 'component': AddPersonComponent }
];

@NgModule({
  'imports': [RouterModule.forRoot(routes, { 'useHash': true })],
  'exports': [RouterModule]
})
export class RoutingModule { }
