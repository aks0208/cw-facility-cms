<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="(crumb, i) in crumbs" :key="i">
        <div class="flex items-center">
         <HomeIcon v-if="i !== 0"  />
         <ChevronRightIcon v-else class="text-gray-400" />
         <nuxt-link :to="i === 0 ? '' : crumb.path" :class="i === 0 ? 'cursor-default' : 'cursor-pointer hover:text-gray-700'" class="ml-4 text-sm font-medium text-gray-500 capitalize">
            {{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}
          </nuxt-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>

import Home from "../icons/HomeIcon";
import HomeIcon from "../icons/HomeIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
export default {
  components: {ChevronRightIcon, HomeIcon, Home},
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
          ? fullPath.substring(1).split('/')
          : fullPath.split('/')

      if(this.$route.params.id) {
        let idIdx = params.indexOf(this.$route.params.id)
        params[idIdx] = Number(this.$route.params.id)
      }

      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null && typeof param !== 'number') {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>
