import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './ConfirmOffer.scss'

import Coin from './Coin/Coin'
import Exchange from './Exchange/Exchange'
import Rating from './Rating/Rating'
import Gas from './Gas/Gas'
import Button from './Button/Button'

const ConfirmOffer = ({isBack}) => (
    <div className="offer-popup__form">
        <h2 className="offer-popup__title">Confirm</h2>
        <div className="confirm">
            <Coin />
            <Exchange />
            <Rating />
            <Gas />
            <Button isBack={isBack}/>
        </div> 
    </div>
)

export default CSSModules(ConfirmOffer, styles)
