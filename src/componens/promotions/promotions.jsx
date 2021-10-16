import'./promotions.css'
import TwoPlassOne from'../../img/TwoPlassOne.png'
import FifthProcent from'../../img/FifthProcent.jpg'
import TtheeFood from'../../img/TtheeFood.jpg'

export default function Promotions() {
    return (
        <body className = 'promotions'>
            <div className='promotion'>
                <h1>Pizza 2+1</h1>
                <p>fedqwstdrayokp[lfrgu  wyestrdagsdew 5wiorptrgoeidauwsr5e4dwf
                    qfcafyedwujiocfsgswiqo
                     rfeqjwbiokre cte   fg ed  s4f wre
                </p>
                <img src={TwoPlassOne} alt="" />
            </div>

            <div className='promotion'>
                <h1>Sushy FifthProcent</h1>
                <p>fedqwstdrayokp[lfrgu  wyestrdagsdew 5wiorptrgoeidauwsr5e4dwf
                    qfcafyedwujiocfsgswiqo
                     rfeqjwbiokre cte   fg ed  s4f wre
                </p>
                <img src={FifthProcent} alt="" />
            </div>

            <div className='promotion'>
                <h1>ThreeFood</h1>
                <p>fedqwstdrayokp[lfrgu  wyestrdagsdew 5wiorptrgoeidauwsr5e4dwf
                    qfcafyedwujiocfsgswiqo
                     rfeqjwbiokre cte   fg ed  s4f wre
                </p>
                <img src={TtheeFood} alt="" />
            </div>
        </body>
    );
}