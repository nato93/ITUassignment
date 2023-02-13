
const button = document.getElementById("fetch-data-button");
const dataContainer = document.getElementById("container");
button.addEventListener("click", () => {

fetch('http://localhost:3000')

.then(function(response){
    return response.json();
})
.then(function(subjects){
let placeholder = document.querySelector("#data-output");
let out = "";
for(let subject of subjects){
    out += `

    <tr>
        <td>${subject.name}</td>
        <td>${subject.gender}</td>
        <td>${subject.age}</td>
        <td>${subject.height}</td>
        <td>${subject.bloodtype}</td>
    </tr>
    `;
    
}

placeholder.innerHTML = out;

})
.catch(error => console.error(error));

});
