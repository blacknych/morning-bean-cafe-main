<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-secondary">
        <main class="flex min-h-screen items-center justify-center lg:relative">
            <div
                class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left"
            >
                <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                    <p
                        class="mx-auto max-w-md text-lg text-primary sm:text-xl md:mt-5 md:max-w-3xl"
                    >
                        welcome to
                    </p>
                    <h1
                        class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                    >
                        <span
                            class="block uppercase text-primary drop-shadow xl:inline"
                            >Morning Bean Coffee</span
                        >
                    </h1>

                    <div
                        class="mt-20 sm:flex sm:justify-center lg:justify-start"
                    >
                        <div class="rounded-md shadow">
                            <RouterLink
                                :to="{ name: 'dashboard' }"
                                class="flex w-full items-center justify-center rounded-md border border-primary bg-transparent px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                                >Order Now</RouterLink
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
            >
                <img
                    class="absolute inset-0 h-full w-full rotate-180 object-cover"
                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt=""
                />
            </div>
        </main>
    </div>
</template>
