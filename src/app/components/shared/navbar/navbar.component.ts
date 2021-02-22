// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router,
    private portFolioSetvice: PortfolioService
  ) { }

  ngOnInit(): void {
  }
 
  buscar($event) {
    // console.log(  $event);
    this.onEnter.emit($event);
    // this.onEnter.emit($event);
  }


}
