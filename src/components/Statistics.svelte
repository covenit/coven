<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let n;
  export let text = '';

  const count = tweened(0, {
    duration: 1000,
    easing: cubicOut
  });

  onMount(() => {
    count.set(n);
  });
</script>

<div class="element">
    <h4>+ {Math.round($count)}</h4>
    <p>{text}</p>
</div>

<style>
    h4 {
        font-family: 'sf-ui-display-bold';
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -2%;
        color: #E20C18;
    }

    .element {
        width: 50%;
        margin-bottom: 5vh;
    }
    .element p {
        margin-top: 2vh;
    }

    @media (max-width: 767px) {
        h4 {
            font-size: 25px;
        }
        .element {
        width: 100%;
        margin-bottom: 1vh;
        }
        .element p {
            margin-top: 2px;
        }
    }
</style>