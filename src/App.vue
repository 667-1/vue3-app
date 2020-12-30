<template>
  <AppLayout>
    <router-view v-slot="{ Component }">
      <transition name="slide-left">
        <component :is="Component" />
      </transition>
    </router-view>
  </AppLayout>
</template>

