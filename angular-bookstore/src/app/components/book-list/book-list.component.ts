import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book.model';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  currentCategoryId :  number;
  // books: Book[]= [
  //   {
  //     sku : "text-01",
  //     name: "C++ crash course",
  //     description: "about c++",
  //     unitPrice: 100,
  //     imageUrl: "#",
  //     active: true,
  //     unitsInStock: 10,
  //     createdOn: new Date() ,
  //     updatedOn: null
  //   },
  //   {
  //     sku : "text-02",
  //     name: "C++ crash course",
  //     description: "about c++",
  //     unitPrice: 100,
  //     imageUrl: "#",
  //     active: true,
  //     unitsInStock: 10,
  //     createdOn: new Date() ,
  //     updatedOn: null
  //   },
  //   {
  //     sku : "text-03",
  //     name: "C++ crash course",
  //     description: "about c++",
  //     unitPrice: 100,
  //     imageUrl: "#",
  //     active: true,
  //     unitsInStock: 10,
  //     createdOn: new Date() ,
  //     updatedOn: null
  //   }
  // ];

  books: Book[];
  constructor(private bookService: BookService,
        private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.listBooks();
    this.routes.paramMap.subscribe(
      () => {
        this.listBooks();
      }
    );
  }

  listBooks(){
    const hasCategoryId : boolean = this.routes.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId =  +this.routes.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 1;
    }
    this.bookService.getBooks(this.currentCategoryId).subscribe(bookData => {
      this.books = bookData;
    })
  }

}
