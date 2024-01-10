 <template>
  <MainLayout>
    <div v-if="resource" class="relative border-b border-gray-200 pb-5 sm:pb-0">
      <div class="md:flex md:items-center md:justify-between">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Film : {{ resource.name }}</h3>
      </div>
      <div class="mt-4">
        <div class="overflow-hidden bg-white shadow border mt-10 sm:rounded px-4 py-5 sm:px-6">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">Film</h3>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">ID {{ resource._id }}</p>
          </div>
          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">ID</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ resource._id }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import { onBeforeMount, inject, ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const $admin = inject('$admin')
  const $layout = inject('$layout')
  const $resources = inject('$resources')

  const resource = computed(() => $resources.get())

  onBeforeMount(() => {
    $admin.getOneResource('movies', route.params.id)
    $layout.setTitle('Films')
    $layout.setBreadcrumb([
      { name: "Coup d'oeil", route: { name: 'home' } },
      { name: 'Films', route: { name: 'movies_index' } },
      { name: 'Détail d\'un film', route: { name: 'movies_index' } },
    ])
  })
</script>
