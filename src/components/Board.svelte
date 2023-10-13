<script>
  import readLetters, {
    ternasDescubiertas,
    numbersBoard,
    lettersBoard,
    dataBoard,
    arraySumas,
    numeroElejido,
  } from '../stores/store';
  import Hexa from './Hexa.svelte';

  lettersBoard.set();
  numbersBoard.set();
  arraySumas.set();
  dataBoard.set();
  numeroElejido.set();

  const handleClick = (id) => {
    if ($readLetters.includes(id.toLowerCase())) return;

    if ($readLetters.length > 2) {
      viewTotal();
      return;
    }
    const l = document.querySelector(`#hexagono-${id}`);
    l.classList.add('seleccionada');

    readLetters.addLetters(id.toLowerCase());
    if ($readLetters.length === 3) viewTotal();
  };

  const viewTotal = () => {
    setTimeout(() => {
      readLetters.set();
      document
        .querySelectorAll('.seleccionada')
        .forEach((i) => i.classList.remove('seleccionada'));
    }, 2000);

    // const result =$arraySumas.map( ({ terna, suma }) => {
    //   if( terna === $readLetters ) {
    //     if( suma === $numeroElejido) {
    //       console.log('Correcto')
    //     } else {
    //       console.log('Incorrecto')
    //     }
    //   }
    //   return {terna: terna, suma:suma, numero: $numeroElejido}
    // })

    const result = $arraySumas.find(
      ({ terna, suma }) => terna === $readLetters
    );
    if (!result) {
      console.log('Selección incorrecta');
      return;
    }
    // comprobar letras ya seleccionadas
    const duplicada = $ternasDescubiertas.find(
      (terna) => terna === $readLetters
    );
    if (duplicada) {
      console.log('Selección duplicada');
      return;
    }

    // -----------------
    if (result.suma !== $numeroElejido) {
      console.log('incorrecto', result, $readLetters, $numeroElejido);
    } else {
      console.log('correcto', result, $readLetters, $numeroElejido);
      ternasDescubiertas.update($readLetters);
    }
    console.log($ternasDescubiertas);
  };
</script>

<main>
  {#each $lettersBoard as row}
    <div class={`flex`}>
      {#each row as value, i}
        <div class="hexa">
          <Hexa valor={value} tema="dark" {handleClick} />
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
