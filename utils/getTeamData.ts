import { StaticImageData } from "next/image";
import getUserData from "./getUserData";

interface TeamData {
  name: string;
  picture: StaticImageData;
  background: string;
  title: string;
  quote: string;
}

const getTeamData = async (division: string) => {
  const teams = process.env.NEXT_PUBLIC_RANDOMIZER_API;

  const teamData: TeamData[] = [];
  let teamBackground;
  switch (division) {
    case "Audio Specialists":
      const response = await fetch(`${teams}/audioSpecialists`);
      teamBackground = await response.json();
      break;
    case "Music Curators":
      const response1 = await fetch(`${teams}/musicCurators`);
      teamBackground = await response1.json();
      break;
    case "App Developers":
      const response2 = await fetch(`${teams}/appDevelopers`);
      teamBackground = await response2.json();
      break;
  }

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
