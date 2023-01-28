import React from 'react'
import { useNavigate } from 'react-router-dom';
import css from './Home.module.scss'
import { homeMenu } from '../../services/mainMenu'


const Home = () => {
    const nav = useNavigate()

    return (
        <div dir='rtl' className='container text-center'>
            <h2 className='my-3'>some title</h2>
            <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
                {homeMenu.map(a =>
                    <div key={a.name} onClick={() => { nav(`menu/${a.category}`) }} className={`card m-2 ${css.card}`}>
                        <div className='card-body'>
                            <h2 className='card-title'>{a.name}</h2>
                            <img className='w-100 mx-auto' src={a.image} alt={a.name} />
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Home