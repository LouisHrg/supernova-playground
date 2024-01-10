<template>
  <AdminLayout :searchPalette="true">
    <template v-slot:sidebar>
      <SidebarItem :to="{ name: 'home' }" regex="home" title="Coup d'oeil">
        <EyeIcon class="w-5 h-5 mr-2" />
      </SidebarItem>
      <div class="text-gray-400 cursor-pointer font-bold pt-4 pb-2 uppercase flex">
        <CameraIcon class="w-5 h-5 mr-2 -mt-1"/>
        Categories
      </div>
      <SidebarItem class="font-bold" regex="users_" :to="{ name: 'users_index' }" title="Users" />
      <SidebarItem class="font-bold" regex="movies_" :to="{ name: 'movies_index' }" title="Films" />
      <SidebarItem class="font-bold" regex="projects_" :to="{ name: 'projects_index' }" title="Projects" />
    </template>
    <slot />
  </AdminLayout>
</template>

<script setup>
import { SidebarItem } from 'supernova';
import {
  EyeIcon,
  UsersIcon,
  CameraIcon,
} from '@heroicons/vue/24/solid'
</script>
