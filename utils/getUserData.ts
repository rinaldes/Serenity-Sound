const getUserData = async (num: number, gender?: "male" | "female") => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?inc=picture,name&results=${num}&gender=${gender}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("He he, Error:", error);
  }
};

export default getUserData;
