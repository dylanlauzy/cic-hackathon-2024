"use client";

import NavBar from "@/components/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppContext } from "@/context/AppContext";
import { Dialog } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@mui/material";
import ChatApp from "./Chat";
import { useEffect, useRef } from "react";

const ResultBody = () => {
  const { chats, setSelectedGuy } = useAppContext();
  const carouselRef = useRef(null); // Reference to the carousel container

  useEffect(() => {
    let frame;
    const animate = () => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.children[0];
        carouselRef.current.style.transition = "none";
        let newTransform =
          parseFloat(
            carouselRef.current.style.transform
              .replace("translateX(", "")
              .replace("%)", "")
          ) || 0;
        newTransform -= 0.1; // Slowed down the animation further by decreasing this value
        if (newTransform <= -20) {
          carouselRef.current.style.transform = "translateX(0)";
          carouselRef.current.appendChild(firstChild);
          newTransform = 0;
        } else {
          carouselRef.current.style.transform = `translateX(${newTransform}%)`;
        }
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex overflow-hidden w-screen">
      <div
        ref={carouselRef} // Attach the ref here
        className="flex gap-x-4 w-screen m-auto"
        style={{
          display: "flex",
          padding: "5rem",
        }}
      >
        {Object.entries(chats).map(([mbti, chatLog], index) => (
          <DialogTrigger
            key={index}
            onClick={() => {
              setSelectedGuy(mbti);
            }}
          >
            <Card
              className="h-[400px] w-[250px]"
              key={index}
              sx={{
                boxShadow: 3,
                border: "1px solid #ddd",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={`/images/${mbti}.png`}
                alt="Image description"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "purple" }} // Changed color property to work with MUI
                >
                  {mbti}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="line-clamp-3"
                >
                  {chatLog[1][1]}
                </Typography>
              </CardContent>
            </Card>
          </DialogTrigger>
        ))}
      </div>
    </div>
  );
};

export default ResultBody;
