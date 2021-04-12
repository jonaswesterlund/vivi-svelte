/* src\_components\AddNewCategory.svelte generated by Svelte v3.37.0 */
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
	run_all,
	safe_not_equal,
	set_input_value,
	set_store_value,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import axios from "../../_snowpack/pkg/axios.js";
import { categories } from "../stores.js";

function create_fragment(ctx) {
	let div4;
	let div1;
	let h1;
	let t1;
	let div0;
	let button;
	let t3;
	let div3;
	let label;
	let t4;
	let div2;
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			div4 = element("div");
			div1 = element("div");
			h1 = element("h1");
			h1.textContent = "Ny kategori";
			t1 = space();
			div0 = element("div");
			button = element("button");
			button.textContent = "Spara";
			t3 = space();
			div3 = element("div");
			label = element("label");
			t4 = text("Namn\r\n      ");
			div2 = element("div");
			input = element("input");
			attr(h1, "class", "text-xl font-semibold mb-2");
			attr(button, "class", "border-blue-700 rounded border-2 px-4 py-1 mr-2\r\n        focus:outline-none hover:bg-blue-700 hover:text-white");
			attr(div1, "class", "flex justify-between align-top");
			attr(input, "id", "category-name");
			attr(input, "class", "border border-gray-600 w-full rounded p-2");
			attr(div2, "class", "my-2");
			attr(label, "class", "font-semibold text-lg");
			attr(label, "for", "category-name");
			attr(div4, "class", "flex-1 align-top my-8 border-2 border-gray-600 h-48 shadow-xl p-4 mx-10");
		},
		m(target, anchor) {
			insert(target, div4, anchor);
			append(div4, div1);
			append(div1, h1);
			append(div1, t1);
			append(div1, div0);
			append(div0, button);
			append(div4, t3);
			append(div4, div3);
			append(div3, label);
			append(label, t4);
			append(label, div2);
			append(div2, input);
			set_input_value(input, /*categoryName*/ ctx[0]);

			if (!mounted) {
				dispose = [
					listen(button, "click", /*saveCategory*/ ctx[1]),
					listen(input, "input", /*input_input_handler*/ ctx[2])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*categoryName*/ 1 && input.value !== /*categoryName*/ ctx[0]) {
				set_input_value(input, /*categoryName*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div4);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $categories;
	component_subscribe($$self, categories, $$value => $$invalidate(3, $categories = $$value));
	let categoryName;

	async function saveCategory() {
		const response = await axios.post("http://localhost:8081/api/categories", { categoryName });
		set_store_value(categories, $categories = [...$categories, response.data], $categories);
	}

	function input_input_handler() {
		categoryName = this.value;
		$$invalidate(0, categoryName);
	}

	return [categoryName, saveCategory, input_input_handler];
}

class AddNewCategory extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default AddNewCategory;