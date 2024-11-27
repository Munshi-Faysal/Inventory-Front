import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StoreType } from 'src/app/Models/StoreType';
import { GridHandlerService } from 'src/app/Services/GridHandler.service';
import { HttpClientConnectionService } from 'src/app/Services/HttpClientConnection.service';
// import * as CryptoJS from 'crypto-js';
import * as CryptoJS from 'crypto-js';
import { GridButtonShow, GridCaption, GridDataShow } from 'src/app/Models/GridModels';

@Component({
  selector: 'app-store-type-list',
  templateUrl: './store-type-list.component.html',
  styleUrl: './store-type-list.component.scss'
})
export class StoreTypeListComponent {
  isShow: boolean = true;
  dataList: StoreType[] = [];
  FormData:StoreType = new StoreType();
  ///routerData:any;

  constructor(
    // public service:FloorService,
    private dataService:HttpClientConnectionService,
    private toastr:ToastrService,
    private commonService:GridHandlerService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

   this.getData();
   this.commonService.data$.subscribe(newData => {
    this.edit(newData);
  });

  }
  ShowHideEvent() {

    this.isShow = !this.isShow;

    this.FormData = new StoreType();
  }
  getData = () => {
    this.dataService.GetData("Administrator/GetDropdownData?flag=2").subscribe((data:any)=>{
      this.dataList=data;
      console.log(this.dataList);
      this.sendDataCommonGrid();
    },
    (error:any)=>{
      console.log(error);
      this.toastr.error("failed to Get Data")
    }
    )
  }


  sendDataCommonGrid(){
    this.commonService.dataList=[];
    //Grid Caption 
    this.commonService.caption = new GridCaption();
       this.commonService.caption.caption1="Floor ID";
       this.commonService.caption.caption2="Floor Name";
       this.commonService.caption.caption3="Company ID";
  
      //PermitForShow or Not
      this.commonService.isShowData = new GridDataShow()
       this.commonService.isShowData.caption2=true;


       //Permit For Button Show or Not
       this.commonService.isShowButton =new GridButtonShow()
       this.commonService.isShowButton.button1=true //edit
       this.commonService.isShowButton.button2=true //delete
       this.commonService.isShowButton.button3=true
        this.commonService.isShowButton.button4=false;
      
       //Grid Data 
   for(let item of this.dataList){
  
        this.commonService.dataField.dataField1=item.id;
        this.commonService.dataField.dataField2=item.name;
  
    
  this.commonService.dataList.push(this.commonService.dataField);
  this.commonService.dataList=this.commonService.dataList.map((item,index)=>({ ...item,index:index+1}));
  
   }
  }
  
  edit(selectedRecord:any){
    let data=this.findSelectedItem(selectedRecord.row.data.dataField1);
    if(data !=null || data !=undefined){
      this.FormData=data;
      this.isShow =!this.isShow;
    }
  }
  findSelectedItem(selectedItem:any){
  
   return this.dataList.find(x=>x.id === selectedItem);
  }
}
