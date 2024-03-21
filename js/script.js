/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team


Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! :muscolo:
DATI PER ESERCIZIO
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer	                 scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg
*/

let team=[
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO'
    },
    {
        foto: 'img/angela-caroll-chief-editor.jpg',
        nome : 'Angela Caroll',
        ruolo : ' Chief Editor'
    },  
    {
        foto: 'img/walter-gordon-office-manager.jpg',
        nome : 'Walter Gordon',
        ruolo : 'Office Manager'
    },
    {
        foto: 'img/angela-lopez-social-media-manager.jpg',
        nome : 'Angela Lopez',
        ruolo : ' Social Media Manager'
    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome : 'Scott Estrada',
        ruolo : 'Developer'
    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer'
    }

];


const stcontainer=document.querySelector('.st-container')
for(let value of team){
 let boxes=document.createElement('div')
 boxes.classList.add('box')
 boxes.innerHTML=`
 <img src="${value.foto}" class="foto">
  <h3>${value.nome}</h3>  <p>${value.ruolo}</p>
 `
 stcontainer.appendChild(boxes)
}


const button=document.querySelector('.btn-success').addEventListener('click',function(){
    const nome=document.getElementById('nome').value
    const ruolo=document.getElementById('profession').value
    const foto=document.getElementById('select').value

    let newteam={
        foto : foto,
        nome: nome,
        ruolo : ruolo
        
    }
    team.push(newteam)
    const stcontainer=document.querySelector('.st-container')
    let boxes=document.createElement('div')
    boxes.classList.add('box')
    boxes.innerHTML=`
    <img src="${newteam.foto}" class="foto">
    <h3>${newteam.nome}</h3>  <p>${newteam.ruolo}</p>
    `
    stcontainer.appendChild(boxes)

})