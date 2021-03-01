import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  contact: Contact = {
    name: "",
    email: "",
    phone: "",
    message:  ""

  };

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
  }

  enviarMensaje() {
    console.table(this.contact);
    this.portfolioService.enviarMensaje(this.contact);
  }

}
