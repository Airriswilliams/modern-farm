import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantPlan) => {

    for (const row of plantPlan) 
    
    for (const plant of row) {
        if (plant === "Corn") {
            let corn = createCorn()
            addPlant(corn)
        }
        else if (plant === "Asparagus") {
            let asparagus = createAsparagus()
            addPlant(asparagus)
        }
        else if (plant === "Potato") {
            let potato = createPotato()
            addPlant(potato)
        }
        else if (plant === "Soybean") {
            let soybean = createSoybean()
            addPlant(soybean)
        }
        else if (plant === "Sunflower") {
            let sunflower = createSunflower()
            addPlant(sunflower)
        }
        else if (plant === "Wheat") {
            let wheat = createWheat
            addPlant(wheat)
        }
    }
    
    return plantPlan


}









// export const addPlant = (seedObject) => {
//     plantField.push(seedObject)

// }