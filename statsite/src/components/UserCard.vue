<template>
  <v-card rounded="lg">
    <template v-slot:title>User</template>
    <template v-slot:append-icon>
      <v-icon @click="addUser()" icon="mdi-plus"></v-icon>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in mockusers" :key="i">
        <template v-slot:prepend>
          <v-icon icon="mdi-account"></v-icon>
        </template>

        <v-list-item-title v-text="item"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>

const mockusers: string[] = ["Bert", "Ludovic", "Arne", "Tibe"];

function addUser() {
  alert("Adding user");
}
</script>
