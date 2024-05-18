"use client";
import { useEffect, useState } from "react";

import { Card } from "@/components";
import { Heading } from "@/components/typography";
import { Library1 } from "@/assets/Images";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { getReview, getThumbnail } from "@/utils";
import "./review.css";
import ReviewCard from "./ReviewCard";

const fetchTheReviewer = async () => {
  try {
    const userReviewData = await getReview();
    return ReviewCard(userReviewData);
  } catch (error) {
    console.error("Error fetching reviewer data:", error);
  }
};

const fetchTheThumbnail = async () => {
  try {
    const userThumbnail = await getThumbnail();
    return ThumbnailCard(userThumbnail);
  } catch (error) {
    console.error("Error fetching thumbnail data:", error);
  }
};

const ThumbnailCard = (thumbnail: any) => {
  const thumbnailData = (
    <AvatarGroup
      isBordered
      max={4}
      renderCount={() => (
        <p className="text-small text-foreground font-medium ms-2">
          + 6.2 Million others
        </p>
      )}
    >
      {thumbnail.map((result: any, index: number) => (
        <Avatar key={index} src={result} size="sm" />
      ))}
    </AvatarGroup>
  );

  return thumbnailData;
};

const Review = () => {
  const [userReview, setUserReview] = useState<any>(null);
  const [userThumbnail, setUserThumbnail] = useState<any>(null);
  useEffect(() => {
    setUserReview(fetchTheReviewer());
    setUserThumbnail(fetchTheThumbnail());
  }, []);

  return (
    <section
      id="review"
      className="gap-x-6 grid md:grid-cols-6 grid-rows-2 pt-2lg:pt-12 lg:snap-end"
    >
      <Card
        alt="Cover Image"
        size="width"
        type="text"
        className="hidden md:block"
        content={
          <div>
            <Heading
              type="h3"
              text="Hear What Our Users Are Saying About Serenity"
            />
            <br />
            {userThumbnail}
          </div>
        }
      />
      <Card image={Library1} alt="Cover Image" size="square" type="image" />
      <article className="w-[1200%] md:w-[400%] md:col-span-6 overflow-hidden auto-scroll">
        <div className="w-[100%] grid grid-cols-8 gap-8 pb-4">{userReview}</div>
      </article>
    </section>
  );
};

export default Review;
