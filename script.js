const dictionary={hello:'bello',hi:'bello',bye:'poopaye',good:'bana',yes:'si',no:'nah',thank:'tank',thanks:'tank yu',you:'yu',friend:'kanpai',banana:'banana',love:'muak muak',food:'papaya',fire:'bee do bee do',what:'whaaa',me:'me',my:'mi',please:'pwetty pwease'};
const randomWords=['banana','gelato','papaya','bello','para','tulaliloo','poopaye','hana','kanpai','muak','baboi','bee-do','la','bananaaa'];
function randomWord(){return randomWords[Math.floor(Math.random()*randomWords.length)];}
function translateText(){
let text=document.getElementById('inputText').value;
let words=text.toLowerCase().split(/\s+/);
let output=words.map(word=>{
word=word.replace(/[^\w]/g,'');
if(dictionary[word]) return dictionary[word];
if(word.length<=3) return randomWord();
let result='';
for(let c of word){
switch(c){
case 'a':result+='ba';break;
case 'e':result+='be';break;
case 'i':result+='bi';break;
case 'o':result+='bo';break;
case 'u':result+='bu';break;
default:result+=c;
}}
if(Math.random()>0.5) result+=' banana';
return result;
});
document.getElementById('outputText').value=output.join(' ');
}