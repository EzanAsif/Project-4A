// import logo from './logo.svg';
import "./App.css";
import React, { useRef, useEffect } from "react";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
const App = () => {

  //=================================
  //======   ALICE ANIMATION  =======
  //=================================
  const spriteFrames = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" },
  ];

  const spirteTiming = {
    easing: "steps(7, end)",
    direction: "reverse",
    duration: 600,
    playbackRate: 1,
    iterations: Infinity,
  };
  const QueenAlice = useWebAnimations({
    keyframes: spriteFrames,
    timing: spirteTiming,
  });
  // =============================================

  // ======================================
  // ========  BACKGROUND 1 MOVEMENT   ====
  // ======================================

  const background1Mo = useWebAnimations({
    keyframes: {transform : ["translateX(100%)", "translateX(-100%)"]},
    timing: {duration: 36000,iterations: Infinity},
  });

  // ============================================

  // ==================================
  // ======   BACKGROUND 2 MOVEMENT ===
  // ==================================
  const background2Mo = useWebAnimations({
    keyframes: {transform : ["translateX(100%)", "translateX(-100%)"]},
    timing: {duration: 36000,iterations: Infinity},
  });

  // ===============================================

  // =================================
  //========  FOREGROUND 1 MOVM ======
  // =================================

  const foreground1Mo = useWebAnimations({
    keyframes: {transform : ["translateX(100%)", "translateX(-100%)"]},
    timing: {duration: 36000,iterations: Infinity},
  });

  // ===============================================

  // =================================
  //========  FOREGROUND 2 MOVM ======
  // =================================

  const foreground2Mo = useWebAnimations({
    keyframes: {transform : ["translateX(100%)", "translateX(-100%)"]},
    timing: {duration: 36000,iterations: Infinity},
  });


  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img ref= {QueenAlice.ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" ></img>
        </div>
      </div>
      <div class="scenery" id="foreground1" ref = {foreground1Mo.ref}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
      </div>
      <div class="scenery" id="foreground2" ref = {foreground2Mo.ref}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" />
      </div>
      <div class="scenery" id="background1" ref = {background1Mo.ref}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" />
      </div>
      <div class="scenery" id="background2" ref = {background2Mo.ref}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"/>
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"/>
      </div>
    </div>
  );
};

export default App;
