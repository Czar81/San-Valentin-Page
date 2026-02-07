function Letter({ setClickedLetter }) {
  return (
    <div className="letter-container">
      <div 
        className="letter" 
        onClick={() => setClickedLetter(true)}
        role="button"
        tabIndex={0}
        aria-label="Open love letter"
      />
      <p className="letter-text">A letter for you</p>
    </div>
  );
}

export default Letter;