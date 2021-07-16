import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomFilter';
  searchText;
  locked ;

  transform(value: any, args: any) {
    if(!value) this.locked = [];

    if(!args) this.locked = value;
    
    args = args.toString().toLowerCase();
    if( value ){
      this.locked = value.filter( ele => (ele.User.toString().toLowerCase().indexOf(args) > -1) );
    }
  }

  ngOnInit(){
      this.locked = [
        {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
        {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
        {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
        {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
    ]
  }
}
