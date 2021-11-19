class I18nTranslation {

    constructor(private json: any, private language: string, private category: string) {
    }

    getTranslation(key: string, plural: boolean = false) {
        try {
            return this.json[this.language][this.category][key].translation;
        }
        catch {
            return new Translation(`{{${key}}}`);
        }
    }
}

class Translation {
    key: string;
    key_plural: string;

    constructor(key: string = "", key_plural: string = "") {
        this.key = key;
        this.key_plural = key_plural;
    }
}

class Menu extends I18nTranslation {
    LANGUAGE: Translation = new Translation();
    PRICING: Translation = new Translation();
    SIGNUP: Translation = new Translation();

    constructor(json: any, language: string) {
        super(json, language, "menu");

        this.LANGUAGE = this.getTranslation(nameof(this.LANGUAGE))
        this.PRICING = this.getTranslation(nameof(this.PRICING))
        this.SIGNUP = this.getTranslation(nameof(this.SIGNUP))
    }
}

class Recipes extends I18nTranslation {
    WORT: Translation = new Translation();
    MATURE: Translation = new Translation();
    YEAST: Translation = new Translation();
    MASH: Translation = new Translation();
    MALT: Translation = new Translation();
    BREWINGWATER: Translation = new Translation();
    HOP: Translation = new Translation();
    CARBONDIOXIDE: Translation = new Translation();
    BITTERNESS: Translation = new Translation();
    ALCOHOL: Translation = new Translation();

    constructor(json: any, language: string) {
        super(json, language, "recipe");

        this.WORT = this.getTranslation(nameof(this.WORT));
        this.MATURE = this.getTranslation(nameof(this.MATURE))
        this.MASH = this.getTranslation(nameof(this.MASH))
        this.YEAST = this.getTranslation(nameof(this.YEAST))
        this.MALT = this.getTranslation(nameof(this.MALT))
        this.BREWINGWATER = this.getTranslation(nameof(this.BREWINGWATER))
        this.HOP = this.getTranslation(nameof(this.HOP))
        this.CARBONDIOXIDE = this.getTranslation(nameof(this.CARBONDIOXIDE))
        this.BITTERNESS = this.getTranslation(nameof(this.BITTERNESS))
        this.ALCOHOL = this.getTranslation(nameof(this.ALCOHOL))
    }
}

export class i18n {
    menu: Menu = {} as Menu;
    recipes: Recipes = {} as Recipes;

    constructor(json: any, language: string) {
        this.menu = new Menu(json, language);
        this.recipes = new Recipes(json, language);
    }
}
