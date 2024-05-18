import { Card } from "@/components";
import { Text, Heading } from "@/components/typography";
import { Avatar } from "@nextui-org/avatar";

const ReviewCard = (userReview: any) =>
  userReview.map((result: any, index: number) => (
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
            <div className="grid gap-2 md:gap-0 grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr]">
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

export default ReviewCard;
