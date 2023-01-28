import { Dish, Home } from "../@types/types"
import { v4 } from "uuid"

export const homeMenu: Home[] = [
    {
        "category": "starters",
        "name": "פתיחה",
        "image": "https://www.kipa.co.il/userFiles/296656_75ca99b2418671ad7829362ce806696f.jpg"
    },
    {
        "category": "salads",
        "name": "סלטים",
        "image": "https://images1.ynet.co.il/PicServer5/2018/10/18/8830133/1_6.jpg"
    },
    {
        "category": "main",
        "name": "עיקרית",
        "image": "https://www.thekitchencoach.co.il/wp-content/uploads/2021/08/%D7%AA%D7%91%D7%A9%D7%99%D7%9C-%D7%90%D7%A1%D7%90%D7%93%D7%95.-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%A2%D7%96-%D7%AA%D7%9C%D7%9D.jpg"
    },
    {
        "category": "fish",
        "name": "דגים",
        "image": "https://img.mako.co.il/2018/05/02/shutterstock_348679415_c.jpg"
    },
    {
        "category": "desserts",
        "name": "קינוחים",
        "image": "https://cdn.goodlifetv.co.il/wp-content/uploads/2022/02/09182605/%D7%A1%D7%95%D7%A4%D7%9C%D7%94-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93.jpg"
    },
    {
        "category": "softDrink",
        "name": "שתיה קלה",
        "image": "https://st1.foodsd.co.il/Images/Products/large/R367MhABFs.jpg"
    },
    {
        "category": "hotDrink",
        "name": "שתיה חמה",
        "image": "https://st1.foodsd.co.il/Images/Articles/xxl/3n4frt4w6g.jpg"
    }
]

export const mainMenu: Dish[] = [
    {
        "category": "starters",
        "name": "פוקצ'ה",
        "image": "https://1.bp.blogspot.com/-vK1hEuvsn_s/XjMKiEDPkGI/AAAAAAAAPkc/my6-xrrXGjY0h8zdBxnkM-RIkqSyW4LAgCEwYBhgL/s1600/tel-yizhak-1-6.jpg",
        "description": "לחם איטלקי אפוי על חלוקי נחל מוגש לצד מטבלי השף",
        "glutenFree": false,
        "vegetarian": true,
        "price": 26,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "מיקס חריפים",
        "image": "https://meshulamfood.co.il/wp-content/uploads/2021/12/%E2%80%8F%E2%80%8F%D7%A1%D7%9C%D7%98-%D7%A4%D7%9C%D7%A4%D7%9C%D7%99%D7%9D-%D7%97%D7%A8%D7%99%D7%A3.jpg",
        "description": "פלפל חריף טרי ומטוגן סחוג ופלפל שיפקה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 18,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "צלחת טחינה ביתית",
        "image": "https://www.kipa.co.il/userFiles/735-415/296656_7c0f93e2d1bddce6af8f109dde859f71.jpg",
        "description": "עם סומק, פפריקה מעושנת ושמן זית",
        "glutenFree": true,
        "vegetarian": true,
        "price": 28,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "צלחת צ'יפס גדולה",
        "image": "https://ynet-images1.yit.co.il/picserver5/crop_images/2020/07/08/H1Sbv3QmkP/H1Sbv3QmkP_0_0_860_640_0_x-large.jpg",
        "description": "צלחת צ'יפס גדולה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 38,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "כרובית מטוגנת",
        "image": "https://cafetamara.co.il/wp-content/uploads/2020/08/kruvit_metugenet.jpg",
        "description": "כרובית עטופה בפירורי לחם, בטיגון עמוק לצד טחינת הבית ורוטב שום",
        "glutenFree": false,
        "vegetarian": true,
        "price": 48,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "חציל על האש",
        "image": "https://www.foodisgood.co.il/wp-content/uploads/2017/12/eggplant-with-tahini.jpg",
        "description": "חציל שרוף באש גלויה, על טחינה ביתית, וסלסה עגבניות פיקנטית",
        "glutenFree": true,
        "vegetarian": true,
        "price": 48,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "פטה כבד עוף",
        "image": "https://www.krutit.co.il/wp-content/uploads/2021/09/1200-1-764x512.jpg",
        "description": "ממרח כבד עוף, ריבת בצל וטוסטונים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 54,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "מאפה בשר",
        "image": "https://www.kipa.co.il/userFiles/296656_75ca99b2418671ad7829362ce806696f.jpg",
        "description": "מאפה בצק עלים ממולא בשר בסגנון מזרחי לצד מטבלי השף",
        "glutenFree": false,
        "vegetarian": false,
        "price": 62,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "starters",
        "name": "חומוס בשר",
        "image": "https://i0.wp.com/humus101.com/wp-content/uploads/2009/08/Hummus-Meat-Nachmani-TLV.jpg?fit=620%2C465&ssl=1",
        "description": "בשר טחון מטוגן, סלט חצילים שרופים וסחוג על צלחת חומוס. מוגש עם פיתה חמה",
        "glutenFree": false,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "salads",
        "name": "סלט עדשים שחורות",
        "image": "https://img.mako.co.il/2015/12/16/lentilsalad_c.jpg",
        "description": "עלי בייבי גזר בצל סגול צנונית עשבי תיבול אגוזי מלך וחמוציות ברוטב הדרים וסילאן",
        "glutenFree": true,
        "vegetarian": true,
        "price": 62,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "salads",
        "name": "סלט ירוק",
        "image": "https://touchfood.co.il/wp-content/uploads/2017/12/14-1.jpg",
        "description": "מיקס עלים ירוקים מלפפון גזר בצל סגול צנונית תערובת גרעיני חמנייה, גרעיני דלעת ושקדים קלויים ברוטב שמן זית ולימון",
        "glutenFree": true,
        "vegetarian": true,
        "price": 58,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "salads",
        "name": "סלט עוף ",
        "image": "https://images1.ynet.co.il/PicServer5/2018/10/18/8830133/1_6.jpg",
        "description": "נתחי עוף בגריל על מצע עלים ירוקים מלפפון גזר בצל סגול וצנונית ברוטב שום",
        "glutenFree": true,
        "vegetarian": false,
        "price": 68,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "סטייק פרגית בתיבול ישראלי",
        "image": "https://static.wixstatic.com/media/62b0d4_2e0ae510cd854af8b4b8e0a609b46384~mv2.jpg/v1/fill/w_640,h_1094,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/62b0d4_2e0ae510cd854af8b4b8e0a609b46384~mv2.jpg",
        "description": "צלוי בגריל, מוגש לצד תפוחי אדמה אפויים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 94,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "המבורגר אנטריקוט",
        "image": "https://meme-marie.co.il/wp-content/uploads/2022/03/wepik-2022110-5327.jpg",
        "description": "(250 גרם) בלחמנייה עם חסה, עגבנייה, מלפפון חמוץ, בצל סגול, ואיולי צ'יפוטלה לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 84,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "המבורגר 3 קומות",
        "image": "https://medias.hashulchan.co.il/www/uploads/2019/12/shutterstock_499814269-1140x641.jpg",
        "description": "המבורגר אנטריקוט (250 גרם), מעליו נקניק בקר מעושן וטבעות בצל קריספי, בלחמנייה עם חסה, עגבנייה, בצל סגול ומלפפון חמוץ, ברוטב שום ואיולי צ'יפוטלה לצד צ׳יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 98,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "נתחי הודו בסטייל שווארמה",
        "image": "https://www.thekitchencoach.co.il/wp-content/uploads/2020/12/%D7%A9%D7%95%D7%95%D7%90%D7%A8%D7%9E%D7%94-%D7%AA%D7%95%D7%A6%D7%A8%D7%AA-%D7%91%D7%99%D7%AA.-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%A2%D7%96-%D7%AA%D7%9C%D7%9D.jpg",
        "description": "רצועות הודו נקבה מוקפצים במחבת בתיבול שווארמה לצד צ'יפס, טחינה ביתית, עמבה, בצל, סומק ופטרוזליה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 78,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "תבשיל אסאדו, בצלים ופטריות",
        "image": "https://www.thekitchencoach.co.il/wp-content/uploads/2021/08/%D7%AA%D7%91%D7%A9%D7%99%D7%9C-%D7%90%D7%A1%D7%90%D7%93%D7%95.-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%A2%D7%96-%D7%AA%D7%9C%D7%9D.jpg",
        "description": "ברוטב ציר בקר, ברביקיו מעושן וסילאן מוגש עם אורז ותערובת שקדים וחמוציות",
        "glutenFree": true,
        "vegetarian": false,
        "price": 118,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "סנייה בשר וחצילים",
        "image": "https://cdn.goodlifetv.co.il/wp-content/uploads/2021/10/09184613/sinaya.jpg",
        "description": "בשר טחון בתיבול ערבי אפוי בטחינה חמה מוקרמת סלט חצילים שרופים, סלסת עגבניות וסחוג ירוק",
        "glutenFree": true,
        "vegetarian": false,
        "price": 88,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "סטייק אנטריקוט",
        "image": "https://happykitchen.co.il/wp-content/uploads/2019/07/%D7%A1%D7%98%D7%99%D7%99%D7%A7-%D7%90%D7%A0%D7%98%D7%A8%D7%99%D7%A7%D7%95%D7%98.jpg",
        "description": "(380 גרם) אנטריקוט צלוי על הגריל לצד תפוחי אדמה אפויים",
        "glutenFree": true,
        "vegetarian": false,
        "price": 168,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "המבורגר ילדים",
        "image": "https://wemeat.co.il/wp-content/uploads/2021/01/AKP_2139_f_web.jpg",
        "description": "בלחמנייה עם חסה, עגבנייה ומלפפון חמוץ לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "חזה עוף",
        "image": "https://cashcow-cdn.azureedge.net/images/2e1ee7cd-d683-4842-a21c-970c273a8d23.jpg",
        "description": "חזה עוף בגריל לצד צ'יפס",
        "glutenFree": true,
        "vegetarian": false,
        "price": 58,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "שווארמה טבעונית",
        "image": "https://www.krutit.co.il/wp-content/uploads/2020/04/KRT_9519.jpg",
        "description": "עשויה מסייטן בתיבול שווארמה לצד צ'יפס טחינה ביתית עמבה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 66,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "main",
        "name": "המבורגר טבעוני",
        "image": "https://tivoneat.co.il/wp-content/uploads/2016/06/IMG_6182.jpg",
        "description": "בלחמנייה עם חסה, עגבנייה, בצל סגול ומלפפון חמוץ לצד צ'יפס",
        "glutenFree": false,
        "vegetarian": true,
        "price": 69,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "fish",
        "name": "פילה מוסר ים",
        "image": "https://img.mako.co.il/2016/11/27/yonatan_i.jpg",
        "description": "צלוי בתנור אבן במרינדת עגבניות בצל סגול לימון שום, שמן זית ועשבי תיבול מוגש לצד שעועית ירוקה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 118,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "fish",
        "name": "פילה סלמון",
        "image": "https://img.mako.co.il/2018/05/02/shutterstock_348679415_c.jpg",
        "description": "פילה סלמון צלוי בליווי שעועית ירוקה ורוטב שום בצד",
        "glutenFree": true,
        "vegetarian": false,
        "price": 98,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "fish",
        "name": "פילה אמנון",
        "image": "https://st1.foodsd.co.il/Images/Recipes/Recipe-3650-x9ZGoIx0mr.jpg",
        "description": "שני פילה אמנון צלויים ברוטב שום לימון ועשבי תיבול, לצד שעועית ירוקה",
        "glutenFree": true,
        "vegetarian": false,
        "price": 74,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "desserts",
        "name": "פילו תפוחים",
        "image": "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/12/02155146/%D7%A9%D7%98%D7%A8%D7%95%D7%93%D7%9C1.jpg",
        "description": "מאפה אצבעות פילו במילוי תפוחי עץ וקינמון לצד גלידה וניל",
        "glutenFree": false,
        "vegetarian": true,
        "price": 42,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "desserts",
        "name": "סופלה שוקולד",
        "image": "https://cdn.goodlifetv.co.il/wp-content/uploads/2022/02/09182605/%D7%A1%D7%95%D7%A4%D7%9C%D7%94-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93.jpg",
        "description": "עוגת שוקולד חמה במילוי שוקולד מריר נמס לצד גלידה וניל",
        "glutenFree": false,
        "vegetarian": true,
        "price": 44,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "desserts",
        "name": "מלבי קוקוס",
        "image": "https://images1.ynet.co.il/PicServer5/2019/04/22/9201464/1_6.jpg",
        "description": "מלבי עשוי מחלב קוקוס עם שברי פיסטוקים קוקוס ומי ורדים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 38,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "desserts",
        "name": "צלחת פטיפורים",
        "image": "https://cdn.shopify.com/s/files/1/0462/7585/4493/products/IMG-20200823-WA0093_1200x1200.jpg?v=1599402541",
        "description": "4 יחידות מיני מתוקים בטעמים משתנים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 42,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "desserts",
        "name": "סורבה",
        "image": "https://cdn.babamail.co.il/images/recipes_source/4ea76233-ecd3-42fd-8a0a-0b852dfe2b5b.jpg",
        "description": "3 כדורי גלידה סורבה (בטעמים משתנים)",
        "glutenFree": true,
        "vegetarian": true,
        "price": 36,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "מים",
        "image": "https://h7z8m6j8.stackpathcdn.com/wp-content/uploads/2019/04/278165-bottlesADUMA_0002_239005_500ml-2.png",
        "description": "500 מ'ל מים נביעות",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "מים מוגזים",
        "image": "https://images1.ynet.co.il/PicServer4/2015/12/02/6672879/123.png",
        "description": "פררלה מים מינרלים טבעיים מוגזים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 30,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "סודה",
        "image": "https://www.mashkar.co.il/files/catalog/item/thumbsrc/unnamed.jpg",
        "description": "קינלי סודה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "מיץ תפוזים/ לימונדה",
        "image": "https://st1.foodsd.co.il/Images/Products/large/R367MhABFs.jpg",
        "description": "מיץ תפוזים/ לימונדה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 16,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "קוקה קולה",
        "image": "https://careers.cbcgroup.co.il/wp-content/uploads/2020/04/coke-11.png",
        "description": "קוקה קולה/ קוקה קולה זירו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "ספרייט",
        "image": "https://cocacola.co.il/img/products/sprite/sprite-lime/main_product/sprite_lime.png",
        "description": "ספרייט/ ספרייט זירו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "מיץ תפוחים/ ענבים",
        "image": "https://360.eyefeelit.com/SiteContent/ImagesBank/Original/10717.jpg",
        "description": "פריגת משקה קל תפוחים/ ענבים",
        "glutenFree": true,
        "vegetarian": true,
        "price": 15,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "softDrink",
        "name": "מאלטי בירה שחורה",
        "image": "https://aviram.blob.core.windows.net/product-images/7290001594544.PNG",
        "description": "מאלטי בירה שחורה",
        "glutenFree": false,
        "vegetarian": true,
        "price": 18,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "קפה שחור",
        "image": "https://www.ynet.co.il/PicServer3/2013/09/24/4877610/48776087991188490490yes1130.jpg",
        "description": "קפה שחור",
        "glutenFree": true,
        "vegetarian": true,
        "price": 10,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "תה",
        "image": "https://st1.foodsd.co.il/Images/Articles/xxl/3n4frt4w6g.jpg",
        "description": "תה",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "תה נענע",
        "image": "https://liva.co.il/wp-content/uploads/2021/05/Spearmint-tea.jpg",
        "description": "תה נענע",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "אספרסו קצר/ ארוך",
        "image": "https://hamoncafe.co.il/wp-content/uploads/2021/06/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%9C%D7%9E%D7%90%D7%9E%D7%A8%D7%99%D7%9D-%D7%94%D7%9E%D7%95%D7%9F-%D7%A7%D7%A4%D7%94-11.jpg",
        "description": "אספרסו קצר/ ארוך",
        "glutenFree": true,
        "vegetarian": true,
        "price": 10,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "אספרסו כפול",
        "image": "https://michaliscoffee.co.il/wp-content/uploads/2017/12/espresso_kaful-1.jpg",
        "description": "אספרסו כפול",
        "glutenFree": true,
        "vegetarian": true,
        "price": 12,
        "id": v4(),
        "inCart": false
    },
    {
        "category": "hotDrink",
        "name": "אמריקנו",
        "image": "https://www.coffeelovers.co.il/wp-content/uploads/2022/07/%D7%90%D7%99%D7%9A-%D7%9C%D7%94%D7%9B%D7%99%D7%9F-%D7%90%D7%9E%D7%A8%D7%99%D7%A7%D7%A0%D7%95.jpg",
        "description": "אמריקנו",
        "glutenFree": true,
        "vegetarian": true,
        "price": 14,
        "id": v4(),
        "inCart": false
    }
]