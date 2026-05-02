<script lang="ts">
  import type { Role } from '$lib/types';

  interface Props {
    role: Role;
    /** Tailwind size + margin classes; defaults to a 20px square. */
    class?: string;
  }

  let { role, class: className = 'w-5 h-5' }: Props = $props();
</script>

<img
  src={`/icons/${role.toLowerCase()}.png`}
  alt={role}
  class="shrink-0 {className}"
/>
