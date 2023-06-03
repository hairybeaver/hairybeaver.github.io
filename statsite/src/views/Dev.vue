<template>
  <v-card class="mx-5 my-5 px-5 py-5" title="Make a player" variant="flat">
    <v-text-field
      class="mx-3"
      variant="solo"
      v-model="playerName"
      label="Name of player"
    ></v-text-field
    ><v-card-actions
      ><v-spacer></v-spacer
      ><v-btn @click="makePlayer()">Create!</v-btn></v-card-actions
    >

    <v-divider class="my-2"></v-divider>
    <v-list v-for="player in allPlayers">
      <v-list-item
        prepend-icon="mdi-account"
        :title="player.name"
        :subtitle="`Joined at ${player.createdAt}`"
      >
        <template v-slot:append>
          <v-icon icon="mdi-close" @click="deletePlayer(player.id!)"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
import { addPlayer, getAllPlayers, deleteOnePlayer } from "@/services/player";
import { Player } from "@/models/player";
import { ref } from "vue";

const playerName = ref<string>("");
const allPlayers = ref<Player[]>([]);

async function updatePlayers() {
  allPlayers.value = await getAllPlayers();
  console.log(allPlayers.value);
}

updatePlayers();

async function makePlayer() {
  await addPlayer(playerName.value);
  await updatePlayers();
}

async function deletePlayer(id: string) {
  await deleteOnePlayer(id);
  await updatePlayers();
}
</script>
