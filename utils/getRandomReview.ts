const getRandomReview = async () => {
  const reviews = process.env.NEXT_PUBLIC_RANDOMIZER_API;
  const selectedReview: string[] = [];

  try {
    const response = await fetch(`${reviews}/reviews`);
    const data = await response.json();
    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    selectedReview.push(...shuffledData.slice(0, 6));
  } catch (error) {
    console.error("Can't catch user data:", error);
  }

  return selectedReview;
};

export default getRandomReview;
