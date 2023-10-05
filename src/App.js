import logo from './logo.svg';
import './App.css';
import maam from './assets/maam.jpg';
import kumpas from './assets/kumpas.mp3';
import { TypeAnimation } from 'react-type-animation';
import './index.css';
import raining from './assets/raining.mp3';

function App() {
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
    
    // message for bestyy
    const message = "Madayaw and Mabuhay! On this occasion of Teachers' Day, We wish to express my profound gratitude to you, Ms. Carla Almazan. Your unwavering dedication, remarkable patience, and your role as an appreciative educator have left an indelible mark on us. Among the faculty at STI Tagum College, you stand as one of our most cherished mentors, having introduced unique transformations to our academic journey. We acknowledge that our collective behavior may at times disappoint or even offend you, given the headstrong and disrespectful tendencies displayed by some of my fellow classmates. However, please always bear in mind, Ma'am Carla, that we remain receptive to your guidance and discussions. Your wisdom is a beacon that we eagerly follow. Please, continue to exemplify the qualities of a virtuous and equitable instructor, for it is these very attributes that endear you to us. Once again, thank you, from the depths of our hearts. <33 P.S. You are undeniably stunning, Ma'am, your beauty truly leaves us in awe. We mean it sincerely. HAHAHAHAHAHAHA. Take care always, Ma'am. <3";

    return (
        <div className='h-full w-full'>
            
            <div className='flex flex-col justify-center items-center'>
                <img src={maam} alt="" className="rounded-2xl w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] m-5"/>
            </div>
            <div className='flex w-full flex-col justify-center items-center'>
                <div className='w-full'>
                    {/* <Typical
                    steps={[message, 200, "- your besty", 1000, "Ish", 1000, "Wabbyuuuuuu Alwaysssss <3", "My Bammii", 1000, "Can I Have This Opportunity To Court You ?"]}
                    wrapper="p"
                    className="font-mono 
                    text-[1.1rem]
                    sm:text-[1.2rem] md:text-[1.3rem]
                    text-[#808080] text-center h-[100vh] p-10" /> */}

                    <TypeAnimation 
                    sequence={[
                      message,
                      1000,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="font-mono 
                    text-[1.5rem]
                    w-full
                    sm:text-[1.2rem] md:text-[1.3rem]
                    text-[#808080] text-center h-[100vh] p-10"
                    repeat={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default App;
