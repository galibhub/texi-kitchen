import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/OrderCard";
import CookingCard from "./cards/CookingCard";

const OrderContainer = ({ ordersPromise }) => {
  const orders = use(ordersPromise);

  const [cookingItems, setCookingItems] = useState([]);

  const handleOrder = (order) => {
    //When any card will be clicked from current orders then the card will be added into cooking now section//

    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  return (
    <div>
      <States cookingTotal={cookingItems.length} orderTotal={orders.length}></States>

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

            {
                cookingItems.map(order=><CookingCard key={order.id} order={order}></CookingCard>)
            }
          </div>

          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="shadow p-10"></div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
