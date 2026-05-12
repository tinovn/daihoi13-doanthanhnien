<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
  stats: Object,
  recent_posts: Array,
  recent_messages: Array,
});
</script>

<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-xl font-bold text-red-600">Bảng điều khiển Đại hội XIII</h2>
    </template>

    <div class="py-8 max-w-7xl mx-auto px-4">
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white border-t-4 border-red-600 p-5 rounded-lg shadow-sm">
          <div class="text-3xl font-black text-red-600">{{ stats.posts_total }}</div>
          <div class="text-sm text-gray-600 mt-1">Tin tức ({{ stats.posts_published }} đã xuất bản)</div>
        </div>
        <div class="bg-white border-t-4 border-yellow-500 p-5 rounded-lg shadow-sm">
          <div class="text-3xl font-black text-yellow-600">{{ stats.thong_diep_pending }}</div>
          <div class="text-sm text-gray-600 mt-1">Thông điệp chờ duyệt</div>
        </div>
        <div class="bg-white border-t-4 border-blue-600 p-5 rounded-lg shadow-sm">
          <div class="text-3xl font-black text-blue-700">{{ stats.van_kien_total }}</div>
          <div class="text-sm text-gray-600 mt-1">Văn kiện</div>
        </div>
        <div class="bg-white border-t-4 border-green-600 p-5 rounded-lg shadow-sm">
          <div class="text-3xl font-black text-green-700">{{ stats.dai_bieu_total }}</div>
          <div class="text-sm text-gray-600 mt-1">Đại biểu</div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Recent posts -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-red-600 uppercase">Tin tức mới nhất</h3>
            <Link :href="route('admin.posts.index')" class="text-sm text-red-600 hover:underline">Xem tất cả →</Link>
          </div>
          <ul class="space-y-2 text-sm">
            <li v-for="p in recent_posts" :key="p.id" class="flex justify-between p-2 hover:bg-gray-50 rounded">
              <Link :href="route('admin.posts.edit', p.id)" class="font-semibold flex-1 line-clamp-1">{{ p.title }}</Link>
              <span :class="p.status === 'published' ? 'text-green-600' : 'text-gray-400'" class="text-xs font-bold uppercase">{{ p.status }}</span>
            </li>
          </ul>
        </div>

        <!-- Recent messages -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-red-600 uppercase">Thông điệp gần đây</h3>
          </div>
          <ul class="space-y-2 text-sm">
            <li v-for="m in recent_messages" :key="m.id" class="p-2 hover:bg-gray-50 rounded">
              <div class="font-bold">{{ m.name }}
                <span :class="{
                  'text-green-600': m.status === 'approved',
                  'text-yellow-600': m.status === 'pending',
                  'text-red-600': m.status === 'rejected',
                }" class="text-xs font-bold uppercase ml-2">{{ m.status }}</span>
              </div>
              <div class="text-xs text-gray-500 line-clamp-1">{{ m.message }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
