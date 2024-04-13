
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid';
import { SearchModel } from 'src/app/models/search-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit{

  searchModel : SearchModel = new SearchModel;
  dataSource : any;
  // private gridApi: any;
  // private gridColumnApi: any;  
  columnDefs = [
		{ headerName: 'House Owner', field: 'houseOwner' },
		{ headerName: 'House type', field: 'houseType' },
		{ headerName: 'Price', field: 'price' }
	];

  columns: string[] = ['houseOwner', 'houseType','price','yearConstructed','floors','floorSpace','bedrooms','bathrooms','address','city','state','zipCode'];
  rowData = [];
  rowModelType = 'infinite';
  defaultPageSize = 10;


  constructor(private service: CommonServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  search(){
 console.log('add clicked ',this.searchModel);
    this.service.searchRecords(this.searchModel).subscribe((resp: { statusCode: number; obj: any; }) => {
      if(resp.statusCode == 200){
        this.rowData = resp.obj;
        this.dataSource = resp.obj;
        if(this.searchModel.condition1 == 'condition1' || this.searchModel.condition1 == 'condition2'){
          this.columns =  ['firstName', 'lastName','houseType','yearConstructed','status','price'];
        }
        else if(this.searchModel.condition1 == 'condition3'){
          this.columns =  ['houseOwner', 'houseType','price','yearConstructed','applianceName','makeYear'];
        }else if(this.searchModel.condition1 == 'condition4' || this.searchModel.condition1 == 'condition7' || this.searchModel.condition1 == 'condition6'){
          this.columns =  ['firstName', 'lastName','price','houseType','yearConstructed','address','city','state','zipCode','status'];
        }else if(this.searchModel.condition1 == 'condition5'){
          this.columns =  ['agentFirstName', 'agentLastName','totalCommission'];
        }else if(this.searchModel.condition1 == 'condition8'){
          this.columns =  ['houseOwner','price','houseType','yearConstructed','address','city','state','zipCode'];
        }else{
          this.columns = ['houseOwner', 'houseType','price','yearConstructed','floors','floorSpace','bedrooms','bathrooms','address','city','state','zipCode'];
        }
      }else
        window.alert("Something went wrong while fetching detail, please try again later");
      
    });
  }

  clearDetails(){
    this.searchModel = new SearchModel;
  }

  // onGridReady(params: any) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  //   this.gridApi.setDatasource(this.dataSource);
  // }

  // dataSource: IDatasource = {
  //   getRows: (params: IGetRowsParams) => {      
  //     this.api.getAllBooks(this.gridApi.paginationGetPageSize(), this.gridApi.paginationGetCurrentPage()).subscribe(response => {
  //       params.successCallback(
  //         response.bookList, response.numberOfItems
  //       );
  //     })
  //   }
  // }

  // onPageSizeChanged(event: any) {
  //   this.gridApi.paginationSetPageSize(Number(event.target.value));
  // }
}
