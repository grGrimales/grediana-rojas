import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio.interface';
import { portfolioData } from '../data/portfolio.data';
import { AboutMe } from '../interfaces/about.me.interface';
import { aboutMeData } from '../data/aboutMe.data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: Portfolio[] = portfolioData;
  private abouMe: AboutMe = aboutMeData;

  constructor() { }

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



}


