export const selectWaterItems = (state) => state.water.items;
export const selectMonthlyWaterItems = (state) => state.water.monthlyItems;
export const selectIsLoading = (state) => state.water.isLoading;
export const selectIsError = (state) => state.water.isError;
export const selectMonthWater = (state) => state.water.monthItems;
export const selectDesiredVolume = (state) => state.user.user.desiredVolume;
export const selectWaterDate = (state) => state.water.date;