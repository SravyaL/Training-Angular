package in.techpinnacle.bsm.service;

import in.techpinnacle.bsm.dao.BookDAOJDBCImpl;
import in.techpinnacle.bsm.dao.BookDAOSerilizationImpl;
import in.techpinnacle.bsm.dao.BookDAOXmlSerilizationImpl;
import in.techpinnacle.bsm.dao.IBookDAO;
import in.techpinnacle.bsm.dto.Book;
import in.techpinnacle.bsm.exception.BookStoreException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BookServiceImpl implements IBookService {
	
	private IBookDAO bookDao;

	public BookServiceImpl() throws BookStoreException {
		//bookDao = new BookDAOSerilizationImpl();
		//bookDao = new BookDAOJDBCImpl();
		bookDao = new BookDAOXmlSerilizationImpl();
	}
	
	public boolean isValidBcode(String bcode){
		
		/*
		 * First letter must be capital
		 * Followed by three digits
		 */
		Pattern bcodePattern = Pattern.compile("[A-Z]\\d{3}");
		Matcher bcodeMatcher = bcodePattern.matcher(bcode);
		
		return bcodeMatcher.matches();
	}
	
	public boolean isValidTitle(String title){
		/*
		 * First Letter should be capital
		 * Minimum length is 4 chars
		 * Maximum length is 20 chars.		
		 */
		Pattern titlePattern = Pattern.compile("[A-Z]\\w{3,19}");
		Matcher titleMatcher = titlePattern.matcher(title);
		
		return titleMatcher.matches();
	}
	
	public boolean isValidPrice(double price){
		/*
		 * Price is between 5 and 5000
		 */
		return price>=5 && price<=5000;
	}
	
	public boolean isValidPublishDate(LocalDate publishDate){
		/*
		 * publish date shoudl not be greater than the current today.
		 */
		LocalDate today = LocalDate.now();
		//return publishDate.isBefore(today) || publishDate.equals(today);
		return today.isAfter(publishDate) || publishDate.equals(today);
	}
	
	public boolean isValidBook(Book book) throws BookStoreException{
		boolean isValid=false;
		
		List<String> errMsgs = new ArrayList<String>();
		
		if(!isValidBcode(book.getBcode()))
			errMsgs.add("bcode shoudl start with a capitla followed by 3 digits");
		
		if(!isValidTitle(book.getTitle()))
			errMsgs.add("Title must start with capital and must be between 4 to 20 chars in length");
		
		if(!isValidPrice(book.getPrice()))
			errMsgs.add("Price must be between INR.5 and INR.5000");
		
		if(!isValidPublishDate(book.getPublishDate()))
			errMsgs.add("Publish Date should not be a future date");
		
		if(errMsgs.size()==0)
			isValid=true;
		else
			throw new BookStoreException(errMsgs.toString());
		
		return isValid;
	}


	@Override
	public String add(Book book) throws BookStoreException {
		String bcode=null;
		if(book!=null && isValidBook(book)){
			bcode=bookDao.add(book);
		}
		return bcode;
	}

	@Override
	public boolean delete(String bcode) throws BookStoreException {
		boolean isDone=false;
		if(bcode!=null && isValidBcode(bcode)){
			bookDao.delete(bcode);
		}else{
			throw new BookStoreException("bcdoe shoudl be a capital letter followed by 3 digits");
		}
		return isDone;
	}

	@Override
	public Book get(String bcode) throws BookStoreException {
		return bookDao.get(bcode);
	}

	@Override
	public List<Book> getAll() throws BookStoreException {
		return bookDao.getAll();
	}

	@Override
	public boolean update(Book book) throws BookStoreException {
		boolean isDone = false;
		
		if(book!=null && isValidBook(book)){
			isDone = bookDao.update(book);
		}
		
		return isDone;
	}

	public IBookDAO getDAO(){
		return bookDao;
	}
	
}
