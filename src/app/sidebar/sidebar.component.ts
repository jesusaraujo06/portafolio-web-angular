import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  
  // Declaración de variables
  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<linkModel> = [
    {
      link: 'https://example.com',
      icon: '<i class="uil uil-youtube"></i>'
    },
    {
      link: 'https://example.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://example.com',
      icon: '<i class="uil uil-github-alt"></i>'
    }
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    // Obtener el elemento, (el target)
    const target = this.asTitle.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    })
    
    writer
      .changeCursorColor('white')
      .type('Jesus Araujo')
      .rest(50000)
      .start();
              
  }

}

class linkModel {
  link: string = "";
  icon: string = "";

  constructor(){
    // this.link = "";
    // this.icon = "";
  }
}
