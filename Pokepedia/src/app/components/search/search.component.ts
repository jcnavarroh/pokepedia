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
  terminoBusqueda:string = "";
  filterPokemon: any [] = [];


  constructor( private pokeapi: PokeapiService,
               public route:ActivatedRoute ) {

    this.route.params.subscribe( (params: any) => {
      this.terminoBusqueda = params['termino'];
      console.log("Parametros de la URL", this.terminoBusqueda);
      this.buscarPokemon();
    })

    this.pokeapi.getPokemonList().subscribe((data: any) => {
      console.log (data.results);
      this.pokemones = data.results;
    });
  }

  public buscarPokemon(){
    console.log("Se disparo función de busqueda")
    var termino:string = this.terminoBusqueda;
    this.filterPokemon = [];

    console.log("Nombre de pokemon termino de busqueda:", termino)

    for (const poke of this.pokemones){
      var pokeName = poke.name;

      console.log("Nombre de pokemon del ciclo:", pokeName)

      if(pokeName.includes(termino)){
        this.filterPokemon.push(poke);
        console.log(this.filterPokemon)
      }
    }
  }

  ngOnInit(): void {

  }

}
