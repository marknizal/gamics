import React, { useState, useEffect } from "react";
import AshParticles from "./AshParticles";
import { Overlay, Container, Button } from "./Effects.styled";
import music from "../../Assets/music.mp3";

const Effects = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handlePlayAudio = () => {
    const audio = document.getElementById("background-audio");

    audio
      .play()
      .then(() => {
        setAudioPlaying(true);
        document.body.style.overflow = "";
      })
      .catch(() => {
        console.log("Autoplay failed. User interaction may be required.");
      });
  };

  return (
    <>
      <audio id="background-audio" src={music} loop />
      <Overlay $visible={!audioPlaying} />
      {!audioPlaying && (
        <Container>
          <Button className="glow-anim" onClick={handlePlayAudio}>
            GAMICS
          </Button>
        </Container>
      )}
      <AshParticles />
    </>
  );
};

export default Effects;
