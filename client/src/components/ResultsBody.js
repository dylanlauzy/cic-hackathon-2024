import NavBar from "@/components/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResultBody = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/blue.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "4rem",
          padding: "5rem",
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            boxShadow: 3,
            border: "1px solid #ddd",
            borderRadius: "16px",
          }}
        >
          {" "}
          {/* Added shadow and border */}
          <CardMedia
            component="img"
            height="140"
            image="/images/10033.png"
            alt="Image description"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "purple" }} // Changed color property to work with MUI
            >
              INTJ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 1.
            </Typography>
          </CardContent>
        </Card>
        {/* Repeat the structure for each card with unique content and images */}
        {/* ... */}
        {/* Card 16 */}
        <Card
          sx={{
            boxShadow: 3,
            border: "1px solid #ddd",
            borderRadius: "16px",
          }}
        >
          {" "}
          {/* Added shadow and border */}
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
              INTP
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 2.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10035.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 3.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10036.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 4.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10037.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 5.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10038.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 6.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10039.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 7.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10040.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 8.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10041.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 9.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10042.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 10.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10043.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 11.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10044.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 12.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10045.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 13.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10046.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 14.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10047.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 15.
            </Typography>
          </CardContent>
        </Card>
        <Card
            sx={{
              boxShadow: 3,
              border: "1px solid #ddd",
              borderRadius: "16px",
            }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/10048.png"
            alt="Image description"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This is the content for card 16.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultBody;
