import backgroundImage from '../../assets/bg.jpg'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div 
          className="
            body-font
            font-kanit
            h-screen
            bg-cover
            bg-image
            bg-no-repeat
            object-fit:contain
            text-white
            z-index[-1]
            relative
            overflow-x-scroll
          "
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        >
            {props.children}
        </div>
    );
}

export default Layout;