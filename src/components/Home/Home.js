import React from "react";

const Home = () => (
    <div>
      <h2>Welcome to Cat's Meow!</h2>
        <div  style={{ display: "flex", flexDirection: "column" }}>
        <div className={"parent-center"}>
            <p style={{width: "100%"}}>
                Cat's Meow is a non-profit organization dedicated to finding loving homes
                for stray and abandoned cats. Our mission is to pair each of our cats with
                responsible and caring owners who will love them as much as we do!
            </p>
        </div>
        <div className={"parent-center"}>
        <img src={"images/homepage.png"}
             alt={"cat"}
             style={{ height: "50%", maxHeight: "400px", display: "block", margin: "0 auto", marginTop: "10px" }}
        />
        </div>
        </div>

    </div>
);

export default Home;
