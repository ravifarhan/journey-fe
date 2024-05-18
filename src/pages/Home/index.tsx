import { Box } from "@mui/material";
import CardJourney from "../../components/CardJourney";
import { useEffect, useState } from "react";
import { IJourney } from "../../types/app";
import { getAllJourney } from "../../libs/api/call/journey";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

const Home = () => {
  const [journeys, setJourney] = useState<IJourney[]>([]);

  async function getJourneys() {
    try {
      const res = await getAllJourney();
      setJourney(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJourneys();
  }, []);

  return (
    <Box>
      <Navbar />
      <Search />
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
    </Box>
  );
};

export default Home;
