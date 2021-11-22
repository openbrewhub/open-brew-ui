
export interface Description {
    language: string;
    text: string;
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
    houseNumber: string;
    zip: string;
    city: string;
    federateState: string;
    country: string;
}

export interface Author {
    commercialBrewery: boolean;
    breweryName: string;
    brewMasterName: string;
    breweryUrl: string;
    phone: string;
    address: Address;
}

export interface Alkalinity {
    amount: number;
    chemicalUnit: string;
}

export interface MashWater {
    amount: number;
    volumeUnit: string;
}

export interface SpargeWater {
    amount: number;
    volumeUnit: string;
}

export interface Water {
    alkalinity: Alkalinity;
    mashWater: MashWater;
    spargeWater: SpargeWater;
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

export interface AlphaAcid {
    amount: number;
    chemicalUnit: string;
}

export interface Hop {
    name: string;
    alphaAcid: AlphaAcid;
    shape: string;
    type: string;
}

export interface Ingredients {
    water: Water;
    solids: Solid[];
    hops: Hop[];
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

export interface Lautering {
}

export interface Cooking {
}

export interface YeastAmount {
    amount: number;
    weightUnit: string;
}

export interface Yeast {
    yeastName: string;
    yeastType: string;
    yeastAmount: YeastAmount;
    yeastStarterNeeded: boolean;
}


export interface ApparentAttenuation {
    amount: number;
    ratioUnit: string;
}

export interface Fermentation {
    yeast: Yeast;
    targetTemperature: TargetTemperature;
    apparentAttenuation: ApparentAttenuation;
}

export interface RestingTime2 {
    amount: number;
    timeUnit: string;
}

export interface MatureProcess {
    targetTemperature: TargetTemperature;
    restingTime: RestingTime2;
    descriptions: Description[];
}

export interface Brewing {
    mashing: Mashing;
    lautering: Lautering;
    cooking: Cooking;
    fermentation: Fermentation;
    matureProcess: MatureProcess;
}

export interface OpenBrew {
    openBrewVersion: string;
    encoding: string;
    recipeName: string;
    recipeVersion: number;
    createDate: Date;
    changeDate: Date;
    brewStyle: string;
    suggestedMashType: string;
    descriptions: Description[];
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
        this.originalWort = openBrew.originalWort;
        this.alcoholContent = openBrew.alcoholContent;
        this.bitterness = openBrew.bitterness;
        this.carbonDioxide = openBrew.carbonDioxide;

        this.author = openBrew.author;
        this.ingredients = openBrew.ingredients;
        this.brewing = openBrew.brewing;
    }
}
