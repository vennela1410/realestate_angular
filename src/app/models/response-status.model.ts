import { HomeComponent } from "../components/home/home.component";
import { HomeOwnerModel } from "./home-owner-model.model";
import { HouseModel } from "./house-model.model";

export class ResponseStatus {
    message : string = '';
    statusCode : number = 0;
    id : number = 0;
    obj: any;
    homeDetails: HouseModel = new HouseModel;
    homeOwnerDetails : HomeOwnerModel = new HomeOwnerModel;
}
