import style from './App.module.scss'
import { CSSTransition } from 'react-transition-group'
import { useRef, useState } from 'react'

export const App = () => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLElement | null>(null)
  return (
    <div className={style.component}>
      <div className={style.modal}>
        <div className={style.button}></div>
      </div>
      <div className={style.modal}>
        <div className={style.button} onClick={() => setOpen(!open)}></div>
        <CSSTransition nodeRef={modalRef} in={open} timeout={500} classNames={{ ...style }}>
          <div ref={modalRef as React.RefObject<HTMLDivElement>} className={style.modalFull}>
            <div className={style.button} onClick={() => setOpen(!open)}></div>
          </div>
        </CSSTransition>
      </div>
      <div className={style.modal}>
        <div className={style.button}></div>
      </div>
    </div>
  )
}
