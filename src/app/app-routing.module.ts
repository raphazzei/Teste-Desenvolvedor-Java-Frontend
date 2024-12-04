import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferirComponent } from './transferir/transferir.component';

const routes: Routes = [
  { path: 'transferir', component: TransferirComponent },
  { path: '', redirectTo: '/transferir', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
