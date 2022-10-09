// && = and
// || = or
// === = 같은 값
// !== = 다른 값

// getElementsByClassName 은 한꺼번에 많은 클래스를 가져올때 쓰인다
// querySelector 는 css의 선택자 방식 그대로 사용가능하며, 가장 첫번째 값만 가져온다.
// querySelectorAll 은 css의 선택자 방식 그대로 사용가능하며, 부합하는 모든 값을 가져온다.

// title.addEventListener("mouseenter",handleMouseEnter);
// 이벤트 리스터를 실행할땐 두번째 실행할 함수의()를 입력하면 안된다

/*전역 변수란 함수의 외부에서 선언된 변수를 의미합니다.
전역 변수는 프로그램의 어디에서나 접근할 수 있으며, 프로그램이 종료되어야만 메모리에서 사라집니다.
이러한 전역 변수는 메모리상의 데이터(data) 영역에 저장되며, 직접 초기화하지 않아도 0으로 자동 초기화됩니다.*/

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
  username = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings()
}

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings();
}