import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VinjoinComponent} from "./component/vinjoin/vinjoin.component";
import {VinscanComponent} from "./component/vinscan/vinscan.component";
import {VinsearchComponent} from "./component/vinsearch/vinsearch.component";

const routes: Routes = [
  {
    path: '',
    component: VinjoinComponent
  },
  {
    path: 'vinscan',
    component: VinscanComponent
  },
  {
    path: 'vinsearch',
    component: VinsearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
