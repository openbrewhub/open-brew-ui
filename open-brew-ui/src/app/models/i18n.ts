const nameof = <T>(name: Extract<keyof T, string>): string => name;

class I18nTranslation {

    constructor(private json: any, private language: string, private category: string) {

    }

    getTranslation(key: string, plural: boolean = false) {
        try {
            return this.json[this.language][this.category][key].translation;

        }
        catch {
            return `{{${key}}}`;
        }
    }
}


class Translation {
    key: string = "";
    key_plural: string = "";
}

class Menu extends I18nTranslation {
    LANGUAGE: Translation;
    PRICING: Translation;
    SIGNUP: Translation;

    constructor(json: any, language: string) {
        super(json, language, "menu")
        this.LANGUAGE = this.getTranslation("LANGUAGE");
        this.PRICING = this.getTranslation("PRICING");
        this.SIGNUP = this.getTranslation("SIGNUP");
    }
}

class Recipes extends I18nTranslation {
    WORT: Translation | never = new Translation();
    MATURE: Translation | never = new Translation();
    YEAST: Translation | never = new Translation();
    MASH: Translation | never = new Translation();
    MALT: Translation | never = new Translation();
    BREWINGWATER: Translation | never = new Translation();
    HOP: Translation | never = new Translation();
    CARBONDIOXIDE: Translation | never = new Translation();
    BITTERNESS: Translation | never = new Translation();
    ALCOHOL: Translation | never = new Translation();

    constructor(json: any, language: string) {
        super(json, language, "recipe");

        this.WORT = this.getTranslation("WORT");
        this.MATURE = this.getTranslation("MATURE");
        this.MASH = this.getTranslation("MASH");
        this.YEAST = this.getTranslation("YEAST");
        this.MALT = this.getTranslation("MALT");
        this.BREWINGWATER = this.getTranslation("BREWINGWATER");
        this.HOP = this.getTranslation("HOP");
        this.CARBONDIOXIDE = this.getTranslation("CARBONDIOXIDE");
        this.BITTERNESS = this.getTranslation("BITTERNESS");
        this.ALCOHOL = this.getTranslation("ALCOHOL");
    }
}

export class i18n {
    menu: Menu = {} as Menu;
    recipes: Recipes = {} as Recipes;

    constructor(private json: any, private language: string) {
        this.menu = new Menu(json, language);
        this.recipes = new Recipes(json, language);
    }
}
