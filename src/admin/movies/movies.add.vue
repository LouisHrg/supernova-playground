<template>
  <MainLayout>
    <FormResource>
      <FormHeader title="Nouveau film" subtitle="Ajouter un nouveau film"/>

      <TextField
        name="Nom du film"
        id="name"
        placeholder="Nom du film"
        :validation="yup.string().required().min(2).max(10)"
      />
      <DateRangeField
        name="Année du film"
        startId="year_1"
        endId="year_2"
        placeholder="Nom du film"
        initStartDate="2023-12-16"
        initEndDate="2023-12-30"
      />

      <EditorField
        name="Année du film"
        id="year4"
        placeholder="Nom du film"
      />

      <TextField
        name="Année du film"
        id="year2"
        placeholder="Nom du film"
      />
    </FormResource>
  </MainLayout>
</template>

<script setup>
  import * as yup from 'yup'
  import { onBeforeMount, inject, ref } from 'vue'

  const type = ref([
    { key: 'a', label: 'Drama' },
    { key: 'b', label: 'Comedy' },
    { key: 'c', label: 'Sci-fi' },
    { key: 'd', label: 'Documentary' },
  ])

  const $layout = inject('$layout')
  const $admin = inject('$admin')
  $admin.setTarget('movies')

  onBeforeMount(() => {
    $layout.setTitle('Films')
    $layout.setBreadcrumb([
      { name: "Coup d'oeil", route: { name: 'home' } },
      { name: 'Films', route: { name: 'movies_index' } },
      { name: 'Ajouter un film', route: { name: 'movies_index' } },
    ])
  })
</script>


