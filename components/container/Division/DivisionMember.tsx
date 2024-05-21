"use client";
import { Card, Image } from "@/components";
import { Heading, Text } from "@/components/typography";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import FetchTeam from "./FetchTeam";
interface DivisionMemberProps {
  division: string;
  image: StaticImageData;
  desc: string;
}

const fetchData = async (division: string, image: StaticImageData) => {
  try {
    const team = await FetchTeam(division);
    return TeamCard(team, image);
  } catch (error) {
    console.error("Error fetching team data:", error);
  }
};

const TeamCard = (teamMember: any, image: StaticImageData) => {
  const teamData = (
    <>
      {teamMember.map(
        (
          member: {
            name: string;
            picture: StaticImageData;
            background: string;
            title: string;
            quote: string;
          },
          index: number
        ) => (
          <Card
            key={index}
            alt="The team behind Serenity"
            size="square"
            type="combination"
            image={image}
            variant="2"
            content={
              <div className="flex flex-col h-full justify-start py-4 gap-6">
                <div className="flex flex-row md:flex-col lg:flex-row gap-4 items-center md:text-center lg:text-left">
                  <Image alt={member.name} src={member.picture} size="smol" />
                  <div>
                    <Heading type="h4" text={member.name} />
                    <Text className="text-md font-bold" text={member.title} />
                  </div>
                </div>
                <Text
                  className="text-md text-center mx-2 md:hidden lg:block"
                  text={member.quote}
                />
              </div>
            }
          />
        )
      )}
    </>
  );

  return teamData;
};

const DivisionMember = ({ division, image, desc }: DivisionMemberProps) => {
  const [teamMember, setTeamMember] = useState<any>(null);
  useEffect(() => {
    setTeamMember(fetchData(division, image));
  }, [division, image]);
  return (
    <section
      id={
        division === "App Developers"
          ? "app_developer"
          : division === "Music Curators"
          ? "music_curator"
          : "audio_spesialist"
      }
      className="gap-5 grid md:grid-cols-6 md:grid-rows-2 pt-8"
    >
      <Card
        image={image}
        alt={`${division} of Serenity Team`}
        size="square"
        type="image"
      />
      <Card
        size="width"
        type="text"
        content={
          <div>
            <Heading type="h3" text={division} />
            <br />
            <Text text={desc} />
          </div>
        }
      />
      {teamMember}
    </section>
  );
};

export default DivisionMember;
