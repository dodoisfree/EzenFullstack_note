const date = new Date();
const now_year = date.getFullYear();

let ssn = "9411271";
let yy = Number(ssn.substring(0, 2));
let gen = Number(ssn.substring(6, 7));

let my_year = (yy = (gen > 2) ? yy + 2000 : yy + 1900);
let age = now_year - my_year + 1;

console.log("당신은 %d세 남자입니다.", age);

