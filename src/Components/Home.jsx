import React from 'react'
import './Home.css'
import Fruits from '../Assets/fruits.avif';
import Vegtable from '../Assets/vegatbles.avif';
import ExcoticVeggies from '../Assets/ExoticVegatbles.avif';
import CleanAndGrade from '../Assets/CleanGrde.png'
import NaturalGrow from '../Assets/NaturalGrow.jpg'
import Highest from '../Assets/HighestAss.png'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", }}>
            <Header />
            <div className='home'>
                <div className="one">
                    <h1>Categories</h1>
                    <div className="items">
                        <div className='img-text'>
                            <img src={Vegtable} alt="" />
                            <p >vegatables</p>
                        </div>
                        <div className='img-text'>
                            <img src={Fruits} alt="" />
                            <p>Fruits</p>
                        </div>
                        <div className='img-text'>
                            <img src={ExcoticVeggies} alt="" />
                            <p>Exotic Vegtables</p>
                        </div>
                    </div>
                </div>
                <div className="justifyingAboutUs">
                    <h1>Why shop from <span style={{ color: "rgba(17, 129, 61)", }}>GreenKart?</span></h1>
                    <div className="justifying">
                        <div className="things">
                            <div className="img">
                                <img src={NaturalGrow} alt="" />
                            </div>
                            <div className="content1">
                                <h4>Naturally Grow</h4>
                                <p>Our products are naturally grown without harmful chemicals  healthy freshness.</p>
                            </div>
                        </div>
                        <div className="things">
                            <div className="img">
                                <img src={CleanAndGrade} alt="" />
                            </div>
                            <div className="content1">
                                <h4>Clean & Grade</h4>
                                <p>We provide fresh fruits and vegetables directly from farms.</p>
                            </div>
                        </div>

                        <div className="things">
                            <div className="img">
                                <img src={Highest} alt="" />
                            </div>
                            <div className="content1">
                                <h4>Highest Assorment</h4>
                                <p>We offer a wide assortment of fresh and high-quality fruits to meet every need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
