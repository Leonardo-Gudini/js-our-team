const team =    [
                    {
                        nome: "Wayne Barnett",
                        ruolo: "Founder & CEO",
                        "immagine profilo": "wayne-barnett-founder-ceo.jpg"
                    },
                    {
                        nome: "Angela Caroll",
                        ruolo: "Chief Editor",
                        "immagine profilo": "angela-caroll-chief-editor.jpg"
                    },
                    {
                        nome: "Walter Gordon",
                        ruolo: "Office Manager",
                        "immagine profilo": "walter-gordon-office-manager.jpg"
                    },
                    {
                        nome: "Angela Lopez",
                        ruolo: "Social Media Manager",
                        "immagine profilo": "angela-lopez-social-media-manager.jpg"
                    },
                    {
                        nome: "Scott Estrada",
                        ruolo: "Developer",
                        "immagine profilo": "scott-estrada-developer.jpg"
                    },
                    {
                        nome: "Barbara Ramos",
                        ruolo: "Graphic Designer",
                        "immagine profilo": "barbara-ramos-graphic-designer.jpg"
                    }
];


for(let i = 0; i < team.length ; i++){
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i]["immagine profilo"]);
}

