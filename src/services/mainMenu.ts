import { Dish, Home } from "../@types/types"
import { v4 } from "uuid"
import { StartersFoccia, StartersSpicy, StartersTchina, StartersChips, StartersCauliflower, StartersEggplanet, StartersLiver, StartersFilloMeat, StartersHumus, SaladsLentil, SaladsLeaves, SaladsChicken, MainSteak, MainBurger, MainBurger3, MainHodu, MainAsado, MainSania, MainSteak2, MainBurgerChildren, MainChest, MainShawarma, MainBurgerVegan, FishMusar, FishSalmon, FishAmnon, DessertsFilloApple, DessertsSofle, DessertsMalbi, DessertsPatifors, DessertsSorve, SoftdrinkWater, SoftdrinkSparklingWater, SoftdrinkSoda, SoftdrinkOrange, SoftdrinkCola, SoftdrinkSprite, SoftdrinkPrigat, SoftdrinkBeer, HotDrinkBlackCoffee, HotDrinkTea, HotDrinkNanaTea, HotDrinkEsspressoCoffee, HotDrinkDoubleEsspressoCoffee, HotDrinkAmericanoCoffee } from './mainMenuImages'

export const homeMenu: Home[] = [
    {
        "category": "starters",
        "name": "פתיחה",
        "image": StartersFilloMeat
    },
    {
        "category": "salads",
        "name": "סלטים",
        "image": SaladsChicken
    },
    {
        "category": "main",
        "name": "עיקרית",
        "image": MainAsado
    },
    {
        "category": "fish",
        "name": "דגים",
        "image": FishSalmon
    },
    {
        "category": "desserts",
        "name": "קינוחים",
        "image": DessertsSofle
    },
    {
        "category": "softDrink",
        "name": "שתיה קלה",
        "image": SoftdrinkOrange
    },
    {
        "category": "hotDrink",
        "name": "שתיה חמה",
        "image": HotDrinkTea
    }
]

export const mainMenu: Dish[] = [
    {
        "category": "starters",
        "name": "פוקצ'ה",
        "image": StartersFoccia,
        "description": "לחם איטלקי אפוי על חלוקי נחל מוגש לצד מטבלי השף",
        "glutenFree": false,
        "vegetarian": true,
        "price": 26,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "מיקס חריפים",
        "image": StartersSpicy,
        "description": "פלפל חריף טרי ומטוגן סחוג ופלפל שיפקה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 18,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "צלחת טחינה ביתית",
        "image": StartersTchina,
        "description": "עם סומק, פפריקה מעושנת ושמן זית",
        "glutenFree": true,
        "vegetarian": true,
        "price": 28,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "צלחת צ'יפס גדולה",
        "image": StartersChips,
        "description": "צלחת צ'יפס גדולה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 38,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "כרובית מטוגנת",
        "image": StartersCauliflower,
        "description": "כרובית עטופה בפירורי לחם, בטיגון עמוק לצד טחינת הבית ורוטב שום",
        "glutenFree": false,
        "vegetarian": true,
        "price": 48,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "חציל על האש",
        "image": StartersEggplanet,
        "description": "חציל שרוף באש גלויה, על טחינה ביתית, וסלסה עגבניות פיקנטית",
        "glutenFree": true,
        "vegetarian": true,
        "price": 48,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "פטה כבד עוף",
        "image": StartersLiver,
        "description": "ממרח כבד עוף, ריבת בצל וטוסטונים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 54,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "מאפה בשר",
        "image": StartersFilloMeat,
        "description": "מאפה בצק עלים ממולא בשר בסגנון מזרחי לצד מטבלי השף",
        "glutenFree": false,
        "vegetarian": false,
        "price": 62,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "starters",
        "name": "חומוס בשר",
        "image": StartersHumus,
        "description": "בשר טחון מטוגן, סלט חצילים שרופים וסחוג על צלחת חומוס. מוגש עם פיתה חמה",
        "glutenFree": false,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "salads",
        "name": "סלט עדשים שחורות",
        "image": SaladsLentil,
        "description": "עלי בייבי גזר בצל סגול צנונית עשבי תיבול אגוזי מלך וחמוציות ברוטב הדרים וסילאן",
        "glutenFree": true,
        "vegetarian": true,
        "price": 62,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "salads",
        "name": "סלט ירוק",
        "image": SaladsLeaves,
        "description": "מיקס עלים ירוקים מלפפון גזר בצל סגול צנונית תערובת גרעיני חמנייה, גרעיני דלעת ושקדים קלויים ברוטב שמן זית ולימון",
        "glutenFree": true,
        "vegetarian": true,
        "price": 58,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "salads",
        "name": "סלט עוף ",
        "image": SaladsChicken,
        "description": "נתחי עוף בגריל על מצע עלים ירוקים מלפפון גזר בצל סגול וצנונית ברוטב שום",
        "glutenFree": true,
        "vegetarian": false,
        "price": 68,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "סטייק פרגית ישראלי",
        "image": MainSteak,
        "description": "צלוי בגריל, מוגש לצד תפוחי אדמה אפויים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 94,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "המבורגר אנטריקוט",
        "image": MainBurger,
        "description": "(250 גרם) בלחמנייה עם חסה, עגבנייה, מלפפון חמוץ, בצל סגול, ואיולי צ'יפוטלה לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 84,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "המבורגר 3 קומות",
        "image": MainBurger3,
        "description": "המבורגר אנטריקוט (250 גרם), מעליו נקניק בקר מעושן וטבעות בצל קריספי, בלחמנייה עם חסה, עגבנייה, בצל סגול ומלפפון חמוץ, ברוטב שום ואיולי צ'יפוטלה לצד צ׳יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 98,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "הודו בסטייל שווארמה",
        "image": MainHodu,
        "description": "רצועות הודו נקבה מוקפצים במחבת בתיבול שווארמה לצד צ'יפס, טחינה ביתית, עמבה, בצל, סומק ופטרוזליה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 78,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "אסאדו, בצלים ופטריות",
        "image": MainAsado,
        "description": "ברוטב ציר בקר, ברביקיו מעושן וסילאן מוגש עם אורז ותערובת שקדים וחמוציות",
        "glutenFree": true,
        "vegetarian": false,
        "price": 118,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "סנייה בשר וחצילים",
        "image": MainSania,
        "description": "בשר טחון בתיבול ערבי אפוי בטחינה חמה מוקרמת סלט חצילים שרופים, סלסת עגבניות וסחוג ירוק",
        "glutenFree": true,
        "vegetarian": false,
        "price": 88,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "סטייק אנטריקוט",
        "image": MainSteak2,
        "description": "(380 גרם) אנטריקוט צלוי על הגריל לצד תפוחי אדמה אפויים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 168,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "המבורגר ילדים",
        "image": MainBurgerChildren,
        "description": "בלחמנייה עם חסה, עגבנייה ומלפפון חמוץ לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "חזה עוף",
        "image": MainChest,
        "description": "חזה עוף בגריל לצד צ'יפס",
        "glutenFree": true,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "שווארמה טבעונית",
        "image": MainShawarma,
        "description": "עשויה מסייטן בתיבול שווארמה לצד צ'יפס טחינה ביתית עמבה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 66,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "main",
        "name": "המבורגר טבעוני",
        "image": MainBurgerVegan,
        "description": "בלחמנייה עם חסה, עגבנייה, בצל סגול ומלפפון חמוץ לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": true,
        "price": 69,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "fish",
        "name": "פילה מוסר ים",
        "image": FishMusar,
        "description": "צלוי בתנור אבן במרינדת עגבניות בצל סגול לימון שום, שמן זית ועשבי תיבול מוגש לצד שעועית ירוקה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 118,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "fish",
        "name": "פילה סלמון",
        "image": FishSalmon,
        "description": "פילה סלמון צלוי בליווי שעועית ירוקה ורוטב שום בצד",
        "glutenFree": true,
        "vegetarian": false,
        "price": 98,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "fish",
        "name": "פילה אמנון",
        "image": FishAmnon,
        "description": "שני פילה אמנון צלויים ברוטב שום לימון ועשבי תיבול, לצד שעועית ירוקה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 74,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "desserts",
        "name": "פילו תפוחים",
        "image": DessertsFilloApple,
        "description": "מאפה אצבעות פילו במילוי תפוחי עץ וקינמון לצד גלידה וניל",
        "glutenFree": false,
        "vegetarian": true,
        "price": 42,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "desserts",
        "name": "סופלה שוקולד",
        "image": DessertsSofle,
        "description": "עוגת שוקולד חמה במילוי שוקולד מריר נמס לצד גלידה וניל",
        "glutenFree": false,
        "vegetarian": true,
        "price": 44,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "desserts",
        "name": "מלבי קוקוס",
        "image": DessertsMalbi,
        "description": "מלבי עשוי מחלב קוקוס עם שברי פיסטוקים קוקוס ומי ורדים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 38,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "desserts",
        "name": "צלחת פטיפורים",
        "image": DessertsPatifors,
        "description": "4 יחידות מיני מתוקים בטעמים משתנים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 42,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "desserts",
        "name": "סורבה",
        "image": DessertsSorve,
        "description": "3 כדורי גלידה סורבה (בטעמים משתנים)",
        "glutenFree": true,
        "vegetarian": true,
        "price": 36,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "מים",
        "image": SoftdrinkWater,
        "description": "500 מ'ל מים נביעות",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "מים מוגזים",
        "image": SoftdrinkSparklingWater,
        "description": "פררלה מים מינרלים טבעיים מוגזים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 30,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "סודה",
        "image": SoftdrinkSoda,
        "description": "קינלי סודה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "מיץ תפוזים/ לימונדה",
        "image": SoftdrinkOrange,
        "description": "מיץ תפוזים/ לימונדה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 16,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "קוקה קולה",
        "image": SoftdrinkCola,
        "description": "קוקה קולה/ קוקה קולה זירו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "ספרייט",
        "image": SoftdrinkSprite,
        "description": "ספרייט/ ספרייט זירו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "מיץ תפוחים/ ענבים",
        "image": SoftdrinkPrigat,
        "description": "פריגת משקה קל תפוחים/ ענבים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "softDrink",
        "name": "מאלטי בירה שחורה",
        "image": SoftdrinkBeer,
        "description": "מאלטי בירה שחורה",
        "glutenFree": false,
        "vegetarian": true,
        "price": 18,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "קפה שחור",
        "image": HotDrinkBlackCoffee,
        "description": "קפה שחור",
        "glutenFree": true,
        "vegetarian": true,
        "price": 10,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "תה",
        "image": HotDrinkTea,
        "description": "תה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "תה נענע",
        "image": HotDrinkNanaTea,
        "description": "תה נענע",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "אספרסו קצר/ ארוך",
        "image": HotDrinkEsspressoCoffee,
        "description": "אספרסו קצר/ ארוך",
        "glutenFree": true,
        "vegetarian": true,
        "price": 10,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "אספרסו כפול",
        "image": HotDrinkDoubleEsspressoCoffee,
        "description": "אספרסו כפול",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "qty": 0
    },
    {
        "category": "hotDrink",
        "name": "אמריקנו",
        "image": HotDrinkAmericanoCoffee,
        "description": "אמריקנו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "qty": 0
    }
]