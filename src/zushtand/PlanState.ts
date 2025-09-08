import { create } from 'zustand';
import type { CountryType } from '../pages/countrys/CountrysInterface';

interface PlanState {
  planState: CountryType[];
  addPlan: (country: CountryType) => void;
  removePlan: (name: string) => void;
  clearPlan: () => void;
  setPlanState: (newData: CountryType[]) => void;
}

export const usePlanState = create<PlanState>((set) => ({
  planState: [],
  addPlan: (country) =>
    set((state) => {
      const isInclude = state.planState.some(
        (item) => item.name.common === country.name.common
      );
      if (isInclude) {
        return state; 
      }
      return {
        planState: [...state.planState, country],
      };
    }),
  removePlan: (name) =>
    set((state) => ({
      planState: state.planState.filter((item) => item.name.common !== name),
    })),
  clearPlan: () =>
    set({
      planState: [],
    }),
  setPlanState: (newData) =>
    set({
      planState: newData,
    }),
}));