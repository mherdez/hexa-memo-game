<script>
  import readLetters, {numbersBoard, lettersBoard, dataBoard,arraySumas } from '../stores/store';
  import Hexa from './Hexa.svelte';

  lettersBoard.set();
  numbersBoard.set();
  arraySumas.set()
  dataBoard.set()

  const handleClick = (id) => {
    if ($readLetters.includes(id.toLowerCase())) return

    if ($readLetters.length > 2) {
      viewTotal()
      return;
    }
    const l = document.querySelector(`#hexagono-${id}`)
    l.classList.add('seleccionada')
    l.style.color = 'white'

    readLetters.addLetters(id.toLowerCase());
    if( $readLetters.length === 3 ) viewTotal()
  };

  const viewTotal = () => {
    setTimeout(() => {
      readLetters.set();
      document.querySelectorAll(".seleccionada").forEach( i => i.classList.remove('seleccionada'))
    },3000)

    console.log($arraySumas)

  }
</script>

<main>
  {#each $lettersBoard as row}
    <div class={`flex`}>
      {#each row as value, i}
        <div class="hexa">
          <Hexa
            valor={value}
            tema="dark"
            handleClick={handleClick}
          />
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
