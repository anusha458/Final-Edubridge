package com.EduBridge;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class LoginModel {
	@Id
	int id;
 

public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
String uname;
  String pwd;
public String getUname() {
	return uname;
}
public void setUname(String uname) {
	this.uname = uname;
}
public String getPwd() {
	return pwd;
}
public void setPwd(String pwd) {
	this.pwd = pwd;
}
public LoginModel(int id, String uname, String pwd) {
	super();
	this.id = id;
	this.uname = uname;
	this.pwd = pwd;
}
}
