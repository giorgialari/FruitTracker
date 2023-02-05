export interface Fruit {
    genus: string,
    name: string,
    id: number,
    family: string,
    order: string,
    nutritions: nutritions
}

export interface nutritions {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number
}