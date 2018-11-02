package com.cts.ca.dao;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.cts.ca.dto.Category;
import com.cts.ca.dto.Contact;
import com.cts.ca.dto.Gender;
import com.cts.ca.exception.ContactException;
import com.cts.ca.util.ConnectionProvider;

public class ContactDaoImpl implements IContactDao {

	private Logger classLogger;
	private ConnectionProvider conPro;

	public ContactDaoImpl() throws ContactException {
		classLogger = Logger.getLogger(ContactDaoImpl.class);
		try {
			conPro = ConnectionProvider
					.getInstance("resources/jdbc.properties");
		} catch (ClassNotFoundException | IOException exp) {
			classLogger.error(exp);
			throw new ContactException("Data Access Initiation Failed!");
		}
	}

	public Contact mapRow(ResultSet row) throws ContactException {
		Contact contact = new Contact();
		try {
			contact.setContId(row.getInt("contid"));
			contact.setFirstName(row.getString("firstname"));
			contact.setMidName(row.getString("midname"));
			contact.setLastName(row.getString("lastname"));
			contact.setGender(Gender.valueOf(row.getString("gender")));
			contact.setMobileNumber1(row.getString("mobilenumber1"));
			contact.setMobileNumber2(row.getString("mobilenumber2"));
			contact.setOfficialEmail(row.getString("officialemail"));
			contact.setHomeEmail(row.getString("homeemail"));
			contact.setCategory(Category.valueOf(row.getString("category")));
			contact.setOrganization(row.getString("organization"));
			contact.setDesignation(row.getString("designation"));
		} catch (SQLException exp) {
			classLogger.error(exp);
			throw new ContactException("Failed to retrieve data!");
		}
		return contact;
	}

	@Override
	public boolean add(Contact contact) throws ContactException {
		boolean result = false;
		if (contact != null) {
			try (Connection con = conPro.getConnection();
					PreparedStatement pstInsert = con
					.prepareStatement(IQueryMapper.INSERT_CONT_QRY)) {
				classLogger.debug(contact + "being added!");
				pstInsert.setString(1, contact.getFirstName());
				pstInsert.setString(2, contact.getMidName());
				pstInsert.setString(3, contact.getLastName());
				pstInsert.setString(4, contact.getGender().toString());
				pstInsert.setString(5, contact.getMobileNumber1());
				pstInsert.setString(6, contact.getMobileNumber2());
				pstInsert.setString(7, contact.getOfficialEmail());
				pstInsert.setString(8, contact.getHomeEmail());
				pstInsert.setString(9, contact.getCategory().toString());
				pstInsert.setString(10, contact.getOrganization());
				pstInsert.setString(11, contact.getDesignation());
				classLogger.debug("11 values are added to pst insert");
				int count = pstInsert.executeUpdate();
				if (count > 0) {
					result = true;
				}
			} catch (SQLException exp) {
				classLogger.error(exp);
				throw new ContactException("Failed to add record!");
			}
		}
		return result;
	}

	@Override
	public boolean remove(int contid) throws ContactException {
		boolean result = false;
		try (Connection con = conPro.getConnection();
				PreparedStatement pstDelete = con
				.prepareStatement(IQueryMapper.DELETE_CONT_QRY)) {
			
			pstDelete.setInt(1, contid);
			int count = pstDelete.executeUpdate();
			if (count > 0) {
				result = true;
			}
		} catch (SQLException exp) {
			classLogger.error(exp);
			throw new ContactException("Failed to Delete record!");
		}
		return result;
	}

	@Override
	public List<Contact> getAll() throws ContactException {
		List<Contact> contactsList = new ArrayList<>();
		try (Connection con = conPro.getConnection();
				PreparedStatement pstSelectAll = con
					.prepareStatement(IQueryMapper.SELECT_ALL_CONT_QRY)) {
			
			ResultSet results = pstSelectAll.executeQuery();
			while (results.next()) {
				contactsList.add(mapRow(results));
			}
		} catch (SQLException exp) {
			classLogger.error(exp);
			throw new ContactException("Failed to retreive record!");
		}
		return contactsList;
	}

	@Override
	public Contact get(int contid) throws ContactException {
		Contact contact = null;
		try (Connection con = conPro.getConnection();
				PreparedStatement pstSelectById = con
				.prepareStatement(IQueryMapper.SELECT_CONT_BY_ID_QRY)) {
			
			pstSelectById.setInt(1, contid);
			ResultSet result = pstSelectById.executeQuery();
			if (result.next())
				contact = mapRow(result);
		} catch (SQLException exp) {
			classLogger.error(exp);
			throw new ContactException("Failed to get record!");
		}
		return contact;
	}
}
