import React from 'react';

const ReadyCard = ({order}) => {
    return (
        <div className="shadow p-5 border rounded-xl border-amber-400">
            <h2 className="font-bold text-2xl">{order.order_title}</h2>
            <p>Table No: {order.table_no}</p>
               <p>Table No:Waiter Id: {order.waiterId}</p>
               <p>Cooked At: {order.coockedAt} </p>
        </div>
    );
};

export default ReadyCard;