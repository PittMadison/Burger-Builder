import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,

    }
    cancelPurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = () => {
        alert('you rock!')
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    } 

    updatePurchaseState = (ingredients) => {
        const canBeOrdered = Object.values(ingredients).reduce((initialValue, ingredientPrice) => initialValue + ingredientPrice, 0) > 0;
        this.setState({purchaseable: canBeOrdered});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients, newPrice);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] === 0) return;
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients, newPrice);
    }

    render() { 
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxiliary>
                <Modal hide={this.cancelPurchaseHandler} show={this.state.purchasing}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.cancelPurchaseHandler}
                        purchaseContinue={this.continuePurchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientSubstracted={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchaseable={this.state.purchaseable}
                purchasing={this.purchaseHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;