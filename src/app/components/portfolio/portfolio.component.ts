import { Component, OnInit } from '@angular/core';
import { Portfolio, PortfolioService } from '../../services/portfolio.service';

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

}
