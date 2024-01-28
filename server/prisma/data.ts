export interface Ingredient {
  allergens: string[];
  additives: string[];
  kitchens: any[];
  properties: string[];
  name: string;
  categories: any[];
  seasons: any[];
  food_forms: any[];
  bls_identifier: string;
  energyKcal: number;
  energyKj: number;
  breadUnits: number;
  carbohydrates: number;
  sugars: number;
  salt: number;
  fats: number;
  saturatedFats: number;
  unsaturatedFats: number;
  protein: number;
}

export interface MealOrRecipe {
  additives: string[];
  allergens: string[];
  categories: string[];
  food_forms: string[];
  id: number;
  kitchens: string[];
  name: string;
  picture?: null | string;
  properties: string[];
  seasons: string[];
  dish_recipes?: { name: string, recipeId: number }[];
  portions?: number;
  recipe_weighing?: number;
  analysis?: number[];
  recipe_ingredients?: RecipeIngredient[];
}

export interface RecipeIngredient {
  amount: number;
  bls_identifier: string;
  factor: number;
  name: string;
  unit: Unit;
}

export type Unit = "g" | "ml" | "l" | "kg";

export const ALLERGENS = [
  "Cashewnuss",
  "Dinkel/ Grünkern",
  "Eier",
  "Erdnüsse",
  "Fisch",
  "Gerste (Malz)",
  "Gluten",
  "Hafer",
  "Haselnuss",
  "Honig",
  "Hülsenfrucht",
  "Hybridstämme (Gluten)",
  "Kamut/ Khorasanweizen",
  "Krustentiere",
  "Lupine",
  "Mandel",
  "Milcheiweiß",
  "Milch und Milcherzeugnisse",
  "Paranuss",
  "Pecannuss",
  "Pistazie",
  "Queensland-/ Macadamianuss",
  "Roggen",
  "Schalenfrucht",
  "Sellerie",
  "Senf",
  "Sesam",
  "Soja",
  "sonstige Weizenarten",
  "Walnuss",
  "Weichtiere",
  "Weizen",
  "Zitrusfrucht",
];

export const ADDITIVES = [
  "Backtriebmittel",
  "chininhaltig",
  "coffeinhaltig",
  "Emulgator",
  "enthält eine Phenylalaninquelle",
  "Festigungsmittel",
  "Feuchthaltemittel",
  "Füllstoff",
  "Geliermittel",
  "geschwärzt",
  "geschwefelt",
  "gewachst",
  "kann bei übermaßigem Verzehr abführend wirken",
  "Mehlbehandlungsmittel",
  "mit Antioxidationsmittel",
  "mit Eiklar",
  "mit Farbstabilisatoren",
  "mit Farbstoff",
  "mit Geschmacksverstärker",
  "mit Jodsalz",
  "mit Komplexbildnern",
  "mit Konservierungsstoffen",
  "mit Milcheiweiß",
  "mit Mineralstoffen",
  "mit Molkeneiweiß",
  "mit Pflanzeneiweiß",
  "mit Phosphat",
  "mit Säuerungsmittel",
  "mit Schaummitteln",
  "mit Süßungsmitteln",
  "mit Zuckerarten oder Süßstoffen",
  "mit Zuckerarten und Süßungsmittel",
  "mit Zuckeraustauschstoffen",
  "Modifizierte Stärke",
  "Nitrat/Nitrit",
  "Säureregulator",
  "Schaumverhüter",
  "Schmelzsalz",
  "Schwefeldioxid und Sulfite",
  "Stabilisator",
  "taurinhaltig",
  "Trägerstoff",
  "Treibgas",
  "Trennmittel",
  "Überzugsmittel",
  "unter Verwendung von Milch",
  "unter Verwendung von Sahne",
  "Verdickungsmittel",
  "Vitaminwirksam",
];

export const PROPERTIES = [
  "Alkohol",
  "bestrahlt",
  "Biologisch",
  "DGE",
  "Geflügel",
  "gentechnisch verändert",
  "Halal",
  "Knoblauch",
  "Kosher",
  "Laktose",
  "Lammfleisch",
  "MSC",
  "Muskelfleisch",
  "nach der Ernte behandelt",
  "Regional",
  "Rindfleisch",
  "Schweinefleisch",
  "unter Schutzatmosphäre verpackt",
  "Vegan",
  "Vegetarisch",
  "Wildfleisch",
];

export const CATEGORIES = [
  "Klein",
  "Mittel",
  "Groß",
  "Kita",
  "Krippe",
  "Schule",
  "Kinder",
  "Klinik",
  "Pflege",
  "DGE",
  "Abendbrot",
  "Alkoholisch",
  "Asiatisch",
  "Auflauf",
  "Backware",
  "Beilage",
  "Bio",
  "Braten",
  "Cocktail",
  "Convenience",
  "Creme & Mousse",
  "Dessert",
  "Dip",
  "Dressing",
  "Ei",
  "Eintopf",
  "Eiscreme",
  "Ente",
  "Extra",
  "Feiertag",
  "Fisch",
  "Fleisch",
  "Frühstück",
  "Gans",
  "Geflügel",
  "Gemüse",
  "Getränk",
  "Gratins",
  "H4K",
  "Halal",
  "Handelsware",
  "Hartweizen",
  "Hauptspeise",
  "Heißgetränk",
  "Herzhaft",
  "Huhn",
  "Hülsenfrucht",
  "Joghurt- & Quarkspeise",
  "Jugendhilfe",
  "Jugendhilfemenü",
  "Kaffee",
  "Kaffeespezialität",
  "Kalb",
  "Kaltgetränk",
  "Kaninchen",
  "Kartoffel",
  "Käse",
  "Kindermenü",
  "Klöße & Knödel",
  "Lamm",
  "Mediterran",
  "Meeresfrucht",
  "Milch",
  "Milchshake",
  "mit Bindemittel",
  "Mittagessen",
  "Muffin",
  "Müsli",
  "Naturreis",
  "Non Food",
  "Obst",
  "Pasta",
  "Pfand",
  "Pfannengericht",
  "Pilz",
  "Pizza",
  "Pudding",
  "Püree",
  "Pute",
  "Reis",
  "Rind",
  "Rohkost",
  "Saft",
  "Salat",
  "Sauce",
  "Schwein",
  "Snack",
  "Spirituosen",
  "Suppe",
  "Süßware",
  "Tagesgericht",
  "Tee",
  "Torten & Kuchen",
  "Traditionell",
  "Vegan",
  "Vegetarisch",
  "Vesper",
  "Vital",
  "Vollkornpasta",
  "Vollkornprodukt",
  "Vorspeise",
  "Wein",
  "Wild",
  "Wok Gericht",
  "Wurst",
  "Würzmischung",
  "Zwischengericht",
];

export const SEASONS = [
  "Ganzjährig",
  "Frühling",
  "Frühling & Sommer",
  "Sommer",
  "Sommer & Herbst",
  "Herbst",
  "Herbst & Winter",
  "Winter",
  "Weihnachten",
  "Ostern",
];

export const FOOD_FORMS = [
  "Aufbau-Nahrung",
  "Dauerkost",
  "Diabetes mellitus",
  "Dialyse",
  "Evers-Diät",
  "Fettstoffwechselstörungen (Dyslipoproteinämien)",
  "Gicht",
  "Haysche Trennkost",
  "Krebs",
  "Lactoseintoleranz",
  "Lebensmittelallergien",
  "Leichte Vollkost",
  "Makrobiotik",
  "Makrobiotik (= neue Variante)",
  "Osteoporose",
  "Passierte Kost",
  "Reizdarmsyndrom",
  "Rohkost-Ernährungsformen",
  "Schonkost",
  "Sonderkost",
  "Übergewicht und Adipositas",
  "vegetarische Kost",
  "Vitalstoffreiche Vollwertkost",
  "Vollkost",
  "Vollwert-Ernährung",
  "Waerland-Kost",
  "Zöliakie",
];

export const KITCHENS = [
  "aufschlagen",
  "backen",
  "blanchieren",
  "braten",
  "dämpfen",
  "dünsten",
  "frittieren",
  "glasieren",
  "gratinieren",
  "grillen",
  "kochen",
  "marinieren",
  "pochieren",
  "poelieren",
  "quellen",
  "rösten",
  "sautieren",
  "schmoren",
  "sieden",
  "Sous Vide",
];
