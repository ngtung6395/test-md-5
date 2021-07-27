import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IBook } from 'src/app/model/ibook';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
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

  delete(){
    this.bookService.deleteBook(this.id).subscribe(()=>{
      alert('Xóa thành công');
      this.router.navigateByUrl('')
    })
  }
  
}
