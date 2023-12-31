import {ROUTES} from '@src/constants/routes';
import {RouteProp} from '@react-navigation/native';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';

export type RestaurantsScreenRoutePropType = RouteProp<
  DashboardStackParamList,
  ROUTES.RESTAURANTS
>;
