import { getTeam } from "@/utils";

const fetchTheTeam = async (division: string) => {
  try {
    const userReviewData = await getTeam(division);
    return userReviewData;
  } catch (error) {
    console.error("Error fetching Team data:", error);
  }
};

export default fetchTheTeam;
