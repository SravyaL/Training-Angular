package in.techpinnacle.bsm.service;

import in.techpinnacle.bsm.dto.Book;
import in.techpinnacle.bsm.exception.BookStoreException;

import java.util.List;

public interface IBookService {	
	String add(Book book) throws BookStoreException;
	boolean delete(String bcode)throws BookStoreException;
	Book get(String bcode) throws BookStoreException;;
	List<Book> getAll() throws BookStoreException;;
	boolean update(Book book) throws BookStoreException;;	
}
