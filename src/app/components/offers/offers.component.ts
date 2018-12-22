import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
}
