import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import css from './Footer.module.scss'

export default function App() {
    return (
        <>
            <div className={css.border}></div>
            <footer dir='rtl'>
                <MDBFooter style={{ backgroundColor: '#fbf8ee' }}>
                    <MDBContainer dir='rtl' className='pt-4'>
                        <section className='mb-2'>
                            <button onClick={() => { window.open('https://goo.gl/maps/sTf2Q6Doag9pmBqN6', '_blank') }} className={`btn btn-outline-secondary rounded-circle mx-2 ${css.btn}`}>
                                <SlLocationPin />
                            </button>

                            <button onClick={() => { window.open('tel:039607843', '_blank') }} className={`btn btn-outline-secondary rounded-circle mx-2 ${css.btn}`}>
                                <AiOutlinePhone />
                            </button>
                            <button onClick={() => { window.open('https://api.whatsapp.com/send?phone=972547427843', '_blank') }} className={`btn btn-outline-secondary rounded-circle mx-2 ${css.btn}`}>
                                <BsWhatsapp />
                            </button>

                            <button onClick={() => { window.open('mailto:asado.tlv@gmail.com', '_blank') }} className={`btn btn-outline-secondary rounded-circle mx-2 ${css.btn}`}>
                                <MdOutlineEmail />
                            </button>
                        </section>
                    </MDBContainer>

                    <div dir='ltr' className='text-center text-secondary p-3' style={{ backgroundColor: '#fbf8ee' }}>
                        © Racheli Sasonkin 2023
                    </div>
                </MDBFooter>
            </footer>
        </>
    );
}