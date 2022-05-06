<script>
  export let type;
  export let caption;
</script>

<style>
  button {
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
</style>

<button type={type}>{caption}</button>