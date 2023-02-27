import React from 'react'
import { useNavigate } from 'react-router-dom';
import css from './Home.module.scss'
import { homeMenu } from '../../services/mainMenu'
import Details from '../details/Details';
import AboutUs from '../details/AboutUs';
import logo from '../../logo.png'


const Home = () => {
    const nav = useNavigate()

    return (
        <div dir='rtl' className='container text-center'>
            <img src={logo} alt="" />
             <h2 className='my-4'>ברוכים הבאים למסעדת אסאדו</h2>
            <AboutUs/>

            <h2 className='mb-3 mt-5'>תפריט ראשי</h2>
            <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
                {homeMenu.map(a =>
                    <div key={a.name} onClick={() => { nav(`menu/${a.category}`) }} className={`card m-2 ${css.card}`} style={{ backgroundColor: '#fbf8ee' }}>
                        <div className='card-body'>
                            <h2 className='card-title'>{a.name}</h2>
                            <img className='w-100 mx-auto' src={a.image} alt={a.name} />
                        </div>
                    </div>

                )}
            </div>

            <Details/>
        </div>
    )
}

export default Home