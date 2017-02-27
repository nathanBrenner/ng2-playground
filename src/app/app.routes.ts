import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/constacts.component';

const routes = [
  {path: '', component: HomeComponent},
	{path: 'contacts', component: ContactsComponent}
]

export default RouterModule.forRoot(routes);