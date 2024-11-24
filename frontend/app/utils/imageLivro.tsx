"use client";

import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <div style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <Image
          src="/images/livros.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          className="hero-image"
        />
      </div>
      <h3 style={{ position: "relative", textAlign: "center", marginTop: "70px"}}>Ler é o caminho do saber, ingresse nessa jornada.</h3>     
    </>
  );
};

export default HeroImage;
