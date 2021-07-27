import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IBook } from 'src/app/model/ibook';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book:IBook = {
    id: 0,
    title: '',
    author:'',
    description: ''
  };

  id:any;
  constructor(private bookService:BookService,
    private activateRoute:ActivatedRoute,
    private router:Router) {
    activateRoute.paramMap.subscribe((param:ParamMap)=>{
      this.id = param.get('id');
      this.getBook(this.id);
   });
  }
  ngOnInit(): void { 
  }

  getBook(id:any){
    this.bookService.findBookById(id).subscribe((data)=>{
      this.book = data;
    });
  }
}
