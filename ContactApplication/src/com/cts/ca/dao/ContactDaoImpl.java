package com.cts.ca.dao;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import com.cts.ca.dto.Contact;
import com.cts.ca.exceptions.ContactException;

public class ContactDaoImpl implements ContactDao {
	private List<Contact> contactList;
	private File DATA_FILE = new File("contactList.data");

	@SuppressWarnings("unchecked")
	public ContactDaoImpl() throws ContactException {
		if (!DATA_FILE.exists()) {
			contactList = new ArrayList<>();
		} else {
			try(ObjectInputStream in= new ObjectInputStream(new FileInputStream(DATA_FILE));) {
				contactList = (ArrayList<Contact>) in.readObject();
			} catch (IOException e) {
				throw new ContactException("Data file could not be accessed! " + e.getMessage());
			} catch (ClassNotFoundException e) {
				throw new ContactException("Something is seriously wrong dude!");
			} 
		}
	}

	public void saveFile() throws ContactException {
		ObjectOutputStream out = null;
		try {
			out = new ObjectOutputStream(new FileOutputStream(DATA_FILE));
			out.writeObject(contactList);
		} catch (IOException e) {
			throw new ContactException("Data file could not be accessed "+e.getMessage());
		} finally {
			try {
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public int indexOf(Contact contact) {
		int index = -1;
		if (contactList != null) {
			for (Contact contactTemp : contactList) {
				if (contactTemp.getContId() == contact.getContId()) {
					index = contactList.indexOf(contactTemp);
					break;
				}
			}
		}
		return index;
	}

	@Override
	public boolean add(Contact contact) throws ContactException {
		boolean result = false;
		if (contactList != null && contact != null) {
			contactList.add(contact);
			saveFile();
			result = true;
		}
		return result;
	}

	@Override
	public boolean remove(Contact contact) throws ContactException {
		boolean result = false;
		if (contactList != null && contact != null) {
			int index = indexOf(contact);
			if (index > -1) {
				contactList.remove(index);
				saveFile();
				result = true;
			}
		}
		return result;
	}

	@Override
	public boolean update(Contact contact) throws ContactException {
		boolean result = false;
		if (contactList != null && contact != null) {
			int index = indexOf(contact);
			if (index > -1) {
				contactList.set(index, contact);
				saveFile();
				result = true;
			}
		}
		return result;
	}

	@Override
	public List<Contact> getAll() {
		return contactList;
	}
	
	@Override
	public Contact get(int contId) throws ContactException {
		Contact contact = null;
		if (contactList != null) {
			for (Contact contactTemp : contactList) {
				if (contactTemp.getContId()== contId) {
					contact = contactTemp;
					break;
				}
			}
		}
		return contact;
	}
}
