import { Box } from "@mui/material";
import CardJourney from "../../components/CardJourney";
import { useEffect, useState } from "react";
import { getAllJourney, getUserJourney } from "../../libs/api/call/journey";
import { IJourney } from "../../types/app";

const Profile = () => {
  const [journeys, setJourney] = useState<IJourney[]>([]);


  async function getJourney() {
    try {
      const res = await getUserJourney();
      setJourney(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJourney();
  }, []);


  return (
    <>
      <Box
        display="flex"
        marginTop={4}
        marginX={4}
        gap={4}
        justifyContent={"center"}
      >
        {journeys.map((journey) => (
          <CardJourney key={journey.id} journey={journey} />
        ))}
      </Box>
    </>
  );
};

export default Profile;
