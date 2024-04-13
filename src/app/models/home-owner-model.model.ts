import { AddressModel } from "./address-model.model";

export class HomeOwnerModel {

    firstName : string = '';
    lastName : string = '';
    dob: string = '';
    ssn: string = '';
    profession : string = '';
    contact: string = '';
    email : string = '';  
    address : AddressModel = new AddressModel;
}
