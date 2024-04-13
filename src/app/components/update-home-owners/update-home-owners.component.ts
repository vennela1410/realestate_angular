import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-home-owners',
  templateUrl: './update-home-owners.component.html',
  styleUrls: ['./update-home-owners.component.css']
})
export class UpdateHomeOwnersComponent {

  ownerId : string = '';
  constructor( private router: Router) { }
  fetchHomeOwnerDetails(){
    if(this.ownerId && this.ownerId.length > 0)
        this.router.navigate(["updateHomeOwnerDetails"],
          { queryParams: { ownerId: this.ownerId } 
        });
  }
}
