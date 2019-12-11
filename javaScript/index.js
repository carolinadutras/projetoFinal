const search = document.getElementById('inputItem')
const matchList = document.getElementById('match-list');

//search states,json and filter it 
const searchStates = async searchText =>{

    const res = await fetch('./API/listaMercado.json');
    const states = await res.json();
    console.log(states);
    
   

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');

        return state.name.match(regex) || state.abbr.match(regex)
    });

    console.log(matches)

    if (searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);

    console.log(outputHtml)
};

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match =>
            `<div class = "card card-body mb-1">
            <h4>${match.descricao} </h4>
        </div>
        ` 
    )
    .join('');
    

    matchList.innerHTML = html;
    }
};

search.addEventListener('input', () => searchStates(search.value));

