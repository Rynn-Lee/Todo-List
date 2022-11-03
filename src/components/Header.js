import { useEffect, useState } from "react"

export const Header = (props) => {
  const [solidBg, setSolidBg] = useState({borderBottom: 'none', fontSize: '13pt', padding: '23px'}) //! Not scrolled DEFAULTS

  useEffect(() => {
    if(props.Scrolled > 30){ //! IF SCROLLED
      setSolidBg({
        borderBottom: '1px solid orange',
        fontSize: '11pt', padding: '20px'
      })
    }
    else{
      setSolidBg({ //! IF NOT SCROLLED
        borderBottom: 'none',
        fontSize: '13pt',
        padding: '23px'
      })
    }
  }, [props.Scrolled])

  
  return (
    <nav className='Nav' style={solidBg}>
      <span className='Logo'>_RynnLee <i className="fa-solid fa-code"></i> Sketch</span>
      <span className='Logo'>Scrolled: {props.Scrolled}</span>
    </nav>
  )
}