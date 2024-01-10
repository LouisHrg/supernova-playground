<template>
  <div class="bg-sn-primary h-screen w-screen">
  <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" :src="$admin.logo" alt="Your Company">
    <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-sn-text">{{ $admin.name }}</h2>
  </div>

  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-sn-text">Email</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 bg-sn-transparent py-1.5 text-sn-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sn-accent sm:text-sm sm:leading-6" v-model="email">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-sn-text">Mot de passe</label>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 bg-sn-transparent py-1.5 text-sn-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sn-accent sm:text-sm sm:leading-6" v-model="password">
        </div>
      </div>

      <div>
        <button @click="submitForm" class="flex w-full justify-center rounded-md bg-sn-accent hover:bg-sn-accent-lighter px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-accent">Se connecter</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import apiClient from '@/api/axios'

  const email = ref('')
  const password = ref('')

  const router = useRouter()

  const submitForm = async () => {
    const res = await apiClient.post('http://localhost:4000/auth/login', {
      username: email.value, password: password.value
    })

    localStorage.setItem('supernova_token', res.data.access_token)
    router.push({name: 'home' })
  }
</script>
