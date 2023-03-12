import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { DataService } from './service/data.service';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const appRouters:  Routes = [
  { path: '', redirectTo: '/pokelist', pathMatch: 'full' },
  { path: 'pokelist', component: PokeListComponent },
  { path: 'pokedetails/:name', component: PokeDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PokeApiComponent,
    PokeListComponent,
    PokeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
