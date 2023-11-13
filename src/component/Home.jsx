import React from 'react'
import Banner from './Banner'
import Additionalinfo from './Additionalinfo'
function Home() {
  return (
    <div>
        <Banner 
            mainclass= 'fanbg'
            Title = '2ND Annual Healthy Heroes Fitness Challenge!'
            Paragraph = 'Join us for an incredible fitness journey!'
            imagepath = '/homebnr.webp'
            buttonhref = '/registration'
            ButtonText = 'REGISTER NOW'

        />
        <Additionalinfo 
            mainclass = 'addition-main-sect'
            SectionTitle = 'Additional Info' 
            ColumnTitle = 'Healthy Heroes Fitness Challenge' 
            FirstParagraph = 'Registration fee is $40 and that covers all expenses associated with the challenge (T-Shirt, Shipping, Prizes, etc) and then everything left over will be donated to the School Nutrition Foundation. How it works: <br/> 1. When you register for the challenge you will be invited to a private event within the School Nutrition Industry Professionals Facebook Group. <br/>2. A new challenge/workout (with modifications to make it good for everyone) will be posted each week day in October, and available for review here on the site! . <br/>3. Once you have completed the challenge for that day, you will submit an online form saying it was completed. Form available on the "Scorecard" tab. <br/>4. For every day that you complete the workout you will earn 1 point. If you post a picture of you during or after the workout on the event page, you will get 2 extra points and if you post a video you will earn 3 additional points.'
            SecondPargraph = '5. Scores will be entered as they are submitted into the Swan Scoring App, so you will be able to download the app and see real-time leaderboards. You can also view it here on the site. <br/> 6. On November 1st we will announce the 1st, 2nd & 3rd place winners. <br/> It`s sure to be a lot of fun and we are looking forward to a great event that will help us be our best selves and support the School Nutrition Foundation in the process!' 
            imagepath='/additional.webp'
        />
    </div>
  )
}

export default Home
