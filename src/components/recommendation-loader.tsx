import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function RecommendationLoader() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4 text-center">
      <div className="animate-pulse">
        <Coffee className="h-12 w-12 text-foreground" />
      </div>
      <Typography.H3>Brewing your perfect match...</Typography.H3>
      <Typography.Muted>
        Our AI is analyzing your preferences to find the ideal coffee for you
      </Typography.Muted>
    </div>
  );
}