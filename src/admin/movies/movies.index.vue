<template>
  <MainLayout>
    <TableResource
      title="Films"
      subtitle="Liste des films"
      displayLabel="name">
      <template v-slot:table-head>
        <th scope="col">Nom</th>
      </template>
      <template v-slot:table-actions>
        <AddResourceButton title="Ajouter un film" />
      </template>
      <template v-slot:header-actions>
        <FilterResource :filters="filters" name="Statut" />
      </template>
      <template v-slot:header-search>
      <SearchResource
          target="movies"
          placeholder="Rechercher un film"
          displayField="name" />
      </template>
      <template v-slot:table-body>
        <TableItem
          :selectable="false"
          editBtn
          deleteBtn
          class="text-sm"
          v-for="(resource, index) in $resources.all()"
          :id="resource._id"
          :key="index">
          <TableItemCol class="py-3">{{ resource.name }}</TableItemCol>
        </TableItem>
      </template>
    </TableResource>
  </MainLayout>
</template>

<script setup>
  import { onBeforeMount, inject, ref } from 'vue'

  const $admin = inject('$admin')
  const $layout = inject('$layout')
  const $resources = inject('$resources')

  const filters = ref([
    {
      selected: false,
      title: 'Actif',
      value: 'active',
      key: 'status',
    },
    {
      selected: false,
      title: 'Inactif',
      value: 'inactive',
      key: 'status',
    },
  ])

  onBeforeMount(() => {
    $admin.getManyResources('movies')
    $layout.setTitle('Films')
    $layout.setBreadcrumb([
        { name: "Coup d'oeil", route: { name: 'home' } },
        { name: 'Films', route: { name: 'movies_index' } },
    ])
  })
</script>
