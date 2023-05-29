/*
Wayne Barnett   Founder & CEO      wayne-barnett-founder-ceo.jpg
Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
Scott Estrada     Developer         scott-estrada-developer.jpg
Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg
*/

const team = [

    {
        name : 'Wayne Barnett',
        rule : 'Founder & CEO ',
        image : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        rule : 'Chief Editor ',
        image : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon ',
        rule : 'Office Manager ',
        image : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        rule : 'Social Media  ',
        image : 'Manager  angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada ',
        rule : 'Developer  ',
        image : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        rule : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg',
    },
];


const output = document.getElementById('output');

for (let index = 0; index < team.length; index++) {

    const user = team[index];

    for(const key in user){

        output.append(key, user[key]);

    }
    
};




