import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'specialists', component: SpecialistsComponent},
    {path: 'specialists/:id', component: SpecialistDetailsComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
