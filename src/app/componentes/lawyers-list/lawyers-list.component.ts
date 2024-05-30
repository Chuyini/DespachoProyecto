import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { lawyer } from '../../interfaces/lawyer.interface';
import { LawyersService } from '../../services/lawyers.service';


@Component({
  selector: 'app-lawyers-list',
  standalone: true,
  imports: [NgFor, NgIf,CardComponent,NgClass],
  templateUrl: './lawyers-list.component.html',
  styleUrl: './lawyers-list.component.css'
})
export class LawyersListComponent {

  


    constructor(private lawyerService:LawyersService){

      
    }


    
    public get lawyers():lawyer[]{//aqui igualamos la lista con la lista del servicio para trabajarlo
      return (this.lawyerService.getLawyers());
    }
  



}
