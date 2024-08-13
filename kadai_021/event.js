//btnというidを持つHTML要素を取得し定数に代入する
const Btn=document.getElementById('btn');

//textというidを持つHTML要素を取得し定数に代入する
const Text=document.getElementById('text');

//HTML要素がクリックされた時にイベント処理を実行する
Btn.addEventListener('click',()=>{
  //2秒の待ち時間を設定し、非同期処理を実行する
  setTimeout(()=>{
    //Textを『ボタンをクリックしました』に変更する
    Text.textContent='ボタンをクリックしました';
  },2000);
});