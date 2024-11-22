import { useEffect, useState } from "react";
import './countries.css'
import Country from "./Country/Country";

const Countries = () => {
const [allcountries,setAllcountries]= useState();
const [countryDetails,setCountryDetails] = useState([])
const [showImg,setShowImg] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setAllcountries(data))
    },[])

function images(img){
    const againNext = [...showImg,img]
    setShowImg(againNext)
}

function handlClick(params) {
    const next = [...countryDetails,params]
    setCountryDetails(next)
}

    return (
        <div>
            {
                countryDetails.map(countryDetail=><h3>{countryDetail.name.common}</h3>)
            }
            {
                showImg.map(img=><img src={img.flags.png}></img>)
            }


            <h1>{countryDetails.length}</h1>
            <h1 className="text">Assalamualikum</h1>
            <div className='allcountries'>
                {
                    allcountries?.map(allcountry=><Country images= {images} handleClick = {handlClick} key = {allcountry.cca3} allcountry={allcountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;