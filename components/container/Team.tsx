"use client";
import { AppDev, AudioSpes, MusicCur, TheTeam } from "@/assets/Images";
import { Card } from "@/components";
import { Heading, Text } from "@/components/typography";
import { usePathname } from "next/navigation";

const Team = () => {
  const pathname = usePathname();

  return (
    <section
      id="team"
      className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-8"
    >
      <Card image={TheTeam} alt="Cover Image" size="square" type="image" />
      <Card
        size="width"
        type="text"
        content={
          <div>
            <Heading
              type="h3"
              text="Meet the Minds Behind Your Music Sanctuary"
              className="hidden md:block"
            />
            <Heading
              type="h3"
              text="The Minds Behind The Sanctuary"
              className="block md:hidden"
            />
            <br />
            <Text
              type="p"
              text="At Serenity, we're a passionate group of music enthusiasts and wellness advocates driven by a shared mission: to curate music that fosters peace and tranquility. Our team consists of:"
              className="hidden md:block"
            />
            <Text
              type="p"
              text="A passionate group of music enthusiasts and wellness advocates driven by a shared mission: to curate music that fosters peace and tranquility."
              className="block md:hidden"
            />
          </div>
        }
      />
      <Card
        image={MusicCur}
        alt="Cover Image"
        size="square"
        type="combination"
        className={pathname === "/teams" ? "hidden md:block" : ""}
        content={
          <div>
            <Heading type="h3" text="Music Curators" />
            <br />
            <Text
              type="p"
              text="A team with a discerning ear and a deep understanding of music's impact on mood. Meticulously craft playlists that cater to a variety of needs."
              className="block lg:hidden"
            />
            <Text
              type="p"
              text="A dedicated team with a discerning ear for calming melodies and a deep understanding of music's impact on mood. They meticulously craft playlists that cater to a variety of moods and needs."
              className="hidden lg:block"
            />
          </div>
        }
      />
      <Card
        image={AudioSpes}
        alt="Cover Image"
        size="square"
        type="combination"
        className={pathname === "/teams" ? "hidden md:block" : ""}
        content={
          <div>
            <Heading type="h3" text="Audio Specialists" />
            <br />
            <Text
              type="p"
              text="Experts who ensure the music delivered in the highest quality, creating an immersive, restorative experience for optimal sound clarity."
              className="block lg:hidden"
            />
            <Text
              type="p"
              text="Experts who ensure the music on Serenity is delivered in the highest quality, creating an immersive and restorative listening experience. They fine-tune the audio for optimal sound clarity and user enjoyment."
              className="hidden lg:block"
            />
          </div>
        }
      />
      <Card
        image={AppDev}
        alt="Cover Image"
        size="square"
        type="combination"
        className={pathname === "/teams" ? "hidden md:block" : ""}
        content={
          <div>
            <Heading type="h3" text="App Developers" />
            <br />
            <Text
              type="p"
              text="Who craft a user-friendly and intuitive app that seamlessly integrates into your life. Prioritize enhance your journey towards serenity."
              className="block lg:hidden"
            />
            <Text
              type="p"
              text="Talented individuals who craft a user-friendly and intuitive app that seamlessly integrates into your life. They prioritize a smooth user experience to enhance your journey towards serenity."
              className="hidden lg:block"
            />
          </div>
        }
      />
    </section>
  );
};

export default Team;
