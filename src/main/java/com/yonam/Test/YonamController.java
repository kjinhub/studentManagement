package com.yonam.Test;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students") // 공통 prefix
public class YonamController {

    @GetMapping
    public List<StudentId> getAllStudent() {
        return StudentStorage.getAllStudent();
    }
    @GetMapping("/{id}")
    public StudentId getStudentById(@PathVariable long id) {
        return StudentStorage.getStudentById(id); // Storage에서 찾아서 반환
    }

    @PostMapping
    public StudentId addStudent(@RequestBody StudentId student) {
        // Storage가 (int, String, String, String) 시그니처일 때 필드 분해해서 전달
        return StudentStorage.addStudent(
            student.getAge(),
            student.getMajor(),
            student.getName(),
            student.getGender(),
            student.getGroup()

        );
    }

    @PutMapping("/{id}")
    public StudentId updateStudent(@PathVariable long id, @RequestBody StudentId updatedStudent) {
        // Storage의 update 시그니처에 맞춰 필드 분해
        return StudentStorage.updateStudent(
            id,
            updatedStudent.getAge(),
            updatedStudent.getMajor(),
            updatedStudent.getName(),
            updatedStudent.getGender(),
            updatedStudent.getGroup()

        );
    }

    @DeleteMapping("/{id}")
    public boolean deleteStudent(@PathVariable long id) {
        return StudentStorage.deleteStudent(id);
    }

    // 테스트용
    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
