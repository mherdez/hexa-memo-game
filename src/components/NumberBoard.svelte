<script>
  import Hexa from './Hexa.svelte';
  import readerLetters, {numbersBoard } from '../stores/store.js';

  numbersBoard.set()
</script>

<main>
  {#each $numbersBoard as row}
    <div class={`flex`}>
      {#each row as value, i}
        <div class="hexa">
          <Hexa valor={value} clase="light" handleClick={()=>{}} />
        </div>
      {/each}
    </div>
  {/each}
</main>

<style>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hexa {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: -6px;
    margin-top: -16px;
  }
</style>
