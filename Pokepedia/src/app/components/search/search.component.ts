import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  pokemones = [];
  filterPokemon = [];


  constructor( private pokeapi: PokeapiService,
               public route:ActivatedRoute ) {

    this.route.params.subscribe( params => {
      this.filterPokemon [0] = params;
    })

    this.pokeapi.getPokemonList().subscribe((data: any) => {
      console.log (data.results);
      this.pokemones = data.results;

    });
  }

  ngOnInit(): void {

  }

}
