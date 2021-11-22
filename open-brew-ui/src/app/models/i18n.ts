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

        this.LANGUAGE = this.getTranslation("LANGUAGE");
        this.PRICING = this.getTranslation("PRICING");
        this.SIGNUP = this.getTranslation("SIGNUP");
    }
}

class Recipes extends I18nTranslation {
    ORIGINIAL_GRAVITY: Translation = new Translation();
    MATURE: Translation = new Translation();
    YEAST: Translation = new Translation();
    MASH: Translation = new Translation();
    MALT: Translation = new Translation();
    BREWINGWATER: Translation = new Translation();
    HOP: Translation = new Translation();
    CARBONATIONLEVEL: Translation = new Translation();
    BITTERNESS: Translation = new Translation();
    ALCOHOL: Translation = new Translation();

    constructor(json: any, language: string) {
        super(json, language, "recipe");

        this.ORIGINIAL_GRAVITY = this.getTranslation("ORIGINIAL_GRAVITY");
        this.MATURE = this.getTranslation("MATURE");
        this.MASH = this.getTranslation("MASH");
        this.YEAST = this.getTranslation("YEAST");
        this.MALT = this.getTranslation("MALT");
        this.BREWINGWATER = this.getTranslation("BREWINGWATER");
        this.HOP = this.getTranslation("HOP");
        this.CARBONATIONLEVEL = this.getTranslation("CARBONATIONLEVEL");
        this.BITTERNESS = this.getTranslation("BITTERNESS");
        this.ALCOHOL = this.getTranslation("ALCOHOL");
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
