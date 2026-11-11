const plans=[
{day:"Segunda-feira",short:"SEG",title:"Braços completos",desc:"Prioridade: bíceps, tríceps e braquial.",items:[["Curl com EZ Bar",3,"8–12"],["Curl inclinado com halteres",3,"10–12"],["Curl martelo",2,"10–12"],["Tríceps na polia",3,"10–15"],["Tríceps testa com EZ Bar",3,"8–12"],["Extensão de tríceps acima da cabeça no cabo",2,"12–15"]]},
{day:"Terça-feira",short:"TER",title:"Peito",desc:"Desenvolvimento do peitoral, com atenção à região superior.",items:[["Supino plano com barra",3,"8–10"],["Supino inclinado com halteres",3,"10–12"],["Abertura no cabo",3,"12–15"],["Flexões",2,"10–15"]]},
{day:"Quarta-feira",short:"QUA",title:"Costas",desc:"Largura, espessura e densidade das costas.",items:[["Pull-ups",3,"6–10"],["Lat Pulldown",3,"10–12"],["Remada Landmine",3,"8–12"],["Remada unilateral com halteres",3,"10–12"]]},
{day:"Quinta-feira",short:"QUI",title:"Pernas completas",desc:"Quadríceps, posteriores, glúteos e gémeos.",items:[["Agachamento com barra",3,"8–12"],["Peso morto romeno",3,"10–12"],["Afundos com halteres",3,"10 cada perna"],["Hip Thrust com barra",3,"10–12"],["Elevação de gémeos",4,"15–20"]]},
{day:"Sexta-feira",short:"SEX",title:"Ombros + braços",desc:"Ombros completos e segundo estímulo direto de braços.",items:[["Desenvolvimento com halteres",3,"8–12"],["Elevação lateral",3,"12–15"],["Elevação posterior com halteres",3,"12–15"],["Curl de bíceps no cabo",2,"12–15"],["Tríceps na polia",2,"12–15"]]}
];

const homePlans=[
{day:"HOME A",title:"Peito, tríceps e abdómen",desc:"Sessão curta para substituir uma ida perdida ao ginásio.",items:[["Flexões tradicionais",3,"10–15"],["Flexões diamante",2,"6–10"],["Reverse Crunch",2,"12–15"],["Prancha abdominal",2,"30–40 segundos"]]},
{day:"HOME B",title:"Braços, peito e abdómen",desc:"Ênfase em braços e core, sem equipamento.",items:[["Flexões fechadas",2,"8–12"],["Curl isométrico com toalha",2,"20–30 segundos"],["Bicycle Crunch",2,"20 alternadas"],["Dead Bug",2,"10 por lado"]]},
{day:"HOME C",title:"Pernas e glúteos",desc:"Alternativa de peso corporal para quando não conseguires ir ao ginásio.",items:[["Agachamento livre",3,"15"],["Afundos para trás",2,"10 por perna"],["Glute Bridge",2,"15"],["Agachamento búlgaro",2,"8 por perna"],["Elevação de gémeos",2,"20"]]}
];

const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const KEY="gymrote-v1";let data=JSON.parse(localStorage.getItem(KEY)||'{"completed":[],"history":[],"logs":{}}');let current=0;let currentMode="gym";
function save(){localStorage.setItem(KEY,JSON.stringify(data));}
function todayIndex(){let d=new Date().getDay();return d>=1&&d<=5?d-1:(d===0?0:0)}
function dateKey(){let d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
function completedToday(){return data.completed.includes(dateKey()+":"+todayIndex())}
function showTab(tab){$$(".screen").forEach(x=>x.classList.remove("active"));$("#"+tab).classList.add("active");$$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));}
function openSession(i){current=i;currentMode="gym";const p=plans[i];showTab("session");$("#sessionDay").textContent=p.day.toUpperCase();$("#sessionTitle").innerHTML=p.title.replace(" completos"," <span>completos.</span>").replace(" completas"," <span>completas.</span>").replace(" + "," <span>+</span> ");$("#sessionDescription").textContent=p.desc;$("#exerciseCount").textContent=p.items.length;renderExercises();window.scrollTo(0,0)}
function openHomeSession(i){current=i;currentMode="home";const p=homePlans[i];showTab("session");$("#sessionDay").textContent=p.day;$("#sessionTitle").textContent=p.title;$("#sessionDescription").textContent=p.desc;$("#exerciseCount").textContent=p.items.length;$("#sessionTime").textContent="20";renderExercises();window.scrollTo(0,0)}


const demoHints={
"curl com ez bar":"EZ bar curl correct form grip elbow position",
"curl inclinado com halteres":"incline dumbbell biceps curl correct form",
"curl martelo":"dumbbell hammer curl correct form",
"tríceps na polia":"cable triceps pushdown rope correct form",
"tríceps testa com ez bar":"EZ bar skull crusher correct form",
"extensão de tríceps acima da cabeça no cabo":"overhead cable triceps extension correct form",
"supino plano com barra":"barbell bench press correct form setup grip",
"supino inclinado com halteres":"incline dumbbell bench press correct form",
"abertura no cabo":"cable chest fly correct form",
"flexões":"push up correct form",
"pull-ups":"pull up correct form grip",
"lat pulldown":"wide grip lat pulldown correct form",
"remada landmine":"landmine T bar row correct form",
"remada unilateral com halteres":"one arm dumbbell row correct form",
"agachamento com barra":"barbell back squat correct form setup",
"peso morto romeno":"barbell Romanian deadlift correct form",
"afundos com halteres":"dumbbell lunges correct form",
"hip thrust com barra":"barbell hip thrust correct form setup",
"elevação de gémeos":"standing calf raise correct form",
"desenvolvimento com halteres":"seated dumbbell shoulder press correct form",
"elevação lateral":"dumbbell lateral raise correct form",
"elevação posterior com halteres":"bent over dumbbell reverse fly correct form",
"curl de bíceps no cabo":"cable biceps curl correct form",
"flexões tradicionais":"standard push up correct form alignment",
"flexões diamante":"diamond push up correct form wrist elbow",
"reverse crunch":"reverse crunch abdominal exercise correct form",
"prancha abdominal":"forearm plank correct form",
"flexões fechadas":"close grip push up correct form",
"curl isométrico com toalha":"isometric towel biceps curl under foot tutorial",
"bicycle crunch":"bicycle crunch correct form",
"dead bug":"dead bug core exercise correct form",
"agachamento livre":"bodyweight squat correct form",
"afundos para trás":"reverse lunge bodyweight correct form",
"glute bridge":"glute bridge correct form",
"agachamento búlgaro":"bodyweight Bulgarian split squat correct form",
"elevação de gémeos":"standing calf raise bodyweight correct form",

};
const verifiedDemos={
"curl com ez bar":{id:"Ep5SPDAwkUY",note:"Vídeo de treino de bíceps e tríceps; inclui curl com barra."},
"tríceps na polia":{id:"Ep5SPDAwkUY",note:"Vídeo de treino de bíceps e tríceps; inclui cable pushdown."},
"lat pulldown":{id:"3zGjtwGGQqk",note:"Demonstração de costas; inclui wide-grip lat pulldown."}
};
function demoMarkup(name){
 const key=name.toLowerCase(), verified=verifiedDemos[key], query=demoHints[key]||name+" exercise correct form";
 const search="https://www.youtube.com/results?search_query="+encodeURIComponent(query);
 return `<details class="demo-panel"><summary>▶ Ver demonstração e técnica</summary>${verified?`<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${verified.id}?rel=0" title="Demonstração: ${name}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="demo-note">${verified.note}</p>`:`<div class="demo-placeholder"><b>Vídeo específico deste movimento</b><p>Abre a pesquisa de demonstrações para escolher um vídeo com pega, posicionamento e execução.</p><a href="${search}" target="_blank" rel="noopener">Pesquisar demonstração no YouTube ↗</a></div>`}<p class="demo-cue"><b>Antes de executar:</b> começa com carga leve, ajusta a pega e a posição, controla a fase de descida e evita balanços ou dor.</p></details>`;
}

function renderExercises(){let p=currentMode==="home"?homePlans[current]:plans[current],prefix=currentMode==="home"?"home-":"gym-";$("#exerciseList").innerHTML=p.items.map((it,i)=>{let key=prefix+current+"-"+i,log=data.logs[key]||{};return `<article class="exercise-card"><div class="exercise-top"><input class="check" type="checkbox" data-check="${i}" ${log.done?"checked":""}><div><h3>${it[0]}</h3><p>${it[1]} séries · ${it[2]} repetições</p></div></div><div class="exercise-fields"><label>${currentMode==="home"?"ESFORÇO / NOTA":"CARGA (KG)"}<input placeholder="${currentMode==="home"?"Ex.: técnica controlada":"Ex.: 10"}" data-log="weight" data-index="${i}" value="${log.weight||""}"></label><label>REPETIÇÕES FEITAS<input placeholder="${it[2]}" data-log="reps" data-index="${i}" value="${log.reps||""}"></label></div>${demoMarkup(it[0])}</article>`}).join("");$$("[data-check]").forEach(el=>el.addEventListener("change",()=>{let k=prefix+current+"-"+el.dataset.check;data.logs[k]={...data.logs[k],done:el.checked};save()}));$$("[data-log]").forEach(el=>el.addEventListener("change",()=>{let k=prefix+current+"-"+el.dataset.index;data.logs[k]={...data.logs[k],[el.dataset.log]:el.value};save()}))}
function render(){let i=todayIndex(),p=plans[i];$("#todayLabel").textContent=new Intl.DateTimeFormat("pt-PT",{weekday:"long",day:"numeric",month:"long"}).format(new Date()).toUpperCase();$("#todayTitle").textContent=p.title;$("#todayTag").textContent=completedToday()?"CONCLUÍDO":"TREINO";$("#todayCard").innerHTML=`<h3>${p.day} · ${p.items.length} exercícios</h3><p>${p.desc}</p><button class="primary-btn full" id="startToday">${completedToday()?"Ver sessão":"Começar treino"}</button>`;$("#startToday").onclick=()=>openSession(i);$("#weekProgress").textContent=data.history.filter(x=>x.week===weekKey()&&x.mode!=="home").length+"/5";$("#weekStrip").innerHTML=plans.map((x,n)=>`<div class="week-day ${data.completed.includes(dateKey()+":"+n)?"done":""}"><b>${x.short}</b><small>${x.title.split(" ")[0]}</small></div>`).join("");$("#workoutList").innerHTML=plans.map((x,n)=>`<div class="workout-card"><div><h3>${x.day} · ${x.title}</h3><p>${x.items.length} exercícios</p></div><button data-open="${n}">Ver treino →</button></div>`).join("");$$("[data-open]").forEach(b=>b.onclick=()=>openSession(+b.dataset.open));$("#homeWorkoutList").innerHTML=homePlans.map((x,n)=>`<div class="workout-card"><div><h3>${x.day} · ${x.title}</h3><p>${x.items.length} exercícios · 20 min</p></div><button data-home-open="${n}">Ver treino →</button></div>`).join("");$$("[data-home-open]").forEach(b=>b.onclick=()=>openHomeSession(+b.dataset.homeOpen));$("#totalWorkouts").textContent=data.history.length;$("#streak").textContent=streak()+" dias";$("#historyList").innerHTML=data.history.slice().reverse().slice(0,10).map(x=>`<div class="history-item"><div><b>${x.title}</b><br><small>${x.date}</small></div><b>${x.count} exercícios</b></div>`).join("")||'<p class="muted">Ainda não há sessões registadas.</p>'}
function weekKey(){let d=new Date();let one=new Date(d.getFullYear(),0,1);return d.getFullYear()+"-"+Math.ceil((((d-one)/86400000)+one.getDay()+1)/7)}
function streak(){let dates=[...new Set(data.history.map(x=>x.date))].sort().reverse();if(!dates.length)return 0;let n=0,cur=new Date();for(let d of dates){let x=new Date(d+"T12:00:00");let diff=Math.round((new Date(cur.getFullYear(),cur.getMonth(),cur.getDate())-new Date(x.getFullYear(),x.getMonth(),x.getDate()))/86400000);if(diff===n)n++;else if(diff===n+1&&n===0)n++;else break}return n}
function toast(s){let t=$("#toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
$("#finishWorkout").onclick=()=>{let p=currentMode==="home"?homePlans[current]:plans[current];data.history.push({date:dateKey(),title:(currentMode==="home"?"Casa · ":"Ginásio · ")+p.title,count:p.items.length,week:weekKey(),mode:currentMode});save();render();toast("Treino concluído. Bom trabalho!");showTab("home")};
$("#backToWorkouts").onclick=()=>showTab("workouts");$$(".tab").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
$("#exportBtn").onclick=()=>{let blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="gymrote-backup.json";a.click();URL.revokeObjectURL(a.href)};
$("#importFile").onchange=e=>{let f=e.target.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{try{let x=JSON.parse(r.result);if(!Array.isArray(x.history)||!Array.isArray(x.completed))throw 0;data=x;save();render();toast("Cópia restaurada.")}catch{toast("Ficheiro inválido.")}};r.readAsText(f)};
$("#resetBtn").onclick=()=>{if(confirm("Apagar todos os treinos e registos guardados neste dispositivo?")){data={completed:[],history:[],logs:{}};save();render();toast("Dados apagados.")}};
let deferredPrompt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});$("#installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else toast("No iPhone: Safari → Partilhar → Adicionar ao ecrã principal.")};
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
render();