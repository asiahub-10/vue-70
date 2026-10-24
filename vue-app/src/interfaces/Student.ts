export interface Student {
    id: Number,
    name: String,
    email: String,
    active?: Boolean
}
export const defaultStudent: Student = {
    id: 0,
    name: '',
    email: ''
}