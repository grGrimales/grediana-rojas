import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(
    private _portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {

    this.portfolios = this._portfolioService.getPortfolio();
  }


  buscar($event) {

    if($event === '' || $event === undefined) {
      this.portfolios = this._portfolioService.getPortfolio();
      return;
    }
   this.portfolios =  this._portfolioService.getPortFolioByTerm($event);

  }
}
