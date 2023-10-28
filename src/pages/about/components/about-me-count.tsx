import { BsFillEmojiSmileFill } from "react-icons/bs";

const AboutMeCount = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mt-10 mb-10">

                <div className="flex justify-center bg-slate-300/10 h-[10rem] align-[4px] h-screen">
                    <div className="m-auto">
                        <BsFillEmojiSmileFill 
                            className="absolute 
                            flex justify-center
                            transform translate-x-[-50%] text-2xl text-green-500 rounded-full line-height-none"
                        />
                        <span className="flex justify-center text-5xl">232</span>
                        <p className="flex justify-center">Happy Clients</p>
                    </div>
                </div>

                <div className="flex justify-center bg-slate-300/10 h-[10rem] align-[4px] h-screen">
                    <div className="m-auto">
                        <i className="bi bi-journal-richtext"></i>
                        <span className="flex justify-center text-5xl">521</span>
                        <p className="flex justify-center">Projects</p>
                    </div>
                </div>

                <div className="flex justify-center bg-slate-300/10 h-[10rem] align-[4px] h-screen">
                    <div className="m-auto">
                        <i className="bi bi-headset"></i>
                        <span className="flex justify-center text-5xl">232</span>
                        <p className="flex justify-center">Hours Of Support</p>
                    </div>
                </div>

                <div className="flex justify-center bg-slate-300/10 h-[10rem] align-[4px] h-screen">
                    <div className="m-auto">
                        <i className="bi bi-award"></i>
                        <span className="flex justify-center text-5xl">24</span>
                        <p className="flex justify-center">Awards</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMeCount