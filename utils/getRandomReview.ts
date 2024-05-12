const getRandomReview = () => {
  const review = [
    "Serenity has been my go-to app for unwinding after a long day. The curated playlists are amazing, and the app is so easy to use.",
    "I struggle with sleep anxiety, but listening to Serenity's sleep soundscapes has been a game-changer. I finally feel like I can relax and drift off to sleep peacefully.",
    "Using Serenity feels like stepping into a spa. The calming music and nature sounds are the perfect antidote to everyday stress.",
    "My favorite feature is the ability to create custom playlists for different moods. It helps me focus while working and unwind before bed.",
    "Serenity is more than just an app; it's a mindfulness practice. The music helps me de-stress and be more present in the moment.",
    "Since using Serenity, I've noticed a significant improvement in my overall well-being. I feel calmer and more centered throughout the day.",
    "The high-fidelity audio on Serenity is incredible! It makes listening to music a truly immersive and relaxing experience.",
    "I love the sleep timer feature on Serenity. It allows me to fall asleep to calming music without worrying about it playing all night.",
    "Serenity is the perfect app for busy professionals like myself. It helps me take a mental break and recharge during my commute.",
    "I've been using Serenity for years now, and it's become an essential part of my self-care routine. It helps me find moments of peace in my everyday life.",
    "The music selection on Serenity is vast and diverse. There's something for everyone, no matter your mood or preference.",
    "I downloaded Serenity on a whim, and I'm so glad I did! It's a fantastic app that has helped me reduce stress and improve my sleep quality.",
    "The Serenity team is constantly adding new features and playlists. It shows their dedication to creating the best possible experience for users.",
    "I highly recommend Serenity to anyone looking for a way to relax and de-stress. It's a simple yet powerful tool for improving your mental well-being.",
    "Serenity is my happy place. It's where I go to find peace, focus, and inspiration. Thank you for creating such a beautiful app!",
  ];

  const selectedReview: string[] = [];

  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * review.length);
    const reviewList = review[idx];
    if (!selectedReview.includes(reviewList)) {
      selectedReview.push(reviewList);
    } else {
      i--;
    }
  }

  return selectedReview;
};

export default getRandomReview;
