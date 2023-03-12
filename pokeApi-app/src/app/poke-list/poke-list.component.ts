import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService.getPokemonByName(result.name).subscribe((pokemon: any) => {
          this.pokemons.push(pokemon);         
        });
      });
    });
  }

  showDetails(name: string) {
    this.router.navigate(['/pokedetails', name]);
  }
}