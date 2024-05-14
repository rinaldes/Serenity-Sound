import getUserData from "./getUserData";

const getThumbnailData = async () => {
  const thumbnailData: string[] = [];
  try {
    const thumbnails = await getUserData(5);
    for (let i = 0; i < thumbnails.results.length; i++) {
      thumbnailData.push(thumbnails.results[i].picture.thumbnail);
    }
  } catch (error) {
    console.error("Error fetching thumbnail data:", error);
  }

  localStorage.setItem("userThumbnail", JSON.stringify(thumbnailData));
  return thumbnailData;
};

const getThumbnail = () => {
  const thumbnail = localStorage.getItem("userThumbnail");
  if (thumbnail) {
    return JSON.parse(thumbnail!);
  } else {
    return getThumbnailData();
  }
};

export default getThumbnail;
