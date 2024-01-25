import { Routes } from '@angular/router';
import { MyPollsComponent } from './screens/my-polls/my-polls.component';
import { HomeComponent } from './screens/home/home.component';

export const routes: Routes = [
  {
    path: 'myPolls',
    component: MyPollsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
