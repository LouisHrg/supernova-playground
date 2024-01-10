<template>
  <MainLayout>
    <FormResource v-if="resource" edit>
      <FormHeader title="Modifier un film" :subtitle="resource.name"/>
      <hr>
      <TextField
        name="Nom du film"
        id="name"
        placeholder="Nom du film"
        :initValue="resource.name"
      />
      <SelectField
        name="Type de film"
        id="status"
        placeholder="Choisir un type de film"
        :options="type"
        :initValue="resource.type"
      />
      <EditorField
        name="Détails du film"
        id="bio"
        placeholder="Détail du film"
        :initValue="resource.bio"
      />
    </FormResource>
  </MainLayout>
</template>

<script setup>
  import { onBeforeMount, inject, ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const type = ref([
    { key: 'a', label: 'Drama' },
    { key: 'b', label: 'Comedy' },
    { key: 'c', label: 'Sci-fi' },
    { key: 'd', label: 'Documentary' },
  ])

  const $layout = inject('$layout')
  const $admin = inject('$admin')
  const $resources = inject('$resources')
  const route = useRoute()
  const resource = computed(() => $resources.get())

  onBeforeMount(() => {
    $admin.getOneResource('movies', route.params.id)
    $layout.setTitle('Films')
    $layout.setBreadcrumb([
      { name: "Coup d'oeil", route: { name: 'home' } },
      { name: 'Films', route: { name: 'movies_index' } },
      { name: 'Ajouter un film', route: { name: 'movies_index' } },
    ])
  })
</script>


