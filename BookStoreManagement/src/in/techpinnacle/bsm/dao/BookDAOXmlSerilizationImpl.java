package in.techpinnacle.bsm.dao;

import in.techpinnacle.bsm.dto.Book;
import in.techpinnacle.bsm.exception.BookStoreException;

import java.beans.XMLDecoder;
import java.beans.XMLEncoder;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.apache.log4j.Logger;

public class BookDAOXmlSerilizationImpl implements IBookDAO {

	public static final String DATA_STORE_FILE_NAME = "./bookstore.xml";

	private Map<String, Book> books;
	private Logger logger = Logger.getLogger("dao");

	public BookDAOXmlSerilizationImpl() throws BookStoreException {
		File file = new File(DATA_STORE_FILE_NAME);

		if (!file.exists()) {
			books = new TreeMap<String, Book>();
			logger.info("books map is newly instantiated");
		} else {

			try (XMLDecoder decoder = new XMLDecoder(new BufferedInputStream(
					new FileInputStream(DATA_STORE_FILE_NAME)));) {
				Object obj = decoder.readObject();
				if (obj instanceof Map) {
					books = (Map<String, Book>) obj;
					logger.info("books successfully loaded");
				} else {
					throw new BookStoreException("Not a valid DataStore");
				}

			} catch (IOException exp) {
				logger.error(exp);
				throw new BookStoreException("Loading Data Failed");
			}
		}
	}

	@Override
	public String add(Book book) throws BookStoreException {
		String bcode = null;
		if (book != null) {
			bcode = book.getBcode();
			books.put(bcode, book);
			logger.info("Added Book: " + book);
		}
		return bcode;
	}

	@Override
	public boolean delete(String bcode) throws BookStoreException {
		boolean isDone = false;
		if (bcode != null) {
			books.remove(bcode);
			isDone = true;
			logger.info("Deleteded Book with code: " + bcode);
		}
		return isDone;
	}

	@Override
	public Book get(String bcode) throws BookStoreException {
		return books.get(bcode);
	}

	@Override
	public List<Book> getAll() throws BookStoreException {
		return new ArrayList<Book>(books.values());
	}

	@Override
	public boolean update(Book book) throws BookStoreException {
		boolean isDone = false;
		if (book != null) {
			String bcode = book.getBcode();
			books.replace(bcode, book);
			logger.info("Updated Book: " + book);
		}
		return isDone;
	}

	public void save() throws BookStoreException{
		try (XMLEncoder encoder = new XMLEncoder(new BufferedOutputStream(
				new FileOutputStream(DATA_STORE_FILE_NAME)));) {
			encoder.writeObject(books);
			logger.info("Books written to xml file");
		} catch (IOException exp) {
			logger.error(exp);
			throw new BookStoreException("Writing Data Failed");
		}
	}
	@Override
	protected void finalize() throws Throwable {
		save();
	}

}
