import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

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
  books: Book[]=[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this.bookService.getBooks().subscribe(bookData => {
      this.books = bookData;
    })
  }

}
