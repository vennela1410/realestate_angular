import { AddressModel } from "./address-model.model";

export class HouseModel {
    houseOwner: string = '';
    houseType: string = '';
    houseRate: string = '';
    floors : number = 0;
    floorSpace : string = '';
    bedRoomCount: number = 0;
    totalbaths: string = '';
    availabilityStatus : string = 'available';
    areaCovered: string = '';
    builtYear: number = 1900;
    description: string = '';
    address: AddressModel = new AddressModel;
    agentId : number = 0;
    id: number = 0;
    

}
