// src/pages/MyOrdersPage/MyOrdersPageMain.tsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function MyOrdersPageMain() {
  const orders = useLoaderData(); // Loader'dan gelen veriyi alıyoruz.

  return (
    <div>
      <h1>My Orders</h1>
      {orders && orders.length > 0 ? (
        <ul>
          {orders.map((order: any, index: number) => (
            <li key={index}>{order.name}</li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default MyOrdersPageMain;
