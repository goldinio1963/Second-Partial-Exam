

function PokeSearch(query){
    let url = 'https://pokeapi.co/api/v2/pokemon/' + query + '/abilities/forms';

    const settings = {
        method: 'GET'
    }

    fetch (url, settings)
        .then(result =>{
            console.log(result)
        })
        .catch(err => {
            console.log( err );
        })


}



function watchPokemon () {
    let submitbutton = document.querySelector('.js-search-form')

    submitbutton.addEventListener('submit', (event) => {
        console.log("working");
        event.preventDefault();
        let query = document.getElementById('query').value;

        PokeSearch(query);

    })
}

function init(){
    watchPokemon()

}

init()