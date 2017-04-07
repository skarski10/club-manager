import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], desiredPosition){
    var output: Player[] = [];
      if(desiredPosition === "pitchers") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "P" || input[i].position === "p") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "catchers") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "C" || input[i].position === "c") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "infield") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "1b" || input[i].position === "1B" || input[i].position === "2b" || input[i].position === "2B" || input[i].position === "3b" || input[i].position === "3B" || input[i].position === "ss" || input[i].position === "SS") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPosition === "outfield") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].position === "OF" || input[i].position === "of") {
              output.push(input[i]);
            }
          }
          return output;
      } else {
        return input;
      }
    }
}
