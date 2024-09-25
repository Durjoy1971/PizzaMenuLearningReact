import focaccia from "./assets/focaccia.jpg";
import funghi from "./assets/funghi.jpg";
import margherita from "./assets/margherita.jpg";
import prosciutto from "./assets/prosciutto.jpg";
import salamino from "./assets/salamino.jpg";
import spinaci from "./assets/spinaci.jpg"

import propTypes  from "./Types";


function ItemCard(props: propTypes ) {
  const { altName, headerName, textName, imageSrc, quantity } = props;
  return (
    <>
      <div className="flex gap-8 max-w-sm">
        <img src={imageSrc} alt={altName} className="w-30 h-28 " />
        <div className="flex flex-col gap-3">
          <h1 className="text-lg">{headerName}</h1>
          <p className="text-sm text-gray-400">{textName}</p>
          <h3>{quantity}</h3>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="bg-orange-100 flex flex-col gap-5 min-h-screen justify-center items-center border-b-[12px] border-yellow-300">
      {/* 1st Part */}
      <div className="flex flex-col items-center justify-center max-w-4xl gap-10">
        <h1 className="text-5xl text-amber-500 font-extralight tracking-wider">
          <span className="font-bold text-4xl mr-5 tracking-normal">===</span>
          FAST REACT PIZZA CO.
          <span className="font-bold text-4xl ml-5 tracking-normal">===</span>
        </h1>
        <h1 className="border-y-[1px] border-black py-2 font-medium tracking-wider text-xl">
          OUR MENU
        </h1>
        <h1 className="max-w-xl text-center">
          Authentic Italian cuisine. 6 creative dishes to choose from.All from
          our stone oven, all organic, all delicious.
        </h1>
      </div>
      {/* 2nd Part */}
      <div className="flex max-w-4xl flex-wrap justify-between items-center gap-8 mt-4">
        <ItemCard
          altName="focaccia"
          headerName="Focaccia"
          textName="Bread with italian olive oil and rosemary"
          imageSrc={focaccia}
          quantity={6}
        />
        <ItemCard
          altName="funghi"
          headerName="Pizza Funghi"
          textName="Tomato, mozarella, mushrooms, and onion"
          imageSrc={funghi}
          quantity={12}
        />
        <ItemCard
          altName="margherita"
          headerName="Pizza Margherita"
          textName="Tomato, mozarella"
          imageSrc={margherita}
          quantity={10}
        />
        <ItemCard
          altName="prosciutto"
          headerName="Pizza Prosciutto"
          textName="Tomato, mozarella, ham, aragula, and burrata cheese"
          imageSrc={prosciutto}
          quantity={18}
        />
        <ItemCard
          altName="salamino"
          headerName="Pizza Salamino"
          textName="Tomato, mozarella and pepperoni"
          imageSrc={salamino}
          quantity={20}
        />
        <ItemCard
          altName="spinaci"
          headerName="Pizza Spinaci"
          textName="Tomato, mozarella, spinach, and ricotta cheese"
          imageSrc={spinaci}
          quantity={12}
        />
      </div>
      {/* 3rd Part */}
      <div className="flex flex-col items-center gap-4 mt-8 mb-20">
        <h1 className="text-sm">We're open from 12:00 to 22:00. Come visit us or order online.</h1>
        <button className="bg-yellow-400 text-sm font-semibold px-7 py-3 m-auto">
          Order
        </button>
      </div>
    </div>
  );
}

export default App;
