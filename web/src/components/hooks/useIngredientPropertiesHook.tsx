import { GET_ALL_ALLERGENS_USER } from "@/documents/query/ingredient-properties";
import { useGqlQuery } from "@/fetcher";

export const useIngredientPropertiesHook = () => {
  const {
    data: { getAllAllergensUser: allergens } = {},
    refetch: refetchAllergens,
  } = useGqlQuery(GET_ALL_ALLERGENS_USER);

  return { allergens, refetchAllergens };
};
