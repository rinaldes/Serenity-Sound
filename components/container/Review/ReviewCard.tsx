"use client";
import { Card } from "@/components";
import { Text, Heading } from "@/components/typography";
import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";

const ReviewContent = ({ result }: { result: any }) => (
  <article className="px-8">
    <Text text={`‟ ${result.review} ”`} />
    <br />
    <div className="grid gap-2 md:gap-0 grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr]">
      <Avatar isBordered radius="full" src={result.picture} size="lg" />
      <div>
        <Heading type="h3" text={result.name} />
        <p>{result.job}</p>
      </div>
    </div>
  </article>
);

const ReviewCard = (userReview: any) =>
  userReview.map((result: any, index: number) => (
    <motion.div key={index} whileHover={{ scale: 1.05 }}>
      <Card
        key={index}
        size="rectangle"
        type="text"
        content={<ReviewContent result={result} />}
      />
    </motion.div>
  ));

export default ReviewCard;
