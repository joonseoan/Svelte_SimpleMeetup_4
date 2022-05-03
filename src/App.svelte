<script>
  import Header from './UI/Header.svelte';
  // import MeetupItem from './Meetups/MeetupItem.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  const meetsups = [{
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
</script>

<style>
  #meetup {
    margin-top: 5rem;
  }
</style>

<Header />
<MeetupGrid meetsups={meetsups} />

<!-- Use each for this one by myself tomorrow. -->

