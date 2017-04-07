import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [PlayerService]
})

export class PlayerDetailsComponent implements OnInit {
  playerId: string;
  playerToDisplay: Player;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
          this.playerId = urlParameters['id'];
        });
         this.playerService.getPlayerById(this.playerId).subscribe(dataLastEmittedFromObserver => {
         this.playerToDisplay = new Player
         (dataLastEmittedFromObserver.name,
         dataLastEmittedFromObserver.image,
         dataLastEmittedFromObserver.number,
         dataLastEmittedFromObserver.position,
         dataLastEmittedFromObserver.bt,
         dataLastEmittedFromObserver.height,
         dataLastEmittedFromObserver.weight,
         dataLastEmittedFromObserver.born,
         dataLastEmittedFromObserver.bio)
       })
      }
    }
