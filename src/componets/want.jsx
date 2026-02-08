import { useState, useRef } from "react";
import catHeart from "../assets/img/cat_heart.gif";
import catDancing from "../assets/img/cat_dance.gif";

function ValentineWindow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [clicked, setClicked] = useState(false);
  const btnNotRef = useRef(null);

  const handleNoMouseEnter = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setPosition({ x: randomX, y: randomY });
    setScale((prev) => Math.max(prev - 0.15, 0.2));
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    handleNoMouseEnter();
  };
  if (clicked) {
    return (
      <div className="want-container">
        <p className="want-text">¡ Si ! </p>
        <img className="cat-gif cat-dancing" src={catDancing} alt="Cat Dancing" />
      </div>
    );
  }

  return (
    <div className="want-container">
      <p className="want-text">Will you be my Valentine?</p>
      <img className="cat-gif" src={catHeart} alt="Cat Heart" />
      <div className="btn-container">
        <button
          className="btn btn-yes"
          onClick={() => setClicked(true)}
        ></button>
        <button
          ref={btnNotRef}
          className="btn btn-not"
          onMouseEnter={handleNoMouseEnter}
          onClick={handleNoClick}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
        ></button>
      </div>
    </div>
  );
}

export default ValentineWindow;
