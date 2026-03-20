function shuffle(arr){
return arr.sort(()=>0.5-Math.random());
}

// ===== QUESTIONS =====
let allQuestions={

prob:[
{q:"Probability of heads?",a:["1/2","1/3","1/4","1"],c:0},
{q:"Probability of rolling 6?",a:["1/6","1/3","1/2","1"],c:0},
{q:"Certain event?",a:["0","1","2","3"],c:1},
{q:"Impossible event?",a:["0","1","2","3"],c:0},
{q:"Range of probability?",a:["0-1","1-10","0-10","-1-1"],c:0},
{q:"Half probability?",a:["0.25","0.5","1","2"],c:1},
{q:"Chance means?",a:["Probability","Length","Mass","Time"],c:0},
{q:"Random event?",a:["Yes","No","Maybe","None"],c:0},
{q:"0 means?",a:["Impossible","Certain","Half","None"],c:0},
{q:"1 means?",a:["Impossible","Certain","Half","None"],c:1},
{q:"P(A)=?",a:["Chance","Speed","Time","Mass"],c:0},
{q:"Fair coin?",a:["Equal chance","Biased","Heavy","Light"],c:0},
{q:"Dice sides?",a:["6","5","4","3"],c:0},
{q:"Even numbers?",a:["2,4,6","1,3,5","1,2,3","None"],c:0},
{q:"Odd numbers?",a:["1,3,5","2,4,6","All","None"],c:0},
{q:"Random?",a:["Unpredictable","Fixed","Constant","None"],c:0},
{q:"Event?",a:["Outcome","Color","Shape","Size"],c:0},
{q:"Outcome?",a:["Result","Color","Mass","Speed"],c:0},
{q:"Sample space?",a:["All outcomes","One","None","Half"],c:0},
{q:"Experiment?",a:["Test","Food","Water","Air"],c:0}
],

group:[
{q:"Closure property?",a:["Yes","No","None","All"],c:0},
{q:"Identity element?",a:["Exists","None","All","Half"],c:0},
{q:"Inverse property?",a:["Yes","No","None","All"],c:0},
{q:"Associative property?",a:["Yes","No","Half","None"],c:0},
{q:"Group has identity?",a:["Yes","No","Half","None"],c:0},
{q:"Element?",a:["Member","Color","Shape","None"],c:0},
{q:"Operation?",a:["Rule","Food","Time","None"],c:0},
{q:"Binary operation?",a:["2 inputs","1 input","3 inputs","None"],c:0},
{q:"Closure rule?",a:["Stay inside","Outside","None","All"],c:0},
{q:"Inverse means?",a:["Undo","Add","Multiply","None"],c:0},
{q:"Set?",a:["Collection","Food","Air","None"],c:0},
{q:"Abelian group?",a:["Commutative","Not","Half","None"],c:0},
{q:"Commutative?",a:["a+b=b+a","a-b=b-a","None","All"],c:0},
{q:"Neutral element?",a:["Identity","Zero","All","None"],c:0},
{q:"Subgroup?",a:["Part group","Whole","None","All"],c:0},
{q:"Finite group?",a:["Limited","Infinite","None","All"],c:0},
{q:"Infinite group?",a:["Unlimited","Limited","None","All"],c:0},
{q:"Order?",a:["Size","Color","Shape","None"],c:0},
{q:"Element order?",a:["Repeats","None","All","Half"],c:0},
{q:"Group example?",a:["Integers","Color","Food","None"],c:0}
],

pred:[
{q:"P→P?",a:["True","False","None","All"],c:0},
{q:"Negation of True?",a:["False","True","None","All"],c:0},
{q:"AND means?",a:["Both true","One","None","All"],c:0},
{q:"OR means?",a:["At least one","None","Both false","All"],c:0},
{q:"Implication?",a:["If then","And","Or","None"],c:0},
{q:"Truth table?",a:["Logic table","Math","None","All"],c:0},
{q:"Predicate?",a:["Statement","Number","Shape","None"],c:0},
{q:"Variable?",a:["x,y","Color","Shape","None"],c:0},
{q:"Domain?",a:["Set","Color","Shape","None"],c:0},
{q:"Quantifier?",a:["All/Some","None","All","Half"],c:0},
{q:"∀ means?",a:["All","Some","None","Half"],c:0},
{q:"∃ means?",a:["Exists","All","None","Half"],c:0},
{q:"Logic?",a:["Reason","Food","Air","None"],c:0},
{q:"Statement?",a:["True/False","None","All","Half"],c:0},
{q:"Compound statement?",a:["Combined","Single","None","All"],c:0},
{q:"Truth value?",a:["Value","Color","Shape","None"],c:0},
{q:"False means?",a:["Not true","True","None","All"],c:0},
{q:"Symbol?",a:["Letter","Food","Air","None"],c:0},
{q:"Expression?",a:["Logic","Food","Air","None"],c:0},
{q:"Conclusion?",a:["Result","Start","None","All"],c:0}
],

count:[
{q:"2! ?",a:["1","2","3","4"],c:1},
{q:"3! ?",a:["5","6","7","8"],c:1},
{q:"4! ?",a:["20","24","30","36"],c:1},
{q:"5! ?",a:["100","120","110","130"],c:1},
{q:"Permutation?",a:["Order matters","No order","None","All"],c:0},
{q:"Combination?",a:["No order","Order","None","All"],c:0},
{q:"nPr?",a:["Permutation","Combination","None","All"],c:0},
{q:"nCr?",a:["Combination","Permutation","None","All"],c:0},
{q:"0! ?",a:["1","0","None","All"],c:0},
{q:"Factorial means?",a:["Multiply","Add","None","All"],c:0},
{q:"Tree diagram?",a:["Visual","None","All","Half"],c:0},
{q:"Counting?",a:["Total","None","All","Half"],c:0},
{q:"Arrangement?",a:["Order","None","All","Half"],c:0},
{q:"Selection?",a:["Choose","None","All","Half"],c:0},
{q:"Formula?",a:["Rule","None","All","Half"],c:0},
{q:"Objects?",a:["Things","None","All","Half"],c:0},
{q:"Repeat?",a:["Allowed","None","All","Half"],c:0},
{q:"No repeat?",a:["Not allowed","None","All","Half"],c:0},
{q:"Multiply rule?",a:["Yes","No","None","All"],c:0},
{q:"Add rule?",a:["Yes","No","None","All"],c:0}
]

};

// ===== GAME =====
let current=[];
let index=0;
let score=0;
let done=0;
let player="";
let currentTopicElement=null;

function startGame(){
player=document.getElementById("name").value;
if(player==="") return alert("Enter name");

document.getElementById("start").classList.add("hidden");
document.getElementById("desc").classList.remove("hidden");
document.getElementById("topics").classList.remove("hidden");
}

function playTopic(t,el){

// 🔥 prevent re-click
if(el.classList.contains("done")) return;

currentTopicElement=el;

current=shuffle([...allQuestions[t]]).slice(0,5);
index=0;

document.getElementById("topics").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

show();
}

function show(){
let q=current[index];
document.getElementById("question").innerText=q.q;

let html="";
q.a.forEach((a,i)=>{
html+=`<div class="answerBtn" onclick="ans(${i})">${a}</div>`;
});
document.getElementById("answers").innerHTML=html;
}

function ans(i){

if(i===current[index].c) score++;

index++;

if(index<5){
show();
}else{

// ✅ magiging green dito
currentTopicElement.classList.add("done");

done++;

document.getElementById("quiz").classList.add("hidden");
document.getElementById("topics").classList.remove("hidden");

if(done===4) finish();
}
}

function finish(){
let percent=(score/20)*100;

document.getElementById("topics").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("final").innerText=
player+" Score: "+score+"/20 ("+percent+"%) "+(percent>=70?"PASSED 🎉":"FAILED ❌");
}
