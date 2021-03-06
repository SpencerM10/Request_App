import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PayWithRequestComponent } from './pay-with-request/pay-with-request.component';
import { ContactComponent } from './contact/contact.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { UtilModule } from './util/util.module';
import { InvoicesModule } from './invoices/invoices.module';

import { LedgerDialogComponent } from './util/dialogs/ledger-dialog.component';
import { PayDialogComponent } from './util/dialogs/pay-dialog.component';
import { SubtractDialogComponent } from './util/dialogs/subtract-dialog.component';
import { AdditionalDialogComponent } from './util/dialogs/additional-dialog.component';
import { RefundDialogComponent } from './util/dialogs/refund-dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    UtilModule,
    InvoicesModule,

    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PayWithRequestComponent,
    ContactComponent,

    LedgerDialogComponent,
    PayDialogComponent,
    SubtractDialogComponent,
    AdditionalDialogComponent,
    RefundDialogComponent
  ],
  entryComponents: [
    LedgerDialogComponent,
    PayDialogComponent,
    SubtractDialogComponent,
    AdditionalDialogComponent,
    RefundDialogComponent
  ],
  providers: [
    UtilModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
