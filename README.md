# 🎓 Student Management

## 📌 프로젝트 소개
**Student Management**는 학생 정보를 효율적으로 관리하기 위한 웹 애플리케이션입니다.  
Spring Boot 기반의 **백엔드**와 React 기반의 **프론트엔드**를 사용하여 **학생 등록, 조회, 수정, 삭제(CRUD)** 기능을 제공합니다.  
👉 현재 버전은 **데이터베이스(MySQL) 없이 Java 리스트(List)를 활용한 In-Memory 저장소**로 구현되어 있습니다.

---

## 🛠 기술 스택
### Backend
- Spring Boot 3.x  
- Java Collections (List 기반 In-Memory 저장소)  
- Lombok  
- Spring Web  
- Gradle/Maven  

### Frontend
- React 18  
- JavaScript (ES6+)  
- Axios / Fetch API  
- React Hooks (useState, useEffect)  

---

## 📂 프로젝트 구조
studentManagement
┣ studentManagement-backend # Spring Boot Backend
┃ ┣ controller # REST API 컨트롤러
┃ ┣ service # 비즈니스 로직
┃ ┣ storage # In-Memory 저장소 (List 활용)
┃ ┣ model # 도메인 클래스 (Student 등)
┃ ┗ StudentManagementApplication.java
┗ studentManagement-frontend # React Frontend
┣ components # UI 컴포넌트 (StudentList, StudentForm 등)
┣ services # API 호출 (axios/fetch)
┣ App.js # 라우팅 및 화면 구성
┗ index.js


---

## 📋 주요 기능
### Backend API
| 메서드 | 엔드포인트            | 설명           |
|--------|-----------------------|----------------|
| GET    | `/api/students`       | 학생 전체 조회 |
| GET    | `/api/students/{id}`  | 특정 학생 조회 |
| POST   | `/api/students`       | 학생 등록      |
| PUT    | `/api/students/{id}`  | 학생 수정      |
| DELETE | `/api/students/{id}`  | 학생 삭제      |

👉 모든 데이터는 서버 실행 시 `List<Student>`에 저장되며, 서버가 종료되면 데이터는 초기화됩니다.

### Frontend
- 학생 목록 조회 (테이블 형식)  
- 학생 등록 Form  
- 학생 정보 수정 Form  
- 삭제 버튼 및 알림  
- REST API와 연동  

---

## ⚙️ 실행 방법
### Backend 실행
```bash
cd studentManagement-backend
./gradlew bootRun


cd studentManagement-frontend
npm install
npm start

## 🚀 Postman 테스트 예시

### 1. 학생 등록 (POST)
**URL**
POST http://localhost:8080/api/students

**Body (JSON)**
```json
{
  "name": "홍길동",
  "email": "hong@test.com",
  "major": "컴퓨터공학"
}

2. 학생 전체 조회 (GET)
URL
GET http://localhost:8080/api/students

3. 특정 학생 조회 (GET)
URL
GET http://localhost:8080/api/students/1

4. 학생 수정 (PUT)
URL
PUT http://localhost:8080/api/students/1
Body (JSON)

{
  "name": "홍길동",
  "email": "hong123@test.com",
  "major": "소프트웨어"
}

5. 학생 삭제 (DELETE)
URL
DELETE http://localhost:8080/api/students/1

---

✨ 향후 개선 방향

MySQL & MyBatis 연동 (현재 In-Memory 방식 → DB 저장 방식 확장)

JWT 기반 로그인 및 회원 관리

React Router 기반 학생 상세 페이지

UI 개선 (Material-UI, Tailwind CSS)

테스트 코드 작성 (JUnit, Jest)
