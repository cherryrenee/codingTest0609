// 문제 1
//정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ num_list의 길이 ___

// 입출력 예
// num_list	         n	   result
// [2, 1, 6]	     1	     [2]
// [5, 2, 1, 7, 5]	 3	   [5, 2, 1]

// 입출력 예 #1
// [2, 1, 6]의 첫 번째 원소부터 첫 번째 원소까지의 모든 원소는 [2]입니다.

// 입출력 예 #2
// [5, 2, 1, 7, 5]의 첫 번째 원소부터 세 번째 원소까지의 모든 원소는 [5, 2, 1]입니다.

//정답
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

//for문을 사용하였음

// 문제 2
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ 4

// 입출력 예
// num_list         	  n	   result
// [4, 2, 6, 1, 7, 6]   2	  [4, 6, 7]
// [4, 2, 6, 1, 7, 6]	  4	   [4, 7]

// 입출력 예 #1
// [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.

// 입출력 예 #2
// [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.

//정답
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}
//for문에 i를 n씩 증가하도록 하였음

//문제 3
//Hello World!를 출력하시오.

console.log("Hello World!");

// 문제4
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A+B를 출력한다.

console.log(A + B);
