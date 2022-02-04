export const createCorn = () => {
    const cornObject = {}
    cornObject.type = "Corn",
    cornObject.height = 180,
    cornObject.output = 6

    let cornArray = []

    cornArray.push(cornObject)
    cornArray.push(cornObject)

    return cornArray
}