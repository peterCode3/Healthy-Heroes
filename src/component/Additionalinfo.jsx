import React from 'react'
import Container from './Container'

function Additionalinfo({mainclass, SectionTitle, ColumnTitle, FirstParagraph, SecondPargraph, imagepath }) {
  return (
      <div className={mainclass}>
        <Container>
            <div className='title-section'>
                <h2>{SectionTitle}</h2>
            </div>
            <div className='sect-fan-abut'>
                <div className="addicontent">
                    <h3 dangerouslySetInnerHTML={{ __html: ColumnTitle }}></h3>
                    <p dangerouslySetInnerHTML={{ __html: FirstParagraph }}></p>
                </div>
                <div className='add-snip'>
                    <p dangerouslySetInnerHTML={{ __html: SecondPargraph }}></p>
                    <img
                        src={imagepath}
                    />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Additionalinfo
