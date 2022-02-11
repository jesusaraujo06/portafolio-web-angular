import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  

  @ViewChild('asTitle') asTitle!: ElementRef;

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
      .type('Jesus Araujo')
      .rest(500)
      .start();
              
  }

}
