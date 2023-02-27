import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import css from './GoToTop.module.scss'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
  }

  const GoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll)
  }, [])

  return (
    <>
      {isVisible && (
        <div className={`btn btn-outline-secondary rounded-circle pt-2 ${css.goToTop}`} onClick={GoToTop}> <AiOutlineArrowUp /></div>
      )}
    </>
  )
}

export default GoToTop