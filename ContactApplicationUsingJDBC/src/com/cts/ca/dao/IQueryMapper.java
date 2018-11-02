package com.cts.ca.dao;

public interface IQueryMapper {

	public static final String INSERT_CONT_QRY = 
			"insert into contacts(contid,firstname,midname,lastname,gender,mobilenumber1,mobilenumber2,officialemail,homeemail,category,organization,designation) values(contidseq.nextval,?,?,?,?,?,?,?,?,?,?,?)";         
	public static final String DELETE_CONT_QRY = 
			"delete from contacts where contid=?";
	public static final String SELECT_CONT_BY_ID_QRY = 
			"select contid,firstname,midname,lastname,gender,mobilenumber1,mobilenumber2,officialemail,homeemail,category,organization,designation from contacts where contid=?";           
	public static final String SELECT_ALL_CONT_QRY = 
			"select contid,firstname,midname,lastname,gender,mobilenumber1,mobilenumber2,officialemail,homeemail,category,organization,designation from contacts";
}
