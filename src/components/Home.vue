<script>
import Thefooter from '@/components/Thefooter.vue';

export default {
    components: {
        Thefooter
    }
}
</script>

<template>
    <div class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative bg-white">
                <div class="flex flex-col border-b border-gray-200 lg:border-0">
                    <div
                        aria-hidden="true"
                        class="absolute hidden h-full w-1/2 bg-secondary lg:block lg:rounded-l-xl"
                    ></div>
                    <div class="relative bg-secondary lg:bg-transparent">
                        <div
                            class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-16"
                        >
                            <div
                                class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-16"
                            >
                                <div class="lg:pr-16">
                                    <h1
                                        class="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl xl:text-6xl"
                                    >
                                        New Year's Sale
                                    </h1>
                                    <p class="text-md mt-4 text-primary">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Vero ut error consectetur
                                        voluptas ex quos eligendi, dolorum nulla.
                                    </p>
                                    <div class="mt-6">
                                        <a
                                            href="#"
                                            class="inline-block rounded-md border border-primary py-3 px-8 font-medium text-white"
                                            >Start Shopping</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="h-48 w-full overflow-hidden sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 lg:rounded-r-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt=""
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>

            <div class="mx-auto mt-8 max-w-7xl">
                <div class="sm:hidden">
                    <label for="tabs" class="sr-only">Select a tab</label>
                    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                    <select
                        id="tabs"
                        name="tabs"
                        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option>My Account</option>

                        <option>Company</option>

                        <option selected>Team Members</option>

                        <option>Billing</option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <nav class="flex space-x-4" aria-label="Tabs">
                        <a
                            href="#"
                            class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-[#40250d]"
                            aria-current="page"
                        >
                            Popular
                        </a>
                    </nav>
                </div>
            </div>

            <section>
                <div class="mx-auto mt-8 max-w-7xl">
                    <div class="md:flex md:items-center md:justify-between">
                        <h2
                            id="favorites-heading"
                            class="text-2xl font-extrabold tracking-tight text-[#40250d]"
                        >
                            Popular
                        </h2>
                    </div>

                    <div
                        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
                    >
                        <div class="group relative">
                            <div
                                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                            >
                                <img
                                    src="/coffee/americano.jpg"
                                    alt="Hand stitched, orange leather long wallet."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 class="mt-4 text-sm text-[#40250d]">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Americano
                                </a>
                            </h3>
                            <p class="mt-1 text-sm font-medium text-[#40250d]">
                                ₱70
                            </p>
                        </div>

                        <div class="group relative">
                            <div
                                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                            >
                                <img
                                    src="/coffee/cappucino.jpg"
                                    alt="Hand stitched, orange leather long wallet."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 class="mt-4 text-sm text-[#40250d]">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Cappucino
                                </a>
                            </h3>
                            <p class="mt-1 text-sm font-medium text-[#40250d]">
                                ₱85
                            </p>
                        </div>

                        <div class="group relative">
                            <div
                                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                            >
                                <img
                                    src="/coffee/mocha.jpg"
                                    alt="Hand stitched, orange leather long wallet."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 class="mt-4 text-sm text-[#40250d]">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Mocha
                                </a>
                            </h3>
                            <p class="mt-1 text-sm font-medium text-[#40250d]">
                                ₱80
                            </p>
                        </div>

                        <div class="group relative">
                            <div
                                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                            >
                                <img
                                    src="/coffee/machiato.jpg"
                                    alt="Hand stitched, orange leather long wallet."
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 class="mt-4 text-sm text-[#40250d]">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Machiato
                                </a>
                            </h3>
                            <p class="mt-1 text-sm font-medium text-[#40250d]">
                                ₱90
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Thefooter/>
</template>