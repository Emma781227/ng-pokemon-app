import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-listes';
import {Pokemon} from './pokemon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule],
  templateUrl:'app.component.html' 
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon [] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[3]);
  }
  // constructor(private dialog: MatDialog) {}

  // méthodeQuiSignaleErreur() {
  //   const dialogConfig = new MatDialogConfig();
  
  //   // Configuration pour afficher la popup en haut de l'écran
  //   dialogConfig.position = {
  //     top: '0',
  //     right: '0'
  //   };
  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined  = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon)  {
      // Afficher le nom du Pokémon correspondant à l'index
      console.log(`Vous avez cliqué sur le Pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else{
      console.log(`Vous avec cliquer sur un pokemon qui nexist pas`);
      this.pokemonSelected = pokemon;
    }
 
  }
}
 
  
