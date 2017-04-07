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
  players:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByPosition: string = "allPlayers";


  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  onChange(optionFromMenu) {
  this.filterByPosition = optionFromMenu;
}

  goToPlayerPage(clickedPlayer) {
  this.router.navigate(['player-details', clickedPlayer.$key]);
};


}
