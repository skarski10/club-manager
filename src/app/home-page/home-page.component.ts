import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [PlayerService]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToPlayerPage(clickedPlayer: Player) {
  this.router.navigate(['players', clickedPlayer.id]);
};


}
