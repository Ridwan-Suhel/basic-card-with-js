let data = [
    {
        name: "Ridwan",
        age: 23
    },
    {
        name: "Kaka",
        age: 40
    },
    {
        name: "Alex",
        age: 26
    },
    {
        name: "Romero",
        age: 19
    },
    {
        name: "John",
        age: 23
    },
    {
        name: "Nessam",
        age: 27
    },
    {
        name: "Katy",
        age: 24
    },
]

let info = document.querySelector(".sq-info");


let details = data.map(function(item){
    return "<div>"+ item.name +" is "+ item.age+ " Year\'s old"+"</div>";
});

info.innerHTML = details.join("\n");





