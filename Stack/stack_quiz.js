// (,)로만 이루어진 문자열 s가 주어질때
// 올바른 괄호이면 true를 아니면 false

// Stack
// []

// (가 나오면 stack에 push를
// )가 나오면 stack에서 pop을 해주자.
// 최종에 stack의 사이즈가 0인가?

function solution(s) {
  const stack = [];
  for (let x of s) {
    if (x === '(') {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution(')()('));
