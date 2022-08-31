import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store';

export const selectRestaurantsIds = createSelector(
  (state: RootState) => state.restaurant.cuisinesRestaurantsIds,
  (state: RootState, id: string) => id,
  (cuisinesRestaurantsIds, id) => {
    const {open, close} =
      cuisinesRestaurantsIds[id as keyof typeof cuisinesRestaurantsIds];

    return [...open, ...close];
  },
);

export const selectRestaurantData = createSelector(
  (state: RootState) => state.restaurant.restaurantsData,
  (state: RootState, id: string) => id,
  (restaurantData, id) => restaurantData[id as keyof typeof restaurantData],
);

export const selectors = {
  selectRestaurantsIds,
  selectRestaurantData,
};
