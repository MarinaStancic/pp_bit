function getData() {

    return fetch('http://gateway.marvel.com/v1/public/characters?apikey=8af52818657f6cf8ae209f2e74712d5c')
        .then(res => res.json())
        .then(data => data.data.results)
}

export default getData