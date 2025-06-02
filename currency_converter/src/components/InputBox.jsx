import React , {useId} from "react";

function InputBox({
    label,
    amount , 
    onAmountChange ,
    onCurrencyChange ,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisabled = false ,
    currencyDisabled = false ,
    className = ""
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-purple-100 p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor ={amountInputId} className="text-black text-bold mb-2 inline-block">
                   {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisabled} 
                    value = {amount}
                    onChange = { (e) => 
                        onAmountChange && onAmountChange( Number(e.target.value) )
                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black text-bold mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-black cursor-pointer outline-none"
                    value = { selectCurrency }
                    onChange = { (e) => 
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled = {currencyDisabled}
                >
                    
                 {currencyOption.map( (currency) => (
                        <option key = {currency} value={currency}>
                            {currency}
                        </option>
                 ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
