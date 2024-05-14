import { reviews } from "@/config/reviews";
const getRandomReview = () => {
  const selectedReview: string[] = [];

  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * reviews.length);
    const reviewList = reviews[idx];
    if (!selectedReview.includes(reviewList)) {
      selectedReview.push(reviewList);
    } else {
      i--;
    }
  }

  return selectedReview;
};

export default getRandomReview;
