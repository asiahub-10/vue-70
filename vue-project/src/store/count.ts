import { defineStore } from 'pinia'
export const useCounterState = defineStore('counter',{
    state: () => ({
        count: 3,
        id: 0
    }),
    getters: {
        double: (state) => state.count * 2,
        triple: (state) => state.count * 3,
        square: (state) => state.count * state.count,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        reset() {
            this.count = 0
        },
        setId(_id: number) {
            this.id = _id
        },
        random() {
            this.id = Math.floor(Math.random() * 100)
        }
    }
});