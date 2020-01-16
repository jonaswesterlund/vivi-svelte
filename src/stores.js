import { writable } from 'svelte/store'

export const questions = writable();
export const selectedQuestion = writable();
export const selectedLabels = writable();