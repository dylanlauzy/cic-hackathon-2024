"use client"

import NavBar from "@/components/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppContext } from "@/context/AppContext";

const ResultBody = () => {
  const { chats } = useAppContext();

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "4rem",
          padding: "5rem",
        }}
      >
        {Object.entries(chats).map(([mbti, chatLog]) => (
          <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/images/10034.png"
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
              <Typography variant="body2" color="text.secondary" className="line-clamp-3">
                {chatLog[1][1]}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultBody;
