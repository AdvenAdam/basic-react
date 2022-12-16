import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { plusValue, minusValue, increaseAmount, resetValue } from './counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const addAmount = Number(amount) || 0;
    const resetAll = () => {
        setAmount(0);
        dispatch(resetValue());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(plusValue())}>+</button>
                <button onClick={() => dispatch(minusValue())}>-</button>
            </div>
            <div>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                />
            </div>
            <div>
                <button onClick={resetAll}>Reset</button>
                <button onClick={() => dispatch(increaseAmount(addAmount))}>Increase Amount</button>
            </div>
        </section>
    );
}

export default Counter;
