<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-avatar color="grey-darken-1" size="32"></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
const links: string[] = ["Dashboard", "Messages", "Profile", "Updates"];
</script>
