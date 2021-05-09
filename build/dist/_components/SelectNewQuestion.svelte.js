/* src\components\SelectNewQuestion.svelte generated by Svelte v3.37.0 */
import {
	SvelteComponent,
	append,
	attr,
	component_subscribe,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_store_value
} from "../../_snowpack/pkg/svelte/internal.js";

import { questions, selectedQuestion, selectedCategories } from "../stores.js";

function create_fragment(ctx) {
	let div;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			button = element("button");
			button.textContent = "Ny fråga";
			attr(button, "class", "button");
			attr(div, "class", "flex justify-center m-10");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, button);

			if (!mounted) {
				dispose = listen(button, "click", /*selectNewQuestion*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $questions;
	let $selectedQuestion;
	let $selectedCategories;
	component_subscribe($$self, questions, $$value => $$invalidate(1, $questions = $$value));
	component_subscribe($$self, selectedQuestion, $$value => $$invalidate(2, $selectedQuestion = $$value));
	component_subscribe($$self, selectedCategories, $$value => $$invalidate(3, $selectedCategories = $$value));

	const selectNewQuestion = () => {
		const selectableQuestions = $questions.filter(question => (!$selectedQuestion || question.id !== $selectedQuestion.id) && question.categories.every(category => $selectedCategories.map(c => c.id).includes(category.id)));

		if (selectableQuestions.length === 0) {
			return;
		}

		if (selectableQuestions.length === 1) {
			return set_store_value(selectedQuestion, $selectedQuestion = selectableQuestions[0], $selectedQuestion);
		}

		set_store_value(selectedQuestion, $selectedQuestion = selectableQuestions[Math.floor(Math.random() * selectableQuestions.length)], $selectedQuestion);
	};

	return [selectNewQuestion];
}

class SelectNewQuestion extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default SelectNewQuestion;