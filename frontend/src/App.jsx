import { useEffect, useState } from "react";
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "./api";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentDetailModal from "./StudentDetailModal";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("학생 목록 불러오기 실패", error);
    }
  };

  const handleCreateOrUpdate = async (student) => {
    try {
      if (editing) {
        await updateStudent(editing.id, student);
        setEditing(null);
      } else {
        await createStudent(student);
      }
      loadStudents();
    } catch (error) {
      console.error("저장 실패", error);
    }
  };

  const handleSelect = async (id) => {
    try {
      const data = await getStudentById(id);
      setSelected(data);
    } catch (error) {
      console.error("학생 정보 불러오기 실패", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteStudent(id);
      loadStudents();
    } catch (error) {
      console.error("삭제 실패", error);
    }
  };

  return (
    <div className="container">
      <h1>학생 관리</h1>
      <StudentForm onSubmit={handleCreateOrUpdate} initialData={editing} />
      <StudentList
        students={students}
        onEdit={(s) => setEditing(s)}
        onSelect={handleSelect}
        onDelete={handleDelete}
      />
      <StudentDetailModal student={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
