package com.cts.ca.dao;

import java.util.List;

import com.cts.ca.dto.Contact;
import com.cts.ca.exception.ContactException;

public interface IContactDao {
	public boolean add(Contact contact) throws ContactException;

	public boolean remove(int contId) throws ContactException;

	public Contact get(int contId) throws ContactException;

	public List<Contact> getAll() throws ContactException;
}
