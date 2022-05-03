<script>
  import MeetupItem from "./MeetupItem.svelte";

  export let meetsups;
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-top: 5rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section id="meetup">
  {#each meetsups as { 
    id,
    title, 
    subtitle, 
    description, 
    imageUrl, 
    address, 
    contactEmail 
    } (id)}
    <MeetupItem
      {...{
        title, subtitle, description, imageUrl, address, contactEmail
      }}
    />
  {/each}
</section>