// 오늘 옆에 있는 친구들과 점심을 같이 먹으려함
// 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕 //후보 메뉴
// 이 메뉴들을 랜덤으로 한개 메뉴를 선택해서 웹 브라우저에 출력

const menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥", "컵라면"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);
