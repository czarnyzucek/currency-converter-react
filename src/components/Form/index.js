import { Wrapper, Fieldset, Legend, LabelData, Input, Select, Paragraph, ButtonContainer, Button, Information } from "./styled";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <Wrapper onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <Paragraph>
                    <label>
                        <LabelData>Kwota w PLN:*</LabelData>
                        <Input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            name="amount"
                            step="0.10"
                            min="0"
                            required
                        />
                    </label>
                </Paragraph>
                <Paragraph>
                    <label>
                        <LabelData className="form__labelData ">Waluta:</LabelData>
                        <Select
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
                        </Select>
                    </label>
                </Paragraph>
            </Fieldset>
            <ButtonContainer>
                <Button className="form__button">Przelicz</Button>
            </ButtonContainer>
            <Result result={result} />
            <Information className="form__information">*pole obowiązkowe</Information>
        </Wrapper>
    );
};

export default Form;