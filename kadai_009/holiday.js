//配列の宣言と値の代入を行う
const holidays=['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日'];

//配列の値を出力する
console.log(holidays);

//配列の値を順番に出力する
for(let i =0; i < holidays.length; i ++){
  console.log(holidays[i]);
}

let i=0;

while(i<holidays.length){
  console.log(holidays[i]);
  i++;
}