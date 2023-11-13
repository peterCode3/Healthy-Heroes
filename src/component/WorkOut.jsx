import Container  from './Container';
import React from 'react';
import Banner from './Banner'
import Link from 'next/link';


const WorkOut = () => {
    const dailywork = [
        { 
            Date: 'OCTOBER 24, 2022', 
            Image: '/oct24.webp',
        },
        { 
            Date: 'OCTOBER 25, 2022', 
            Image: '/oct25.webp',
        },
        { 
            Date: 'OCTOBER 26, 2022', 
            Image: '/oct26.webp',
        },
        { 
            Date: 'OCTOBER 27, 2022', 
            Image: '/oct27.webp',
        },
        { 
            Date: 'OCTOBER 28, 2022', 
            Image: '/oct28.webp',
        },
        { 
            Date: 'OCTOBER 31, 2022', 
            Image: '/oct31.webp',
        },
    ]
    const previouswork = [
        { 
            Date: 'OCTOBER 17, 2022', 
            Image: '/oct17.webp',
            Paragraph : "We've made it to the halfway point! Let`s check our progress by completing the benchmark workout again.  Record your results and compare to the first time you completed this workout. Did you make it farther than before? Send in your score and let me know how you did!",
        },
        { 
            Date: 'OCTOBER 18, 2022', 
            Image: '/oct18.webp',
        },
        { 
            Date: 'OCTOBER 19, 2022', 
            Image: '/oct19.webp',
        },
        { 
            Date: 'OCTOBER 20, 2022', 
            Image: '/oct20.webp',
        },
        { 
            Date: 'OCTOBER 21, 2022', 
            Image: '/oct21.webp',
        },
    ]
    const beforepreviouswork = [
        { 
            Date: 'OCTOBER 10, 2022', 
            Image: '/oct10.webp',
            Paragraph: "Happy Monday! Let's get our blood pumping for the week with some upper body work. Check out the movements page for scaling/modification ideas. The workout is supposed to help you, not hurt you so make sure you are doing movements correctly and staying within your abilities. PS - There is a huge difference in being sore and being hurt in relation to working out. You are using muscles you don't normally use in ways you don't normally use them. If you have not been on an exercise program for a while, you may be sore. Be sure you are warming up and stretching/rolling out before and after each workout.",
        },
        { 
            Date: 'OCTOBER 11, 2022', 
            Image: '/oct11.webp',
            Paragraph: "This one is a little different from others we have done. For this one you do the first part, rest and then complete the last part. Modify as needed. Add in weights to make it harder or you can change your burpees to up/downs to make it easier (see movements page), increase or decrease range of motion as needed. Have fun and don't forget to submit your scores!",
        },
        { 
            Date: 'OCTOBER 12, 2022', 
            Image: '/oct12.webp',
            Paragraph: "Today's workout is all about getting your heart going! Set up  your Tabata clock on your SmatWOD Timer for 6 rounds of 30 seconds of work and 30 seconds of rest for 6 sets. You will end  up cumulatively completing 3 minutes of each movement. Scale as needed. Don't forget to submit your scores!",
        },
        { 
            Date: 'OCTOBER 13, 2022', 
            Image: '/oct13.webp',
            Paragraph: "It's time for our weekly walk/run TABATA! Just like before... <br /> <br />For this workout you will need to set your SmartWOD Timer. Select Tabata and then set it for 10 Rounds with 2 minutes of work and 1 minute of rest. This workout is going to be a bit different though. During the 2 minutes of work I want you to walk, speed walk, jog or run. Then when the timer hits the 1 minute Rest period, instead of resting I want you to take it up a notch. If you were walking maybe try jogging if you were jogging during the 2 minutes, increase the intensity to a sprint. Don't forget to submit your scorecard!",
        },
        { 
            Date: 'OCTOBER 14, 2022', 
            Image: '/oct14.webp',
            Paragraph: "This work out is all about getting the blood pumping and keeping your heart healthy! At the end of this workout you will have completed 150 jumping jacks and 75 push ups. You are getting stronger every day and doing such a great job! Keep it up and don't forget to send in your scores. Remember, scale as needed. Decrease the number of reps or do push ups from your knees to make it easier or turn the push ups into hand release push ups to make it harder. ",
        },
    ]
    const oldwork = [
        { 
            Date: 'OCTOBER 03, 2022', 
            Image: '/oct3.webp',
            Paragraph : "This first workout is a benchmark workout that you will see pop up a few times during the challenge. This is to give yourself an idea of the progress you are making. Record your results and compare throughout the challenge!",
        },
        { 
            Date: 'OCTOBER 04, 2022', 
            Image: '/oct4.webp',
            Paragraph : "For this workout you will need to set your SmartWOD Timer. Select Tabata and then set it for 10 Rounds with 2 minutes of work and 1 minute of rest. This workout is going to be a bit different though. During the 2 minutes of work I want you to walk, speed walk, jog or run. Then when the timer hits the 1 minute Rest period, instead of resting I want you to take it up a notch. If you were walking maybe try jogging if you were jogging during the 2 minutes, increase the intensity to a sprint. Don't forget to submit your scorecard!",
        },
        { 
            Date: 'OCTOBER 05, 2022', 
            Image: '/oct5.webp',
            Paragraph : 'This workout is "For Time" that means you are going to do the set amount of rounds and reps and record how long it takes you. Select "For Time" on your SmartWOD Timer and set the time cap for 20 minutes. Scale the workout as needed. Plank can be held from hands or elbows. Add in a dumbbell or other weighted object to make it a little harder. Don"t forget to post on the event page and submit your score!,'
        },
        { 
            Date: 'OCTOBER 06, 2022', 
            Image: '/oct6.webp',
            Paragraph : "This workout is all about focusing on your core. As you complete each movement, be sure to hold your core tight to get the most out of your workout. Scale as needed. Reduce reps or change movements as needed. Decrease the range of motion. If you've not been regularly working out, you may be starting to feel a little sore. Be sure you are drinking plenty of water. Increase your heartrate before completing the daily workouts and warm your body up for the movements. Keep up the good work and don't forget to submit your score.",
        },
        { 
            Date: 'OCTOBER 07, 2022', 
            Image: '/oct7.webp',
            Paragraph : 'This workout is an EMOM which stands for Every Minute on the Minute. Set your SmartWOD Timer as shown above and each minute complete one round of each movement. Rest the remaining minute of each minute. For example if it takes you 20 seconds to do 10 calf raises, you should rest the remaining 40 seconds before starting the glute bridges during the next minute and so on...',
        },
        
    ]

    return (
        <div id='ssc-work-id'>
            <Banner 
                mainclass= 'fanbg'
                Title = '2ND Annual Healthy Heroes Fitness Challenge!'
                Paragraph = 'Join us for an incredible fitness journey!'
                imagepath = '/healthlogo.png'
                buttonhref = '/registration'
                ButtonText = 'REGISTER NOW'
            />
          <div className='ssc-workout'>
            <Container>
                <div className='title-section dates-title'>
                    <h2>October 24 - 31 Workouts</h2>
                </div>
                <div className='ssc-mov-row'>
                    {dailywork.map((dailywork, index) => (
                    <div data-key={index} className='ssc-mov-colm'>
                        <div className='ssc-inr-column'>
                            <h3>{dailywork.Date}</h3>
                            {dailywork.Image && (
                                <img className='ssc-da-work' src={dailywork.Image} />
                            )}
                            {dailywork.Paragraph && (
                                <p dangerouslySetInnerHTML={{ __html: dailywork.Paragraph }}></p>
                            )}

                        </div>
                    </div>
                    ))}
                </div>
                <div className='title-section dates-title'>
                    <h2>October 17-21 Workouts</h2>
                </div>
                <div className='ssc-mov-row'>
                    {previouswork.map((dailywork, index) => (
                    <div data-key={index} className='ssc-mov-colm'>
                        <div className='ssc-inr-column'>
                            <h3>{dailywork.Date}</h3>
                            {dailywork.Image && (
                                <img className='ssc-da-work' src={dailywork.Image} />
                            )}
                            {dailywork.Paragraph && (
                                <p dangerouslySetInnerHTML={{ __html: dailywork.Paragraph }}></p>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
                <div className='title-section dates-title'>
                    <h2>October 10-14 Workouts</h2>
                </div>
                <div className='ssc-mov-row'>
                    {beforepreviouswork.map((dailywork, index) => (
                    <div data-key={index} className='ssc-mov-colm'>
                        <div className='ssc-inr-column'>
                            <h3>{dailywork.Date}</h3>
                            {dailywork.Image && (
                                <img className='ssc-da-work' src={dailywork.Image} />
                            )}
                            {dailywork.Paragraph && (
                                <p dangerouslySetInnerHTML={{ __html: dailywork.Paragraph }}></p>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
                <div className='title-section dates-title'>
                    <h2>October 03-07 Workouts</h2>
                </div>
                <div className='ssc-mov-row'>
                    {oldwork.map((dailywork, index) => (
                    <div data-key={index} className='ssc-mov-colm'>
                        <div className='ssc-inr-column'>
                            <h3>{dailywork.Date}</h3>
                            {dailywork.Image && (
                                <img className='ssc-da-work' src={dailywork.Image} />
                            )}
                            {dailywork.Paragraph && (
                                <p dangerouslySetInnerHTML={{ __html: dailywork.Paragraph }}></p>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
                <div className='btn-ssc-up'>
                    <Link href='#ssc-work-id'><button>Back To Top</button></Link>
                </div>
    
            </Container>
          </div>
        </div>
      );
}

export default WorkOut
