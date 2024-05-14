import getUserData from "./getUserData";

const getThumbnailData = async () => {
  const thumbnails = (await getUserData(5)).results.map(
    ({ picture: { thumbnail } }: any) => thumbnail
  );
  localStorage.setItem("userThumbnail", JSON.stringify(thumbnails));
  return thumbnails;
};

const getThumbnail = () => {
  if (localStorage.getItem("userThumbnail")) {
    return JSON.parse(localStorage.getItem("userThumbnail")!);
  } else {
    return getThumbnailData;
  }
};

export default getThumbnail;
