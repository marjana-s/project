import "./main.css";
import pizza from "../../img/pizza.jpg";
import milkshake from "../../img/milkshake.jpg";
import dumpkins from "../../img/dumpkins.jpg";
import sushi from "../../img/sushi.jpg";
export default function Main() {
  return (
    <body className="MainComponents">
      <p>recommendations</p>
      <div className="mainImages">
        <div>
          <img src={pizza} alt="" />
          <h3>Peperons</h3>
          <p>tesadskjfhdsvgvcm xslfbmdfsedujisaok smanjveg ucsxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        <div >
          <img src={milkshake} alt="" />
          <h3>Milkshake chocolate</h3>
          <p>tesad skjfhdsvg vcmoxslfbmdf sedujisa oksmanjvegu cs xhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        <div>
          <img src={dumpkins} alt="" />
          <h3>dumplings</h3>
          <p>tes adsk jfh dsvgvcm ox slfbmdfseduj isaoksmanjveguc sxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
        <div>
          <img src={sushi} alt="" />
          <h3>Philidelphia is classical</h3>
          <p>tes adsk jfhdsv gvcmoxslfbmdfsed ujisaoksm anjveguc sxhcsijbvxhu</p>
          <button class="btns buttonSeachs">Buy</button>
        </div>
      </div>
    </body>
  );
}
