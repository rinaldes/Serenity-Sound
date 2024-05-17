import { StaticImageData } from "next/image";
import getUserData from "./getUserData";
import { appDevelopers, audioSpecialists, musicCurators } from "@/config/teams";

interface TeamData {
  name: string;
  picture: StaticImageData;
  background: string;
  title: string;
  quote: string;
}

const getTeamData = async (division: string) => {
  const teamData: TeamData[] = [];
  const teamBackground =
    division === "Audio Specialists"
      ? audioSpecialists
      : division === "Music Curator"
      ? musicCurators
      : appDevelopers;
  console.log(teamBackground);
  try {
    const userData = await getUserData(
      3,
      division === "Audio Specialists" ? "male" : "female"
    );
    for (let i = 0; i < userData.results.length; i++) {
      const staticImage: StaticImageData = {
        src: userData.results[i].picture.large,
        width: 128,
        height: 128,
      };
      teamData.push({
        name: `${userData.results[i].name.title}. ${userData.results[i].name.first} ${userData.results[i].name.last}`,
        picture: staticImage,
        background: teamBackground[i].background,
        title: teamBackground[i].title,
        quote: teamBackground[i].quote,
      });
    }
    localStorage.setItem(division, JSON.stringify(teamData));
    return teamData;
  } catch (error) {
    console.error("He he, Error:", error);
  }
};

const getTeam = (division: string) => {
  const teamMember = localStorage.getItem(division);
  if (teamMember) {
    return JSON.parse(teamMember!);
  } else {
    return getTeamData(division);
  }
};

export default getTeam;
