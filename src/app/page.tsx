'use client'
 /*"use client"
import { Container } from "@/components/container";


import { Me } from "@/components/me";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import  Cart from "../components/Cart/Cart";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import {data} from '../db/db'
 import "./App.css"
import { Account } from "@/components/wallet/account";

 

export default function Home() {
  const [cartItems, setCartItems] = useState<any>([]);

  // useEffect(() => {
  //   tele.ready();
  // });

  const onAdd = (book: any) => {
    const exist = cartItems.find((x:any) => x.id === book.id);
    if (exist) {
      setCartItems(
        cartItems.map((x:any) =>
          x.id === book.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ... book, quantity: 1 }]);
    }
  };

  const onRemove = (book:any) => {
    const exist = cartItems.find((x:any) => x.id === book.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x:any) => x.id !== book.id));
    } else {
      setCartItems(
        cartItems.map((x:any) =>
          x.id === book.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    // tele.MainButton.text = "Pay :)";
    // tele.MainButton.show();
  };
  return (
      <>
    <main className="w-full h-full">
      <Container>
        <span className="flex flex-col justify-between h-full">
          <Account />
          <Button asChild>
            <Link href="/theme">Theme</Link>
          </Button>
        </span>
      </Container>
    </main>
    <h1 className="heading">Order Book</h1>
    <Cart cartItems={cartItems} onCheckout={onCheckout}/>
    <div className="cards__container">
      { data.map((book:any) => {
        return (
          <Card book={book} key={book.id} onAdd={onAdd} onRemove={onRemove} />
        );
      })}
    </div>
  </>
  );
}
*/
import { Container } from "@/components/container";
import { Me } from "@/components/me";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cart from "../components/Cart/Cart";
import { useState } from "react";
import Card from "../components/Card/Card";
import "./App.css";
import { Account } from "@/components/wallet/account";
import { data } from "@/db/db";

export default function Home() {
  const [cartItems, setCartItems] = useState<any>([]);

  const onAdd = (book: any) => {
    const exist = cartItems.find((x: any) => x.id === book.id);
    if (exist) {
      setCartItems(
        cartItems.map((x: any) =>
          x.id === book.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const onRemove = (book: any) => {
    const exist = cartItems.find((x: any) => x.id === book.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x: any) => x.id !== book.id));
    } else {
      setCartItems(
        cartItems.map((x: any) =>
          x.id === book.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    // tele.MainButton.text = "Pay :)";
    // tele.MainButton.show();
  };

  return (
    <>
      <main className="w-full h-full">
        <Container>
          <span className="flex flex-col justify-between h-full">
            <Account />
            <Button asChild>
              <Link href="/theme">Theme</Link>
            </Button>
          </span>
        </Container>
      </main>
      <h1 className="heading">Order Book</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {data.map((book: any) => {
          return (
            <Card book={book} key={book.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}