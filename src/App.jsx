import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import States from "./components/States";
import { Suspense } from "react";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();
  console.log(ordersPromise);
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>

      <section>
        <Heading>Kitchen Room</Heading>
      </section>

      <section>
        <Suspense fallback={"Loading..."}>
          <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
    </>
  );
}

export default App;
