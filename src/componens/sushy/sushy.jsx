import'./imeges.css'
import lackshery from'../../img/lackshery.jfif'
import cheese from'../../img/cheese.jfif'
import fish from'../../img/fish.jpg'
import nev from'../../img/nev.jpg'
import sushi from'../../img/sushi.jpg'
import tree from'../../img/tree.jpg'
import vegina from'../../img/vegina.jpg'

export default function Header() {
    return ( 
        <body className = 'pizza'>
            <div className="row">
            <div>
          <img src={lackshery} alt="" />
          <h3>lackshery chees</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>

        <div>
          <img src={cheese} alt="" />
          <h3>cheese</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>

        </div>
        <div className="row">
        <div>
          <img src={fish} alt="" />
          <h3>fish</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        <div>
          <img src={nev} alt="" />
          <h3>new</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>

        </div>
        <div className="row">

        <div>
          <img src={sushi} alt="" />
          <h3>sushi</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>

        <div>
          <img src={tree} alt="" />
          <h3>tree</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        </div>
        <div className="row">
        <div>
          <img src={vegina} alt="" />
          <h3>vegina</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        </div>
        </body>
    );
}
