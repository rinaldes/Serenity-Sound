const getUserData = async ({ num, group }: { num: number; group: string }) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?inc=picture,name&results=${num}`
    );
    const data = await response.json();
    localStorage.setItem(group, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getUserData;
