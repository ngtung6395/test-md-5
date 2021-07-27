import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/ibook';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books:Array<IBook> = [];

  sum?:number;

  constructor(private bookSerice: BookService) { }

  ngOnInit(): void {
    this.showAllBook();
  }

  showAllBook(){
    
    this.bookSerice.showAllBook().subscribe(data => {
      this.books = data;
      this.sum = data.length;
     })
  };
}
