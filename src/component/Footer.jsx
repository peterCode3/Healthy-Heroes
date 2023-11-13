import React from 'react'
import Container from './Container'
import Link from 'next/link'

function Footer() {
  return (
    <div className='ssc-ftr'>
      <Container>
        <div className='inr-ftr'>
            <div className='dis-ftr'>
                <p>School Nutrition Industry Professionals</p>
            </div>
            <div className='ssc-contact'>
                <Link href='tel:8008171408'>(800) 817-1408</Link>
            </div>
            <div className='ssc-copy'>
                <p>Copyright © 2022 SNIP - All Rights Reserved.</p>
            </div>
        </div>
      </Container>
    </div>
  )
}
export default Footer
