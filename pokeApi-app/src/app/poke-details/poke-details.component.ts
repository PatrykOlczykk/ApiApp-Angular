import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  pokemonDetails: any;
  

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      console.log('name: ', name);
      if (name) {
        this.dataService.getPokemonByName(name).subscribe(
          (data: any) => {
            this.pokemonDetails = data;
            console.log(this.pokemonDetails);
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { DataService } from '../service/data.service';

// @Component({
//   selector: 'app-poke-details',
//   templateUrl: './poke-details.component.html',
//   styleUrls: ['./poke-details.component.css']
// })
// export class PokeDetailsComponent implements OnInit {
//   pokemonDetails: any;
//   otherPokemonName: string = '';

//   constructor(private route: ActivatedRoute, private dataService: DataService) { }

//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       let name = params.get('name');
//       console.log('name: ', name);
//       if (name) {
//         this.otherPokemonName = name;
//         this.dataService.getPokemonByName(name).subscribe(
//           (data: any) => {
//             this.pokemonDetails = data;
//             console.log(this.pokemonDetails);
//           },
//           (error: any) => {
//             console.error(error);
//           }
//         );
//       }
//     });
//   }
// }









  // ngOnInit() {
//   this.route.paramMap.subscribe(params => {
//     const name = params.get('name');
//     console.log('name: ', name);
//     if (name !== null) {
//   //     // this.dataService.getPokemonByName(name).subscribe(
//   //       (data: any) => {
//   //         this.pokemonDetails = data;
//   //         console.log(this.pokemonDetails.name);
//   //       },
//   //       (error: any) => {
//   //         console.error(error);
//   //       }
//   //     );
//   //   }
//   // });
//   }})
// }
// }



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DataService } from '../service/data.service';

// @Component({
//   selector: 'app-poke-details',
//   templateUrl: './poke-details.component.html',
//   styleUrls: ['./poke-details.component.css']
// })
// export class PokeDetailsComponent implements OnInit {

//   pokemon: any = {};

//   constructor(private dataService: DataService, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     this.dataService.getPokemon(id).subscribe((pokemon: any) => {
//       this.pokemon = pokemon;
//       console.log('Pobrano dane dla pokemona:', pokemon.name);
//     });
//   }

// }