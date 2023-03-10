function solution(numbers, target) {
    var answer = 0;
    function getValue(sum, idx){
        if(idx === numbers.length){
            if(sum ===target){
                answer+=1
            }
        }
        else{
        getValue( sum + numbers[idx], idx+1)
        getValue(sum - numbers[idx], idx+1)}
    }
    getValue(0, 0)
    return answer;
}
