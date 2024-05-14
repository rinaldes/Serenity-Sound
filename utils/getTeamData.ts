import getUserData from "./getUserData";

interface TeamData {
  name: string;
  picture: string;
}

const getTeamData = async (division: string) => {
  const teamData: TeamData[] = [];
  try {
    const userData = await getUserData(
      3,
      division === "audioSpecialists" ? "male" : "female"
    );
    for (let i = 0; i < userData.results.length; i++) {
      teamData.push({
        name: `${userData.results[i].name.title}. ${userData.results[i].name.first} ${userData.results[i].name.last}`,
        picture: userData.results[i].picture.medium,
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
