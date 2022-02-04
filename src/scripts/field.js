const plantField = []

export const addPlant = (seedObject) => {
    plantField.push(seedObject)

}

export const usePlants = () => {

    return plantField.map(plant => ({...plant}))
}




