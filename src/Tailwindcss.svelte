<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .button {
    @apply border-blue-600 border-2 rounded-md px-4 py-2;
  }

  .button:hover {
    @apply bg-blue-600 text-white;
  }

  .button:focus {
    @apply outline-none;
  }
</style>
