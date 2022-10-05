import { useEffect, useState } from 'react'

const ZooCollection = () => {

    const [animalArray, setAnimalArray] = useState([])

    useEffect(() => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
            .then(res => res.json())
            .then(json => setAnimalArray(json))
            .catch(err => (console.log(err)))
    }, [])

    return (
        <div>
            { animalArray.map(animal => {
                return (
                    <div key={animal.id}>
                        <img src={animal.image_link} alt={animal.name} width={150}/>
                        <h2>Name: {animal.name}</h2>
                        <h4>Type: {animal.animal_type}</h4>
                        <p>Diet: {animal.diet}</p>
                        <p>Lifespan: {animal.lifespan}yrs</p>
                        <button>Add to Zoo</button>

                        <hr/>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ZooCollection;