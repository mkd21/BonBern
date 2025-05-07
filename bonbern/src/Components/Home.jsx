
import {motion} from "framer-motion";

export const Home = () =>{

    return (
        <>
            <div className=" overflow-hidden 2xl:h-[90vh] " >

                <motion.div className="bg-[url('../../images/heroSection/heroSectionBackground.png')] h-[100%] bg-contain bg-right bg-no-repeat
                    "
                    initial={{ x: '-105%', opacity: 0 }}
                    animate={{ x: '0%', opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                >

                    <h1>Hello</h1>
                </motion.div>
            </div>
            
        </>
    );
}