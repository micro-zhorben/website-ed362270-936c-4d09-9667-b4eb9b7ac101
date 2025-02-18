import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Coffee, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoffeeCardProps {
  title: string;
  description: string;
  roastLevel: string;
  flavor: string;
  className?: string;
  onSelect?: () => void;
  onLike?: () => void;
  isLiked?: boolean;
}

export function CoffeeCard({
  title,
  description,
  roastLevel,
  flavor,
  className,
  onSelect,
  onLike,
  isLiked = false,
}: CoffeeCardProps) {
  return (
    <Card className={cn("w-full max-w-sm transition-all hover:shadow-lg", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Typography.H3>{title}</Typography.H3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onLike}
            className="text-foreground hover:text-foreground"
          >
            <Heart
              className={cn("h-5 w-5", isLiked && "fill-current text-destructive")}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-foreground" />
            <Typography.Small>Roast Level: {roastLevel}</Typography.Small>
          </div>
          <Typography.Small className="block">Flavor Notes: {flavor}</Typography.Small>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onSelect} className="w-full">
          Select This Coffee
        </Button>
      </CardFooter>
    </Card>
  );
}