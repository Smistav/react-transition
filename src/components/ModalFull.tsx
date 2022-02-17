import { useRef } from 'react'
import { Transition } from 'react-transition-group'

type ModalFullProps = {
  open: boolean
  setOpen: (arg: boolean) => void
  element: string
  widthBegin: number
  heightBegin: number
}

export const ModalFull: React.FC<ModalFullProps> = ({
  open,
  setOpen,
  element,
  widthBegin,
  heightBegin,
}) => {
  const widthEnd = 1400
  const heightEnd = 800
  const second = 500
  const effect = 'ease-out'

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${widthBegin}px`,
    height: `${heightBegin}px`,
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    zIndex: 2,
    padding: '20px',
    border: '1px solid transparent',
  }
  const buttonStyle = {
    position: 'absolute',
    padding: '0',
    margin: '0',
    border: 'none',
    backgroundColor: 'grey',
    borderRadius: '5px',
    width: '40px',
    height: '40px',
  }
  const transition = {
    transitionStyles: {
      entering: {},
      entered: {
        top: 45,
        left: 0,
        width: `${widthEnd}px`,
        height: `${heightEnd}px`,
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid grey',
        transition: `all ${second}ms ${effect}`,
      },
      exiting: {
        top: 0,
        left: 0,
        width: `${widthBegin}px`,
        height: `${heightBegin}px`,
        padding: '20px',
        backgroundColor: 'transparent',
        transition: `all ${second}ms ${effect}`,
      },
      exited: {},
    } as { [key: string]: React.CSSProperties },
  }
  const modalRef = useRef<HTMLElement | null>(null)
  ;(function calculationShift() {
    const xCenter = window.innerWidth / 2
    const yCenter = window.innerHeight / 2
    const elementBegin = document.querySelector(`#${element}`)
    const y = elementBegin?.getBoundingClientRect()?.y
    const x = elementBegin?.getBoundingClientRect()?.x
    y && (transition.transitionStyles.entered.top = yCenter - y - heightEnd / 2)
    x && (transition.transitionStyles.entered.left = xCenter - x - widthEnd / 2)
  })()

  return (
    <>
      <Transition nodeRef={modalRef} in={open} timeout={{ enter: 0, exit: second }}>
        {(state) => (
          <div
            ref={modalRef as React.RefObject<HTMLDivElement>}
            style={{
              ...(defaultStyle as React.CSSProperties),
              ...transition.transitionStyles[state],
            }}
          >
            <div
              style={{ ...(buttonStyle as React.CSSProperties) }}
              onClick={() => setOpen(!open)}
            ></div>
          </div>
        )}
      </Transition>
    </>
  )
}
