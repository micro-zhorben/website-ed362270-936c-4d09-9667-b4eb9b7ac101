import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { RecommendationLoader } from "@/components/recommendation-loader";
import { Coffee } from "lucide-react";

interface CoffeeRecommendation {
  id: number;
  title: string;
  description: string;
  roastLevel: string;
  flavor: string;
}

export function Home() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);
  const [likedCoffees, setLikedCoffees] = useState<number[]>([]);

  const handlePreferenceSubmit = async (values: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendations([
        {
          id: 1,
          title: "Ethiopian Yirgacheffe",
          description: "A bright and complex coffee with floral notes and citrus undertones.",
          roastLevel: values.roastPreference,
          flavor: "Floral, Citrus, Bergamot",
        },
        {
          id: 2,
          title: "Colombian Supremo",
          description: "Well-balanced with caramel sweetness and nutty undertones.",
          roastLevel: values.roastPreference,
          flavor: "Caramel, Nuts, Chocolate",
        },
        {
          id: 3,
          title: "Sumatra Mandheling",
          description: "Full-bodied with earthy notes and a smooth finish.",
          roastLevel: values.roastPreference,
          flavor: "Earthy, Herbal, Dark Chocolate",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  const toggleLike = (id: number) => {
    setLikedCoffees((prev) =>
      prev.includes(id) ? prev.filter((coffeeId) => coffeeId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-primary" />
          <Typography.H2>AI Coffee Recommender</Typography.H2>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead>
            Tell us your preferences, and our AI will recommend the perfect coffee for you.
          </Typography.Lead>
        </div>

        <div className="grid gap-12 lg:grid-cols-[400px,1fr]">
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <Typography.H3 className="mb-6">Your Preferences</Typography.H3>
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </section>

          <section>
            <Typography.H3 className="mb-6">Recommendations</Typography.H3>
            {loading ? (
              <RecommendationLoader />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((coffee) => (
                  <CoffeeCard
                    key={coffee.id}
                    title={coffee.title}
                    description={coffee.description}
                    roastLevel={coffee.roastLevel}
                    flavor={coffee.flavor}
                    isLiked={likedCoffees.includes(coffee.id)}
                    onLike={() => toggleLike(coffee.id)}
                    onSelect={() => {
                      // Handle selection
                    }}
                  />
                ))}
              </div>
            )}
            {!loading && recommendations.length === 0 && (
              <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border bg-card text-center">
                <Typography.H4 className="mb-2">No Recommendations Yet</Typography.H4>
                <Typography.Muted>
                  Fill out your preferences to get personalized coffee recommendations
                </Typography.Muted>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}