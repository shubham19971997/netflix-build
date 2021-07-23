import React from 'react';
import './PlansScreen.css'

function PlansScreen({plan,quality}) {
    return (
        <div className="plansScreen">

            <div className="plansScreen__plan">
                
                <div className="plansScreen__info">
                    <h5>{plan}</h5>
                    <h6>{quality}</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>
            
        </div>
    )
}

export default PlansScreen
