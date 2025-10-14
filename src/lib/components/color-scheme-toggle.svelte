<script lang="ts">
  import { getColorScheme } from "$lib/color-scheme.svelte";

  let scheme = getColorScheme();
</script>

<div>
  <input id="light" type="checkbox" bind:checked={scheme.isLight} />
  <label for="light">Toggle light or dark mode</label>
</div>

<style>
  *,
  *::before {
    box-sizing: border-box;

    transition: 200ms;
  }

  div {
    --height: 1.5rem;
    --width: calc(var(--height) * 2);

    --knob-size: calc(var(--height) * 3 / 4);
    --knob-gap: calc(var(--height) / 8);
    --knob-offset-x: calc(var(--knob-size) / 2.5);
    --knob-offset-y: calc(var(--knob-size) / -5);

    --light-knob: #f4d160;
    --light-back: #75c2f6;
    --dark-knob: #f9e8c9;
    --dark-back: #546bab;
  }

  @screen md {
    div {
      --height: 1.75rem;
    }
  }

  @screen lg {
    div {
      --height: 2rem;
    }
  }

  @screen xl {
    div {
      --height: 2.5rem;
    }
  }

  input {
    display: none;
  }

  label {
    position: relative;

    display: block;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
    border-radius: var(--height);

    background: var(--dark-back);

    font-size: 0;
  }

  label::before {
    position: absolute;

    display: block;
    width: var(--knob-size);
    height: var(--knob-size);
    border-radius: var(--knob-size);

    content: "";
  }

  /* Dark mode */
  input + label::before {
    top: 12.5%;
    left: 6.25%;

    box-shadow: inset var(--knob-offset-x) var(--knob-offset-y) var(--dark-knob);

    background: var(--dark-back);
  }

  /* Light mode */
  input:checked + label {
    background: var(--light-back);
  }
  input:checked + label::before {
    box-shadow: none;

    background: var(--light-knob);

    transform: translateX(calc(var(--width) / 2));
  }
</style>
