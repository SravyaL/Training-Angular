package com.cts.ca.ui;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

import org.apache.log4j.PropertyConfigurator;

import com.cts.ca.dto.Category;
import com.cts.ca.dto.Contact;
import com.cts.ca.dto.Gender;
import com.cts.ca.exception.ContactException;
import com.cts.ca.service.ContactServiceImpl;
import com.cts.ca.service.IContactService;

public class ContactApp {

	static IContactService service;
	static Scanner scan;

	public static void main(String[] args) {
		try {
			service = new ContactServiceImpl();
			System.out.println("Service Started!");
		} catch (ContactException exp) {
			System.err.println(exp.getMessage());
			System.exit(0);
		}

		PropertyConfigurator.configure("resources/log4j.properties");
		UserMenu choice = null;
		scan = new Scanner(System.in);

		while (choice != UserMenu.QUIT) {

			System.out.println("********* CONTACT BOOK **********");
			System.out.println("CHOICE\t MENU");
			System.out.println("==========================");
			for (UserMenu menuItem : UserMenu.values()) {
				System.out.println(menuItem.ordinal() + "\t" + menuItem.name());
			}

			System.out.println("Enter Choice: ");
			int ordinal = scan.nextInt();

			if (ordinal < 0 || ordinal > UserMenu.QUIT.ordinal()) {
				System.err.println("Invalid Choice...");
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
			case DELETE:
				doDelete();
				break;
			case QUIT:
				System.out.println("Thank You!");
				break;
			}
		}
		scan.close();
	}

	public static void doAdd() {
		Contact contact = new Contact();

		System.out.println("Enter First Name: ");
		contact.setFirstName(scan.next());
		System.out.println("Enter Middle name: ");
		contact.setMidName(scan.next());
		System.out.println("Enter Last Name: ");
		contact.setLastName(scan.next());
		System.out.println("Enter Gender(" + Arrays.toString(Gender.values())
				+ "):");
		contact.setGender(Gender.valueOf(scan.next().toUpperCase()));
		System.out.println("Enter Mobile #1: ");
		contact.setMobileNumber1(scan.next());
		System.out.println("Enter Mobile #2: ");
		contact.setMobileNumber2(scan.next());
		System.out.println("Enter Official email Id: ");
		contact.setOfficialEmail((scan.next()));
		System.out.println("Enter Home email Id: ");
		contact.setHomeEmail((scan.next()));
		System.out.println("Enter Category("
				+ Arrays.toString(Category.values()) + "):");
		contact.setCategory(Category.valueOf(scan.next().toUpperCase()));
		System.out.println("Enter Organization: ");
		contact.setOrganization(scan.next());
		System.out.println("Enter Designation: ");
		contact.setDesignation((scan.next()));

		try {
			boolean isSuccessful = service.add(contact);
			if (isSuccessful)
				System.out.println("Contact successfully added!");
			else
				System.out.println("Contact could not be added!");
		} catch (ContactException exp) {
			System.err.println(exp.getMessage());
		}
	}

	public static void doList() {
		try {
			List<Contact> contacts = service.getAll();
			for (Contact contact : contacts) {
				System.out.println(contact);
			}
		} catch (ContactException exp) {
			System.err.println(exp.getMessage());
		}
	}

	public static void doSearch() {
		System.out.print("Enter Contact Id: ");
		int contId = scan.nextInt();
		try {
			Contact contact = service.get(contId);
			if (contact == null) {
				System.out.println("Contact Not Found!");
			} else {
				System.out.println(contact);
			}
		} catch (ContactException exp) {
			System.err.println(exp.getMessage());
		}
	}

	

	public static void doDelete() {
		try {
			System.out.println("Enter ContactId: ");
			int contId = scan.nextInt();
			Contact contact = service.get(contId);
			if (contact == null) {
				System.out.println("Contact Not Found!");
			} else {
				boolean isSuccessful = service.remove(contact.getContId());
				if (isSuccessful)
					System.out.println("Contact deleted!");
				else
					System.out.println("Contact could not be deleted!");
			}
		} catch (ContactException exp) {
			System.out.println(exp.getMessage());
		}
	}

}
