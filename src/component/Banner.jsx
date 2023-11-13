import React from 'react'
import Image from 'next/image'
import Container from './Container'
import Link from 'next/link'

function Banner({mainclass, Title, Paragraph, ButtonText, buttonhref, imagepath }) {
  return (
    <div className={mainclass}>
        <div className='overlay-inner-sec'></div>
        <Container>
            <div className='sect-fan-bnr'>
                <div className="heroContent">
                    <h1 dangerouslySetInnerHTML={{ __html: Title }}></h1>
                    <p>{Paragraph}</p>
                    <Link href={buttonhref}><button>{ButtonText}</button></Link>
                </div>
                <div className='logo-snip'>
                    <img
                        src={imagepath}
                    />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner
