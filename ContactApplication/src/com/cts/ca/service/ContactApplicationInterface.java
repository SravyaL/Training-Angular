package com.cts.ca.service;

import java.util.List;

import com.cts.ca.dto.Contact;
import com.cts.ca.exceptions.ContactException;

public interface ContactApplicationInterface {
	public boolean add(Contact contact)throws ContactException;
	public boolean remove(Contact student)throws ContactException;
	public Contact get(int ContId) throws ContactException;
	public boolean update(Contact student)throws ContactException;
	public List<Contact> getAll();
}
