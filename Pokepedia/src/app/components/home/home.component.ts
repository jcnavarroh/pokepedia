import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemones: any [] = [];

  constructor( private pokeapi: PokeapiService ) {
    this.pokeapi.getPokemonList().subscribe((data: any) => {
      console.log (data.results);
      this.pokemones = data.results;
    });
  }

  ngOnInit(): void {
  }

}
