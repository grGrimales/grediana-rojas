import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../interfaces/about.me.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


 aboutMe: AboutMe;
  progreso: string;
  constructor(private portfolioService: PortfolioService) { 
    
    this.aboutMe = this.portfolioService.getAboutMe();
    
  }


  ngOnInit(): void {




    for (let i = 0; i < 101; i++) {

  
      setTimeout(() => {
    
        this.progreso = `${i}%`;
        
      },10);
    
    }


  }



buscar(termino) {
  
}


}
