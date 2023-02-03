

<template>
    <header class="bg-[#40250d]">
        <div
            class="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8"
        >
            <div class="relative flex h-16 justify-between">
                <div class="relative z-10 flex px-2 lg:px-0">
                    <div
                        class="flex flex-shrink-0 items-center text-xl font-light"
                    >
                        <img
                            class="block h-10 w-auto text-white"
                            src="/logo.png"
                            alt="Workflow"
                        />
                        <h1 class="text-white">Morning Bean Coffee</h1>
                    </div>
                </div>
                <div
                    class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0"
                >
                    <div class="w-full sm:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <!-- Heroicon name: solid/search -->
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                id="search"
                                name="search"
                                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center"
                >
                    <div class="ml-4 flow-root lg:ml-8">
                        <a href="#" class="group -m-2 flex items-center p-2">
                            <!-- Heroicon name: outline/shopping-bag -->
                            <svg
                                class="h-6 w-6 flex-shrink-0 text-white group-hover:text-[#b38f6a]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span
                                class="ml-2 text-sm font-medium text-white group-hover:text-[#b38f6a]"
                                >0</span
                            >
                            <span class="sr-only">items in cart, view bag</span>
                        </a>
                    </div>

                    <!-- Profile dropdown -->
                    <div class="relative ml-4 flex-shrink-0">
                        <div>
                            <button
                                type="button"
                                class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="h-8 w-8 rounded-full"
                                    src="/profile.png"
                                    alt=""
                                />
                            </button>
                        </div>  
                    </div>
                </div>
            </div>

            <div
                class="hidden lg:flex lg:space-x-8 lg:py-2"
                aria-label="Global"
            >
                <router-link 
                    to = "/home"
                >
                    <button class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-[#40250d]">Home</button>
                </router-link>

                <router-link 
                    to = "/coffee"
                >
                    <button class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-[#40250d]">Coffee</button>
                </router-link>

                <router-link 
                    to = "/frappe"
                >
                    <button class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-[#40250d]">Frappe</button>
                </router-link>

                <router-link 
                    to = "/tea"
                >
                    <button class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-[#40250d]">Tea</button>
                </router-link>

                <router-link 
                    to = "/dessert"
                >
                    <button class="inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-gray-50 hover:text-[#40250d]">Dessert</button>
                </router-link>
            </div>
        </div>
    </header>

    
    <RouterView />
    
    
    
    <!--<footer aria-labelledby="footer-heading" class="bg-grascale-y-50 mt-8 ">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-screen px-4 sm:px-6 lg:px-8 bg-[#40250d]">
            <div class="border-t border-gray-100 py-10 text-center ">
                <p class="text-sm text-white">
                    &copy; Morning Bean Cafe
                </p>
            </div>
        </div>
    </footer>-->
</template>