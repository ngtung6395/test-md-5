import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  bookForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
    

  constructor(private bookService:BookService,
    private activateRoute:ActivatedRoute,
    private router:Router) {
    activateRoute.paramMap.subscribe((param:ParamMap)=>{
      this.getBook(param.get("id"));
    });
    }
  ngOnInit(): void {
  }

  getBook(id: any) {
    this.bookService.findBookById(id).subscribe(data=>{
      console.log(data);
      this.bookForm.setValue(data);
    })
  };

  edit(){
    this.bookService.editBook(this.bookForm.controls['id'].value,this.bookForm.value).subscribe(()=>{
      alert('Sửa thành công');
      this.router.navigateByUrl('');
    }, e => {
      alert('Sửa thất bại');
    })
  }
}

