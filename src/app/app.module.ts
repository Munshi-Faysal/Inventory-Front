// Angular Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { ChatMsgComponent } from './theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ChatUserListComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxListModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxTooltipModule,
  DxTreeViewModule,
  DxDateBoxModule,
  DxTagBoxModule,
  DxSchedulerModule,
  DxLoadPanelModule,
  DevExtremeModule,
  DxAccordionModule,
  DxDropDownBoxModule,
  DxScrollViewModule,
  DxContextMenuModule, 
  DxDrawerModule,
  DxRadioGroupModule,
  DxTabsModule,
  DxChartModule,
  DxActionSheetModule,
  DxFileUploaderModule, 
  DxProgressBarModule,
  DxPopoverModule, 
  DxLoadIndicatorModule,
  DxTabPanelModule,
  DxSortableModule
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreTypeListComponent } from './Components/StoreType/store-type-list/store-type-list.component';
import { StoreTypeFormComponent } from './Components/StoreType/store-type-form/store-type-form.component';
import { CommonDataGridComponent } from './CommonComponents/CommonDataGrid/common-data-grid.component';
import { CommonDataGridWithCheckBoxComponent } from './CommonComponents/CommonDataGridWithCheckBox/common-data-grid-with-check-box.component';
import { ButtonControlComponent } from './CommonComponents/button-control/button-control.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GuestComponent,
    ConfigurationComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    ChatMsgComponent,
    ChatUserListComponent,
    FriendComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
    StoreTypeListComponent,
    StoreTypeFormComponent,
    CommonDataGridComponent,
    CommonDataGridWithCheckBoxComponent,
    ButtonControlComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule, 
     BrowserAnimationsModule,
     SharedModule, 
     FormsModule,
      ReactiveFormsModule,
       BrowserAnimationsModule,
       DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxListModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxTooltipModule,
  DxTreeViewModule,
  DxDateBoxModule,
  DxTagBoxModule,
  DxSchedulerModule,
  DxLoadPanelModule,
  DevExtremeModule,
  DxAccordionModule,
  DxDropDownBoxModule,
  DxScrollViewModule,
  DxContextMenuModule, 
  DxDrawerModule,
  DxRadioGroupModule,
  DxTabsModule,
  DxChartModule,
  DxActionSheetModule,
  DxFileUploaderModule, 
  DxProgressBarModule,
  DxPopoverModule, 
  DxLoadIndicatorModule,
  DxTabPanelModule,
  DxSortableModule,
  HttpClientModule,
  ToastrModule.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
