var container=document.createElement('div');
container.setAttribute('class',"main");
var row=document.createElement('div');
row.classList.add('row')
var col1=document.createElement('div');
col1.classList.add('col');
var col2=document.createElement('div');
col2.classList.add('col');

//inside column 1 creating elements 
var div1=document.createElement('div');
var head=document.createElement('h1')
head.innerHTML="<h4>PROFILE</h4>";
var p=document.createElement('p')
p.innerText="Innovative optimized solution seeker.Excited to be at the deployment phase of my new career as a web developer.I am ambitious, adventurous,assiduous,animated, and an alliteration advocate."
//creating table inside the column
var h1=document.createElement('h1')
h1.innerHTML="<h4>SKILLS</h4>"
div1.append(head,p,h1);
function mytable(arr,name){
    var tbl=document.createElement("table")
    var tblbody=document.createElement("tbody")

    tbl.createCaption().innerText=name;
    
    for(var i=0;i<arr.length;i++)
    {
        var my_row=document.createElement("tr");
        for(var j=0;j<7;j++)
        {
            
            var my_col=document.createElement("td");
            
            my_col.textContent= arr[i]
            
            
        }
            var range=document.createElement("input");
            range.setAttribute("type","range");
            range.setAttribute("value","4");
            
            
            my_col.append(range);
            my_row.appendChild(my_col);
        
        tblbody.appendChild(my_row);
    }
tbl.appendChild(tblbody);
return div1.append(tbl);
}
var techskills=['JavaScript','css','HTML','React','Redux','Mongo','Deployment'];
var t1=mytable(techskills,'Technical Skills');
var additionalskills=['ProjectManagement','recruitment','BusinessDevelopment','Editing','FundRaising']
var t2=mytable(additionalskills,'Additional Skills')

//creating another column of elements
var div2=document.createElement('div')
var heading=document.createElement('h1')
    heading.innerHTML="<h4>WORK EXPERIENCE</h4>"
    div2.append(heading)

    //function to creating a list elements
    function mylist(city,arr1){
    var ul=document.createElement('ul');
    ul.innerText=city;
    for(var i=0;i<=3;i++)
    {
        var li=document.createElement('li');
        li.textContent=arr1[i];
        ul.appendChild(li);
        
    }
    
        return div2.appendChild(ul) 
}

var lists=["Lead and execute all phases of event planning and production spanning committee recruitment,training,vendor relationships andon-site facilitation.",
'Brought new business to the organization through rentless networking and stewardship which helped the company win the bid for theState Department Summit on the Middle East and, the companies largest civic event to date,the United State of Women.',
'Exercise fiscal control over budget creation,tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.']
var li1=mylist('C3 Presents, Washington DC',lists);
var list2=['Arranging presentations and pitch deck.','Designing a PR plan and establishing important focus points.','Designing,creating and managing content across multiple communication platforms.','Building relationships with key media players.']

var li2=mylist('Gay & Lesbian Elder Housing,Los Angeles',list2)

//creating another list element-"Education"
var heading2=document.createElement('h1')
heading2.innerHTML="<h4>EDUCATION</h4>"
div2.append(heading2)

var education1=['Developed a full-stack web application,RenewUusing React that allows users to explore various aspects of meditation. Users progress is strored on a backend created usingode and MongoDB.',"Developed a language learningapp,Foodiephonetics using spaced repetition and a linkedlist data structure.React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.",'Developed a concierge app,"pley",for individuals looking for curated suggestions when visiting a new place. React was used to develop the frontend which includes real-time chat,drag and drop and variety of advanced features. the backend,built using Node,Express,and Mongo,takes advantage of well-devloped RESTful API, Geospatial searching, and user authentication with JWT.']
var li3=mylist('Project-focused intensive program with emphasis on Mongo,Express,React,and JavaScript(MERN)technical stack.',education1)


col1.appendChild(div1)
col2.appendChild(div2)
row.append(col1,col2);
container.append(row)
document.body.append(container)