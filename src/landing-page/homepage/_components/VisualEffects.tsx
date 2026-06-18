

export default function VisualEffects() {
  return (
    <>
      {/* Ripple concentric circles backdrop in background */}
      <div className="ripple-bg">
        <div className="ripple-circle" style={{ width: "300px", height: "300px" }}></div>
        <div className="ripple-circle" style={{ width: "450px", height: "450px", transform: "translate(-50%, -50%) rotate(45deg)" }}></div>
        <div className="ripple-circle" style={{ width: "600px", height: "600px", transform: "translate(-50%, -50%) rotate(90deg)" }}></div>
        <div className="ripple-circle" style={{ width: "750px", height: "750px", transform: "translate(-50%, -50%) rotate(135deg)" }}></div>
        <div className="ripple-circle" style={{ width: "900px", height: "900px", transform: "translate(-50%, -50%) rotate(180deg)" }}></div>
        <div className="ripple-circle" style={{ width: "1050px", height: "1050px", transform: "translate(-50%, -50%) rotate(225deg)" }}></div>
        <div className="ripple-circle" style={{ width: "1200px", height: "1200px", transform: "translate(-50%, -50%) rotate(270deg)" }}></div>
      </div>

      {/* Sun glow effect (Top-Right) */}
      <div className="sun-glow"></div>
    </>
  );
}
