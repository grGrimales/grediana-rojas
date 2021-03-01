import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EducationComponent } from './components/education/education.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const ROUTES: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'aboutMe' },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'contacts', component: ContactsComponent }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

