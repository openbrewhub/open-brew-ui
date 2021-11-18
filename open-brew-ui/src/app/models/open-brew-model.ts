
export interface Description {
    language: string;
    text: string;
}

export interface Description2 {
    language: string;
    text: string;
}

export interface MatureTime {
    amount: number;
    timeUnit: string;
    hint: string;
    descriptions: Description2[];
}

export interface OriginalWort {
    amount: number;
    ratioUnit: string;
}

export interface AlcoholContent {
    amount: number;
    ratioUnit: string;
}

export interface Bitterness {
    amount: number;
    tasteUnit: string;
}

export interface CarbonDioxide {
    amount: number;
    ratioUnit: string;
}

export interface Address {
    street: string;
    zip: string;
    city: string;
    federateState: string;
    country: string;
}

export interface Geo {
    latitude: number;
    longitude: number;
}

export interface Author {
    private: boolean;
    brewery: string;
    brewMaster: string;
    url: string;
    phone: string;
    address: Address;
    geo: Geo;
}

export interface Alkalinity {
    amount: number;
    chemicalUnit: string;
}

export interface Water {
    alkalinity: Alkalinity;
}

export interface RelativeAmount {
    amount: number;
    ratioUnit: string;
}

export interface Color {
    amount: number;
    colorUnit: string;
}

export interface Solid {
    name: string;
    type: string;
    relativeAmount: RelativeAmount;
    color: Color;
}

export interface Hop {
    name: string;
    alpha: number;
    shape: string;
    type: string;
}

export interface YeastAmount {
    amount: number;
    ratioUnit: string;
}

export interface Yeast {
    name: string;
    yeastAmount: YeastAmount;
    starterNeeded: boolean;
}

export interface Ingredients {
    water: Water;
    solids: Solid[];
    hops: Hop[];
    yeast: Yeast;
}

export interface MashInTemperature {
    amount: number;
    tempUnit: string;
}

export interface TargetTemperature {
    amount: number;
    tempUnit: string;
}

export interface RestingTime {
    amount: number;
    timeUnit: string;
}

export interface Rest {
    name: string;
    withStirring: boolean;
    targetTemperature: TargetTemperature;
    restingTime: RestingTime;
}

export interface Mashing {
    mashInTemperature: MashInTemperature;
    rests: Rest[];
}

export interface Sparging {
    missing: string;
    restingTimeInMinutes: number;
    amountOfWater: number;
}

export interface YeastAmount2 {
    amount: number;
    weightUnit: string;
}

export interface Fermentation {
    missing: string;
    yeastName: string;
    yeastAmount: YeastAmount2;
}

export interface Brewing {
    mashing: Mashing;
    sparging: Sparging;
    fermentation: Fermentation;
}

export class OpenBrew {
    openBrewVersion: string = "";
    encoding: string = ""
    recipeName: string = ""
    recipeVersion: number = 0;
    createDate: Date = new Date();
    changeDate: Date = new Date();
    brewStyle: string = "";
    descriptions: Description[] = [];
    matureTime: MatureTime = {} as MatureTime;
    originalWort: OriginalWort = {} as OriginalWort;
    alcoholContent: AlcoholContent = {} as AlcoholContent;
    bitterness: Bitterness = {} as Bitterness;
    carbonDioxide: CarbonDioxide = {} as CarbonDioxide;
    author: Author = {} as Author;
    ingredients: Ingredients = {} as Ingredients;
    brewing: Brewing = {} as Brewing;
}



