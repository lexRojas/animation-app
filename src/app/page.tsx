'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(useGSAP, Flip, Draggable);

import { useRef } from "react";




export default function Home() {






  const container = useRef<HTMLDivElement | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // use selectors...
    gsap.timeline()
      .to(circle, { x: 120 },)
      .to(".box", { rotation: "+=360", duration: 1 })
      .to(circle.current, { rotation: "-=360", duration: 1 })


    const state = Flip.getState(".texto")

    Flip.from(state, {
      ease: "power1.inOut",
      duration: 0.8,
      absolute: true
    })
  },




  );


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      <div className="flex flex-col  App  ">
        <div ref={container} className="container">
          <div className="box gradient-blue">selector</div>
          <div className="flex rounded-full  bg-green-600 w-24  h-24  justify-center  items-center " ref={circle}> Referencia  </div>
        </div>

        <div className="texto   text-2xl text-white">BURBUJAS</div>
      </div>


    </div>
  );
}
