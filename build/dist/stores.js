import { writable } from '../_snowpack/pkg/svelte/store.js'

export const questions = writable([]);
export const categories = writable([]);
export const selectedQuestion = writable();
export const selectedCategories = writable([]);
export const answerEvaluation = writable();