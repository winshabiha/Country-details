import { useState } from 'react';
import './country.css'

const Country = ({allcountry,handleClick,images}) => {
    const {name,cca3,flags} = allcountry

    const [values,setValues] = useState(false)
    function handlClick(id) {
        setValues(true)
    }
    return (
        <div className= {`country ${values && 'color'}`}>
            <img height={'100px'} width={'200px'} src={flags.png} alt="" />
            <h5>{name.common}</h5>
            <button onClick={()=>handleClick(allcountry)}>Submit</button>
            <button onClick={()=>handlClick(cca3)}>Click</button>
            <button onClick={()=>images(allcountry)}>Show Image</button>
            {
                values ? <p>Hurrah! We have visited the country</p> : <p>I wanna visit the country</p>
            }
        </div>
    );
};

export default Country;