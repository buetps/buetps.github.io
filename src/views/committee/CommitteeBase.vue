<template>
  <div>
    <router-link to="/committee">Committee</router-link>
    <transition name=slide-left mode=out-in>
      <router-view/>
    </transition>
  </div>
</template>