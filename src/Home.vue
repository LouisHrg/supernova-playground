<template>
  <MainLayout>

  </MainLayout>
</template>

<script setup>
  import { inject, onBeforeMount, ref } from 'vue'
  const $layout = inject('$layout')

  onBeforeMount(() => {
      $layout.setTitle('Supernova')
      $layout.setBreadcrumb([
        { name: "Coup d'oeil", route: { name: 'home' } },
      ])
  })
</script>
