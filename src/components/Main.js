import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Main({setGetUSD, setGetEUR}) {

    const CURRENCY_API_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=380f92eb5f354e5a8a2ae4f16908cd0b';

    const [currencyNum, setCurrencyNum] = useState();
    const [convResult, setConvResult] = useState();
    const [country, setCountry] = useState([]);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [exhangeUSD, setExhengeUSD] = useState();
    const [exhangeUAH, setExhengeUAH] = useState();
    const [exhangeEUR, setExhengeEUR] = useState();

    let oneUSD = (exhangeEUR / exhangeUSD * exhangeUAH).toFixed(2);
    let oneEUR = (exhangeEUR * exhangeUAH).toFixed(2);
    function connectComponentUsd(data) {
        setGetUSD(data)
    };
    connectComponentUsd(oneUSD);

    function connectComponentEur(data) {
        setGetEUR(data)
    };
    connectComponentEur(oneEUR);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const result = await Axios.get(CURRENCY_API_URL);
        console.log(result.data);
        setCountry(result.data.rates);
        setExhengeUSD(Object.values(result.data.rates)[149]);
        setExhengeUAH(Object.values(result.data.rates)[147]);
        setExhengeEUR(Object.values(result.data.rates)[46]);
    }

    function convert(e) {
        e.preventDefault();
        let num = (value2 / value1) * currencyNum;
        setConvResult(num);
    }

    return (
        <div className="converter">
            <h1>Currency converter</h1>
            <div>
                <input 
                    type="number" 
                    value={currencyNum || ""} 
                    onChange={(e) => setCurrencyNum(e.target.value)}
                    className="input"
                />
                <select onChange={(e) => setValue1(e.target.value)}>
                    {Object.keys(country).map((value, index) => <option key={index} value={country[value]}>{value}</option>)} 
                </select>
            </div>
            <p className="equals">=</p>
            <div>
                <input 
                    type="number" 
                    value={convResult || ""}
                    className="input"
                    onChange={()=>{}}
                />
                <select onChange={(e) => setValue2(e.target.value)}>
                    {Object.keys(country).map((value, index) => <option key={index} value={country[value]}>{value}</option>)}
                </select>
            </div>
            <button className="convert-btn" onClick={convert}>Convert</button>
            <Link className="link" to="/info">Current exchange rate</Link>
        </div>
    )
}

export default Main;