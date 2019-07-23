import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';
  users: any[];
  constructor(private Service:DataService) {
    
  }
  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
  this.Service.getService().subscribe(
    data => {
     this.users=data;
    }
  );
  }
}
