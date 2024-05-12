import getUserData from "./getUserData";

const getThumbnailData = async () => {
  const userThumbnail: string[] = [];

  try {
    const userData = await getUserData(5);

    for (let i = 0; i < userData.results.length; i++) {
      userThumbnail.push(userData.results[i].picture.thumbnail);
    }
  } catch (error) {
    console.error("Error fetching reviewer data:", error);
  }

  localStorage.setItem("userThumbnail", JSON.stringify(userThumbnail));
  return userThumbnail;
};

const getThumbnail = () => {
  if (localStorage.getItem("userThumbnail")) {
    return JSON.parse(localStorage.getItem("userThumbnail")!);
  } else {
    return getThumbnailData();
  }
};

export default getThumbnail;
