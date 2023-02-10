import React from 'react'
import AboutUs from '../details/AboutUs'
import Details from '../details/Details'

const About = () => {
  return (
    <div dir='rtl' className='container mx-auto'>
      <h2 className='my-4'>אודות</h2>
      <AboutUs />

      <div className='mb-3 mt-5 text-end w-50 mx-auto'>
        <h4>תקנון משלוחים</h4>
        <p>
          
          משלוחים מתבצעים ברחבי גוש דן. <br />
          עלות משלוח - 35 ש"ח. <br />
          משלוחים בעיר תל אביב או בקניה מעל 200 ש"ח - ללא עלות.<br />
          הזמנות יתקבלו עד השעה 20:30. הזמנות שיתקבלו לאחר מכן, יישלחו ביום העסקים הבא.
        </p>
      </div>

      <iframe className='my-3' title="find us on the map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.7601723829534!2d34.7814852!3d32.0757348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b83892942b5%3A0x6d23eeea461d5866!2z16nXnNee15Qg15DXkdefINeS15HXmdeo15XXnCAzNSwg16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1675096958172!5m2!1siw!2sil" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" ></iframe>
      <Details />
    </div>
  )
}

export default About