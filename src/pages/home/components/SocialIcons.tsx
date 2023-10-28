interface SocialIconsProps {
    url: string;
    svg: string;
}

const SocialIcons = (props: SocialIconsProps) => {
    const {url, svg} = props

    return (
        <>
            <a href={ url } role="button">
                <svg 
                    xmlns='http://www.w3.org/2000/svg' 
                    width='24' 
                    height='24' 
                    viewBox='0 0 30 30'
                    fill='currentColor'
                >
                    <path d={svg}></path>
                </svg>
            </a>
        </>
    );
}

export default SocialIcons;