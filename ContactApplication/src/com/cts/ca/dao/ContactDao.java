package com.cts.ca.dao;

import java.util.List;

import com.cts.ca.dto.Contact;
import com.cts.ca.exceptions.ContactException;

public interface ContactDao {
	public boolean add(Contact contact)throws ContactException;
	public boolean remove(Contact contact)throws ContactException;
	public boolean update(Contact contact)throws ContactException;
	public Contact get(int contId) throws ContactException;
	public List<Contact> getAll();	
}
