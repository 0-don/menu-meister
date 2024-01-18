import {
  CREATE_WEEKLY_MEAL_GROUP_ADMIN,
  DELETE_WEEKLY_MEAL_GROUP_ADMIN,
  SWITCH_WEEKLY_MEAL_GROUP_ADMIN,
  UPDATE_WEEKLY_MEAL_GROUP_ADMIN,
} from "@/documents/mutation/dashboard";
import { useGqlMutation } from "@/fetcher";

export const useWeeklyMealGroupHook = () => {
  const { mutateAsync: updateWeeklyMealGroup } = useGqlMutation(
    UPDATE_WEEKLY_MEAL_GROUP_ADMIN,
  );
  const { mutateAsync: deleteWeeklyMealgRoup } = useGqlMutation(
    DELETE_WEEKLY_MEAL_GROUP_ADMIN,
  );
  const { mutateAsync: createWeeklyMealGroup } = useGqlMutation(
    CREATE_WEEKLY_MEAL_GROUP_ADMIN,
  );

  const { mutateAsync: switchWeeklyMealGroup } = useGqlMutation(
    SWITCH_WEEKLY_MEAL_GROUP_ADMIN,
  );

  return {
    updateWeeklyMealGroup,
    deleteWeeklyMealgRoup,
    createWeeklyMealGroup,
    switchWeeklyMealGroup,
  };
};
