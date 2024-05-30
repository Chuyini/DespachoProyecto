import { Component, Input } from '@angular/core';
import { lawyer } from '../../interfaces/lawyer.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  @Input() public lawyer: lawyer ={
    "name": " Eddy",
    "specialty": "Laboral",
    "description": "Abogado reconocido",
    "image": "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
    "id": 12,
    "hourlyRate":"230xdia",
    "phone":"4445353562"
  };

  public select():void{

    this.lawyer.isSelected=true;

  }
  public UnSelect():void{

    this.lawyer.isSelected=false;

  }
  close(event: Event) {
    event.stopPropagation(); // Evita que el evento de clic se propague al contenedor
    this.lawyer.isSelected = false;
  }

 
}
