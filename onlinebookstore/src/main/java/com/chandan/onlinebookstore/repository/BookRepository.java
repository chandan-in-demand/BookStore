package com.chandan.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chandan.onlinebookstore.entity.Book;


public interface BookRepository extends JpaRepository<Book, Long>{

}
