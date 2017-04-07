import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToEdit){
  this.playerService.editPlayer(playerToEdit);
  }
  beginDeletingPlayer(playerToDelete){
    console.log(playerToDelete);
    if(confirm("Are you sure you want to delete this player from the roster?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
