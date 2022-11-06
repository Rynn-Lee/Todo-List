import { useEffect, useState } from "react"

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

// * --------------------- SCROLL HANDLER -------------------

  const handleScroll = () =>{
    const position = window.scrollY;
    setScrollPosition(position)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    console.log("Scroll even listener has been added");
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("Scroll even listener has been deleted");
    }
  }, []);

// * --------------------- useState -------------------

  const [solidBg, setSolidBg] = useState({borderBottom: 'none', fontSize: '13pt', padding: '23px'}) //! Not scrolled DEFAULTS


// * --------------------- useEffect. Calls every time App.js scrollHandler changes scroll position -------------------

  useEffect(() => {
    if(scrollPosition > 30){ //! IF SCROLLED
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
  }, [scrollPosition])

  
// * --------------------- HTML HEADER -------------------

  return (
    <nav className='Nav' style={solidBg}>
      <span className='Logo'>_RynnLee <i className="fa-solid fa-code"></i> Sketch</span>
      <span className='Logo'>Scrolled: {scrollPosition}</span>
    </nav>
  )
}