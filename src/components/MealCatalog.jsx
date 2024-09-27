import { useFetch } from "../hooks/useFetch";
import { fetchMeals } from "../http";
import Meals from "./Meals";

export default function MealCatalog() {
  const { isFetching, error, fetchedData } = useFetch(fetchMeals, []);
  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <section id="meals">
      <Meals
        meals={fetchedData}
        isLoading={isFetching}
        loadingText="Fetching place meals...."
        fallbackText="No meals available."
      />
    </section>
  );
}
