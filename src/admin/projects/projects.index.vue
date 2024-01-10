<template>
  <MainLayout>
    <TableResource
      title="Projects"
      subtitle="Liste des projets"
      displayLabel="name">
      <template v-slot:table-head>
        <th scope="col">Nom</th>
      </template>
      <template v-slot:table-body>
        <TableItem
          :selectable="false"
          editBtn
          deleteBtn
          class="odd:bg-sn-transparent text-sm"
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

  onBeforeMount(() => {
    $admin.getManyResources('projects')
    $layout.setTitle('Projets')
    $layout.setBreadcrumb([
        { name: "Coup d'oeil", route: { name: 'home' } },
        { name: 'Projects', route: { name: 'projects_index' } },
    ])
  })
</script>
