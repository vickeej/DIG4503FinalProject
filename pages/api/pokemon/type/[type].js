import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find Pokemon type."};

    let pokemon = getPokemon.typeList(req.query.type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}