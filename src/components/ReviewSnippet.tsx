import { Star } from "lucide-react";
import { reviews, Review } from "@/data/reviews";

interface ReviewSnippetProps {
  /** Filter reviews by town (case-insensitive, partial match) */
  town?: string;
  /** Filter reviews by service (case-insensitive, partial match) */
  service?: string;
  /** Number of reviews to show */
  count?: number;
  title?: string;
}

export const ReviewSnippet = ({ town, service, count = 2, title }: ReviewSnippetProps) => {
  let filtered = reviews.filter((r) => r.rating === 5);
  if (town) {
    filtered = filtered.filter((r) => r.town.toLowerCase().includes(town.toLowerCase()));
  }
  if (service) {
    filtered = filtered.filter((r) => r.service.toLowerCase().includes(service.toLowerCase()));
  }
  const shown = filtered.slice(0, count);

  if (shown.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {shown.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
};

export const ReviewCard = ({ review }: { review: Review }) => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-1">
      {[...Array(review.rating)].map((_, j) => (
        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
    <p className="mt-3 text-sm italic text-muted-foreground">"{review.text}"</p>
    <div className="mt-4 text-sm">
      <div className="font-semibold text-primary">{review.name}</div>
      <div className="text-xs text-muted-foreground">{review.town} · {review.service}</div>
    </div>
  </div>
);
