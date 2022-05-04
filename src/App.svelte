<script>
  import Header from './UI/Header.svelte';
  // import MeetupItem from './Meetups/MeetupItem.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';

  let title = '';
  let subtitle = '';
  let description = '';
  let imageUrl = '';
  let address = '';
  let contactEmail = '';

  let meetsups = [{
    id: 'm1',
    title: 'Coding Bootcamp',
    subtitle: 'Learn to code in 2 hours',
    description: 'In this meetup, we will have some experts that teach you how to code',
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    address: '100 Quees ST Toronto L3U 7YE, ON',
    contactEmail: 'code@test.com',
  }, {
    id: 'm2',
    title: 'Swim Together',
    subtitle: 'Let\'s go for some swimming',
    description: 'We will simply swim some rounds!',
    imageUrl: 'https://picsum.photos/200/300?grayscale',
    address: '100 King ST Toronto L3I 7Y7, ON',
    contactEmail: 'swim@together.com',
  }];

  const inputs = [{
    inputName: 'title',
    value: '',
  }, {
    inputName: 'subtitle',
    value: subtitle,
  }, {
    inputName: 'imageUrl',
    value: '',
  }, {
    inputName: 'address',
    value: '',
  }, {
    inputName: 'email',
    value: '',
  }, {
    inputName: 'description',
    value: '',
  }];

  function addMeetup(event) {
    meetsups = [ 
      {
        id: Math.random().toString(),
        title: inputs[0].value,
        subtitle,
        description,
        imageUrl,
        address,
        contactEmail,
      },
      ...meetsups, 
    ];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />
<main>
  <!-- Same as React but we can put preventDefault here -->
  <form on:submit|preventDefault={addMeetup}>

    {#each inputs as {inputName, value} (inputName)}
      <TextInput inputName={inputName} value={value} />
    {/each}

    <!-- <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" bind:value={title} />
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label>
      <input type="text" id="subtitle" bind:value={subtitle} />
    </div>
    <div class="form-control">
      <label for="imageUrl">ImageUrl</label>
      <input type="text" id="imageUrl" bind:value={imageUrl} />
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input type="text" id="address" bind:value={address} />
    </div>
    <div class="form-control">
      <label for="email">Contact Email</label>
      <input type="email" id="email" bind:value={contactEmail} />
    </div>
    <div class="form-control">
      <label for="descritption">Descritption</label>
      <textarea rows={3} id="descritption" bind:value={description} />
    </div> -->
    <button type="submit">Submit</button>
  </form>
  <MeetupGrid meetsups={meetsups} />
</main>

<!-- Use each for this one by myself tomorrow. -->