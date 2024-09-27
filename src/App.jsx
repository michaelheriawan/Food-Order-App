import CartContextProvider from "./store/food-order-context";
import Header from "./components/Header";
import MealCatalog from "./components/MealCatalog";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <MealCatalog />
    </CartContextProvider>
  );
}

export default App;
