const getRandomProfession = () => {
  const profession = [
    "Financial Advisor",
    "Data Scientist",
    "Electrical Engineer",
    "Civil Engineer",
    "Food Scientist",
    "Maintenance & Repair Worker",
    "Bus Driver",
    "Automotive Mechanic",
    "Receptionist",
    "Systems Analyst",
    "Housekeeper",
    "Urban Planner",
    "Teacher Assistant",
    "Human Resources Assistant",
    "Construction Manager",
    "Registered Nurse",
    "Web Developer",
    "Librarian",
    "Middle School Teacher",
  ];

  const selectedProfessions: string[] = [];

  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * profession.length);
    const professionName = profession[idx];
    if (!selectedProfessions.includes(professionName)) {
      selectedProfessions.push(professionName);
    } else {
      i--;
    }
  }

  return selectedProfessions;
};

export default getRandomProfession;
