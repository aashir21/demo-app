import React, { useState } from 'react'
import "./Home.css"

const Home = () =>
{

    const [showBtn, setShowBtn] = useState(true)
    const [titleImg, setTitleImg] = useState(
        {
            title: "Soooooooooooo, will you be my Valentine?",
            img: "https://i.pinimg.com/originals/6f/bc/90/6fbc9066bb4a47e087c7166a76ef7190.gif"
        }
    )

    const handleYes = () =>
    {
        setShowBtn(false);
        setTitleImg({
            title: "Yayyyyyyy, I love you so much.",
            img: "https://i.pinimg.com/originals/4c/fe/e4/4cfee4404c0298529670fb3d8ef9cdd1.gif"
        })
    }

    const handleNo = () =>
    {
        setShowBtn(false);
        setTitleImg({
            title: "Sorry, no is not an option.\n You'll still be my valentine!!!",
            img: "https://i.pinimg.com/originals/41/5e/c7/415ec7a8d9bded6c901b3858caba5358.gif"
        })
    }


    return (
        <React.Fragment>
            <section className='hero'>
                <div className='heroContainer'>
                    <h1 className='title'>Hi Bubu, wanted to tell you a few things</h1>
                    <h3 className='sub-title'>Come with me!</h3>
                    <img className='hero-img' alt='hero' src='https://i.pinimg.com/originals/9a/69/31/9a693154417b1d79552f8e1e39822961.gif'></img>
                </div>
            </section>

            <section className='sec-1'>
                <div className='sec-1-container'>
                    <div className='img-con'>
                        <img className='subSec-img' alt="alt" src='https://i.pinimg.com/originals/8c/5c/14/8c5c145bb500c1005d90c39a6d84a226.gif'></img>
                    </div>
                    <div className='text-con'>
                        <h1 className='subSec-title'>I love being silly with you.</h1>
                        <p className='subSec-text'>You make me the happiest! I love spending time with you and make memories with you. Even though we are so far,
                            It still feels as if we're together!
                        </p>
                    </div>
                </div>
            </section>

            <section className='sec-1'>
                <div className='sec-2-container'>
                    <div className='img-con'>
                        <img className='subSec-img' alt="alt" src='https://i.pinimg.com/originals/8b/1b/69/8b1b69cc8b49b3292b250309ad3dd5d2.gif'></img>
                    </div>
                    <div className='text-con' style={{ backgroundColor: "#fca9b7" }}>
                        <h1 className='subSec-title'>Dont feel bad when you fall asleep.</h1>
                        <p className='subSec-text'>
                            You look so cute when you fall asleep, sooooo calm and peaceful. If I could, I would watch you sleep peacefully and not get bored.
                        </p>
                    </div>
                </div>
            </section>


            <section className='sec-1'>
                <div className='sec-1-container'>
                    <div className='img-con'>
                        <img className='subSec-img' alt="alt" src='https://i.pinimg.com/originals/c7/76/b0/c776b087d893a7191a1b6055d5ca55ed.gif'></img>
                    </div>
                    <div className='text-con'>
                        <h1 className='subSec-title'>I'd even let you style me.</h1>
                        <p className='subSec-text'>
                            There are a lot of things that I would only let you do to me, because you're the most special to me.
                            When I'm with you, I feel different. In a good way!
                        </p>
                    </div>
                </div>
            </section>

            <section className='hero' style={{ height: "100vh", marginTop: "0" }}>
                <div className='heroContainer'>
                    <h1 className='title' id='title'>{titleImg.title}</h1>
                    {
                        showBtn ? <div className='btn-container'>
                            <button className='btn' onClick={handleYes}>Yes</button>
                            <button className='btn' onClick={handleNo}>No</button>
                        </div> : null
                    }
                    <img id='img' className='hero-img' style={{ width: "50%", height: "50%" }} alt='hero' src={titleImg.img}></img>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Home