import React from "react";
import Header from "./components/Header/header";
import Jumpotron from "./components/jumpotron/jumpotron";
import Akari from "./assets/images/Akari.PNG";
import Haruno from "./assets/images/Haruno.PNG";
import Hinata from "./assets/images/Hinata.PNG";
import kaori from "./assets/images/kaori.PNG";
import Kousei from "./assets/images/Kousei.PNG";
import Kyouko from "./assets/images/Kyouko.PNG";
import Momo from "./assets/images/Momo.PNG";
import Rei from "./assets/images/Rei.jpg";
import Touji from "./assets/images/Touji.PNG";
import ImageCreate from "./components/ImageCreate/images";


const characters = [
    {
        id: 1,
        name: "Akari",
        image: Akari,
        count: 0
    },
    {
        id: 2,
        name: "Haruno",
        image: Haruno,
        count: 0
    },
    {
        id: 3,
        name: "Hinata",
        image: Hinata,
        count: 0
    },
    {
        id: 4,
        name: "Kaori",
        image: kaori,
        count: 0
    },
    {
        id: 5,
        name: "Kousei",
        image: Kousei,
        count: 0
    },
    {
        id: 6,
        name: "Kyouko",
        image: Kyouko,
        count: 0
    },
    {
        id: 7,
        name: "Momo",
        image: Momo,
        count: 0
    },
    {
        id: 8,
        name: "Rei Kiriyama",
        image: Rei,
        count: 0
    },
    {
        id: 9,
        name: "Touji",
        image: Touji,
        count: 0
    }
];

function App() {
    return (
        <div>
            <Header />
            <Jumpotron />
            <ImageCreate characters= {characters}/>
        </div>
    );
}


export default App;