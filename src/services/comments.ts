import { Comments } from "../@types/types";
import { v4 } from "uuid"

export const comments: Comments[] = [
    {
        'name': 'אורית',
        'comment': 'מקום נקי ומרווח, האוכל ממש טעים',
        'id':v4()
    },
    {
        'name': 'משה',
        'comment':'אכלתי אצלכם סטייק אנרטיקוט עם סלט ירוק והלך ממש טוב, ממליץ על הרכב המנה=)',
        'id': v4()
    }
]