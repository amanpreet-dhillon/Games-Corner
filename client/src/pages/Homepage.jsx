import { useState } from "react";



function Navigation( loggedIn = false ){

    if (loggedIn){
        return(
            <ul className="ul-nav">
                <li className="li-navi-home"><a className="li-a-navi" href="#home">Home</a></li>
                <li className="li-navi-user"><a className="li-a-navi" href="#login">Log In</a></li>
            </ul>
        )
    } else {
        return(
            <ul className="ul-nav">
                <li className="li-navi-home"><a className="li-a-navi" href="#home">Home</a></li>
                <li className="li-navi-user"><a className="li-a-navi" href="#account">Account</a></li>
            </ul>
        )
    }


}   

export default function Home(){

    return (
        <>
            <div className="wrapper">
                <div className="div-navi">
                    <Navigation/>
                </div>

                <div className="div-game-NW">
                    <button className="button-game">Chess</button>
                </div>
                <div className="div-game-NE">
                    <button className="button-game">Checkers</button>
                </div>
                <div className="div-game-SW">
                    <button className="button-game">Tic-Tac-Toe</button>
                </div>
                <div className="div-game-SE">
                    <button className="button-game">Connect-4</button>
                </div>

            </div>
        </>
    );

}

/** <div className="div-navi">
                    <Navigation/>
                </div>

                <div className="div-game-NW">
                    <button className="button-game">Chess</button>
                </div>*/