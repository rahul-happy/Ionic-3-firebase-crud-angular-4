import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryPage } from './enquiry';

@NgModule({
  declarations: [
    EnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryPage),
  ],
  exports: [
    EnquiryPage
  ]
})
export class EnquiryPageModule {}
