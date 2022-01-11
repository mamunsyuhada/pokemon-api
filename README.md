# Pokedex Proxy API

### Task

- [x] Combine All of that 3 endpoint result and create same response as bellow

  - ```pokemons``` list from ```https://pokeapi.co/api/v2/pokemon?limit=10```
  - ```color``` gets from ```https://pokeapi.co/api/v2/pokemon-species/{{ pokemon }}/```
  - ```types``` & ```image``` get from ```https://pokeapi.co/api/v2/pokemon/{{ pokemon }}/```
 
```js
[
    {
        "color": "green",
        "name": "bulbasaur",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    .
    .
    .
    .
]
```

## How to run it ?

- ```git clone https://github.com/mamunsyuhada/pokemon-api && cd pokemon-api```
- ```npm i```
- ```npm run start``` or ```npm run dev```
