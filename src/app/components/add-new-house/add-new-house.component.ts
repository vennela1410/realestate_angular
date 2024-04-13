import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseModel } from 'src/app/models/house-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-add-new-house',
  templateUrl: './add-new-house.component.html',
  styleUrls: ['./add-new-house.component.css']
})
export class AddNewHouseComponent implements OnInit{
  
  homeID: any;
  newHouse: HouseModel = new HouseModel;
  existingHouse : boolean = false;
  
  constructor(private service: CommonServiceService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.homeID = params['homeId'];
      console.log(this.homeID); // popular
    }
  );

  if(this.homeID && this.homeID.length > 0){
    this.existingHouse = true;
    this.service.fetchHomeDetails(this.homeID).subscribe(resp => {
      if(resp.statusCode == 200){
        this.newHouse = resp.homeDetails;
      }
      else
        window.alert("Something went wrong when trying to add bew Home, please try again later.");
    });
  }
  }

  addNewHouse() {
    console.log('add clicked ',this.newHouse.houseType);
    this.service.saveorUpdateHome(this.newHouse).subscribe(resp => {
      if(resp.statusCode == 200){
        if(this.existingHouse){
          window.alert("Details of Home with Id : "+resp.id+" has been updated.");
        }else{
        window.alert("Home has been added, Home Id is : "+resp.id);
      }
        this.router.navigate(["home"]);
      }
      else
        window.alert("Something went wrong when trying to add bew Home, please try again later.");
    });
  }
  clearHouseDetails() {
    console.log('clear clicked');
    this.newHouse = new HouseModel;
  }

  deleteHouseDetails(){
    this.service.deleteHome(this.newHouse).subscribe(resp => {
      if(resp.statusCode == 200){
        if(this.existingHouse){
          window.alert("Details of Home with Id : "+this.newHouse.id+" has been deleted.");
        }
        this.router.navigate(["home"]);
      }
      else
        window.alert("Something went wrong when trying to add bew Home, please try again later.");
    });
  }
}
