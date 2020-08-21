import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    // Update the balance, income and expense
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
        <h4>
            your balance is
        </h4>
        <h1>
            ${total}
        </h1>
    </>
    )
}
