package com.cts.ca.service;

import java.util.List;

import com.cts.ca.dto.Contact;
import com.cts.ca.exception.ContactException;

public interface IContactService {
	public boolean add(Contact contact)throws ContactException;
	public boolean remove(int contid)throws ContactException;
	public Contact get(int ContId) throws ContactException;
	public List<Contact> getAll() throws ContactException;
}
