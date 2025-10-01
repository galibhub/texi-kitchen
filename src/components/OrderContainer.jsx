import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";
import CookingCard from "./cards/CookingCard";
import ReadyCard from "./cards/ReadyCard";
import { toast } from 'react-toastify';


const OrderContainer = ({ ordersPromise }) => {
//   const orders = use(ordersPromise); data te raklm karon jokhon ready order e click hobe useState er maddhome jate remove hoiye jay current order list theek//

const data = use(ordersPromise);
const [orders,setOrders]=useState(data);

  const [cookingItems, setCookingItems] = useState([]);

  const [readyItems, setreadyItems] = useState([]);

  const handleOrder = (order) => {
    toast.success("Order Placed!");
    //When any card will be clicked from current orders then the card will be added into cooking now section//

    const isExist = cookingItems.find((item) => item.id == order.id);
    if (isExist) {
      toast.error("Order Already on processing!");
      return;
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  // handle ready//

  const handleCooking = (order) => {

    order.coockedAt=new Date().toLocaleTimeString();
    //1.ready items er vitore order k dhukao
    const newReadyItems = [...readyItems, order];
    setreadyItems(newReadyItems);

    //2.cooking items er vitor theke order k remove koro
    const remaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(remaining);

    //3.current order theke remove korte hobe jokhon click kora hobe cooking reay  theke

    const remainigOrders=orders.filter((item)=>item.id !=order.id);
    setOrders(remainigOrders);
  };

  return (
    <div>
      <States
        cookingTotal={cookingItems.length}
        orderTotal={orders.length} 
        readyTotal={readyItems.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Current Orders</h2>

          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                handleOrder={handleOrder}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Coocking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                key={order.id}
                order={order}
                handleCooking={handleCooking}
              ></CookingCard>
            ))}
          </div>

          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
           {
            readyItems.map(order=> <ReadyCard key={order.id} order={order}></ReadyCard>)
        
           }
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
