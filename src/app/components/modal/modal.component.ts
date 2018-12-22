import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Book } from '../../models/book';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { 

  }
  
  ngOnInit() {
  }

}
