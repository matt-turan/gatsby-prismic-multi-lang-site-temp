import React, { useState } from 'react'

// Components
import Header from './Header'

const AgeGate = ({setAgeValid}) => {
    const [minorMsg, setMinorMsg] = useState(false)
    const ageGateContent = []

    if(!minorMsg){ //age gate
        ageGateContent.push(
            <div key="1">
                <h1>Are you of legal drinking age?</h1>
                <div className='btn-wrapper d-flex justify-content-center pt-4'>
                    <button className='btn' onClick={setAgeValid}>
                    Yes, I am
                    </button>
                    <button className='btn' onClick={() => setMinorMsg(!minorMsg)}>
                    No, not yet
                    </button>
                </div>
            </div>
        )
    }else{ // minor entered
        ageGateContent.push(
            <div key="2">
                <h1>Sorry, to visit this website you must be of legal drinking age</h1>
            </div>
        )
    }
    return (
        <div className='age-gate-wrapper text-center'>
            <Header disabledMenu />
            <div className='age-gate d-flex justify-content-center align-items-center'>
            {ageGateContent}
            </div>
            <div className='age-gate__copyright small'>
            ©2021. ™ are trademarks of Artisan Wine Co.
            </div>
        </div>
    )
}

export default AgeGate