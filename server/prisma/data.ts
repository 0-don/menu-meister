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
  dish_recipes?: { name: string; recipeId: number }[];
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
  { key: "CASHEW_NUT", value: "Cashewnuss" },
  { key: "SPELT_GREEN_SPELT", value: "Dinkel/ Grünkern" },
  { key: "EGGS", value: "Eier" },
  { key: "PEANUTS", value: "Erdnüsse" },
  { key: "FISH", value: "Fisch" },
  { key: "BARLEY_MALT", value: "Gerste (Malz)" },
  { key: "GLUTEN", value: "Gluten" },
  { key: "OATS", value: "Hafer" },
  { key: "HAZELNUT", value: "Haselnuss" },
  { key: "HONEY", value: "Honig" },
  { key: "LEGUME", value: "Hülsenfrucht" },
  { key: "HYBRID_STRAINS_GLUTEN", value: "Hybridstämme (Gluten)" },
  { key: "KAMUT_KHORASAN_WHEAT", value: "Kamut/ Khorasanweizen" },
  { key: "CRUSTACEANS", value: "Krustentiere" },
  { key: "LUPIN", value: "Lupine" },
  { key: "ALMOND", value: "Mandel" },
  { key: "MILK_PROTEIN", value: "Milcheiweiß" },
  { key: "MILK_AND_DAIRY_PRODUCTS", value: "Milch und Milcherzeugnisse" },
  { key: "BRAZIL_NUT", value: "Paranuss" },
  { key: "PECAN_NUT", value: "Pecannuss" },
  { key: "PISTACHIO", value: "Pistazie" },
  { key: "QUEENSLAND_NUT_MACADAMIA", value: "Queensland-/ Macadamianuss" },
  { key: "RYE", value: "Roggen" },
  { key: "NUTS", value: "Schalenfrucht" },
  { key: "CELERY", value: "Sellerie" },
  { key: "MUSTARD", value: "Senf" },
  { key: "SESAME", value: "Sesam" },
  { key: "SOY", value: "Soja" },
  { key: "OTHER_TYPES_OF_WHEAT", value: "sonstige Weizenarten" },
  { key: "WALNUT", value: "Walnuss" },
  { key: "MOLLUSCS", value: "Weichtiere" },
  { key: "WHEAT", value: "Weizen" },
  { key: "CITRUS_FRUIT", value: "Zitrusfrucht" },
  { key: "FLAVORS", value: "Aromen" },
  { key: "BERRIES", value: "Beerenobst" },
  { key: "POLLEN_SPICE_ALLERGY", value: "Pollen-Gewürzallergie" },
  { key: "MUSHROOMS", value: "Pilze" },
  { key: "POME_FRUIT", value: "Kernobst" },
  { key: "TROUT", value: "Forelle" },
  { key: "HERRING", value: "Hering" },
  { key: "CARAWAY", value: "Kümmel" },
  { key: "HERB_ALLERGY", value: "Küchenkräuter Allergie" },
  { key: "TOMATOS", value: "Tomaten" },
  { key: "CORN_ALLERGY", value: "Mais Allergie" },
  { key: "FENNEL", value: "Fenchel" },
  {
    key: "SUGAR_INTOLERANCE",
    value: "Zuckerintoleranz",
  },
  { key: "BASIL", value: "Basilikum" },
  { key: "LOVAGE", value: "Liebstöckel" },
  { key: "LEEK_ALLERGY", value: "Lauch Allergie" },
  { key: "FLAXSEED", value: "Leinsamen" },
  { key: "SULFUR_DIOXIDE_AND_SULFITES", value: "Schwefeldioxid und Sulphite" },
];

export const ADDITIVES = [
  { key: "RAISING_AGENT", value: "Backtriebmittel" },
  { key: "CONTAINS_QUININE", value: "chininhaltig" },
  { key: "CONTAINS_CAFFEINE", value: "coffeinhaltig" },
  { key: "EMULSIFIER", value: "Emulgator" },
  {
    key: "CONTAINS_A_SOURCE_OF_PHENYLALANINE",
    value: "enthält eine Phenylalaninquelle",
  },
  { key: "FIRMING_AGENT", value: "Festigungsmittel" },
  { key: "HUMECTANT", value: "Feuchthaltemittel" },
  { key: "FILLER", value: "Füllstoff" },
  { key: "GELLING_AGENT", value: "Geliermittel" },
  { key: "BLACKENED", value: "geschwärzt" },
  { key: "SULPHURED", value: "geschwefelt" },
  { key: "WAXED", value: "gewachst" },
  {
    key: "MAY_HAVE_A_LAXATIVE_EFFECT_IF_CONSUMED_IN_EXCESS",
    value: "kann bei übermaßigem Verzehr abführend wirken",
  },
  { key: "FLOUR_TREATMENT_AGENT", value: "Mehlbehandlungsmittel" },
  { key: "WITH_ANTIOXIDANTS", value: "mit Antioxidationsmittel" },
  { key: "WITH_EGG_WHITE", value: "mit Eiklar" },
  { key: "WITH_COLOR_STABILIZERS", value: "mit Farbstabilisatoren" },
  { key: "WITH_COLORANT", value: "mit Farbstoff" },
  { key: "WITH_FLAVOR_ENHANCER", value: "mit Geschmacksverstärker" },
  { key: "WITH_IODIZED_SALT", value: "mit Jodsalz" },
  { key: "WITH_COMPLEXING_AGENTS", value: "mit Komplexbildnern" },
  { key: "WITH_PRESERVATIVES", value: "mit Konservierungsstoffen" },
  { key: "WITH_MILK_PROTEIN", value: "mit Milcheiweiß" },
  { key: "WITH_MINERALS", value: "mit Mineralstoffen" },
  { key: "WITH_WHEY_PROTEIN", value: "mit Molkeneiweiß" },
  { key: "WITH_PLANT_PROTEIN", value: "mit Pflanzeneiweiß" },
  { key: "WITH_PHOSPHATE", value: "mit Phosphat" },
  { key: "WITH_ACID", value: "mit Säuerungsmittel" },
  { key: "WITH_FOAMING_AGENTS", value: "mit Schaummitteln" },
  { key: "WITH_SWEETENERS", value: "mit Süßungsmitteln" },
  {
    key: "WITH_SUGARS_OR_SWEETENERS",
    value: "mit Zuckerarten oder Süßungsmitteln",
  },
  {
    key: "WITH_SUGARS_AND_SWEETENERS",
    value: "mit Zuckerarten und Süßungsmittel",
  },
  { key: "WITH_SUGAR_SUBSTITUTES", value: "mit Zuckeraustauschstoffen" },
  { key: "MODIFIED_STARCH", value: "Modifizierte Stärke" },
  { key: "NITRATE_NITRITE", value: "Nitrat/Nitrit" },
  { key: "ACID_REGULATOR", value: "Säureregulator" },
  { key: "ANTI_FOAMING_AGENT", value: "Schaumverhüter" },
  { key: "MELTING_SALT", value: "Schmelzsalz" },
  { key: "SULPHUR_DIOXIDE_AND_SULPHITES", value: "Schwefeldioxid und Sulfite" },
  { key: "STABILIZER", value: "Stabilisator" },
  { key: "CONTAINS_TAURINE", value: "taurinhaltig" },
  { key: "CARRIER", value: "Trägerstoff" },
  { key: "PROPELLANT_GAS", value: "Treibgas" },
  { key: "ANTI_CAKING_AGENT", value: "Trennmittel" },
  { key: "GLAZING_AGENT", value: "Überzugsmittel" },
  { key: "MADE_WITH_MILK", value: "unter Verwendung von Milch" },
  { key: "MADE_WITH_CREAM", value: "unter Verwendung von Sahne" },
  { key: "THICKENER", value: "Verdickungsmittel" },
  { key: "VITAMIN_EFFECTIVE", value: "Vitaminwirksam" },
];

export const PROPERTIES = [
  { key: "ALCOHOL", value: "Alkohol" },
  { key: "IRRADIATED", value: "bestrahlt" },
  { key: "ORGANIC", value: "Biologisch" },
  { key: "DGE", value: "DGE" },
  { key: "POULTRY", value: "Geflügel" },
  { key: "GENETICALLY_MODIFIED", value: "gentechnisch verändert" },
  { key: "HALAL", value: "Halal" },
  { key: "GARLIC", value: "Knoblauch" },
  { key: "KOSHER", value: "Kosher" },
  { key: "LACTOSE", value: "Laktose" },
  { key: "LAMB", value: "Lammfleisch" },
  { key: "MSC", value: "MSC" },
  { key: "MUSCLE_MEAT", value: "Muskelfleisch" },
  { key: "TREATED_AFTER_HARVEST", value: "nach der Ernte behandelt" },
  { key: "REGIONAL", value: "Regional" },
  { key: "BEEF", value: "Rindfleisch" },
  { key: "PORK", value: "Schweinefleisch" },
  {
    key: "PACKAGED_IN_PROTECTIVE_ATMOSPHERE",
    value: "unter Schutzatmosphäre verpackt",
  },
  { key: "VEGAN", value: "Vegan" },
  { key: "VEGETARIAN", value: "Vegetarisch" },
  { key: "GAME_MEAT", value: "Wildfleisch" },
  { key: "FRUCTOSE_MALABSORPTION", value: "Fructose Malabsorption" },
  { key: "GELLING_AGENT_GELATIN", value: "Geliermittel/Gelantine" },
  { key: "DIABETES", value: "Diabetes" },
];

export const CATEGORIES = [
  { key: "SMALL", value: "Klein" },
  { key: "MEDIUM", value: "Mittel" },
  { key: "LARGE", value: "Groß" },
  { key: "DAY_CARE_CENTER", value: "Kita" },
  { key: "CRÈCHE", value: "Krippe" },
  { key: "SCHOOL", value: "Schule" },
  { key: "CHILDREN", value: "Kinder" },
  { key: "CLINIC", value: "Klinik" },
  { key: "CARE", value: "Pflege" },
  { key: "DGE", value: "DGE" },
  { key: "SUPPER", value: "Abendbrot" },
  { key: "ALCOHOLIC", value: "Alkoholisch" },
  { key: "ASIAN", value: "Asiatisch" },
  { key: "CASSEROLE", value: "Auflauf" },
  { key: "BAKED_GOOD", value: "Backware" },
  { key: "SIDE_DISH", value: "Beilage" },
  { key: "ORGANIC", value: "Bio" },
  { key: "ROAST", value: "Braten" },
  { key: "COCKTAIL", value: "Cocktail" },
  { key: "CONVENIENCE", value: "Convenience" },
  { key: "CREAM_MOUSSE", value: "Creme & Mousse" },
  { key: "DESSERT", value: "Dessert" },
  { key: "DIP", value: "Dip" },
  { key: "DRESSING", value: "Dressing" },
  { key: "EGG", value: "Ei" },
  { key: "STEW", value: "Eintopf" },
  { key: "ICE_CREAM", value: "Eiscreme" },
  { key: "DUCK", value: "Ente" },
  { key: "EXTRA", value: "Extra" },
  { key: "HOLIDAY", value: "Feiertag" },
  { key: "FISH", value: "Fisch" },
  { key: "MEAT", value: "Fleisch" },
  { key: "BREAKFAST", value: "Frühstück" },
  { key: "GOOSE", value: "Gans" },
  { key: "POULTRY", value: "Geflügel" },
  { key: "VEGETABLE", value: "Gemüse" },
  { key: "DRINK", value: "Getränk" },
  { key: "GRATINS", value: "Gratins" },
  { key: "H4K", value: "H4K" },
  { key: "HALAL", value: "Halal" },
  { key: "TRADE_GOODS", value: "Handelsware" },
  { key: "DURUM_WHEAT", value: "Hartweizen" },
  { key: "MAIN_COURSE", value: "Hauptspeise" },
  { key: "HOT_DRINK", value: "Heißgetränk" },
  { key: "SAVORY", value: "Herzhaft" },
  { key: "CHICKEN", value: "Huhn" },
  { key: "LEGUME", value: "Hülsenfrucht" },
  { key: "YOGURT_QUARK_DISH", value: "Joghurt- & Quarkspeise" },
  { key: "YOUTH_WELFARE", value: "Jugendhilfe" },
  { key: "YOUTH_WELFARE_MENU", value: "Jugendhilfemenü" },
  { key: "COFFEE", value: "Kaffee" },
  { key: "COFFEE_SPECIALTY", value: "Kaffeespezialität" },
  { key: "VEAL", value: "Kalb" },
  { key: "COLD_DRINK", value: "Kaltgetränk" },
  { key: "RABBIT", value: "Kaninchen" },
  { key: "POTATO", value: "Kartoffel" },
  { key: "CHEESE", value: "Käse" },
  { key: "CHILDRENS_MENU", value: "Kindermenü" },
  { key: "DUMPLINGS", value: "Klöße & Knödel" },
  { key: "LAMB", value: "Lamm" },
  { key: "MEDITERRANEAN", value: "Mediterran" },
  { key: "SEAFOOD", value: "Meeresfrucht" },
  { key: "MILK", value: "Milch" },
  { key: "MILKSHAKE", value: "Milchshake" },
  { key: "WITH_BINDING_AGENT", value: "mit Bindemittel" },
  { key: "LUNCH", value: "Mittagessen" },
  { key: "MUFFIN", value: "Muffin" },
  { key: "MUESLI", value: "Müsli" },
  { key: "BROWN_RICE", value: "Naturreis" },
  { key: "NON_FOOD", value: "Non Food" },
  { key: "FRUIT", value: "Obst" },
  { key: "PASTA", value: "Pasta" },
  { key: "DEPOSIT", value: "Pfand" },
  { key: "PAN_DISH", value: "Pfannengericht" },
  { key: "MUSHROOM", value: "Pilz" },
  { key: "PIZZA", value: "Pizza" },
  { key: "PUDDING", value: "Pudding" },
  { key: "PUREE", value: "Püree" },
  { key: "TURKEY", value: "Pute" },
  { key: "RICE", value: "Reis" },
  { key: "BEEF", value: "Rind" },
  { key: "RAW_FOOD", value: "Rohkost" },
  { key: "JUICE", value: "Saft" },
  { key: "SALAD", value: "Salat" },
  { key: "SAUCE", value: "Sauce" },
  { key: "PORK", value: "Schwein" },
  { key: "SNACK", value: "Snack" },
  { key: "SPIRITS", value: "Spirituosen" },
  { key: "SOUP", value: "Suppe" },
  { key: "SWEET", value: "Süßware" },
  { key: "DISH_OF_THE_DAY", value: "Tagesgericht" },
  { key: "TEA", value: "Tee" },
  { key: "CAKES_AND_TARTS", value: "Torten & Kuchen" },
  { key: "TRADITIONAL", value: "Traditionell" },
  { key: "VEGAN", value: "Vegan" },
  { key: "VEGETARIAN", value: "Vegetarisch" },
  { key: "SNACK", value: "Vesper" },
  { key: "VITAL", value: "Vital" },
  { key: "WHOLEGRAIN_PASTA", value: "Vollkornpasta" },
  { key: "WHOLEGRAIN_PRODUCT", value: "Vollkornprodukt" },
  { key: "APPETIZER", value: "Vorspeise" },
  { key: "WINE", value: "Wein" },
  { key: "GAME", value: "Wild" },
  { key: "WOK_DISH", value: "Wok Gericht" },
  { key: "SAUSAGE", value: "Wurst" },
  { key: "SEASONING_MIX", value: "Würzmischung" },
  { key: "INTERIM_DISH", value: "Zwischengericht" },
];

export const SEASONS = [
  { key: "ALL_YEAR", value: "Ganzjährig" },
  { key: "SPRING", value: "Frühling" },
  { key: "SPRING_SUMMER", value: "Frühling & Sommer" },
  { key: "SUMMER", value: "Sommer" },
  { key: "SUMMER_AUTUMN", value: "Sommer & Herbst" },
  { key: "AUTUMN", value: "Herbst" },
  { key: "AUTUMN_WINTER", value: "Herbst & Winter" },
  { key: "WINTER", value: "Winter" },
  { key: "CHRISTMAS", value: "Weihnachten" },
  { key: "EASTER", value: "Ostern" },
  { key: "YEAR_ROUND", value: "ganzjährig" },
];

export const FOOD_FORMS = [
  { key: "BUILD_UP_NUTRITION", value: "Aufbau-Nahrung" },
  { key: "PERMANENT_DIET", value: "Dauerkost" },
  { key: "DIABETES_MELLITUS", value: "Diabetes mellitus" },
  { key: "DIALYSIS", value: "Dialyse" },
  { key: "EVERS_DIET", value: "Evers-Diät" },
  {
    key: "LIPID_METABOLISM_DISORDERS_DYSLIPOPROTEINEMIAS",
    value: "Fettstoffwechselstörungen (Dyslipoproteinämien)",
  },
  { key: "GOUT", value: "Gicht" },
  { key: "HAY_DIET", value: "Haysche Trennkost" },
  { key: "CANCER", value: "Krebs" },
  { key: "LACTOSE_INTOLERANCE", value: "Lactoseintoleranz" },
  { key: "FOOD_ALLERGIES", value: "Lebensmittelallergien" },
  { key: "LIGHT_FULL_DIET", value: "Leichte Vollkost" },
  { key: "MACROBIOTICS", value: "Makrobiotik" },
  { key: "MACROBIOTICS_NEW_VARIANT", value: "Makrobiotik (= neue Variante)" },
  { key: "OSTEOPOROSIS", value: "Osteoporose" },
  { key: "PUREED_DIET", value: "Passierte Kost" },
  { key: "IRRITABLE_BOWEL_SYNDROME", value: "Reizdarmsyndrom" },
  { key: "RAW_FOOD_DIETS", value: "Rohkost-Ernährungsformen" },
  { key: "DIETARY_FOOD", value: "Schonkost" },
  { key: "SPECIAL_DIET", value: "Sonderkost" },
  { key: "OVERWEIGHT_AND_OBESITY", value: "Übergewicht und Adipositas" },
  { key: "VEGETARIAN_DIET", value: "vegetarische Kost" },
  {
    key: "NUTRIENT_RICH_WHOLE_FOOD_DIET",
    value: "Vitalstoffreiche Vollwertkost",
  },
  { key: "FULL_DIET", value: "Vollkost" },
  { key: "WHOLE_FOOD_NUTRITION", value: "Vollwert-Ernährung" },
  { key: "WAERLAND_DIET", value: "Waerland-Kost" },
  { key: "CELIAC_DISEASE", value: "Zöliakie" },
];

export const KITCHENS = [
  { key: "WHISK", value: "aufschlagen" },
  { key: "BAKE", value: "backen" },
  { key: "BLANCH", value: "blanchieren" },
  { key: "FRY", value: "braten" },
  { key: "STEAM", value: "dämpfen" },
  { key: "STEW", value: "dünsten" },
  { key: "DEEP_FRY", value: "frittieren" },
  { key: "GLAZE", value: "glasieren" },
  { key: "GRATINATE", value: "gratinieren" },
  { key: "GRILL", value: "grillen" },
  { key: "BOIL", value: "kochen" },
  { key: "MARINATE", value: "marinieren" },
  { key: "POACH", value: "pochieren" },
  { key: "BRAISE", value: "poelieren" },
  { key: "SOAK", value: "quellen" },
  { key: "ROAST", value: "rösten" },
  { key: "SAUTÉ", value: "sautieren" },
  { key: "SIMMER", value: "schmoren" },
  { key: "BOIL_GENTLY", value: "sieden" },
  { key: "SOUS_VIDE", value: "Sous Vide" },
  { key: "BAKING", value: "backen" },
  { key: "WHISKING", value: "aufschlagen" },
];
