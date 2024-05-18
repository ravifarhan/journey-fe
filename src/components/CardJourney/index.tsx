import { BookmarkOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { IJourney } from "../../types/app";

interface IJourneyProps{
  journey: IJourney
}

const CardJourney: React.FC<IJourneyProps> = ({ journey }) => {
  return (
    <>
      <Box display="flex" >
        <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
          <CardMedia
            component="img"
            height="200"
            image="https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJGZgNFQvZpC7SDzDtS3HQ8BrMt5HR4SDEh~U1Ewtxjlq3VzxPoLupzn4Wk7npfKjsXWemlTVSro2Dpgy7fNMOxfnVHDUM0UN6ca4wNZNRNL2~j-xZM8Jv2u4AvHDI~8nuwXQldWLo1tY~SoN6-qOVcI0vaOB3usUUvdusEwWCea23jIqU8QBQjYBcIgOV9Ht03ldTGWfhCcwvXzX92ktnfkHq4wODwfTMZdCInNSzot9dUZgqxicy3Dpg1SGJlQGCpROoXZgbNB5Wx41CyUhGD2ce7GVcq2k9-QYNeGYbXzWx-cE3iCJYcEKTF0mrd1pkzKtPATsRQqtMdTMKpPpA__"
            alt="gambar"
            sx={{ objectFit: "cover" }}
          />
          <IconButton
            sx={{ marginTop: "-380px", marginLeft: "260px", color: "white" }}
            aria-label="bookmark"
          >
            <BookmarkOutlined />
          </IconButton>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {journey.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              29 July 2020, {journey.user.fullname}
            </Typography>
            <Typography sx={{ fontSize: "14px" }} gutterBottom>
              {journey.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CardJourney;
