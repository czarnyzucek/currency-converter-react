import "./style.css"

const Form = () => {
    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p className="form__pragraph">
                    <label className="form__label">
                        <span className="form__labelData">Kwota w PLN:*</span>
                        <input
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
                        <select className="form__field">
                            <option value="EUR" selected>EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="CHF">CHF</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <div className="form__buttonsContener">
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="reset">Wyczyść</button>
            </div>
            <p className="form__result"></p>
            <p className="form__information">*pole obowiązkowe</p>
        </form>
    );
};

export default Form;