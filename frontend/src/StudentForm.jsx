import { useState, useEffect } from "react";

export default function StudentForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    major: "",
    gender: "",
    group: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if (!form.name.trim() || !form.major.trim() || !String(form.age).trim()) {
  alert("이름, 학년, 전공은 반드시 입력하세요.");
  return;
}

    onSubmit(form);
    setForm({ name: "", age: "", major: "", gender: "", group: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <label>이름</label>
      <input name="name" value={form.name} onChange={handleChange} />
      <label>학년</label>
      <input name="age" value={form.age} onChange={handleChange} />
      <label>전공</label>
      <input name="major" value={form.major} onChange={handleChange} />
      <label>성별</label>
      <input name="gender" value={form.gender} onChange={handleChange} />
      <label>그룹</label>
      <input name="group" value={form.group} onChange={handleChange} />
      <button type="submit">{initialData ? "수정" : "등록"}</button>
    </form>
  );
}
