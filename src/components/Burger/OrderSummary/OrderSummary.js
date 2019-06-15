import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../../UI/Button/Button'

const orderSummary = (props) => {
    const  ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul> 
            <p>Continue to Checkout?</p>
            <Button btnClicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
            <Button btnClicked={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
        </Auxiliary>
    )
}

export default orderSummary