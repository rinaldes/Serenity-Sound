const getUserData = async (num: number, gender?: "male" | "female") => {
  const randomUser = process.env.NEXT_PUBLIC_RANDOM_USER_API;
  try {
    const response = await fetch(
      `${randomUser}/?inc=picture,name&results=${num}&gender=${gender}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Can't catch user data:", error);
  }
};

export default getUserData;
