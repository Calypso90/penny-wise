import { fetchUser } from "@/lib/fetchUser.js";
import Link from "next/link.js";
import { PiArrowFatLineLeftFill } from "react-icons/pi";
import { PiArrowFatLineRightFill } from "react-icons/pi";

export default async function Home() {
  const user = await fetchUser();

  return (
    <section id="homePage">
      <div className="snapShot">
        <div className="homeDetails-container">
          <aside className="homeDetails">
            <h4>You Can Plan Your Budget Throughout The Years!</h4>
            <p>
              Get a clear, yearly snapshot of your finances with our app. Track
              income, expenses, and savings, set goals, and stay in control.
              Achieve your financial objectives with ease!
            </p>
          </aside>
        </div>

        <img
          className="snapShotImg"
          src="/screenShot_1.png"
          alt="App Image of Budget"
        />
      </div>

      <Link href={"/register"}>
        <button className="home-register">Register Now!</button>
      </Link>

      <div className="snapShot">
        <img
          className="snapShotImg"
          src="/screenShot_2.png"
          alt="App Image of Monthly Budget"
        />
        <div className="homeDetails-container">
          <aside className="homeDetails">
            <h4>Manage Your Budget with Ease!</h4>
            <p>
              Take control of your finances with our user-friendly budget app.
              Effortlessly create, update, and delete budget entries. Customize
              details to align with your goals, stay organized, and make
              informed decisions with ease!
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
