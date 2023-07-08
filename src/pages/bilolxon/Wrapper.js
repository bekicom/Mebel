import React from 'react';

const Wrapper = () => {
    return (
        <div>
            <h1>Products of the week</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat <br /> dolor odio odio malesuada at condimentum adipiscing iaculis <br /> semper.</p>

            <div className="section">
                <div className="btn1">
                    <img src={img} alt="" />
                    <p>Pot</p>
                    <span>$ 223,00</span>
                </div>
                <div className="btn2">
                    <img src={require('./img/lampa.png')} alt="" />
                    <p>Lamp</p>
                    <span>$ 223,00</span>
                </div>
                <div className="btn3">
                    <img src={require('./img/stol.png')} alt="" />
                    <p>Chaire</p>
                    <span>$ 223,00</span>
                </div>
            </div>
        </div>
    );
}   

export default Wrapper;
