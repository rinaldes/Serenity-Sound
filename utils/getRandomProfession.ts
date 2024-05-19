const getRandomProfession = async () => {
  const professions = process.env.NEXT_PUBLIC_RANDOMIZER_API;
  const selectedProfessions: string[] = [];

  try {
    const response = await fetch(`${professions}/professions`);
    const data = await response.json();
    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    selectedProfessions.push(...shuffledData.slice(0, 6));
  } catch (error) {
    console.error("Can't catch user data:", error);
  }
  return selectedProfessions;
};

export default getRandomProfession;
