<script>
  import readLetters, {
    ternasDescubiertas,
    numbersBoard,
    lettersBoard,
    dataBoard,
    arraySumas,
    numeroElejido,
    score
  } from '../stores/store';
  import Hexa from './Hexa.svelte';
    import Number from './Number.svelte';

  lettersBoard.set();
  numbersBoard.set();
  arraySumas.set();
  dataBoard.set();
  numeroElejido.set();

  let letrero = ''

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
        letrero = ''
    }, 2500);

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
      letrero = 'Selección incorrecta';
      return;
    }
    // comprobar letras ya seleccionadas
    const duplicada = $ternasDescubiertas.find(
      (terna) => terna === $readLetters
    );
    if (duplicada) {
      console.log('Selección duplicada');
      letrero = 'Selección duplicada';
      return;
    }

    // -----------------
    if (result.suma !== $numeroElejido.sumaMaxima) {
      // console.log('incorrecto', result, $readLetters, $numeroElejido);
      console.log('incorrecto');
      letrero = 'incorrecto'
      score.subtract()
    } else {
      // console.log('correcto', result, $readLetters, $numeroElejido);
      console.log('correcto');
      letrero = 'correcto';
      score.add()
      ternasDescubiertas.update($readLetters);
    }
    console.log($ternasDescubiertas);
  };
</script>

<main>
  <Number />
  <h4>Puntos: <span class="{$score < 0 ? 'rojo' : 'verde'}">{$score}</span></h4>
  {#each $lettersBoard as row}
    <div class={`flex`}>
      {#each row as value, i}
        <div class="hexa">
          <Hexa valor={value} tema="dark" {handleClick} />
        </div>
      {/each}
    </div>
  {/each}
  <h3>{letrero}</h3>
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
  main {
    text-align: center;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 1.5rem;
    margin: 10px 0 40px;
  }
  span {
    font-weight: bolder;
    font-size: 2rem;
  }
  .rojo {
    color: rgb(171, 0, 0);
  }
  .verde {
    color: rgb(0, 232, 0);
  }
</style>
