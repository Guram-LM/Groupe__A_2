import {create} from "zustand"
import type { CountryType } from "../pages/countrys/CountrysInterface"

interface StateType {
    planState: CountryType[] | []
    addPlan: (data: CountryType) => void
    removePlan: (name: string) => void
    clearPlan: () => void
}

export const usePlanState = create<StateType>((set) => ({
    planState: [],

    addPlan: (data) => set((state) => {
        const isInclude = state.planState.some(item =>
            item.name.common === data.name.common
        )
        if(isInclude) return state 

        return {planState: [...state.planState, data]}
    }),

    removePlan: (name) => set((state) => {
        const delName = state.planState.filter(item =>
            item.name.common !== name
        )
        return {planState: [...delName]}
    }),

    clearPlan: () => set({planState: []})

}))