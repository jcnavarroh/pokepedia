import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor( private http: HttpClient) {
    console.log('Servicio Listo');
   }

   getPokemonList() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=721&offset=0');
   }

   getPokemonData(pokemon:string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
   }
}
