import { AppDev, AudioSpes, MusicCur } from "@/assets/Images";
import DivisionMember from "./DivisionMember";

const Division = () => (
  <>
    <DivisionMember
      division="Music Curator"
      image={MusicCur}
      desc="A dedicated team with a discerning ear for calming melodies and a deep understanding of music's impact on mood. They meticulously craft playlists that cater to a variety of moods and needs."
    />
    <DivisionMember
      division="Audio Specialists"
      image={AudioSpes}
      desc="Experts who ensure the music on Serenity is delivered in the highest quality, creating an immersive and restorative listening experience. They fine-tune the audio for optimal sound clarity and user enjoyment."
    />
    <DivisionMember
      division="App Developer"
      image={AppDev}
      desc="Talented individuals who craft a user-friendly and intuitive app that seamlessly integrates into your life. They prioritize a smooth user experience to enhance your journey towards serenity."
    />
  </>
);

export default Division;
