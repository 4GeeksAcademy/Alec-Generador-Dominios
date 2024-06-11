window.onload = () =>{
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    let generarDominio = (pronoun, adj, noun) => {
        let dominios = "";
        pronoun.forEach(pro => {
            adj.forEach(ad => {
                noun.forEach(nom => {
                    dominios += `<li>${pro}${ad}${nom}.com</li>`;
                    
                });
            });
        });
        document.getElementById("dominios").innerHTML = dominios;
    }
    generarDominio(pronoun, adj, noun);
}
