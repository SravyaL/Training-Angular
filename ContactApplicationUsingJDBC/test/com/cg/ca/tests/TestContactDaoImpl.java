package com.cg.ca.tests;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import com.cts.ca.dao.ContactDaoImpl;
import com.cts.ca.dao.IContactDao;
import com.cts.ca.dto.Category;
import com.cts.ca.dto.Contact;
import com.cts.ca.dto.Gender;
import com.cts.ca.exception.ContactException;

public class TestContactDaoImpl {

	IContactDao dao = null;
	
	@Before
	public void setUp() throws Exception {
		dao=new ContactDaoImpl();
	}
	
	@Test
	public void testAddNullContact() {
		try {
			Contact input = null;
			boolean expected = false;
			boolean actual = dao.add(input);
			assertTrue(expected == actual);
		} catch (ContactException e) {
			fail("Did not expect exception");
		}
	}

	@Test
	public void testAddNotNullContact() {
		try {
			Contact input = new Contact();
			input.setFirstName("Mahant");
			input.setMidName("Kartha");;
			input.setLastName("Khurana");
			input.setGender(Gender.MALE);
			input.setCategory(Category.FAMILY);
			input.setMobileNumber1("8089391064");
			input.setMobileNumber2("9895513373");
			input.setOfficialEmail("vichu1711@gmail.com");
			input.setHomeEmail("ppshiju_1@gmail.com");
			input.setOrganization("INFOSYS");
			input.setDesignation("SYSTEMS_ENGG");
			boolean expected = true;
			boolean actual = dao.add(input);
			assertTrue(expected == actual);
		} catch (ContactException e) {
			fail("Failed to Add new Student Exception " + e);
		}
	}

	@Test(expected=Exception.class)
	public void testAddNotNullContactWithInsufficientData() throws ContactException{
		Contact input = new Contact();
		input.setFirstName("Kathy");
		dao.add(input);
		fail("Expecting an exception");
	}
	
	@Test
	@Ignore("Not yet considered!")
	public void testMapRow() {
		fail("Not yet implemented");
	}

	@Test
	@Ignore("Not yet considered!")
	public void testRemove() {
		fail("Not yet implemented");
	}

	@Test
	@Ignore("Not yet considered!")
	public void testUpdate() {
		fail("Not yet implemented");
	}

	@Test
	@Ignore("Not yet considered!")
	public void testGetAll() {
		fail("Not yet implemented");
	}

	@Test
	@Ignore("Not yet considered!")
	public void testGet() {
		fail("Not yet implemented");
	}

}
