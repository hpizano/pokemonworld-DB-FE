import React, {useState} from "react";

const Assign = ({pokemons, trainers, assignTrainer, unassignTrainer}) => {
    const [selectedPoke, setSelectedPoke] = useState('')
    const [selectedTrainer, setSelectedTrainer] = useState('')
    const [pokeToUnassign, setPokeToUnassign] = useState('')

    const pokeNoTrain = pokemons.filter((poke) => {
        return poke.trainer_id === null
    })

    console.log(pokeNoTrain)

    const pokeWithTrain = pokemons.filter((poke)=> {
        return poke.trainer_id !== null
    })

    console.log(pokeWithTrain)

    const assign = (ev) => {
        ev.preventDefault()
        assignTrainer(selectedTrainer, selectedPoke)
    }

    const unassign = (ev) => {
        ev.preventDefault();
        unassignTrainer(pokeToUnassign)
    }

    return(
        <div>
            <div className="assign">
            <h1>Assign</h1>
            <h1>Unassign</h1>
            </div>
            <hr/>
            <div className="form">
            <form onSubmit={assign}>
                <select value={selectedPoke} onChange={ev => setSelectedPoke(ev.target.value)}>
                    <option value="">Choose Pokemon</option>
                    {
                        pokeNoTrain.map((poke) => {
                            return(
                                <option key={poke.id} value={poke.id}>{poke.name}</option>
                            )
                        })
                    }
                </select>
                <p>Will be assign to...</p>
                <select value={selectedTrainer} onChange={ev => setSelectedTrainer(ev.target.value)}>
                    <option value="">Choose a Trainer</option>
                    {
                        trainers.map((train) => {
                            return(
                                <option key={train.id} value={train.id}>{train.name}</option>
                            )
                        })
                    }
                </select>
                <div>
                    <button type="submit">Assign!</button>
                </div>
            </form>
            <form onSubmit={unassign}>
            <select value={pokeToUnassign} onChange={ev => setPokeToUnassign(ev.target.value)}>
                    <option value="">Choose Pokemon</option>
                    {
                        pokeWithTrain.map((poke) => {
                            return(
                                <option key={poke.id} value={poke.id}>{poke.name}</option>
                            )
                        })
                    }
                </select>
                <div>
                    <button type="submit">Unassign!</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Assign