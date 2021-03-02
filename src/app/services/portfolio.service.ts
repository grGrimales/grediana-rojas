import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio.interface';
import { portfolioData } from '../data/portfolio.data';
import { AboutMe } from '../interfaces/about.me.interface';
import { aboutMeData } from '../data/aboutMe.data';
import { Contact } from '../interfaces/contact.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: Portfolio[] = portfolioData;
  private abouMe: AboutMe = aboutMeData;

  constructor(private http: HttpClient) { }

  getPortfolio() {
    return this.portfolioData;
  }

  getAboutMe() {
    return this.abouMe;
  }

  getPortFolioByTerm(term) {
    let porfolioToReturn: Portfolio[] = [];


    this.portfolioData.forEach(porfolio => {
      porfolio.labels.forEach (label => {
        if(label.includes(term)) {
          porfolioToReturn.push(porfolio)
        }
      });
    });

    return porfolioToReturn.filter(this.onlyUnique);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  enviarMensaje(contact: Contact):Observable<any>{
    console.table(contact);
    const url = 'https://grediana-back-end.herokuapp.com/api/gredianarojas/contacts/';

    return this.http.post<any>(url, contact);


  }

  




}


