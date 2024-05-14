import { Card } from "@/components";
import { Heading, Text } from "@/components/typography";
import { StaticImageData } from "next/image";

interface DivisionMemberProps {
  division: string;
  image: StaticImageData;
  desc: string;
  members: {
    name: string;
    image: string;
    desc: string;
  }[];
}

const DivisionMember = ({
  division,
  image,
  desc,
  members,
}: DivisionMemberProps) => (
  <section
    id="team"
    className="gap-5 grid grid-cols-6 grid-rows-2 pt-12 pb-4 snap-end"
  >
    <Card image={image} alt="Cover Image" size="square" type="image" />
    <Card
      alt="Cover Image"
      size="width"
      type="text"
      content={
        <div>
          <Heading type="h3" text={division} />
          <Text type="p" text={desc} />
        </div>
      }
    />
    {members.map((member, index) => (
      <Card
        key={index}
        alt="Cover Image"
        size="square"
        type="combination"
        content={
          <div>
            <Heading type="h3" text={member.name} />
            <Text type="p" text={member.desc} />
          </div>
        }
      />
    ))}
  </section>
);

export default DivisionMember;
