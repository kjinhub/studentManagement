package com.yonam.Test;

public class StudentId {
	private long id;
	private int age;
	private String major;
	private String name;
	private String gender;
	private String group ;

	
	public StudentId(long l, int age, String major, String name, String gender ,String group) {
	    this.id = l;
	    this.age = age;
	    this.major = major;
	    this.name = name;
	    this.gender = gender;
	    this.group = group;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getMajor() {
		return major;
	}


	public void setMajor(String major) {
		this.major = major;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getGroup() {
		return group;
	}


	public void setGroup(String group) {
		this.group = group;
	}

	
	
	
}
