package com.yonam.Test;
import com.yonam.Test.StudentId;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
public class StudentStorage {
	private static final List<StudentId> student = new ArrayList<>();
	private static final AtomicLong Seq = new AtomicLong(1);
	
	public static synchronized List<StudentId> getAllStudent(){
		return new ArrayList<>(student);
		
}


	public static synchronized StudentId addStudent( int age,String major,String name,String gender,String group) {
		StudentId stid = new StudentId(Seq.getAndIncrement(),age,major,name,gender,group);
		student.add(stid);
		return stid;

	}
	public  static synchronized boolean deleteStudent( long id) {
		return student.removeIf(stid->stid.getId()==id);
	}
	public static synchronized StudentId updateStudent(
	        long id,
	        Integer newAge,      // null 허용(부분수정)
	        String newMajor,
	        String newName,
	        String newGender,
	        String newGroup
	) {
	    for (StudentId stid : student) { // 리스트 이름 확인!
	        if (stid.getId() == id) {

	            if (newAge != null) {
	                stid.setAge(newAge);
	            }
	            if (newMajor != null && !newMajor.trim().isEmpty()) {
	                stid.setMajor(newMajor);
	            }
	            if (newName != null && !newName.trim().isEmpty()) {
	                stid.setName(newName);
	            }
	            if (newGender != null && !newGender.trim().isEmpty()) {
	                stid.setGender(newGender);
	            }
	            if (newGroup != null && !newGroup.trim().isEmpty()) {
	                stid.setGroup(newGroup);
	            }
	            return stid;
	        }
	    }
	    return null; // 해당 id 없음
	}
	public static synchronized StudentId getStudentById(long id) {
	    for (StudentId s : student) {
	        if (s.getId() == id) return s;
	    }
	    return null; // 없으면 null
	}

	

}
