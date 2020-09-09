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
                    
                    <Product id="23445930" title="Amaon Echo (3rd generation) Smart speaker with Alexaa, Charcoal Fabric" price={98.99} rating={5} 
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                </div>

                <div className="home__row">
                    <Product
                id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._SX355_.jpg"/>
                    <Product id="4903850" title="Samsung LC49RG90SSSSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._ACC_SX466_.jpg"/>
                </div>

                <div className="home__row">
                    <Product id="0000001" title="tango" price={90} rating={5} image="http://oyster.ignimgs.com/mediawiki/apis.ign.com/dota-2/3/38/Tango_lg.png"/>
                    <Product id="0000002" title="salve" price={110} rating={5} image="https://dota2.gamepedia.com/media/dota2.gamepedia.com/thumb/f/fb/Ingame_model_Healing_Salve.png/120px-Ingame_model_Healing_Salve.png.jpeg?version=a81055a5373eb145f264feb0ff96298c"/>
                    <Product id="0000003" title="clarity" price={50} rating={5} image="https://gamepedia.cursecdn.com/dota2_gamepedia/7/77/Clarity_icon.png?version=b71ce9fb1437edbfaf325674eca5a2ae"/>
                </div>
            </div>
        </div>
    )
}

export default Home
