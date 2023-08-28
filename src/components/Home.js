import React from "react";

function Home(props){
    console.log(props)
    return(
        <div>
            <div className="cart">
            <span>{props.cardData}</span>
                <img src="https://images.pexels.com/photos/9399724/pexels-photo-9399724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            <h1>Home Container</h1>
            <div className="cart-wrapper">
                <div className="cart-image">
                    <img src="https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div className="cart-details">
                    <span>
                        Percentage Of This Beauty: 89%
                    </span>
                </div>
                <div className="cart-btn">
                    <button onClick={()=>props.addToCardHandler({price:1000,name:'Luci'})}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;