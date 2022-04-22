import React, {useEffect} from 'react';
import './vote.css'
import { init } from '../../web3Client'
const Vote = () => {
    // const provideUrl = process.env.PROVIDER_URL || 'http://localhost:7545';
    useEffect(() => {
        init();
    }, []);
    function openPopup () {
        window.opew("Hello world")
    }
    return (
        <div>
            <div className="div1">
                <h2>Select your candidate wisely</h2>
                <div className="div2 candidate pos">
                    <button className='buttdes' type='submit'>Vote</button>
                </div>
                <div className="div3 candidate pos">
                    <button className='buttdes' type='submit'>Vote</button>
                </div>
                <div className="div4 candidate pos">
                    <button className='buttdes' type='submit' onClick={openPopup}>Vote</button>
                </div>
            </div>
        </div>
    )
}

export default Vote;
