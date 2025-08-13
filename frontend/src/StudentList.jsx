export default function StudentList({ students, onEdit, onSelect, onDelete }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>이름</th>
          <th>학년</th>
          <th>전공</th>
          <th>성별</th>
          <th>그룹</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td
              onClick={() => onSelect(s.id)}
              style={{ cursor: "pointer", color: "#004080", fontWeight: "bold" }}
            >
              {s.name}
            </td>
            <td>{s.age}</td>
            <td>{s.major}</td>
            <td>{s.gender}</td>
            <td>{s.group}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(s)}>수정</button>
            </td>
            <td>
              <button className="delete-btn" onClick={() => onDelete(s.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
