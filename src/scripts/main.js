console.log("Welcome to the main module")

import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
    console.log(plan)
}

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed)


addPlant(asparagusSeed)
addPlant(cornSeed)
addPlant(potatoSeed)
addPlant(soybeanSeed)
addPlant(sunflowerSeed)
addPlant(wheatSeed)


const plantValue = usePlants()
console.log(plantValue)

import { plantSeeds } from "./tractor.js"

const harvest = plantSeeds(yearlyPlan)
console.log(harvest)