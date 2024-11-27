import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxTabsComponent } from 'devextreme-angular';
import { GridHandlerService } from 'src/app/Services/GridHandler.service';
import { HttpClientConnectionService } from 'src/app/Services/HttpClientConnection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.css']
})
export class ButtonControlComponent implements OnInit {

  @Input() isAdd:boolean=false;
  @Input() isEdit:boolean=false;
  @Input() isDelete:boolean=false;
  @Input() isDetails:boolean=false;
  @ViewChild('withText') withText!: DxTabsComponent;

  @ViewChild('withIconAndText') withIconAndText!: DxTabsComponent;

  @ViewChild('withIcon') withIcon!: DxTabsComponent;

  tabsWithText: any[] = [];

  tabsWithIconAndText: any[] = [];

  tabsWithIcon: any[] = [];

  orientations: string[] = ['horizontal', 'vertical'];

  stylingModes: string[] = ['primary', 'secondary'];

  iconPositions: string[] = ['top', 'start', 'end', 'bottom'];

  width = '100%';

  orientation: string = 'horizontal';

  stylingMode: string = 'primary';

  iconPosition: string = 'top';

  showNavButtons = false;

  scrollByContent = false;

  rtlEnabled = false;

  shouldRestrictWidth = true;

  widgetWrapperClasses = {
    'widget-wrapper': false,
    'widget-wrapper-horizontal': true,
    'widget-wrapper-vertical': false,
    'strict-width': false,
    'width': '100%'
  };


  constructor(private dataService: HttpClientConnectionService, private router: Router, public commonService: GridHandlerService) {
   
  }
  ngOnInit(): void {
  }
 


  selectTab(tab: string): void {
    debugger;
    if (tab == 'Save' || tab == 'Delete' ){
      if (tab == 'Save') {
        this.commonService.addNew();

      }else {
        if (this.commonService.checkBoxSelectedData.length > 0) {
          Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete selected record',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              this.commonService.delete();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your record is safe :)',
                'error'
              )
              this.commonService.checkBoxSelectedData = [];
            }
          })
        }
        else{
          Swal.fire({
            icon: 'warning',
            title: 'Please select record to delete',
            showConfirmButton: false,
            timer: 1500 // auto close after 1.5 seconds
          });
        }
        // if (this.commonService.checkBoxSelectedData.length > 0) {
        //   if (confirm("Are you sure to delete selected record(s)?") == true) {
        //     this.commonService.delete();
        //   }

        // } else {
        //   alert("Please select record to delete");
        // }
      }

    } else if(tab =='Details'){
      alert("Please go to List then Select a Record");
    }else {
      
    }

  }


}
