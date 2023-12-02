import './Navbar.css'
function Navbar(){
    function toggle(){
        document.body.style.background="red"
    }
    return(
        <div className="Navbar">
            <nav className='navbar'>
                <article className='navart'>
                    <section className='navsec1'>
                        <h1>SD</h1>
                    </section>
                    <section className='navsec2'>
                        <div className='navsecdiv'>Home</div>
                        <div className='navsecdiv'>About</div>
                        <div className='navsecdiv'>Projects</div>
                        <div className='navsecdiv'>Contact</div>
                    </section>
                    <section className='navsec3'>
                        <div className='navicon'><i className="fa-brands fa-facebook"></i></div>
                        <div className='navicon'><a style={{color:'white'}} href='https://in.linkedin.com/in/sudesh-gowda-md-sudesh-12432a159'><i className="fa-brands fa-linkedin"></i></a></div>
                        <div className='navicon'><i className="fa-brands fa-twitter"></i></div>
                        <div className='navicon'><i class="fa-solid fa-toggle-on" onClick={toggle}></i></div>
                    </section>
                </article>
                
            </nav>
            
        </div>
    )
}
export default Navbar


// import React from 'react'
// import Navbar from './CSS Resume/Navbar'
// import Header from './CSS Resume/Header'
// import Main from './CSS Resume/Main'
// import Section  from './CSS Resume/Section'
// import Footer from './CSS Resume/Footer'
// const App = () => {
//   return (
//     <div>
//     <Navbar/>
//     <Header/>
//     <Main/>
//     <Section/>
//     <Footer/>
   
//     </div>
//   )
// }
// export default App