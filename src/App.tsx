import Header from './Components/Header'

function App() {
    return ( 
      <div className="body-font font-kanit text-white bg-[url('../assets/bg.jpg')] bg-cover fixed top-0 left-0 right-0 h-full z-index[-1]">
        <Header fullName="Nauman Toor" tagLine="Testing" />
      </div>
    )
}

export default App