import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from 'src/app/model/ibook';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService:BookService,
    private router:Router) {

   }

  ngOnInit(): void {
  }

  createBook(){
    let book:IBook = this.bookForm.value
    this.bookService.createBook(book).subscribe( () => {
      alert('Tạo mới thành công');
      
      this.bookForm.reset();
      this.router.navigateByUrl('');
    },e=>{
      alert('Tạo mới thất bại')
    })
  }
}
