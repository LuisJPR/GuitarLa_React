import { useEffect, useReducer } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // useEffect se ejecuta cada vez que 'cart' cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart)); // Guarda el carrito en localStorage cada vez que cambia, convirtiendo el array de objetos a una cadena JSON
  }, [state.cart]);

  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar 
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;