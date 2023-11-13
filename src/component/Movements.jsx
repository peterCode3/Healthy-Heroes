import Container  from './Container';
import React from 'react';
import Banner from './Banner'
import Link from 'next/link';


const Movements = () => {
    const movements = [
        { 
            Title: 'AIR SQUATS', 
            Video : '//player.vimeo.com/video/755651219?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'AIR SQUATS',
            FirstParagraph : 'Stand with feet shoulder-width apart & toes slightly outward. Keep chest up, back straight, & weight spread evenly across your entire foot throughout entire movement. Hands out in front of you can help maintain balance. Squat down (to capable depth) as if you were to sit in an invisible chair, then stand.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Sit and stand to a chair/box. Lower the height as you progress.',
        },
        { 
            Title: 'BIRD DOGS', 
            Video : '//player.vimeo.com/video/755643790?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'BIRD DOGS',
            FirstParagraph : 'Start with hands and knees on the ground. Maintain neutral/straight back, & hips/chest square to the ground throughout entire movement. Reach and extend opposite hand & foot simultaneously (imagine straight line from hand-to-foot) while maintaining balance, then return to starting position. Repeat with other side.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Raise hand/foot to lower height as capability allows. May raise just the hand, or just the foot.',
        },
        { 
            Title: 'BOOT STRAPPERS', 
            Video : '//player.vimeo.com/video/755661421?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'BOOT STRAPPERS',
            FirstParagraph : 'Stand with feet shoulder width apart, or wider. Reach down and grab feet/shins. While holding feet/shins - pull yourself down into the bottom of a squat to stretch groin. While still holding feet/shins straighten legs back out to stretch hamstrings. Repeat as necessary.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Adjust hand position as flexibility & mobility allows.',
        },
        { 
            Title: 'BOX/TRICEP DIPS', 
            Video : '//player.vimeo.com/video/757200219?h=0956443017&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'BOX/TRICEP DIPS',
            FirstParagraph : 'With hands on box/ground, support weight with straight arms. Keep a proud chest, shoulder blades squeezed back, and elbows behind you throughout entire movement. Lower body by bending your elbows and keeping weight in your hands. Push yourself back up to starting position.            ',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Adjust position of feet closer to you to make movement easier. You may use your legs to assist you.',
        },
        { 
            Title: 'BURPEES', 
            Video : '//player.vimeo.com/video/757207169?h=230588813f&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'BURPEES',
            FirstParagraph : 'Start with feet at least shoulder width apart. Squat down, lower weight into your hands while kicking your feet back into a plank position. Do a push-up, then jump feet back into a squat position, then perform a squat jump.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'You may use a raised platform to burpee to (box/chair, etc.). May also do up-downs (see “Up-Down” description).',
        },
        { 
            Title: 'CALF RAISES', 
            Video : '//player.vimeo.com/video/757215916?h=d61bd0210d&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'CALF RAISES',
            FirstParagraph : 'Stand up straight. Maintain control & balance throughout entire movement. Push through the balls of your feet and raise heels until you are standing on your toes, then return to starting position.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Hold onto wall/stationary object to help maintain balance.',
        },
        { 
            Title: 'CURTSY LUNGES', 
            Video : '//player.vimeo.com/video/757227456?h=e8347020a4&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'CURTSY LUNGES',
            FirstParagraph : 'Stand with feet shoulder width apart. Keep chest up, back straight, & weight spread evenly across your entire foot throughout entire movement. Step back with foot and reach it to opposite side until front thigh is parallel with ground. Return to starting position & repeat with opposite side.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Adjust depth of lunge as necessary. Hold onto stationary object in front of you to assist with balance (chair, etc.)',
        },
        { 
            Title: 'DEAD BUGS', 
            Video : '//player.vimeo.com/video/757636355?h=27c9af8049&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'DEAD BUGS',
            FirstParagraph : 'Start by lying on back with hands and feet off the ground in front of you (like a dead bug). Knees should be bent & start directly over hips. Engage core by keeping lower back in contact with the floor throughout movement. With control, lower opposite hand & foot till they are hovering slightly above the ground in a straight line. Return to starting position. Repeat with other side.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Adjust the height you lower your hand/foot to as necessary. You may lower hand or foot individually.',
        },
        { 
            Title: 'GLUTE BRIDGES', 
            Video : '//player.vimeo.com/video/757240297?h=cda11923ed&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'GLUTE BRIDGES',
            FirstParagraph : 'Start by lying with back on ground with feet flat & a few inches away from your buttocks. Keep back/spine neutral throughout entire movement. Push feet into the ground and hips up towards the ceiling/sky. Return to starting position. ',
        },
        { 
            Title: 'HIGH KNEES', 
            Video : '//player.vimeo.com/video/757246962?h=c8eeba0153&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'HIGH KNEES',
            FirstParagraph : 'Stand with feet hip-width apart. Lift knee to hip height and raise opposite arm, then quickly switch so opposite knee/arm is up before your foot lands (imagine running in place).',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Raise knee and return foot back to ground before alternating to opposite side.',
        },
        { 
            Title: 'HIP DIPS', 
            Video : '//player.vimeo.com/video/757193538?h=2224b7fd21&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'HIP DIPS',
            FirstParagraph : 'Start in elbow plank position (see “Plank” description). With control, rotate hips to one side and lower body to the floor. Return to start position, and repeat on opposite side.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Perform movement with knees on the ground instead of feet. Adjust height you “dip” to as necessary.',
        },
        { 
            Title: 'INCH WORMS', 
            Video : '//player.vimeo.com/video/757253189?h=463511967b&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'INCH WORMS',
            FirstParagraph : 'Start in standing position. Reach hands down towards the ground, then walk your hands away from your feet until you are in a push-up plank position. Walk hands back towards your feet, then return to standing position.',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'Bend knees as necessary while reaching hands towards the ground. Reduce distance you walk your hands from/to body as necessary. Widening feet stance to reduce mobility & flexibility demands is acceptable.'
        },
        { 
            Title: 'JUMP SQUATS', 
            Video : '//player.vimeo.com/video/757259209?h=3eb00e9dce&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'JUMP SQUATS',
            FirstParagraph : 'Start in squat stance. Squat down, then explosively stand & jump. Softly land in squat stance & immediately descend into next rep.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Squat jump to a chair/box. Lower the height as you progress.',
        },
        { 
            Title: 'JUMPING JACKS', 
            Video : '//player.vimeo.com/video/757636339?h=cb39ef7aa9&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'JUMPING JACKS',
            FirstParagraph : 'Stand upright with legs together & arms at your sides. Bend your knees slightly & jump into the air. As you jump, spread legs to shoulder width apart and stretch your arms out and overhead. Jump back to starting position.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Side step instead of jumping. Alternate which side you step to each rep.',
        },
        { 
            Title: 'LEG RAISES', 
            Video : '//player.vimeo.com/video/757269649?h=4a231f607c&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'LEG RAISES',
            FirstParagraph : 'Start lying on your back with legs straight and together. While keeping legs straight, lift legs up towards the ceiling/sky till butt comes off the floor, then slowly lower back down till legs are hovering above the floor. Repeat.',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'Lower height that legs are raised to as necessary. May bend knees. May raise legs individually.'
        },
        { 
            Title: 'PLANK', 
            Video : '//player.vimeo.com/video/756823522?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'PLANK',
            FirstParagraph : 'Get up into a push-up position with elbows on ground under your shoulders and your feet hip-width apart. Weight should be supported by forearms and feet. Keep core engaged and body in a straight line.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'May support weight in hands instead of forearms, and on knees instead of feet. May support hands/arms on a raised platform (box, chair, couch, etc.)',
        },
        { 
            Title: 'PLANK PULL THROUGHS', 
            Video : '//player.vimeo.com/video/757282981?h=307e5e6d8d&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'PLANK PULL THROUGHS',
            FirstParagraph : 'Start in push-up plank position (see “Plank” description”). Maintain square torso/hips throughout entire movement and resist and any twisting motion. Lift one arm and pull object (dumbbell, weighted object, etc.) from opposite side under your body to other side. Return to start position & repeat with other arm.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Use lighter weighted object. May support weight on knees instead of feet.',
        },
        { 
            Title: 'PLANK TAPS', 
            Video : '//player.vimeo.com/video/757286807?h=d0be9e7622&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'PLANK TAPS',
            FirstParagraph : 'Start in push-up plank position (see “Plank” description”). Maintain square torso/hips throughout entire movement and resist and any twisting motion. Lift one hand off floor and tap opposite shoulder. Return to starting position and repeat on other side.',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'May support hands on a raised platform (box, chair, couch, etc.)'
        },
        { 
            Title: 'PLANK UP/DOWNS', 
            Video : '//player.vimeo.com/video/757291867?h=43c96082f6&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'PLANK UP/DOWNS',
            FirstParagraph : 'Start in push-up plank position (see “Plank” description). Brace core and lower weight from one hand to same forearm, then follow with opposite hand/forearm. Press back up with leading hand, followed by second hand into starting position. Make sure to alternate which hand leads.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'May support hands/forearms on a raised platform (box, chair, couch, etc.). May support weight in knees instead of feet.',
        },
        { 
            Title: 'PUSH UPS', 
            Video : '//player.vimeo.com/video/755656978?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'PUSH UPS',
            FirstParagraph : 'Start in push-up plank position (see “Plank” description). Keep core engaged and maintain a straight line from shoulders to feet throughout entire movement. Lower chest down towards the ground by bending elbows back until triceps are at least parallel with the ground, then press back to starting position.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'May support hands on a raised platform (box, chair, couch, etc.). May support weight in knees instead of feet.',
        },
        { 
            Title: 'ROW YOUR BOAT', 
            Video : '//player.vimeo.com/video/757297741?h=5ea44b7fbf&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'ROW YOUR BOAT',
            FirstParagraph : 'Start in seated position on the ground with tall torso, arms extended in front of you, knees near chest, and feet off the ground. Engage core and maintain balance throughout entire movement. Simultaneously lean back while pulling elbows back and extending legs straight in front of you (creating “V” shape with body).',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'Shorten range of motion as capabilities allow. May keep feet grounded and slide back & forth.'
        },
        { 
            Title: 'RUN', 
            Image : '/run.webp',
            SubTitle: 'RUN',
            FirstParagraph : 'Move at a pace that is comfortable for you.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'Walk, slow down, bike, or row.',
        },
        { 
            Title: 'SIT UPS', 
            Video : '//player.vimeo.com/video/755656426?autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'SIT UPS',
            FirstParagraph : 'Start in a lying position with back flat against ground. Variations of arms/feet/legs may be positioned as comfortable. Using core, lift torso to a sitting position, then return to starting position.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'May anchor feet to help with leverage (under couch, dumbbells, etc.). May “throw” arms forward to give momentum to help sit up.',
        },
        { 
            Title: 'SUPERMANS', 
            Video : '//player.vimeo.com/video/757302408?h=9316d94d0b&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'SUPERMANS',
            FirstParagraph : 'Start in a prone (facedown) position on floor. Keep head neutral throughout entire movement. While keeping arms/legs straight, raise arms/leg off of ground (chest should be slightly raised off of floor). Hold as necessary.',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'Adjust height of raised arms/legs as necessary. May lift just arms or just feet.'
        },
        { 
            Title: 'TRUNK ROTATIONS', 
            Video : '//player.vimeo.com/video/757605828?h=50b5941bc8&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'TRUNK ROTATIONS',
            FirstParagraph : 'Start in seated position on floor with tall torso. Keep hands clasped together (or holding object) in front of you. While keeping feet off the ground, twist torso and tap hands/object to one side of the floor and repeat to other side.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'You may use a raised platform to up/down to (box/chair, etc.). May step feet out individually into/out of plank position instead of jumping.',
        },
        { 
            Title: 'UP/DOWNS', 
            Video : '//player.vimeo.com/video/757627755?h=a2f4173c97&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'UP/DOWNS',
            FirstParagraph : 'Start with feet at least shoulder width apart. Squat down, lower weight into your hands while kicking your feet back into a plank position. Jump feet back into a squat position, then perform a squat jump.',
            SecSubTitle : 'Modifications:',
            SecondParagraph: 'May anchor feet to help with leverage (under couch, dumbbells, etc.). May “throw” arms forward to give momentum to help sit up.',
        },
        { 
            Title: 'WINDMILLS', 
            Video : '//player.vimeo.com/video/757627755?h=a2f4173c97&autoplay=0&title=0&portrait=0&byline=0&badge=0',
            SubTitle: 'WINDMILLS',
            FirstParagraph : 'Start in a wide stance with feet well outside of hip width. With arms extended out towards your sides, hinge at the hips while reaching one hand to opposite foot. Return to standing position, then repeat with other side.',
            SecSubTitle: 'Modifications:',
            SecondParagraph : 'May bend knees as necessary for mobility/flexibility restrictions. May reach hand to a raised platform (reduce height as you progress).'
        },
      ];
  return (
    <div id='ssc-move-id'>
        <Banner 
            mainclass= 'fanbg'
            Title = '2ND Annual Healthy Heroes Fitness Challenge!'
            Paragraph = 'Join us for an incredible fitness journey!'
            imagepath = '/healthlogo.png'
            buttonhref = '/registration'
            ButtonText = 'REGISTER NOW'
        />
      <div className='ssc-movemnts'>
        <Container>
            <div className='title-section'>
                <h2>Standard Movements</h2>
            </div>
            <div className='ssc-mov-row'>
                {movements.map((movement, index) => (
                <div data-key={index} className='ssc-mov-colm'>
                    <div className='ssc-inr-column'>
                        <h2>{movement.Title}</h2>
                        {movement.Video && (
                            <iframe
                            width="560"
                            height="315"
                            src={movement.Video}
                            title={movement.Title}
                            allowFullScreen
                            ></iframe>
                        )}
                        {movement.Image && (
                            <img className='ssc-style' src={movement.Image} />
                        )}
                        <h3>{movement.SubTitle}</h3>
                        <p>{movement.FirstParagraph}</p>
                    </div>
                    <div className='ssc-inr-column'>
                        <h3>{movement.SecSubTitle}</h3>
                        <p>{movement.SecondParagraph}</p>
                    </div>
                </div>
                ))}
            </div>
            
            <div className='btn-ssc-up'>
                <Link href='#ssc-move-id'><button>Back To Top</button></Link>
            </div>

        </Container>
      </div>
    </div>
  );
};

export default Movements;
