import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../../services/data-api.service";
import { Book } from "../../models/book";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
    
  }

  getListBooks() {
    
  }
}
