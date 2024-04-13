import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-home-details',
  templateUrl: './update-home-details.component.html',
  styleUrls: ['./update-home-details.component.css']
})
export class UpdateHomeDetailsComponent {

  homeId : string = '';

  constructor( private router: Router) { }
  fetchHomeDetails(){
    if(this.homeId && this.homeId.length > 0)
        this.router.navigate(["updateHomeDetails"],
          { queryParams: { homeId: this.homeId } 
        });
  }
}
