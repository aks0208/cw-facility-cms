<template>
  <div class="flex-shrink-0 w-full group block">
    <div class="flex items-center">
      <div>
        <img class="inline-block h-9 w-9 rounded-full" src="/avatar.jpeg" alt="" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{$auth.user.first_name}} {{$auth.user.last_name}}</p>
        <p @click="$auth.logout();$router.push('/login')" class="text-xs cursor-pointer font-medium text-gray-500 group-hover:text-gray-700">Logout</p>
      </div>
    </div>
  </div>


</template>
