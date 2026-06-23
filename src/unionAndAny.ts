// Union
let subs: string | number = "Subscribed";
subs = 1000;

let apiRequestStatus: 'success' | 'error' | 'pending' = 'success'
apiRequestStatus = 'error'

// Any
let randomValue: any = 10;
randomValue = "hello";

const num = ['10', '20', '30', '40'];

let currentNum;

for(let nums of num){
    if(nums === '20'){
        currentNum = nums;
        break;
    }
    currentNum ='20'
}

console.log(currentNum);
