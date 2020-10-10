import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pokemonId: number;
  pokemon: Pokemon = {
    name: '', base_experience: 0, height: 0, weight: 0, sprites: {}, abilities: [], front_photo: ''
  };

  versiones = [{ nombre: 'version 1', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 2', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 3', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 4', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 5', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 6', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' },
  { nombre: 'version 7', url: 'https://www.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png' }]

  constructor(private pokeApiService: PokeapiService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.pokemonId = +this.activateRoute.snapshot.paramMap.get('id');
    this.cargarPokemon()
  }

  cargarPokemon() {
    this.pokeApiService.getPokemonData(this.pokemonId).subscribe((response: any) => {
      console.log("Respuesta Api => ", response);

      Object.keys(this.pokemon).forEach((key) => {
        this.pokemon[key] = response[key]
      });

      this.pokemon.front_photo = response.sprites.front_default
      console.log("Pokemon data => ", this.pokemon);

    }, error => {
      console.log(error);
    });
  }

}
