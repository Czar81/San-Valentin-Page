import { useState, useRef } from "react";

function WantYesNo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const btnNotRef = useRef(null);

  const handleNoMouseEnter = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setPosition({ x: randomX, y: randomY });
    setScale(prev => Math.max(prev - 0.15, 0.2));
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    handleNoMouseEnter();
  };

  return (
    <div className="want-container">
      <p className="want-text">Will you be my Valentine?</p>
      <div className="btn-container">
        <button className="btn btn-yes"></button>
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

export default WantYesNo;
