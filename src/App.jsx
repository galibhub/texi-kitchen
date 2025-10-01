import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import States from "./components/States";
import { Suspense } from "react";
import { ToastContainer, toast } from 'react-toastify';

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();
  console.log(ordersPromise);
  return (
    <>

    <div>
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
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
      </div>
    </>
  );
}

export default App;
