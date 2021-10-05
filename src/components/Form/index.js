import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p className="form__pragraph">
                    <label className="form__label">
                        <span className="form__labelData">Kwota w PLN:*</span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            type="number"
                            name="amount"
                            step="0.10"
                            min="0"
                            required
                        />
                    </label>
                </p>
                <p className="form__pragraph">
                    <label className="form__label">
                        <span className="form__labelData ">Waluta:</span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
            </fieldset>
            <div className="form__buttonsContener">
                <button className="form__button">Przelicz</button>
            </div>
            <Result result={result} />
            <p className="form__information">*pole obowiązkowe</p>
        </form>
    );
};

export default Form;