import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: Portfolio[] = [

    {
      id: 4,
      titulo: 'Clon de facebook con bootstrap',
      descripcion: 'Clon de red social facebook realizada con bootstrap',
      img: 'assets/images/clon-facebook-min.jpeg',
      ruta: 'https://grgrimales.github.io/maquetacion-red-social/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css', 'bootstrap']

    },

    {
      id: 2,
      titulo: 'Juego Blackjack',
      descripcion: 'Divertido juego de blackjack hecho con javascript.',
      img: 'assets/images/blackjack-min.png',
      ruta: 'https://grgrimales.github.io/Blackjack/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css']

    },
    {
      id: 7,
      titulo: 'Heroes App',
      descripcion: 'Aplicación de gestión de heroes con Angular',
      img: 'assets/images/heroes-app-min.jpeg',
      ruta: 'https://guzmandata.github.io/heroes-app/heroes',
      tecnologias: ['webpack', 'Javascript', 'html', 'css', 'bootstrap']

    },
    {
      id: 3,
      titulo: 'Portafolio con bootstrap',
      descripcion: 'Compoenntes para la construcción de un portafolio hecho con bootstrap.',
      img: 'assets/images/portafolio-min.jpeg',
      ruta: 'https://grgrimales.github.io/Portafolio/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css', 'bootstrap']

    },
    
    {
      id: 1,
      titulo: 'Lista de tareas',
      descripcion: "Aplicación para gestionar una “lista de tareas”.",
      img: 'assets/images/todo-min.jpeg',
      ruta: 'https://guzmandata.github.io/todo/',
      tecnologias: ['Javascript', 'html', 'css']
    },

    {
      id: 5,
      titulo: 'Maquetación css - 1 ',
      descripcion: 'Primer proyecto de maquetación web del master css',
      img: 'assets/images/master-css-1-min.jpeg',
      ruta: 'https://grgrimales.github.io/maquetacion-web/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css', 'bootstrap']

    },
    {
      id: 6,
      titulo: 'Maquetación css - 2',
      descripcion: 'Segundo proyecto de maquetación web del master css',
      img: 'assets/images/master-css-2-min.jpeg',
      ruta: 'https://grgrimales.github.io/maquetacion-web-2/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css', 'bootstrap']

    }

  ]

  constructor() { }

  getPortfolio() {
    return this.portfolioData;
  }
}


export interface Portfolio {
  id: number,
  titulo: string,
  img: string,
  descripcion: string,
  ruta: string,
  tecnologias: string[]

};