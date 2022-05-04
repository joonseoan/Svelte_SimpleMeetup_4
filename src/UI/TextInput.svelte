<script>
  // export let inputType;
  export let inputName;
  export let value;

  $:label = inputName?.toUpperCase();
  console.log(label)
</script>

<stlye>
  
</stlye>

<div class="form-control">
  <label for={inputName}>{label}</label>
  {#if inputName === 'description'}
    <textarea id="description" row={3} bind:value={value} />
  {:else}
    <input type="text" id={inputName} bind:value={value} />
  {/if}
</div>