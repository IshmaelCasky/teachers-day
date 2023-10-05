import logo from './logo.svg';
import './App.css';
import maam from './assets/maam.jpg';
import sir from './assets/sir.jpg';

import { TypeAnimation } from 'react-type-animation';
import './index.css';
import raining from './assets/raining.mp3';

function SirJem() {
    // play music
    // let song = new Audio(raining);

    // // check if user has interacted with the page
    // let hasInteracted = false;

    // // play music when user interacts with the page
    // document.body.addEventListener('click', () => {
    //     if (!hasInteracted) {
    //         song.play();
    //         hasInteracted = true;
    //     }
    // });

    // play music when the page has loaded
    let song = new Audio(raining);
    document.addEventListener('click', () => {
        song.play();
    }
    );

    localStorage.setItem(
        'currentMessage',
        JSON.stringify(0)
    );
    

    const message = "I hope this letter finds you in the best of health and spirits. As we celebrate Teacher's Day, We wanted to take a moment to express our deep appreciation for the exceptional way you teach our class. Your teaching style is nothing short of extraordinary, and it has truly left a lasting impact on all of us. The manner in which you conduct your classes, resembling an engaging and thought-provoking oral recitation, has transformed the learning experience for us. Your ability to seamlessly blend the rigors of academia with the art of oral expression has not only made the subjects more comprehensible but has also sparked a genuine interest in the material. Your eloquence and clarity have made complex concepts seem simpler, and your enthusiasm for the subject matter is contagious. What I find particularly commendable is the way you encourage us to participate actively in discussions. Your approach of treating the class as a collective intellectual journey, where each voice is valued, has created an environment that fosters critical thinking and enhances our analytical skills. The discussions you initiate not only deepen our understanding of the subject but also challenge us to think beyond the textbooks. Your commitment to our academic growth and personal development is evident in every class you conduct. It's not just about disseminating information but about igniting a passion for learning and instilling a love for knowledge. On this Teacher's Day, we want to express my gratitude for being such an inspiring and dedicated educator. Your unwavering commitment to excellence has made a profound impact on our academic journey, and we are truly grateful for the knowledge and skills we have gained under your guidance. Thank you for being more than a teacher – for being a mentor, a guide, and an inspiration. May this Teacher's Day be filled with the recognition and appreciation you so rightfully deserve.";

    return (
        <div className="h-full bg-[url('./assets/vintage.jpg')] w-full">
            
            <div className='flex flex-col justify-center items-center'>
                <img src={sir} alt="" className="rounded-2xl w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] m-5"/>
            </div>
            <div className='flex w-full flex-col justify-center items-center'>
                <div className='w-full flex justify-end'>

                    <TypeAnimation 
                    sequence={[
                      message,
                      1000,
                    ]}
                    wrapper="p"
                    speed={75}
                    className="font-mono 
                    text-[1.5rem]
                    w-[90%]
                    sm:text-[1.2rem] md:text-[1.3rem]
                    text-[#464646] text-center h-[100vh] p-10"
                    repeat={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default SirJem;
