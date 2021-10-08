import { Link } from 'react-router-dom';

function CurrencyInfo({ getUSD, getEUR }) {
    return (
        <div className="converter">
            <h1>Current exchange rate in Ukraine</h1>
            <div className="current-rate">
                <div>USD</div>
                <div>{getUSD} UAH</div>
                <div>{getUSD} UAH</div>
            </div>
            <div className="current-rate">
                <div>EUR</div>
                <div>{getEUR} UAH</div>
                <div>{getEUR} UAH</div>
            </div>
            <Link className="link" to="/">Carrency converter</Link>
        </div>
    )
}

export default CurrencyInfo;