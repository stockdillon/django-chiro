import { LineBreaksPipe } from './../../shared/pipes/line-breaks-pipe.pipe';
import { TeamPickerService } from './../../services/team-picker.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.css']
})
export class TeamPickerComponent implements OnInit {
  public nameList: string[];
  public captains: string[];
  public players: string[];
  public colors: string[] = ['Black', 'Yellow', 'White/Skins'];
  public teams: string[][] = [
    [],
    [],
    [],
  ];
  public names: string[];
  playerNamesInput = new FormControl('');

  constructor(private pickerService: TeamPickerService, private lineBreakPipe: LineBreaksPipe) {
    this.playerNamesInput.valueChanges
      .pipe(debounceTime(400))
      .subscribe((names: string) => {
        const delimitedNames: string = lineBreakPipe.transform(names);
        this.playerNamesInput.setValue(delimitedNames);
        this.nameList = delimitedNames.split(',');
        this.captains = this.nameList.slice(0, 3);
        this.players = this.nameList.slice(3);
      });
  }

  ngOnInit(): void {
    this.playerNamesInput.setValue(`
    Dillon
    Hamza
    Angelo
    Tudor
    Etienne
    Fadee
    Andrew
    Zack
    Nasry
  `);
  }

  pickTeams() {
    // this.names = this.playerNames.split
    // const names = [
    //   'Dillon',
    //   'Hamza',
    //   'Angelo',
    //   'Dillon pick 1',
    //   'Hamza pick 1',
    //   'Angelo pick 1'
    // ];
    this.teams.forEach((team, i) => {
      this.teams[i] = this.players.filter((player, j) => j % 3 === i);
    });
    // this.captains.forEach((captain, i) => {
    //   this.teams[i].push()
    // });
  }
}
