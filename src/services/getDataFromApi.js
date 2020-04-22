const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchCharacters = () =>
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);        
      let results = [];
      results = data.results.map((el) => ({
        id: el.id,
        name: el.name,
        status: el.status,
        species: el.species,
        image: el.image,
        planet: el.origin.name,
        episodes: el.episode.length
      }));
      return results;
    });

export { fetchCharacters };
