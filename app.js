let amigos = [];

function agregarAmigo() {
   let input = document.getElementById("amigo");
   let amigoNombre = input.value.trim();

   if (!amigoNombre) {
      alert("Por favor, inserte un nombre");
      return;
   }

   amigos.push(amigoNombre);
   input.value = "";
   mostrarListaAmigo();  
}

function mostrarListaAmigo() {
   let listaAmigos = document.querySelector("#listaAmigos");
   listaAmigos.innerHTML = "";

   for (let i = 0; i < amigos.length; i++) {
     listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
   }
}

function sortearAmigo() {
   if (amigos.length === 0) {
     alert("Por favor, inserte un nombre antes de sortear");
   } else {
     let indice = Math.floor(Math.random() * amigos.length);
     document.querySelector("#resultado").innerHTML = amigos[indice];
   }
}



