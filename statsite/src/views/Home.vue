<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <UserCard></UserCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import UserCard from "@/components/UserCard.vue";
</script>
