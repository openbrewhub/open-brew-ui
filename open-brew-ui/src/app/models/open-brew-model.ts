

export interface Description {
    language: string;
    text: string;
}

export interface MatureTime {
    amount: number;
    timeUnit: string;
    hint: string;
    descriptions: Description[];
}

export class MatureTimeViewModel {
    amount: number = 0;
    timeUnit: string = "";
    hint: string = "";
    description: string = "";

    constructor(descriptions: Description[], language: string) {
        this.description = descriptions.find(x => x.language == language)?.text!
    }
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

export interface OpenBrew {
    openBrewVersion: string;
    encoding: string;
    recipeName: string;
    recipeVersion: number;
    createDate: Date;
    changeDate: Date;
    brewStyle: string;
    descriptions: Description[];
    matureTime: MatureTime;
    originalWort: OriginalWort;
    alcoholContent: AlcoholContent;
    bitterness: Bitterness;
    carbonDioxide: CarbonDioxide;
    author: Author;
    ingredients: Ingredients;
    brewing: Brewing;
}

export class OpenBrewViewModel {
    openBrewVersion: string = "";
    recipeVersion: number = 0;
    createDate: Date = new Date();
    changeDate: Date = new Date();
    brewStyle: string = "";
    description: string = ""
    matureTime: MatureTime = {} as MatureTime;
    originalWort: OriginalWort = {} as OriginalWort;
    alcoholContent: AlcoholContent = {} as AlcoholContent;
    bitterness: Bitterness = {} as Bitterness;
    carbonDioxide: CarbonDioxide = {} as CarbonDioxide;
    author: Author = {} as Author;
    ingredients: Ingredients = {} as Ingredients;
    brewing: Brewing = {} as Brewing;

    constructor(openBrew: OpenBrew, language: string) {
        this.openBrewVersion = openBrew.openBrewVersion;
        this.recipeVersion = openBrew.recipeVersion;
        this.createDate = openBrew.createDate;
        this.brewStyle = openBrew.brewStyle;
        this.description = openBrew.descriptions.find(x => x.language == language)?.text!
        this.matureTime = openBrew.matureTime;
        this.originalWort = openBrew.originalWort;
        this.alcoholContent = openBrew.alcoholContent;
        this.bitterness = openBrew.bitterness;
        this.carbonDioxide = openBrew.carbonDioxide;
        this.author = openBrew.author;
        this.ingredients = openBrew.ingredients;
        this.brewing = openBrew.brewing;
    }
}

export class I18n {
    WORT: string = "";
    MATURE: string = "";
    YEAST: string = "";
    MALT: string = "";
    BREWINGWATER: string = "";
    HOP: string = "";
    CARBONDIOXIDE: string = "";
    BITTERNESS: string = "";
    ALCOHOL: string = "";

    constructor(json: any, language: string) {
        this.WORT = json.recipes.WORT[language];
        this.MATURE = json.recipes.MATURE[language];
        this.YEAST = json.recipes.YEAST[language];
        this.MALT = json.recipes.MALT[language];
        this.BREWINGWATER = json.recipes.BREWINGWATER[language];
        this.HOP = json.recipes.HOP[language];
        this.CARBONDIOXIDE = json.recipes.CARBONDIOXIDE[language];
        this.BITTERNESS = json.recipes.BITTERNESS[language];
        this.ALCOHOL = json.recipes.ALCOHOL[language];
    }
}