"use client";
import { useEffect, useState } from "react";

import { Card } from "@/components";
import { Heading, Text } from "@/components/typography";
import { Library1 } from "@/assets/Images";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { getReview, getThumbnail } from "@/utils";
import "./review.css";

const renderUserReviews = (userReview: any) => {
  return userReview.map((result: any, index: number) => (
    <div key={index}>
      <Card
        key={index}
        alt="Cover Image"
        size="rectangle"
        type="text"
        content={
          <article className="px-8">
            <Text type="p" variant="italic" text={`‟ ${result.review} ”`} />
            <br />
            <div className="grid grid-cols-[1fr_4fr]">
              <Avatar isBordered radius="full" src={result.picture} size="lg" />
              <div>
                <Heading type="h3" text={result.name} />
                <p>{result.job}</p>
              </div>
            </div>
          </article>
        }
      />
    </div>
  ));
};

const fetchTheReviewer = async () => {
  try {
    const userReviewData = await getReview();
    return renderUserReviews(userReviewData);
  } catch (error) {
    console.error("Error fetching reviewer data:", error);
  }
};

const Review = () => {
  const [userReview, setUserReview] = useState<any>(null);
  useEffect(() => {
    setUserReview(fetchTheReviewer());
  }, []);

  return (
    <section
      id="review"
      className="gap-x-5 grid grid-cols-6 grid-rows-2 pt-12 snap-end"
    >
      <Card
        image={Library1}
        alt="Cover Image"
        size="width"
        type="text"
        content={
          <div>
            <Heading
              type="h3"
              text="Hear What Our Users Are Saying About Serenity"
            />
            <br />
            <AvatarGroup
              isBordered
              max={4}
              renderCount={() => (
                <p className="text-small text-foreground font-medium ms-2">
                  + 6.2 Million others
                </p>
              )}
            >
              {getThumbnail().map((result: any, index: number) => (
                <Avatar key={index} src={result} size="sm" />
              ))}
            </AvatarGroup>
          </div>
        }
      />
      <Card image={Library1} alt="Cover Image" size="square" type="image" />
      <article className="w-[400%] col-span-6 overflow-hidden auto-scroll">
        <div className="w-[100%] grid grid-cols-8 gap-8 pb-4">{userReview}</div>
      </article>
    </section>
  );
};

export default Review;
