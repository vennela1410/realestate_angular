import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeOwnerModel } from 'src/app/models/home-owner-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-add-home-owner',
  templateUrl: './add-home-owner.component.html',
  styleUrls: ['./add-home-owner.component.css']
})
export class AddHomeOwnerComponent {

  homeOwner : HomeOwnerModel = new HomeOwnerModel;
  ownerId : string = '';
  existingHouse: boolean = false;
  constructor(private service: CommonServiceService, private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.ownerId = params['ownerId'];
      console.log(this.ownerId); // popular
    }
  );

  if(this.ownerId && this.ownerId.length > 0){
    this.existingHouse = true;
    this.service.fetchHomeOwnerDetails(this.ownerId).subscribe(resp => {
      if(resp.statusCode == 200){
        this.homeOwner = resp.homeOwnerDetails;
      }
      else
        window.alert("Something went wrong when trying to add bew Home, please try again later.");
    });
  }
  }

  addHomeOwner(){
    console.log('add clicked ',this.homeOwner.dob);
    this.service.addHouseOwners(this.homeOwner).subscribe(resp => {
      if(resp.statusCode == 200){
        if(!this.existingHouse)
          window.alert("Home Owner has been added, Home Owner Id is : "+resp.id);
        else
          window.alert("Home Owner with id : "+resp.id+" has been updated");
        this.router.navigate(["home"]);
      }
      else
        window.alert("Something went wrong when trying to add Agent, please try again later.");
    });
  }

  clearDetails(){
    
  }
}
