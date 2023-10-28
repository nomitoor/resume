import { HiChevronRight } from "react-icons/hi";

const aboutMeDetails = [
    {
        name: 'birthday',
        value: '14-11-1996',
    },
    {
        name: 'age',
        value: '40',
    },
    {
        name: 'website',
        value: 'www.example.come',
    },
    {
        name: 'degree',
        value: 'Masters',
    },
    {
        name: 'phone',
        value: '+92346-9238023',
    },
    {
        name: 'email',
        value: 'researcher.naumantoor@gmail.com',
    },
    {
        name: 'city',
        value: 'lahore',
    },
    {
        name: 'freelance',
        value: 'available',
    },
]

const AboutMeDetails = () => {

    const aboutMeItems = aboutMeDetails.map((item) => (
        <li key={item.name} className='flex inline-block m-3'>
            <HiChevronRight className='text-[#4ceb95] h-6 w-6'/>
            <strong className='mr-2 m-1 text-md capitalize'>{item.name} :</strong>
            <span className='m-1 text-md capitalize'>{item.value}</span>
        </li>
    ));

    const aboutMeItems1 = aboutMeItems.slice(0, aboutMeItems.length / 2);
    const aboutMeItems2 = aboutMeItems.slice(aboutMeItems.length / 2);

    return (
        <>
            <div>
                <ul>
                    {aboutMeItems1}
                </ul>
            </div>
            <div>
                <ul>
                    {aboutMeItems2}
                </ul>
            </div>
        </>
    );
}

export default AboutMeDetails;