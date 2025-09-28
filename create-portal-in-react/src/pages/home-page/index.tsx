
import Header from '../../components/header';
import HeroSection from '../../components/hero-section';
import Footer from '../../components/footer';
import ModalPOPUP from '../../components/pop-up';
import { useEffect, useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
            if (sessionStorage.getItem("visited") === null) {
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }
        },[])
    
        const handleClose = () => {
            sessionStorage.setItem("visited", "true")
            setIsOpen(false)
        }
    
    
  return (
    <div>
      {sessionStorage.getItem("visited")=== null && isOpen && <ModalPOPUP isOpen={isOpen} setIsOpen={setIsOpen} handleClose={handleClose}>
        <h1>Notice!</h1>
        <div className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          ut sed rem recusandae quis accusamus tenetur ea dolore impedit optio
          nulla, eligendi consequuntur tempore officiis ipsam reprehenderit nemo
          veritatis reiciendis aliquid, quae maxime ratione voluptatibus illo!
          Consequatur neque aliquam quod ipsum facere. Veritatis, ad libero
          earum laboriosam consectetur vero sit.
        </div>
      </ModalPOPUP>}
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home