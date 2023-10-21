function solution(number, k) {
    const stack = [];
    // 몇개를 제외했는지 기억할 변수 count
    let count = 0;
    
    for(let num of number){
        while(count<k && stack[stack.length-1]<num){
            stack.pop();
            count +=1;
        }
        stack.push(num)
    }
    
    
    while(count<k){
        stack.pop();
        count +=1;
    }
    
    return stack.join('');
}