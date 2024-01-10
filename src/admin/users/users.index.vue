<template>
  <MainLayout>
    <TableResource
      title="Employés"
      subtitle="Liste des employés"
      displayLabel="fullname">
      <template v-slot:table-head>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Actif ?</th>
      </template>
      <template v-slot:table-body>
        <TableItem
          :detailBtn="false"
          :selectable="false"
          class="text-sm p-10"
          v-for="(resource, index) in $resources.all()"
          :id="resource.id"
          :key="index">
          <TableItemCol class="py-3">{{ resource.username }}</TableItemCol>
          <TableItemCol>{{ resource.email }}</TableItemCol>
          <TableItemCol><BooleanBadge :value="resource.isActive === 'active'" /></TableItemCol>
        </TableItem>
      </template>
    </TableResource>
  </MainLayout>
</template>

<script setup>
  import { onBeforeMount, inject } from 'vue'

  const $admin = inject('$admin')
  const $layout = inject('$layout')
  const $resources = inject('$resources')

  onBeforeMount(() => {
    $admin.getManyResources('users')
    $layout.setTitle('Employés')
    $layout.setBreadcrumb([
        { name: "Coup d'oeil", route: { name: 'home' } },
        { name: 'Employés', route: { name: 'users_index' } },
    ])
  })
</script>
