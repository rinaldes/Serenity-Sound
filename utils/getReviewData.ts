import getRandomProfession from "./getRandomProfession";
import getRandomReview from "./getRandomReview";
import getUserData from "./getUserData";

interface UserReviewData {
  name: string;
  picture: string;
  job: string;
  review: string;
}

const getReviewData = async () => {
  const userReviewData: UserReviewData[] = [];

  try {
    const userData = await getUserData(6);
    const userJob = getRandomProfession();
    const userReview = getRandomReview();

    for (let i = 0; i < userData.results.length; i++) {
      userReviewData.push({
        name: `${userData.results[i].name.title}. ${userData.results[i].name.first} ${userData.results[i].name.last}`,
        picture: userData.results[i].picture.medium,
        job: userJob[i],
        review: userReview[i],
      });
    }

    userReviewData.push(userReviewData[0]);
    userReviewData.push(userReviewData[1]);
  } catch (error) {
    console.error("Error fetching reviewer data:", error);
  }

  localStorage.setItem("userReviewData", JSON.stringify(userReviewData));
  return userReviewData;
};

const getReview = () => {
  if (localStorage.getItem("userReviewData")) {
    return JSON.parse(localStorage.getItem("userReviewData")!);
  } else {
    return getReviewData();
  }
};

export default getReview;