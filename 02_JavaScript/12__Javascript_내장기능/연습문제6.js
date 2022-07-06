function solution(participant, completion) {
    var answer = '';

    // participant원소 중에서 completion에 포함되지 않은 하나의 원소를 찾아서 answer에 저장하는 것이 문제 내용.
    // --> participant의 원소를 탐색하여 completion에 속하지 않음을 확인하면 그 순간 반복 중단
    //      1) for문을 사용해 탐색하다가 break사용
    // for (let i = 0; i < participant.length; i++) {
    //     const p = participant[i];

    //     if (!completion.includes(p)) {
    //         answer = p;
    //         break;
    //     }
    // }

    //     2) 배열의 some함수 사용
    participant.some((v, i) => {
        if (!completion.includes(v)) {
            answer = v;
            return true;
        }
    });
    
    return answer;
}

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], 
                     ["eden", "kiki"]));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"]));

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], 
                     ["stanko", "ana", "mislav"]));