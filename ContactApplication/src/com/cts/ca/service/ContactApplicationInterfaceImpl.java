package com.cts.ca.service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.cts.ca.dao.ContactDao;
import com.cts.ca.dao.ContactDaoImpl;
import com.cts.ca.dto.Contact;
import com.cts.ca.exceptions.ContactException;


public class ContactApplicationInterfaceImpl implements
		ContactApplicationInterface {
	private ContactDao dao = null;

	private List<String> validationErrors;

	public ContactApplicationInterfaceImpl() throws ContactException{
		dao = new ContactDaoImpl();
	}

	public boolean isValidContactID(int contId) {
		return contId > 1000 ? true : false;
	}

	public boolean isValidFirstName(String name) {
		Pattern namePattern = Pattern.compile("[A-Z]{1}[a-zA-Z\\s]{3,25}");
		Matcher nameMatcher = namePattern.matcher(name);
		return nameMatcher.matches();
	}
	public boolean isValidName(String name) {
		Pattern namePattern = Pattern.compile("[a-zA-Z\\s]{1,25}");
		Matcher nameMatcher = namePattern.matcher(name);
		return nameMatcher.matches();
	}
	public boolean isValidMobileNumber(String name) {
		Pattern mobilePattern = Pattern.compile("[1-9]{1}[0-9]{9}");
		Matcher mobileMatcher = mobilePattern.matcher(name);
		return mobileMatcher.matches();
	}
	public boolean isValidEmailId(String name) {
		Pattern emailPattern = Pattern.compile("[a-z]+([._]|[a-z]|[0-9])+@[a-z]+.[a-z]+(.[a-z]+)?");
		Matcher emailMatcher = emailPattern.matcher(name);
		return emailMatcher.matches();
	}

	public boolean isValidContact(Contact contact) {
		validationErrors = new ArrayList<>();
		if (contact != null) {
			if (!isValidFirstName((contact.getFirstName()))) {
				validationErrors.add("Invalid First Name");
			}
			if (!isValidName(contact.getMidName())) {
				validationErrors.add("Invalid Middle name");
			}
			if (!isValidName(contact.getLastName())) {
				validationErrors.add("Invalid Last name");
			}
			if (!isValidMobileNumber((contact.getMobileNumber1()))) {
				validationErrors.add("Invalid Mobile Number #1");
			}
			if (!isValidMobileNumber((contact.getMobileNumber2()))) {
				validationErrors.add("Invalid Mobile Number #2");
			}
			if(!isValidEmailId(contact.getOfficialEmail())){
				validationErrors.add("Invalid Office email id");
			}
			if(!isValidEmailId(contact.getHomeEmail())){
				validationErrors.add("Invalid Home email id");
			}
		}
		return validationErrors.size() == 0 ? true : false;

	}

	@Override
	public boolean add(Contact contact) throws ContactException {
		boolean result = false;
		if (isValidContact(contact)) {
			result = dao.add(contact);
		}else{
			throw new ContactException("Can't have Invalid Student!"+validationErrors);
		}
		return result;
	}

	@Override
	public boolean remove(Contact contact) throws ContactException {
		return dao.remove(contact);
	}

	@Override
	public boolean update(Contact contact) throws ContactException {
		boolean result = false;
		if (isValidContact(contact)) {
			result = dao.update(contact);
		}else{
			throw new ContactException("Can't have Invalid Student!"+validationErrors);
		}
		return result;
	}
	@Override
	public Contact get(int contId)throws ContactException{
		return dao.get(contId);
	}

	@Override
	public List<Contact> getAll() {
		return dao.getAll();
	}

	
}
