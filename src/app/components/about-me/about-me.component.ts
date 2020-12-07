import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  progreso: string;
  constructor() { 







    
  }

  ngOnInit(): void {

    for (let i = 0; i < 101; i++) {

  
      setTimeout(() => {
    
        this.progreso = `${i}%`;
        
      },10);
    
    }


  }






}
