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
    

    const message = "Madayaw and Mabuhay! Happy Teacher's Day, Sir Jem! We wanted to say thanks for being an incredible teacher. Your way of teaching is awesome. You make learning interesting, and your classes feel like exciting stories. You're great at explaining things, and your passion for what you teach is contagious. We love how you make us part of the discussions. You encourage us to think and share our ideas, which helps us learn better. You're not just giving us information; you're inspiring us to love learning. Thanks for being an awesome teacher and more. Have a fantastic Teacher's Day, and know that we appreciate you a lot!";

    return (
        <div className="h-full w-full">
            
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
