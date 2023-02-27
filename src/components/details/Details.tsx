import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsWhatsapp, BsClock } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import css from './Details.module.scss'

const Details = () => {
    return (
        <div dir='rtl' className='container text-center w-50 mx-auto'>
            <div className='my-5 text-end'>
                <div className='my-2' onClick={() => { window.open('https://goo.gl/maps/sTf2Q6Doag9pmBqN6', '_blank') }}>
                    <button className={`btn btn-outline-secondary rounded-circle ${css.btn}`}>
                        <SlLocationPin />
                    </button>
                    &nbsp; אבן גבירול 35, תל אביב
                </div>

                <div className='my-2' onClick={() => { window.open('tel:039607843', '_blank') }}>
                    <button className={`btn btn-outline-secondary rounded-circle ${css.btn}`}>
                        <AiOutlinePhone />
                    </button>
                    &nbsp; 03-9607843
                </div>

                <div className='my-2' onClick={() => { window.open('https://api.whatsapp.com/send?phone=972547427843', '_blank') }}>
                    <button className={`btn btn-outline-secondary rounded-circle ${css.btn}`}>
                        <BsWhatsapp />
                    </button>
                    &nbsp; 054-7427843
                </div>

                <div className='my-2' onClick={() => { window.open('mailto:asado.tlv@gmail.com', '_blank') }}>
                    <button className={`btn btn-outline-secondary rounded-circle ${css.btn}`}>
                        <MdOutlineEmail />
                    </button>
                    &nbsp; asado.tlv@gmail.com
                </div>

                <div className='my-2'>
                    <button className={`btn btn-outline-secondary rounded-circle ${css.btn}`}>
                        <BsClock />
                    </button>
                    &nbsp;  ימים א-ה: 16:00-23:30
                </div>

            </div>
        </div>
    )
}

export default Details