<script>
  export let id;
  export let label;
  export let value;
  export let rows;
</script>

<style>
  input, textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
</style>

<!-- Just need to place on:input for the function in the child component -->
<div class="form-control">
  <label for={id}>{label}</label>
  {#if id === 'description'}
    <textarea id={id} row={rows} value={value} on:input />
  {:else}
    <input 
      type={id === 'contactEmail' ? 'email' : 'text'} 
      id={id} 
      value={value} 
      on:input 
    />
  {/if}
</div>