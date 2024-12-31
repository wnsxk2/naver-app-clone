export const RouteNames = {
  HOME_TAB: 'home-tab' as const,
  HOME: 'home',
  SHOPPING: 'shopping',
  BROWSER: 'browser' as const,
};

// 타입 생성
export type RootStackParamList = {
  [RouteNames.HOME_TAB]: undefined;
  [RouteNames.BROWSER]: undefined;
};
