# 📌 프로젝트 이름 및 설명
Todo_list

- 간단한 할 일 목록을 만들고 관리할 수 있는 Todo List 웹 애플리케이션.

## 폴더 구조
```
TODO-LIST/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx # 상단 헤더 UI
│ │ ├── TodoEditor.jsx # 입력 폼 컴포넌트
│ │ ├── TodoList.jsx # 할 일 카드 렌더링
│ │ ├── Header.css # Header 스타일
│ │ ├── TodoEditor.css # Editor 스타일
│ │ ├── TodoList.css # List 스타일
│ ├── App.jsx # 앱 전체 로직 및 상태 관리
│ ├── main.jsx # 엔트리 포인트
│ └── index.css # 공통 스타일
├── package.json
└── vite.config.js
```
## 제작 기간
2025.07.14 ~ 2025.07.29

## 🔍 주요 기능

- 메인 페이지: Todo 입력, 리스트 출력

- ✅ 새로운 할 일 추가 기능
- 📝 제목과 내용 입력 가능
- 🗂️ 할 일 카드 형식으로 리스트 확인
- ❌ 삭제 버튼을 통한 항목 제거
- ✅ 완료 상태 표현

## 시연 영상

![Image](https://github.com/user-attachments/assets/50a9e95d-d812-42b1-8283-a6a4f45d22a4)
  
## ✔️ 리팩토링 시 추가 필요 구성
- 모니터 크기에 따른 Todo 카드 사이즈 최적화 -> 

※ 노트북 모니터(14인치 그램)엔 Todo card 사이즈가 맞으나
<img width="956" height="469" alt="Image" src="https://github.com/user-attachments/assets/21b872e5-2abc-48c2-9e0d-a6f581a59a01" />

-> 와이드 모니터의 경우 Todo 카드 사이즈가 안맞는 경우 발생
 <img width="852" height="345" alt="Image" src="https://github.com/user-attachments/assets/a0f95303-27a8-4815-af10-4b64397c1246" />

++ Todo-card 클릭 시 수정 창 따로 구현 필요

--> Todo card 2025/08/02 사이즈 최적화 완료.
<img width="869" height="362" alt="Image" src="https://github.com/user-attachments/assets/e0ff708e-8efa-4b7f-9d2c-c72dd610dd70" />
## ✔️ 차후 프로젝트 진행 시 개선 사항
- FE, BE Architecture 확립
- 백엔드 연동

## 🛠 사용 기술 스택
- <img src="https://img.shields.io/badge/Html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"><img src="https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=CSS&logoColor=white"><img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">  

## 🛠 설치 및 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/Zpark99/todo-list-app

# 2. 프로젝트 폴더 이동
cd Todo-list

# 3. 패키지 설치
npm install

# 4. 로컬 서버 실행
npm run dev

## 💻 배포 관련

> 향후 배포 예정, 현재는 로컬 서버로 실행 가능

## 👨🏿‍🔧수정 사항 

++ 2025/08/06 git repository 재 생성 todo-list(삭제 예정) -> todo-list-app
repository 경로 설정 잘못 (todo-list가 아닌 폴더, 파일까지 경로로 지정해버림)

++ Todo card 2025/08/02 사이즈 최적화 완료.
++ 다음 프로젝트 진행 예정
