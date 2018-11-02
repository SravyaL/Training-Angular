package in.techpinnacle.bsm.dao;

import in.techpinnacle.bsm.dto.Book;
import in.techpinnacle.bsm.dto.Zonar;
import in.techpinnacle.bsm.exception.BookStoreException;
import in.techpinnacle.bsm.util.ConnectionProvider;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class BookDAOJDBCImpl implements IBookDAO {

	ConnectionProvider conProvider;
	Logger log;

	public BookDAOJDBCImpl() throws BookStoreException {
		log = Logger.getLogger("dao");

		try {
			conProvider = ConnectionProvider.getInstance();
		} catch (ClassNotFoundException | IOException exp) {
			log.error(exp);
			throw new BookStoreException("Database is not reachable");
		}
	}

	@Override
	public String add(Book book) throws BookStoreException {
		String bcode = null;
		if (book != null) {
			try (Connection con = conProvider.getConnection();
					PreparedStatement pInsert = con
							.prepareStatement(IQueryMapper.ADD_BOOK_QRY)) {

				pInsert.setString(1, book.getBcode());
				pInsert.setString(2, book.getTitle());
				pInsert.setDouble(3, book.getPrice());
				pInsert.setInt(4, book.getVolume());
				pInsert.setDate(5, Date.valueOf(book.getPublishDate()));
				pInsert.setString(6, String.valueOf(book.getZonar()));

				int rowCount = pInsert.executeUpdate();

				if (rowCount > 0) {
					bcode = book.getBcode();
				}
			} catch (SQLException exp) {
				log.error(exp);
				throw new BookStoreException("Book is not inserted");
			}
		}
		return bcode;
	}

	@Override
	public boolean delete(String bcode) throws BookStoreException {
		boolean isDone = false;

		try (Connection con = conProvider.getConnection();
				PreparedStatement pDelete = con
						.prepareStatement(IQueryMapper.DEL_BOOK_QRY)) {

			pDelete.setString(1, bcode);

			int rowCount = pDelete.executeUpdate();

			if (rowCount > 0) {
				isDone = true;
			}
		} catch (SQLException exp) {
			log.error(exp);
			throw new BookStoreException("Book is not inserted");
		}

		return isDone;
	}

	@Override
	public Book get(String bcode) throws BookStoreException {
		Book book=null;
		try (Connection con = conProvider.getConnection();
				PreparedStatement pSelect = con
						.prepareStatement(IQueryMapper.GET_BOOK_QRY)) {

			pSelect.setString(1, bcode);

			ResultSet rs = pSelect.executeQuery();
			
			if(rs.next()){
				book = new Book();
				book.setBcode(rs.getString("bcode"));
				book.setTitle(rs.getString("title"));
				book.setPrice(rs.getDouble("price"));
				book.setVolume(rs.getInt("vol"));
				book.setPublishDate(rs.getDate("pdate").toLocalDate());
				book.setZonar(Zonar.valueOf(rs.getString("zonar")));
			}
			
		} catch (SQLException exp) {
			log.error(exp);
			throw new BookStoreException("Book is not inserted");
		}		
		return book;
	}

	@Override
	public List<Book> getAll() throws BookStoreException {
		List<Book> books=null;
		try (Connection con = conProvider.getConnection();
				PreparedStatement pSelect = con
						.prepareStatement(IQueryMapper.GET_ALL_BOOKS_QRY)) {

			ResultSet rs = pSelect.executeQuery();
			
			books = new ArrayList<Book>();
			
			while(rs.next()){
				Book book = new Book();
				book.setBcode(rs.getString("bcode"));
				book.setTitle(rs.getString("title"));
				book.setPrice(rs.getDouble("price"));
				book.setVolume(rs.getInt("vol"));
				book.setPublishDate(rs.getDate("pdate").toLocalDate());
				book.setZonar(Zonar.valueOf(rs.getString("zonar")));
				books.add(book);
			}
			
		} catch (SQLException exp) {
			log.error(exp);
			throw new BookStoreException("Book is not inserted");
		}		
		return books;	
	}

	@Override
	public boolean update(Book book) throws BookStoreException {
		boolean isDone = false;
		if (book != null) {
			try (Connection con = conProvider.getConnection();
					PreparedStatement pUpdate = con
							.prepareStatement(IQueryMapper.MODIFY_BOOK_QRY)) {

				pUpdate.setString(6, book.getBcode());
				pUpdate.setString(1, book.getTitle());
				pUpdate.setDouble(2, book.getPrice());
				pUpdate.setInt(3, book.getVolume());
				pUpdate.setDate(4, Date.valueOf(book.getPublishDate()));
				pUpdate.setString(5, String.valueOf(book.getZonar()));

				int rowCount = pUpdate.executeUpdate();

				if (rowCount > 0) {
					isDone = true;
				}
			} catch (SQLException exp) {
				log.error(exp);
				throw new BookStoreException("Book is not inserted");
			}
		}
		return isDone;
	}
}
