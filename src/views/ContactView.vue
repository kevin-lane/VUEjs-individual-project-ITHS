<script>
  export default {
    data(){
      return{
        name: '',
        email: '',
        message: '',
        sentNotification: ''
      }
    },
    methods: {
      onSubmit(){
        this.sentNotification = 'Thank you for your message ' + this.name + '. We will get back to you soon.';
      }
    }
  }
</script>

<template>
  <!-- Form from Bootstrap and here v-model and v-on is implemented -->
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="name-input" class="form-label">Full name</label>
      <input v-model="name" type="text" class="form-control" id="name-input" placeholder="Your name">
    </div>
    <div class="mb-3">
      <label for="email-input" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" id="email-input" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="message-input" class="form-label">Message</label>
      <textarea v-model="message" class="form-control" id="message-input" rows="3" placeholder="Write a message here"></textarea>
    </div>
    <button type="submit" @click="onSubmit" class="btn btn-success">Submit</button>
    <span>
      <p>{{ sentNotification }}</p>
    </span>
  </form>
</template>

<style scoped>
  form{
    width: 25rem;
    left: 5rem;
    top: 2rem;
  }
</style>
