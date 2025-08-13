const API_BASE = "http://localhost:8080/students";

export async function getStudents() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function getStudentById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function createStudent(student) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}
export async function deleteStudent(id) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}
