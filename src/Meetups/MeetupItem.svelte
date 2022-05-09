<script>
  import Button from '../UI/Button.svelte';

  export let title;
  export let subtitle;
  export let description;
  export let imageUrl;
  export let address;
  export let contactEmail;

  console.log('imageUrl: ', contactEmail)
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 4px;
    background-color: white;
    margin: 1px;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 150px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: 0.8rem;
    color: grey;
  }

  .content {
    text-align: right;
    height: 4rem;
  }
</style>

<article>
  <header>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title}>
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <!-- svelte-ignore a11y-missing-content -->
    <!-- <a href="mailto:{contactEmail}">Contact</a> -->
    <Button caption="Contact" href="mailto:{contactEmail}"/>
    <Button caption="Show Details" type="button" mode="mode-1" />
    <Button caption="Favorite" type="button" />
  </footer>
</article>