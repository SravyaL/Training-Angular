package com.cts.ca.dto;

public class Contact  {
	
	private int contId;
	private String firstName;
	private String midName;
	private String lastName;
	private Gender gender;
	private String mobileNumber1;
	private String mobileNumber2;
	private String officialEmail;
	private String homeEmail;
	private Category category;
	private String Organization;
	private String Designation;

	public Contact() {
		//default constructor
	}

	public void setContId(int contId) {
		this.contId = contId;
	}

	public int getContId() {
		return contId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMidName() {
		return midName;
	}

	public void setMidName(String midName) {
		this.midName = midName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getMobileNumber1() {
		return mobileNumber1;
	}

	public void setMobileNumber1(String mobileNumber1) {
		this.mobileNumber1 = mobileNumber1;
	}

	public String getMobileNumber2() {
		return mobileNumber2;
	}

	public void setMobileNumber2(String mobileNumber2) {
		this.mobileNumber2 = mobileNumber2;
	}

	public String getOfficialEmail() {
		return officialEmail;
	}

	public void setOfficialEmail(String officialEmail) {
		this.officialEmail = officialEmail;
	}

	public String getHomeEmail() {
		return homeEmail;
	}

	public void setHomeEmail(String homeEmail) {
		this.homeEmail = homeEmail;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getOrganization() {
		return Organization;
	}

	public void setOrganization(String organization) {
		Organization = organization;
	}

	public String getDesignation() {
		return Designation;
	}

	public void setDesignation(String designation) {
		Designation = designation;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Contact Id is:\t" + contId + "\n");
		sb.append("First Name :\t" + firstName + "\n");
		sb.append("Middle Name :\t" + midName + "\n");
		sb.append("Last Name :\t" + lastName + "\n");
		sb.append("Gender :\t" + gender + "\n");
		sb.append("Mobile No. 1 :\t" + mobileNumber1 + "\n");
		sb.append("Mobile No. 2 :\t" + mobileNumber2 + "\n");
		sb.append("Office Email :\t" + officialEmail + "\n");
		sb.append("Home Email :\t" + homeEmail + "\n");
		sb.append("Category :\t" + category + "\n");
		sb.append("Organization :\t" + Organization + "\n");
		sb.append("Designation:\t" + Designation + "\n");
		return sb.toString();
	}
}
