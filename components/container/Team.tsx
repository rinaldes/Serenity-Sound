import { AppDev, AudioSpes, MusicCur, TheTeam } from "@/assets/Images";
import { Card } from "@/components";
import { Heading, Text } from "@/components/typography";

const Team = () => (
  <section
    id="team"
    className="gap-5 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card image={TheTeam} alt="Cover Image" size="square" type="cover" />
    <Card
      image={TheTeam}
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading
            type="h3"
            text="Meet the Minds Behind Your Music Sanctuary"
          />
          <br />
          <Text
            type="p"
            text="At Serenity, we're a passionate group of music enthusiasts and wellness advocates driven by a shared mission: to curate music that fosters peace and tranquility. Our team consists of:"
          />
        </div>
      }
    />
    <Card
      image={MusicCur}
      alt="Cover Image"
      size="square"
      type="combination"
      content={
        <div>
          <Heading type="h3" text="Music Curator" />
          <br />
          <Text
            type="p"
            text="A dedicated team with a discerning ear for calming melodies and a deep understanding of music's impact on mood. They meticulously craft playlists that cater to a variety of moods and needs."
          />
        </div>
      }
    />
    <Card
      image={AudioSpes}
      alt="Cover Image"
      size="square"
      type="combination"
      content={
        <div>
          <Heading type="h3" text="Audio Specialists" />
          <br />
          <Text
            type="p"
            text="Experts who ensure the music on Serenity is delivered in the highest quality, creating an immersive and restorative listening experience. They fine-tune the audio for optimal sound clarity and user enjoyment."
          />
        </div>
      }
    />
    <Card
      image={AppDev}
      alt="Cover Image"
      size="square"
      type="combination"
      content={
        <div>
          <Heading type="h3" text="App Developer" />
          <br />
          <Text
            type="p"
            text="Talented individuals who craft a user-friendly and intuitive app that seamlessly integrates into your life. They prioritize a smooth user experience to enhance your journey towards serenity."
          />
        </div>
      }
    />
  </section>
);

export default Team;
