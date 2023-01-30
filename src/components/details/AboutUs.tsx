import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from './AboutUs.module.scss'

const AboutUs = () => {
const nav=useNavigate()

    return (
        <div dir='rtl' className='text-end'>
            <p className='mx-auto w-50'>מסעדת אסאדו נוסדה בשנת 1957 בתל אביב,
                ומאז נודעה כמצוינת ברמתה הגבוהה, הן באיכות וטעם המאכלים והן בשירות המעולה הניתן במקום. <br />
                המסעדה הינה בהשגחה המהודרת של הרב לנדא רבה של בני ברק. <br />
                הנכם מוזמנים לדפדף בתפריט העשיר המוגש לכם כאן באתר, לבחור בארוחה המועדפת עליכם מכל הקטגוריות השונות, ולשלוח לנו. <br />
                בעמוד <span onClick={() => { nav('/comments')}} className={css.link}> לקוחות כותבים </span>
                תוכלו לראות את הרשמים והתגובות מאנשים שהיו כאן לפניכם ולקבל הצצה לחוויית האירוח במסעדתנו - נשמח לראות את התרשמותכם וחוות דעתכם בין הכותבים לטובת האנשים הבאים אחריכם. <br />
                בברכה, צוות מסעדת אסאדו.</p>
        </div>
    )
}

export default AboutUs