import React from 'react';
import "./Home.css";
import xardas from "../../Images/xardas.png";
import khorinis from "../../Images/khorinis.jpg";
import port from "../../Images/port.jpg";
import Diego from "../../Images/diego.png";
import sword from "../../Images/sword.png";
import skull from "../../Images/skull.png";
import hero from "../../Images/bezi.png";

import Button from "../FormElements/Button"

const Home = () => {
    return (
        <div className="home">

            <section className="home-header">
                <h1>GOTHIC II FANPAGE</h1>
                <h2>Hey you! Welcome to Gothic 2 Fanpage</h2>
                <img src={xardas} alt="Xardas"></img>
            </section>

            <section className='home-about'>
                <h2>Hi traveller!</h2>
                <h3>If you are fan of Gothic II game, this place is right for you!</h3>
                <h3>Maybe you want to buy some amazing Gothic items? Maybe you want to know more about some characters? You will find there a lot of information about the best game ever made!</h3>
                <div className="home-about__container">
                    <div className="home-about__container-paragraphs">
                        <p>Gothic II is a role-playing video game by German developer Piranha Bytes and the sequel to Gothic. It was released on 29 November 2002 in Germany and in North America on 28 October 2003. The game was published by JoWooD Productions and Atari, Inc.</p>

                        <p>Gothic II was a commercial success in Germany, and became JoWood's biggest hit at the time of its release. By 2004, it had sold over 300,000 units when combined with its expansion pack, Night of the Raven. Sales of Gothic II alone ultimately surpassed 400,000 units by 2007, following its re-release as a budget title in Germany.</p>
                    </div>
                    <div className="home-about__container-image">
                        <img src={khorinis} alt="Khorinis"></img>
                    </div>
                </div>
                <p>The German version of the game was published by JoWooD and released on 29 November 2002. In the United Kingdom and Scandinavia, the game was released on 13 June 2003. The US release by Atari followed a few months later on 28 October. However, according to Piranha Bytes, Atari did not officially confirm the US release to them, so they did not spread the word about this release for months.</p>

                <p>On 17 October 2005 publisher JoWood announced that Aspyr Media was going to publish four of their titles in North America, one of them being Gothic II Gold, which includes Gothic II as well as the expansion pack Gothic II – Night of the Raven. Aspyr Media released Gothic II Gold on 29 November 2005.</p>

                <p>In Germany, Gothic II is also available in a Collector's Edition, together with the add-on and Gothic. An English demo version of the game which contains the first part was released on 17 March 2005, when the game was released in several new territories.</p>
                <div className="home-about__container">
                    <div className="home-about__container-image">
                        <img src={port} alt="Port"></img>
                    </div>
                    <div className="home-about__container-paragraphs">
                        <p>While Gothic II received very high reviews in the German press, it did not fare as well in North America, where the game received "generally favorable reviews" according to the review aggregation website Metacritic.</p>

                        <p>One of the reasons for the overall worse reviews were the graphics. The translation of the script and the voice acting in the English version were also criticized, and were felt by critics to be out of place and poorer than in the German version. Much of the voice acting criticism falls upon the change in the voice for the character Diego.</p>

                        <p>Gothic II won PC Gamer US's 2003 "Best Roleplaying Game" award. The editors called it "a return to the roots of classic fantasy roleplaying on the PC" and noted its "beautifully detailed nonlinear 3D world". It was also nominated for RPG Vault's "RPG of the Year", "Outstanding Achievement in Music" and "Outstanding Achievement in Sound" awards, all of which went to Star Wars: Knights of the Old Republic.</p>
                    </div>
                </div>
            </section>
            <section className='home-shoop'>
                <h2>Show me your items!</h2>
                <h3>Have you ever wear dragon hunter's armour? It may be possible soon!</h3>
                <img src={Diego} alt="Diego" className="diego"></img>
                <img src={sword} alt="Sword" className="sword"></img>
                <img src={skull} alt="Skull" className="skull"></img>
                <Button>GO TO SHOOP SECTION</Button>
            </section>
            <section className='home-characters'>
                <div className="home-characters__container">
                    <div className="home-characters__container-info">
                        <h2>Did you know that?</h2>
                        <p><span class="fas fa-check"></span>Our hero becomes the king in the following parts of the game.</p>
                        <p><span class="fas fa-check"></span>Only Lester, Fortuno and Cor Angar survived the tragedy of the sect in Gothic I.</p>
                        <p><span class="fas fa-check"></span>If you will kill innocent people in Khorinis, you won't be able to talk to Vatras until the end of the game.</p>
                        <p><span class="fas fa-check"></span>Lee can teach two-handed sword fighting up to 100%, despite the fact that he himself only has 90% in this field.</p>
                        <p><span class="fas fa-check"></span>Orlan belongs to the Water Circle, and his tavern is the meeting place of this secret organization.</p>
                    </div>
                    <div className="home-characters__container-image">
                        <img src={hero} alt="Hero" className="hero"></img>
                    </div> 
                </div>
                <Button>GO TO CHARACTERS SECTION</Button>
            </section>
            <section className='home-contact'>
                <h2>Contact with us!</h2>
                <h3>Why don't you send us a message?</h3>
                <Button>GO TO CONTACT SECTION</Button>
            </section>
        </div>
    )
}

export default Home
