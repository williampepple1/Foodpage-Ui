import React,{useState} from 'react'
import Navbar from "../../Navbar/index"
import Sidebar from "../../SideBar/index"
import {HeroContainer, HeroItems, HeroH1, HeroBtn, HeroP,HeroContent} from "./HeroElement"
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <HeroContainer>
                <Navbar  toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Best Meals in Lagos</HeroH1>
                        <HeroP>Ready on the Go</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero
