import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers(){
    return this.players;
  }

  getPlayerById(chosenPlayerId: string){
    return this.angularFire.database.object('players/' + chosenPlayerId);
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  editPlayer(updatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(updatedPlayer.$key);
    playerEntryInFirebase.update({name: updatedPlayer.name, image:  updatedPlayer.image, number: updatedPlayer.number, position:  updatedPlayer.position, BT: updatedPlayer.bt, height: updatedPlayer.height, weight: updatedPlayer.weight, born: updatedPlayer.born});
  }
  deletePlayer(localPlayerToDelete){
    console.log(localPlayerToDelete);
  var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
  playerEntryInFirebase.remove();
}

}
