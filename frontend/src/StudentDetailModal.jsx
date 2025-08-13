export default function StudentDetailModal({ student, onClose }) {
  if (!student) return null;
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>{student.name} 상세 정보</h3>
      <p>학년: {student.age}</p>
      <p>전공: {student.major}</p>
      <p>성별: {student.gender}</p>
      <p>그룹: {student.group}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}
