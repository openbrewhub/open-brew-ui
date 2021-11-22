
export interface Description {
    language: string;
    text: string;
}

export interface Image {
    url: string;
    description: Description[];
}

export interface RecipeDescription {
    language: string;
    text: string;
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
    openBrewHubId: number;
    commercialBrewery: boolean;
    breweryName: string;
    brewMasterName: string;
    breweryUrl: string;
    phone: string;
    address: Address;
}

export interface Info {
    recipeName: string;
    recipeVersion: number;
    beerType: string;
    source: string;
    createDate: Date;
    changeDate: Date;
    images: Image[];
    recipeDescription: RecipeDescription[];
    author: Author;
}

export interface ExpectedEfficiency {
    amount: number;
    relativeUnit: string;
}

export interface ExpectedOriginalGravity {
    amount: number;
    ratioUnit: string;
}

export interface ExpectedFinalGravity {
    amount: number;
    ratioUnit: string;
}

export interface AlcoholContent {
    amount: number;
    ratioUnit: string;
}

export interface PhValue {
    amount: number;
    chemicalUnit: string;
}

export interface WaterAlkalinity {
    amount: number;
    chemicalUnit: string;
}

export interface Bitterness {
    amount: number;
    tasteUnit: string;
}

export interface CarbonationLevel {
    amount: number;
    ratioUnit: string;
}

export interface Color {
    amount: number;
    colorUnit: string;
}

export interface VitalStatistics {
    expectedEfficiency: ExpectedEfficiency;
    expectedOriginalGravity: ExpectedOriginalGravity;
    expectedFinalGravity: ExpectedFinalGravity;
    alcoholContent: AlcoholContent;
    PhValue: PhValue;
    waterAlkalinity: WaterAlkalinity;
    bitterness: Bitterness;
    carbonationLevel: CarbonationLevel;
    color: Color;
    _comment: string;
}

export interface Water {
    amount: number;
    volumeUnit: string;
}

export interface WaterTreatment {
    type: string;
    amount: number;
    volumeUnit: string;
}

export interface MashWater {
    water: Water;
    waterTreatment: WaterTreatment[];
}

export interface Portion {
    amount: number;
    weightUnit: string;
}

export interface Solid {
    name: string;
    type: string;
    portion: Portion;
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

export interface Mash {
    suggestedMashTypeDescription: string;
    mashWater: MashWater;
    solids: Solid[];
    rests: Rest[];
}

export interface SpargeWater {
    water: Water;
    waterTreatment: WaterTreatment[];
    targetTemperature: TargetTemperature;
}

export interface Lauter {
    withStirring: boolean;
    restingTime: RestingTime;
    spargeWater: SpargeWater;
}

export interface OverallCookingTime {
    amount: number;
    timeUnit: string;
}

export interface AlphaAcid {
    amount: number;
    chemicalUnit: string;
}

export interface Time {
    amount: number;
    timeUnit: string;
}

export interface Hop {
    name: string;
    alphaAcid: AlphaAcid;
    shape: string;
    type: string;
    use: string;
    time: Time;
}

export interface Boil {
    overallCookingTime: OverallCookingTime;
    targetTemperature: TargetTemperature;
    hops: Hop[];
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

export interface SecondaryFermentation {
    _comment4: string;
}

export interface Fermentation {
    yeast: Yeast;
    targetTemperature: TargetTemperature;
    secondaryFermentation: SecondaryFermentation;
}


export interface MatureProcess {
    targetTemperature: TargetTemperature;
    restingTime: RestingTime;
    descriptions: Description[];
}

export interface Brew {
    mash: Mash;
    lauter: Lauter;
    boil: Boil;
    fermentation: Fermentation;
    matureProcess: MatureProcess;
}

export interface OpenBrew {
    openBrewVersion: string;
    encoding: string;
    info: Info;
    vitalStatistics: VitalStatistics;
    brew: Brew;
}

export class OpenBrewViewModel {
    openBrewVersion: string = "";
    recipeVersion: number = 0;
    createDate: Date = new Date();
    changeDate: Date = new Date();
    brewStyle: string = "";
    description: string = ""
    originalGravity: ExpectedOriginalGravity = {} as ExpectedOriginalGravity;
    alcoholContent: AlcoholContent = {} as AlcoholContent;
    bitterness: Bitterness = {} as Bitterness;
    carbonationLevel: CarbonationLevel = {} as CarbonationLevel;
    author: Author = {} as Author;
    mash: Mash = {} as Mash;
    brew: Brew = {} as Brew;

    constructor(openBrew: OpenBrew, language: string) {
        this.openBrewVersion = openBrew.openBrewVersion;
        this.recipeVersion = openBrew.info.recipeVersion;
        this.createDate = openBrew.info.createDate;
        this.brewStyle = openBrew.info.recipeName;
        this.description = openBrew.info.recipeDescription.find(x => x.language == language)?.text!

        this.originalGravity = openBrew.vitalStatistics.expectedFinalGravity;
        this.alcoholContent = openBrew.vitalStatistics.alcoholContent;
        this.bitterness = openBrew.vitalStatistics.bitterness;
        this.carbonationLevel = openBrew.vitalStatistics.carbonationLevel;

        this.author = openBrew.info.author;
        this.mash = openBrew.brew.mash;
        this.brew = openBrew.brew;
    }
}



