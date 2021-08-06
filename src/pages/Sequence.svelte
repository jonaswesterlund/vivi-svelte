<script>
  import { onDestroy } from 'svelte';
  import { useLocation } from 'svelte-navigator';

  const unsub = useLocation().subscribe((state) => console.log(state));

  onDestroy(unsub);
</script>
