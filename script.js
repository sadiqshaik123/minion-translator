
const dict={
hello:"bello",hi:"bello",bye:"poopaye","thank":"tank","thanks":"tank yu","thank you":"tank yu",
you:"yu",my:"mi",friend:"kanpai",food:"papaya",banana:"banana",yes:"si",no:"nah",love:"muak"
};
const rev={
"bello":"hello","poopaye":"bye","tank":"thank","tank yu":"thank you","yu":"you","mi":"my","kanpai":"friend","papaya":"food","banana":"banana","si":"yes","nah":"no","muak":"love"
};
function toMinion(){
 let input=document.getElementById("input").value.toLowerCase().trim();
 let out=input;
 Object.keys(dict).sort((a,b)=>b.length-a.length).forEach(k=>{
   out=out.replaceAll(k,dict[k]);
 });
 document.getElementById("output").value=out;
}
function toEnglish(){
 let input=document.getElementById("input").value.toLowerCase().trim();
 let out=input;
 Object.keys(rev).sort((a,b)=>b.length-a.length).forEach(k=>{
   out=out.replaceAll(k,rev[k]);
 });
 document.getElementById("output").value=out;
}
