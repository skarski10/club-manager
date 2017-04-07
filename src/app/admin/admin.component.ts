import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, image: string, number: string, position: string, bt: string, height: string, weight: string, born: string) {
    var newPlayer: Player = new Player(name, image, number, position, bt, height, weight, born);
    this.playerService.addPlayer(newPlayer);
  }

}
