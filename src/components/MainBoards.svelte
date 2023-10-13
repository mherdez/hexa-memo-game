<script>
  import Board from './Board.svelte';
  import NumberBoard from './NumberBoard.svelte';

  let showNumberBoard = true;

  setTimeout(() => {
    showNumberBoard = false;
  }, 20000);
</script>

<main>
  {#if showNumberBoard}
    <div class="header"></div>
    <NumberBoard />
  {:else}
    <Board />
  {/if}
</main>

<style>
  .header {
    margin-top: 115px;
  }
</style>

