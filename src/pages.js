//pages.js
import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About </Link>
        <Link to="contact">Contact Us </Link>
        <Link to="services">Services  </Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <nav>
        <Link to="us">US </Link>
        <Link to="pl">PL </Link>
        <Link to="de">DE </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function ContactUS() {
  return(
      <h2>USA</h2>
  )
}

export function ContactPL() {
  return(
      <h2>Poland</h2>
  )
}

export function ContactDE() {
  return(
      <h2>Germany</h2>
  )
}

export function Services() {
  return(
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed
        nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper
        porta. Mauris massa. Vestibulum lacinia arcu
        eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula
        in libero.
      </p>
    </section>);
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>
        Nie znaleziono elementu: {location.pathname}
      </h1>
    </div>
  );
}


