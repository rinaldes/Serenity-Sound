import { professions } from "@/configs/professions";
const getRandomProfession = () => {
  const selectedProfessions: string[] = [];

  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * professions.length);
    const professionName = professions[idx];
    if (!selectedProfessions.includes(professionName)) {
      selectedProfessions.push(professionName);
    } else {
      i--;
    }
  }

  return selectedProfessions;
};

export default getRandomProfession;
