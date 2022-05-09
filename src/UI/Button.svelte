<script>
  export let href;
  export let type;
  export let caption;
  export let mode;
</script>

<style>
  a,
  button {
    font: inherit;
    border: 1px solid #cf0056;
    background: #cf0056;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active,
  a:hover,
  a:active {
    background: #e40763;
    background-color: #e40763;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .mode-1 {
    font: inherit;
    border: 1px solid #cf0056;
    background: white;
    padding: 0.5rem 1rem;
    color:#000;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }
</style>

{#if href}
  <a href={href} class={mode}>{caption}</a>
{:else}
  <button type={type} class={mode}>{caption}</button>
{/if}
