import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product title='The lean startup' price={29,99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5}/>
                    <Product title='The lean startup' price={29,99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={3}/>
                </div>

                <div className="home__row">
                    <Product id="4903850" title="Samsung LC49RG90SSSSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._ACC_SX466_.jpg"/>
                    <Product id="23445930" title="Amaon Echo (3rd generation) Smart speaker with Alexaa, Charcoal Fabric" price={98.99} rating={5} 
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
