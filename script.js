const lessons = [
  {n:"01",title:"« Je dois y réfléchir »",text:"Accueillir la réflexion puis demander un délai précis. Une fois le délai posé, utiliser la fin de l'échange pour identifier ce qui bloque réellement la décision.",quote:"« Je comprends que cette décision demande une réflexion. De combien de temps avez-vous besoin ? »",extra:"Après avoir convenu d'une date, tu peux demander : « Pour que je prépare au mieux ce deuxième échange, qu'est-ce qui vous retient aujourd'hui de passer le cap ? »",url:"https://youtu.be/_DD4bWjxUgM"},
  {n:"02",title:"La « patate chaude »",text:"Quand un prospect te donne une objection, évite de partir immédiatement dans une longue défense. Reformule puis pose une question qui l'amène à préciser ses critères.",quote:"« Les concurrents sont en effet moins chers. Si vous les avez déjà vus, qu'espérez-vous trouver chez nous que vous n'avez pas trouvé chez eux ? »",extra:"L'idée est de comprendre les critères du prospect avant de présenter les différences pertinentes de ton offre.",url:"https://youtu.be/SU-8g3bKNRk"},
  {n:"03",title:"Formation longue sur le closing",text:"Une ressource vidéo longue consacrée au closing et à la conduite d'un échange commercial.",quote:"Ressource vidéo — closing",extra:"Prends des notes sur la structure d'un échange, les questions posées et la manière dont les objections sont traitées.",url:"https://youtu.be/CeWg7rXrPng"},
  {n:"04",title:"Ressource vidéo — short",text:"Ressource complémentaire à intégrer au parcours.",quote:"Vidéo courte",extra:"À utiliser comme rappel rapide après la partie théorique.",url:"https://youtube.com/shorts/ilMzBd0fato"},
  {n:"05",title:"Le prospect choisit un concurrent",text:"Ne dénigre pas directement le concurrent. Si tu penses qu'une information importante manque, ouvre plutôt un espace pour que le prospect explique son choix.",quote:"« Comment est-ce que je pourrais vous dire que vous êtes peut-être en train de faire une erreur sans paraître arrogant ? »",extra:"L'objectif est d'obtenir l'autorisation de discuter du point de désaccord et de comprendre ce qui a motivé la décision.",url:"https://youtube.com/shorts/CPEovpjiyMc"},
  {n:"06",title:"Éviter le doute sur son offre",text:"Une bonne maîtrise de son produit aide à parler de sa valeur avec assurance. La confiance doit venir de la connaissance de l'offre, de ses limites et de ses preuves.",quote:"Connaître son offre → comprendre sa valeur → parler avec assurance.",extra:"Ne confonds pas confiance et promesses absolues : maîtrise aussi ce que ton produit ne fait pas.",url:"https://youtube.com/shorts/hFAVfZmJQ6E"},
  {n:"07",title:"Comment avoir confiance en son produit ?",text:"À travailler comme un module de recherche : preuves, cas clients, démonstrations, connaissance du marché, objections fréquentes et limites de l'offre.",quote:"Construire la confiance avec des preuves, pas uniquement avec de l'affirmation.",extra:"Recherche recommandée : témoignages vérifiables, démonstrations, comparatifs factuels et maîtrise des objections.",url:"https://www.youtube.com/results?search_query=comment+avoir+confiance+en+son+produit+vente"},
  {n:"08",title:"Émotion puis justification logique",text:"Une décision d'achat peut être influencée par une projection émotionnelle, puis expliquée avec des arguments rationnels. En vente, relie donc bénéfice désiré et éléments concrets.",quote:"Émotion → désir → justification rationnelle.",extra:"Exemple : un produit premium peut être désiré pour l'image qu'il renvoie, puis justifié par sa qualité, sa durabilité ou son service.",url:"https://youtube.com/shorts/pwRk-g-fh8A"},
  {n:"09",title:"La technique de la mise en garde",text:"Présenter une capacité forte par une formulation de précaution peut attirer l'attention. À utiliser sans exagérer ni faire de promesse trompeuse.",quote:"Mettre en avant une capacité réelle tout en indiquant clairement les limites et conditions.",extra:"Le principe est à adapter à un produit réel : ne transforme pas une mise en garde en promesse cachée.",url:"https://youtube.com/shorts/TV_ArJnUq8g"},
  {n:"10",title:"Éviter « honnêtement »",text:"Le mot « honnêtement » ne prouve pas à lui seul la sincérité. Une formulation précise, transparente et argumentée est plus crédible.",quote:"Privilégier les faits et les explications plutôt que d'annoncer qu'on est honnête.",extra:"Exemple : au lieu de « honnêtement, notre produit est meilleur », explique exactement sur quel critère il se différencie.",url:"https://youtube.com/shorts/4PAxVGOSVAk"},
  {n:"11",title:"Valeur avant prix",text:"Présenter d'abord ce que l'offre apporte permet au prospect de comprendre le rapport valeur/prix avant de considérer le montant.",quote:"Bénéfices → contenu → preuves → prix.",extra:"Ne masque pas le prix et ne crée pas de fausse garantie. Présente simplement la valeur de façon claire avant le montant.",url:"https://youtube.com/shorts/LeT4XZbcVw8"},
  {n:"12",title:"Ressource closing",text:"Vidéo courte complémentaire du parcours.",quote:"Ressource vidéo",extra:"Ajoute ici tes notes personnelles après visionnage.",url:"https://youtube.com/shorts/a7wXhVZeYBw"},
  {n:"13",title:"Ressource closing",text:"Vidéo courte complémentaire du parcours.",quote:"Ressource vidéo",extra:"Ajoute ici tes notes personnelles après visionnage.",url:"https://youtube.com/shorts/589kK2-j-go"}
];

const terms = [
  ["Positioning","Positionnement","La manière dont une offre se différencie et occupe une place claire dans l'esprit de son audience."],
  ["Onboarding","Intégration","Le parcours qui accueille un nouveau client ou membre et l'aide à démarrer correctement."],
  ["Branding","Identité de marque","L'ensemble des éléments qui construisent l'image, la personnalité et la reconnaissance d'une marque."],
  ["Seeding","Amorçage","Diffuser une idée, un contenu ou un produit auprès de premières audiences pour créer de l'intérêt et des signaux."],
  ["Attracting","Attirer","Créer du contenu ou des actions qui font venir une audience qualifiée vers ton univers."],
  ["Converting","Convertir","Transformer un visiteur ou prospect intéressé en action concrète : inscription, prise de contact ou achat."],
  ["Publishing","Publier","Mettre régulièrement du contenu à disposition de son audience sur les canaux choisis."],
  ["Engaging","Engager","Créer des interactions et une relation avec l'audience : réponses, commentaires, échanges, communauté."],
  ["Closing","Conclure","Faire passer un prospect de l'intérêt à une décision claire, après avoir compris ses besoins et objections."],
  ["Retaining","Fidéliser","Donner de bonnes raisons à un client de rester, utiliser le produit et poursuivre la relation."],
  ["Scaling","Scaler","Augmenter les résultats d'un système qui fonctionne en améliorant processus, acquisition et capacité."],
];

const vocab = [
  ["Formation","Programme clé en main","★★★★★"],["Formation","Méthode","★★★★★"],["Formation","Protocole","★★★★☆"],["Formation","Plan d'action","★★★★★"],
  ["Facile","Accessible","★★★★☆"],["Gratuit","Offert","★★★★☆"],["Simple","Optimisé","★★★★☆"],["Modèle","Template prêt à l'emploi","★★★★☆"],
  ["Accès","Accès privé","★★★★☆"],["Groupe","Communauté privée","★★★★★"],["Vidéo","Masterclass","★★★★★"],["Cours","Accompagnement","★★★★★"],
  ["Explication","Démonstration","★★★★☆"],["Pack","Kit complet","★★★★☆"],["Bonus","Ressource exclusive","★★★★☆"],["Rapide","Efficace","★★★★☆"],
  ["Astuces","Stratégies","★★★★★"],["Correction","Optimisation","★★★★★"],["Théorie","Mise en pratique","★★★★★"],["Débutant","Accessible à tous les niveaux","★★★★☆"],
  ["Apprendre","Maîtriser","★★★★☆"],["Comprendre","Passer à l'action","★★★★★"],["1 personne","Accompagnement individuel","★★★★★"],["Prix","Investissement","★★★★★"],
  ["Conseils","Stratégies","★★★★★"],["Client","Membre","★★★★★"],["Acheter","Rejoindre","★★★★★"],["Un appel","Un call","★★★☆☆"],["Un appel 1 à 1","Call 1:1","★★★★☆"]
];

const powers = ["Accompagnement","Personnalisé","Stratégies","Plan d'action","Mise en pratique","Audit","Optimisation","Suivi","Démonstration","Kit complet","Ressources exclusives","Accès privé","Échange direct","Prêt à l'emploi","Structurer"];

const closingCards = document.getElementById("closingCards");
lessons.forEach(l=>{
  const el=document.createElement("article"); el.className="lesson glass";
  el.innerHTML=`<div class="lesson-head"><span class="lesson-num">${l.n}</span><div><h3>${l.title}</h3><p>${l.text}</p></div></div><div class="quote">${l.quote}</div><button class="toggle">Afficher les notes ↓</button><div class="extra"><p>${l.extra}</p><a href="${l.url}" target="_blank" rel="noopener">▶ Ouvrir la ressource ↗</a></div>`;
  el.querySelector(".toggle").onclick=()=>{el.classList.toggle("open");el.querySelector(".toggle").textContent=el.classList.contains("open")?"Masquer les notes ↑":"Afficher les notes ↓"};
  closingCards.appendChild(el);
});

const glossaryGrid=document.getElementById("glossaryGrid");
terms.forEach(([en,fr,desc])=>{
  const el=document.createElement("article");el.className="term glass";el.innerHTML=`<b>${en}</b><span>${fr}</span><p>${desc}</p>`;glossaryGrid.appendChild(el);
});

const vocabRows=document.getElementById("vocabRows");
vocab.forEach(([a,b,i])=>{
  const tr=document.createElement("tr");tr.innerHTML=`<td class="bad">❌ ${a}</td><td class="good">✅ ${b}</td><td class="impact">${i}</td>`;vocabRows.appendChild(tr);
});
const powerWords=document.getElementById("powerWords");
powers.forEach(x=>{const s=document.createElement("span");s.className="chip";s.textContent=x;powerWords.appendChild(s)});

document.querySelectorAll("[data-scroll]").forEach(btn=>btn.addEventListener("click",()=>{
  document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  document.getElementById("mobileMenu").classList.remove("open");
}));

const themeSelect=document.getElementById("themeSelect");
const saved=localStorage.getItem("dsa-theme")||"dark";
document.body.dataset.theme=saved;themeSelect.value=saved;
themeSelect.addEventListener("change",e=>{document.body.dataset.theme=e.target.value;localStorage.setItem("dsa-theme",e.target.value)});

document.getElementById("menuBtn").onclick=()=>document.getElementById("mobileMenu").classList.toggle("open");

document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{
  await navigator.clipboard.writeText(btn.dataset.copy); const old=btn.textContent;btn.textContent="✓ Copié";setTimeout(()=>btn.textContent=old,1300);
}));

document.getElementById("copyBtn").onclick=async()=>{
  const text=document.getElementById("copyText").innerText;
  await navigator.clipboard.writeText(text);
  document.getElementById("copyStatus").textContent="✓ Message copié dans le presse-papiers";
  setTimeout(()=>document.getElementById("copyStatus").textContent="",2500);
};

// Tableau de suivi : saisie libre + stockage local + vues jour/semaine/mois
(function(){
  const rowsEl = document.getElementById('trackerRows');
  if(!rowsEl) return;
  const periodEl = document.getElementById('trackerPeriod');
  const addBtn = document.getElementById('addTrackerRow');
  const saveBtn = document.getElementById('saveTracker');
  const clearBtn = document.getElementById('clearTracker');
  const status = document.getElementById('trackerStatus');
  const KEY = 'dsa-tracker-v1';
  let data;
  try { data = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch(e) { data = {}; }
  let period = periodEl.value;
  ['day','week','month'].forEach(p=>{ if(!Array.isArray(data[p])) data[p]=[]; });

  const label = (p, i) => p==='day' ? `Jour ${i+1}` : p==='week' ? `Semaine ${i+1}` : `Mois ${i+1}`;
  const blank = (p,i) => ({label:label(p,i), views:'', profile:'', clicks:'', leads:'', calls:'', sales:'', revenue:''});
  function persist(){
    localStorage.setItem(KEY, JSON.stringify(data));
    status.textContent='✓ Données enregistrées sur cet appareil.';
  }
  function addField(tr, key, type, placeholder, extraClass=''){
    const td=document.createElement('td');
    const input=document.createElement('input');
    input.type=type;
    input.inputMode=type==='number'?'numeric':'text';
    input.value=data[period][tr.dataset.index]?.[key] ?? '';
    input.placeholder=placeholder;
    if(extraClass) input.className=extraClass;
    input.addEventListener('input',()=>{
      data[period][Number(tr.dataset.index)][key]=input.value;
      localStorage.setItem(KEY, JSON.stringify(data));
      status.textContent='✓ Modifications enregistrées automatiquement.';
    });
    td.appendChild(input); tr.appendChild(td);
  }
  function render(){
    rowsEl.innerHTML='';
    if(!data[period].length){
      const tr=document.createElement('tr');
      tr.innerHTML='<td colspan="9" class="muted">Clique sur « ＋ Ajouter une ligne » pour commencer à remplir ton suivi.</td>';
      rowsEl.appendChild(tr); return;
    }
    data[period].forEach((r,i)=>{
      const tr=document.createElement('tr'); tr.dataset.index=i;
      addField(tr,'label', 'text', label(period,i), 'tracker-period-input');
      addField(tr,'views','number','0'); addField(tr,'profile','number','0'); addField(tr,'clicks','number','0');
      addField(tr,'leads','number','0'); addField(tr,'calls','number','0'); addField(tr,'sales','number','0'); addField(tr,'revenue','number','0');
      const td=document.createElement('td');
      const del=document.createElement('button'); del.className='tracker-delete'; del.title='Supprimer cette ligne'; del.textContent='🗑️';
      del.onclick=()=>{data[period].splice(i,1);persist();render();};
      td.appendChild(del); tr.appendChild(td); rowsEl.appendChild(tr);
    });
  }
  periodEl.addEventListener('change',()=>{ period=periodEl.value; render(); });
  addBtn.addEventListener('click',()=>{ data[period].push(blank(period,data[period].length)); persist(); render(); setTimeout(()=>rowsEl.parentElement.scrollLeft=rowsEl.parentElement.scrollWidth,50); });
  saveBtn.addEventListener('click',persist);
  clearBtn.addEventListener('click',()=>{
    if(confirm(`Supprimer toutes les données de la vue ${period === 'day' ? 'jour' : period === 'week' ? 'semaine' : 'mois'} ?`)){
      data[period]=[]; persist(); render();
    }
  });
  render();
})();
