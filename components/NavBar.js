import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const date = new Date().toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     });
  //     setCurrentDate(date);
  //   }, 1000); // Update every sec(you can adjust the interval as needed)

  //   return () => clearInterval(intervalId);
  // }, []);


  return (
    <nav>
      <img src="/Vintage-Movie-Camera-Icon.svg" />
      <h4>the top 20 most popular movies</h4>
      {/* <h4>{currentDate}</h4> */}
      <div>
        <Link legacyBehavior href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
          height: 80px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}