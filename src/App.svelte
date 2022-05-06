<script>
  import Header from './UI/Header.svelte';
  // import MeetupItem from './Meetups/MeetupItem.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';

  // Not required since each statement is used.
  // let title = '';
  // let subtitle = '';
  // let description = '';
  // let imageUrl = '';
  // let address = '';
  // let contactEmail = '';

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

  let inputs = [{
    id: 'title',
    label: 'Title',
    value: '',
  }, {
    id: 'subtitle',
    label: 'Subtitle',
    value: '',
  }, {
    id: 'imageUrl',
    label: 'Image URL',
    value: '',
  }, {
    id: 'address',
    label: 'Address',
    value: '',
  }, {
    id: 'contactEmail',
    label: 'Contact Email',
    value: '',
  }, {
    id: 'description',
    label: 'Description',
    value: '',
    rows: 3,
  }];

  function addMeetup() {
    if (inputs.every(({ value }) =>  value)) {
      meetsups = [
        {
          id: Math.random().toString(),
          ...inputs.reduce((init, { id, value }) => {
            init = { ...init, [id]: value };
            return init;
          }, {}),
        },
        
        ...meetsups,
      ];
      
      inputs = [ ...inputs.map((input) => ({ ...input, value: '' }))];
    }

    // 1)
    // meetsups = [ 
    //   {
    //     id: Math.random().toString(),
    //     title,
    //     subtitle,
    //     description,
    //     imageUrl,
    //     address,
    //     contactEmail,
    //   },
    //   ...meetsups, 
    // ];
  }

  function handleOnChange({ target: {  value }}, index) {
    console.log('value: ', value)
    inputs.splice(index, 1, { ...inputs[index], value });
    inputs = [...inputs];
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
    {#each inputs as {id, label, value, rows}, index (id)}
      <TextInput
        id={id}
        label={label}
        value={value}
        rows={rows || null}
        on:input={(event) => handleOnChange(event, index)}
      />
    {/each}
    
    <!-- 
      2) Hard coding 
      Important: on:input function should be defined here in the parent.
    -->
    <!-- 
    <TextInput id="title" label="Title" value={title} on:input={(event) => { title = event.target.value }} /> 
    <TextInput id="subtitle" label="Subtitle" value={subtitle} on:input={(event) => { subtitle = event.target.value }} /> 
    <TextInput id="imageUrl" label="Image URL" value={imageUrl} on:input={(event) => { imageUrl = event.target.value }} /> 
    <TextInput id="address" label="Address" value={address} on:input={(event) => { address = event.target.value }} /> 
    <TextInput id="contactEmail" label="Contact Email" value={contactEmail} on:input={(event) => { contactEmail = event.target.value }} /> 
    <TextInput id="description" rows={3} label="Description" value={description} on:input={(event) => { description = event.target.value }} />  
    -->

    <!-- 1) -->
    <!-- 
    <div class="form-control">
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
    </div>
    -->
    
    
    <Button type="submit" caption="Save" />
    <!--
      // 1) 
      <button type="submit">Submit</button> 
    -->

  </form>
  <MeetupGrid meetsups={meetsups} />
</main>

<!-- Use each for this one by myself tomorrow. -->