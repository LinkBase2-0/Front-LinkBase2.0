import { Review } from "../components/ProviderScreen";

const calculateReviewAverage = (reviews: Review[]): number => {
  
  const stars: number[] = reviews.map((review: Review): number => review.stars);
  const average: number = stars.reduce((average, currentValue, index, { length }) => {
    return average + currentValue / length;
  }, 0);
  
  return average;
}

export default calculateReviewAverage; 