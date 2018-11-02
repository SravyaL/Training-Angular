package com.cts.ca.ui;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;

import com.cts.ca.dto.Category;
import com.cts.ca.dto.Contact;
import com.cts.ca.dto.Gender;
import com.cts.ca.exceptions.ContactException;
import com.cts.ca.service.ContactApplicationInterface;
import com.cts.ca.service.ContactApplicationInterfaceImpl;

public class ContactApp {
	static ContactApplicationInterface service;
	static BufferedReader scan;

	public static void main(String[] args) throws ContactException {
		try {
			service = new ContactApplicationInterfaceImpl();
			System.out.println("Service Started!");
		} catch (ContactException e) {
			System.out.println("Service could not be started!");
			System.out.println(e.getMessage());
			System.exit(0);
		}
		UserMenu choice = null;
		scan = new BufferedReader(new InputStreamReader(System.in));
		try {

			while (choice != UserMenu.QUIT) {
				System.out.println("Choice\tMenu Item");
				System.out.println("==========================");
				for (UserMenu menuItem : UserMenu.values()) {
					System.out.println(menuItem.ordinal() + "\t"
							+ menuItem.name());
				}
				System.out.println("Enter Choice: ");
				int ordinal = Integer.parseInt(scan.readLine());
				if (ordinal < 0 || ordinal > UserMenu.QUIT.ordinal()) {
					System.out.println("Invalid Choice...");
					continue;
				}
				choice = UserMenu.values()[ordinal];
				switch (choice) {
				case ADD:
					doAdd();
					break;
				case SEARCH:
					doSearch();
					break;
				case LIST:
					doList();
					break;
				case EDIT:
					doEdit();
					break;
				case DELETE:
					doDelete();
					break;
				case QUIT:
					System.out.println("Thank You! Your data is safe with us!");
					break;
				}
			}
		} catch (IOException e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				scan.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

	public static void doAdd() {
		try {
			Contact contact = new Contact();

			System.out.println("Enter First Name: ");
			contact.setFirstName((scan.readLine()));
			System.out.println("Enter Middle name: ");
			contact.setMidName((scan.readLine()));
			System.out.println("Enter Last Name: ");
			contact.setLastName((scan.readLine()));
			System.out.println("Enter Gender("
					+ Arrays.toString(Gender.values()) + "):");
			contact.setGender(Gender.valueOf(scan.readLine()));
			System.out.println("Enter Mobile #1: ");
			contact.setMobileNumber1(scan.readLine());
			System.out.println("Enter Mobile #2: ");
			contact.setMobileNumber2(scan.readLine());
			System.out.println("Enter Official email Id: ");
			contact.setOfficialEmail((scan.readLine()));
			System.out.println("Enter Home email Id: ");
			contact.setHomeEmail((scan.readLine()));
			System.out.println("Enter Category("
					+ Arrays.toString(Category.values()) + "):");
			contact.setCategory(Category.valueOf(scan.readLine()));
			System.out.println("Enter Organization: ");
			contact.setOrganization(scan.readLine());
			System.out.println("Enter Designation: ");
			contact.setDesignation((scan.readLine()));
			boolean isSuccessful = service.add(contact);
			if (isSuccessful)
				System.out.println("Contact successfully added!");
			else
				System.out.println("Contact could not be added!");
		} catch (ContactException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void doList() {
		List<Contact> contacts = service.getAll();
		for (Contact contact : contacts) {
			System.out.println(contact);
		}

	}

	public static void doSearch() throws ContactException {
		try {
			System.out.print("Enter Contact Id: ");
			int contId = Integer.parseInt(scan.readLine());
			Contact contact = service.get(contId);
			if (contact == null) {
				System.out.println("Contact Not Found!");
			} else {
				System.out.println(contact);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void doEdit() {
		try {
			System.out.println("Enter Contact Id: ");
			int contId = Integer.parseInt(scan.readLine());
			Contact contact = service.get(contId);
			if (contact == null) {
				System.out.println("Contact Not Found!");
			} else {
				System.out.println("Enter First Name: ");
				contact.setFirstName((scan.readLine()));
				System.out.println("Enter Middle name: ");
				contact.setMidName((scan.readLine()));
				System.out.println("Enter Last Name: ");
				contact.setLastName((scan.readLine()));
				System.out.println("Enter Gender("
						+ Arrays.toString(Gender.values()) + "):");
				contact.setGender(Gender.valueOf(scan.readLine()));
				System.out.println("Enter Mobile #1: ");
				contact.setMobileNumber1(scan.readLine());
				System.out.println("Enter Mobile #2: ");
				contact.setMobileNumber2(scan.readLine());
				System.out.println("Enter Official email Id: ");
				contact.setOfficialEmail((scan.readLine()));
				System.out.println("Enter Home email Id: ");
				contact.setHomeEmail((scan.readLine()));
				System.out.println("Enter Category("
						+ Arrays.toString(Category.values()) + "):");
				contact.setCategory(Category.valueOf(scan.readLine()));
				System.out.println("Enter Organization: ");
				contact.setOrganization(scan.readLine());
				System.out.println("Enter Designation: ");
				contact.setDesignation((scan.readLine()));
				boolean isSuccessful = service.update(contact);
				if (isSuccessful)
					System.out.println("Contact successfully Updated!");
				else
					System.out.println("Contact could not be Updated!");
			}
		} catch (ContactException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static void doDelete() {
		try {
			System.out.println("Enter ContactId: ");
			int contId = Integer.parseInt(scan.readLine());
			Contact contact = service.get(contId);
			if (contact == null) {
				System.out.println("Contact Not Found!");
			} else {
				boolean isSuccessful = service.remove(contact);
				if (isSuccessful)
					System.out.println("Contact deleted!");
				else
					System.out.println("Contact could not be deleted!");
			}
		} catch (ContactException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
