import React from 'react';
import { MDBFooter, MDBContainer} from 'mdb-react-ui-kit';
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import css from './Footer.module.scss'

export default function App() {
    return (
        <footer className={`${css.footerContainer}`}>
        <MDBFooter className={`text-center text-white bg-secondary ${css.footer}`} /* style={{ backgroundColor: '#f1f1f1' }} */>
            <MDBContainer dir='rtl' className='pt-4'>
                <section className='mb-2'>
                    <button onClick={() => { window.open('https://goo.gl/maps/sTf2Q6Doag9pmBqN6', '_blank') }} className={`btn btn-outline-dark mx-2 ${css.btn}`}>
                        <SlLocationPin />
                    </button>

                    <button onClick={() => { window.open('tel:039607843', '_blank') }} className={`btn btn-outline-dark mx-2 ${css.btn}`}>
                        <AiOutlinePhone />
                    </button>

                    <button onClick={() => { window.open('https://api.whatsapp.com/send?phone=972547427843', '_blank') }} className={`btn btn-outline-dark mx-2 ${css.btn}`}>
                        <BsWhatsapp />
                    </button>

                    <button onClick={() => { window.open('mailto:asado.tlv@gmail.com', '_blank') }} className={`btn btn-outline-dark mx-2 ${css.btn}`}>
                        <MdOutlineEmail />
                    </button>
                </section>
            </MDBContainer>

            <div className='text-center text-dark p-3 bg-secondary' /* style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} */>
                © Racheli Sasonkin 2023
            </div>
        </MDBFooter>
        </footer>
    );
}