<template>
  <v-row class="mt-5">
    <v-col
      cols="12"
      md="6"
      lg="4"
      v-for="index in 6"
      :key="index"
      elevation="2"
    >
      <v-card min-height="700" class="c-card">
        <v-skeleton-loader type="image" height="250" />
        <v-card-title class="text">
          <v-skeleton-loader type="sentences" width="100%" />
        </v-card-title>
        <v-card-text class="c-card__text">
          <v-skeleton-loader type="paragraph" width="100%" />
        </v-card-text>
        <v-container>
          <v-layout align-center justify-space-between class="c-card__action">
            <v-skeleton-loader type="chip" width="101" />
            <v-skeleton-loader type="text" width="50" />
          </v-layout>
        </v-container>
      </v-card>
    </v-col>
    <v-skeleton-loader type="pagination" />
  </v-row>
</template>
