import style from './App.module.scss'
import { useState } from 'react'
import { ModalFull } from './components/ModalFull'

export const App = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const widthBegin = 500
  const heightBegin = 200

  const defaultModale = {
    width: `${widthBegin}px`,
    height: `${heightBegin}px`,
  }
  return (
    <div className={style.component}>
      <div className={style.overlay} onClick={() => setOpen1(false)}>
        <div
          id='modal1'
          style={{ ...defaultModale }}
          className={style.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.button} onClick={() => setOpen1(!open1)}></div>
          <ModalFull
            widthBegin={widthBegin}
            heightBegin={heightBegin}
            open={open1}
            setOpen={setOpen1}
            element={'modal1'}
          />
        </div>
      </div>
      <div className={style.overlay} onClick={() => setOpen2(false)}>
        <div
          id='modal2'
          style={{ ...defaultModale }}
          className={style.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.button} onClick={() => setOpen2(!open2)}></div>
          <ModalFull
            widthBegin={widthBegin}
            heightBegin={heightBegin}
            open={open2}
            setOpen={setOpen2}
            element={'modal2'}
          />
        </div>
      </div>
      <div className={style.overlay} onClick={() => setOpen3(false)}>
        <div
          id='modal3'
          style={{ ...defaultModale }}
          className={style.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.button}></div>
          <ModalFull
            widthBegin={widthBegin}
            heightBegin={heightBegin}
            open={open3}
            setOpen={setOpen3}
            element={'modal3'}
          />
        </div>
      </div>
    </div>
  )
}
