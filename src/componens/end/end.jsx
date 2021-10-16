import "./end.css";
import logo from'../../img/logo.jpg'
export default function End() {
  return (
      <body className='end'>
          <div className='endFood'>
              <h1>Food</h1>
              <p>Menu</p>
              <p>Our restorans</p>
              <p>Information</p>
          </div>
          <div className="endServise">
              <h1>
                  Servies
              </h1>
              <p>Pizza Tracker</p>
          </div>
          <div className="endContacs">
              <h1>Contacts</h1>
              <p>instaFoodLife</p>
              <p>foodlife@gmail.com</p>
              <p>0965429159</p>
          </div>
          <div>
              <img src={logo} alt="" />
          </div>
      </body>
  );
}
