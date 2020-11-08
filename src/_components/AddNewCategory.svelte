<script>
  import axios from "axios";
  import { categories } from "../stores";
  let categoryName;

  async function saveCategory() {
    const response = await axios.post("http://localhost:3001/api/categories", {
      categoryName
    });
    $categories = [...$categories, response.data];
  }
</script>

<div
  class="flex-1 align-top my-8 border-2 border-gray-600 h-48 shadow-xl p-4 mx-10">
  <div class="flex justify-between align-top">
    <h1 class="text-xl font-semibold mb-2">Ny kategori</h1>
    <div>
      <button
        class="border-blue-700 rounded border-2 px-4 py-1 mr-2
        focus:outline-none hover:bg-blue-700 hover:text-white"
        on:click={saveCategory}>
        Spara
      </button>
    </div>
  </div>
  <div>
    <label class="font-semibold text-lg" for="category-name">
      Namn
      <div class="my-2">
        <input
          id="category-name"
          bind:value={categoryName}
          class="border border-gray-600 w-full rounded p-2" />
      </div>
    </label>
  </div>
</div>
