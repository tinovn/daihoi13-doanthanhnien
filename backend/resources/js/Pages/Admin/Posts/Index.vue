<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
  posts: Object,
  filters: Object,
  categories: Object,
});

const search = ref(props.filters?.search || '');
const category = ref(props.filters?.category || '');
const status = ref(props.filters?.status || '');

function applyFilters() {
  router.get(route('admin.posts.index'), { search: search.value, category: category.value, status: status.value }, { preserveState: true });
}

function deletePost(id) {
  if (!confirm('Xoá bài viết này?')) return;
  router.delete(route('admin.posts.destroy', id));
}
</script>

<template>
  <Head title="Tin tức" />
  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-red-600">Quản lý Tin tức</h2>
        <Link :href="route('admin.posts.create')" class="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700">+ Bài mới</Link>
      </div>
    </template>

    <div class="py-8 max-w-7xl mx-auto px-4">
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-4 flex gap-3 flex-wrap">
        <input v-model="search" @keyup.enter="applyFilters" type="text" placeholder="Tìm theo tiêu đề..." class="flex-1 min-w-[200px] px-3 py-2 border rounded focus:border-red-500"/>
        <select v-model="category" @change="applyFilters" class="px-3 py-2 border rounded">
          <option value="">Tất cả chuyên mục</option>
          <option v-for="(label, key) in categories" :key="key" :value="key">{{ label }}</option>
        </select>
        <select v-model="status" @change="applyFilters" class="px-3 py-2 border rounded">
          <option value="">Tất cả trạng thái</option>
          <option value="draft">Bản nháp</option>
          <option value="published">Đã xuất bản</option>
        </select>
        <button @click="applyFilters" class="bg-red-600 text-white px-5 py-2 rounded font-bold">Lọc</button>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-red-600 text-white">
            <tr>
              <th class="p-3 text-left">Tiêu đề</th>
              <th class="p-3 text-left">Chuyên mục</th>
              <th class="p-3 text-left">Trạng thái</th>
              <th class="p-3 text-left">Lượt xem</th>
              <th class="p-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in posts.data" :key="p.id" class="border-b hover:bg-gray-50">
              <td class="p-3"><span class="font-bold">{{ p.title }}</span><div class="text-xs text-gray-500">{{ p.slug }}</div></td>
              <td class="p-3">{{ categories[p.category] }}</td>
              <td class="p-3">
                <span :class="p.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'" class="px-2 py-1 rounded text-xs font-bold uppercase">{{ p.status }}</span>
                <span v-if="p.is_featured" class="ml-1 bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-bold">★</span>
              </td>
              <td class="p-3">{{ p.views }}</td>
              <td class="p-3 space-x-2">
                <Link :href="route('admin.posts.edit', p.id)" class="text-blue-600 hover:underline text-xs">Sửa</Link>
                <button @click="deletePost(p.id)" class="text-red-600 hover:underline text-xs">Xoá</button>
              </td>
            </tr>
            <tr v-if="!posts.data.length"><td colspan="5" class="p-8 text-center text-gray-400">Không có bài viết</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination simple -->
      <div class="mt-4 flex justify-center gap-2 text-sm">
        <template v-for="link in posts.links" :key="link.label">
          <Link v-if="link.url" :href="link.url" v-html="link.label" :class="link.active ? 'bg-red-600 text-white' : 'bg-white border'" class="px-3 py-1 rounded"/>
          <span v-else v-html="link.label" class="px-3 py-1 text-gray-400"/>
        </template>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
