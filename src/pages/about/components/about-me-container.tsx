import aboutMe from '../../../assets/about-me.jpg'
import AboutMeDetails from './about-me-details';
import AboutMeCount from "./about-me-count";
import { HiChevronRight } from "react-icons/hi";

const AboutMeContainer = () => {
    return (
        <div className="h-full justify-between mx-20 my-10 p-8 bg-black/70">
            <div>
                <h2 className="text-lg text-[#aaaaaa] font-medium uppercase after:content-[''] after:h-[1px] after:box-border after:w-[120px] after:bg-[#4ceb95] after:mx-2.5 after:my-1 after:inline-block">About</h2>
                <p className="text-5xl font-bold">Learn more about me</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="mt-3 rounded-md">
                    <img src={aboutMe} className="rounded-md" alt="" />
                </div>
                <div className="col-span-2">
                    <h3 className='text-4xl text-[#4ceb95]'>UI/UX &amp; Graphic Designer</h3>
                    <p className="mt-4 italic text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                        <AboutMeDetails />
                    </div>
                    <p className='mt-5'>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                </div>
            </div>


            <AboutMeCount />
        </div>
    );
}

export default AboutMeContainer;