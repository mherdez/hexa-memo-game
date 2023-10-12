<script>
  export let valor;
  export let tema = 'light';
  export let handleClick;

</script>

<button id="hexagono-{valor}" class={tema} on:click={() => handleClick(valor)}>
  {valor}
</button>

<style>
  button {
    border: none;
    width: 100%;
    aspect-ratio: 1/1;
    box-sizing: border-box;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    user-select: none;
  }
  .light {
    color: rgb(17, 17, 17);
    background: url(../assets/images/hex-white.svg) no-repeat center;
  }
  .dark {
    color: #fefefe;
    background: url(../assets/images/hex-black.svg) no-repeat center;
  }
  .seleccionada {
    filter: invert(100%) sepia(100%) saturate(5000%) hue-rotate(305deg) brightness(100%) contrast(90%);
  }
</style>
