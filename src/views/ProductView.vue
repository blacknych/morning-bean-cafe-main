<script>
import DashboardView from '@/views/DashboardView.vue';
import Thefooter from '@/components/Thefooter.vue';

export default {
    components: {
        DashboardView,
        Thefooter
    }
}
</script>


<template>
    <DashboardView />
    <div class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div class="lg:col-span-5 lg:col-start-8">
                <div class="flex justify-between">
                    <h1 class="text-xl font-medium text-gray-900">Americano</h1>
                    <p class="text-xl font-medium text-gray-900">₱ 100</p>
                </div>
            </div>

            <!-- Image gallery -->
            <div
                class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
            >
                <h2 class="sr-only">Images</h2>

                <div
                    class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
                >
                    <img
                        src="coffee/americano.jpg"
                        class="rounded-xl lg:col-span-2 lg:row-span-2"
                    />
                </div>
            </div>

            <div class="mt-8 lg:col-span-5">
                <form>
                    <!-- Quantity -->
                    <div class="mt-8">
                            <h2 class="text-sm font-medium text-gray-900">
                                Quantity
                            </h2>
                    </div>

                    <!-- Size picker -->
                    <div class="mt-8">
                        <div class="flex items-center justify-between">
                            <h2 class="text-sm font-medium text-gray-900">
                                Size
                            </h2>
                        </div>

                        <fieldset class="mt-2">
                            <legend class="sr-only">Choose a size</legend>
                            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="S"
                                        class="sr-only"
                                        aria-labelledby="size-choice-2-label"
                                    />
                                    <p id="size-choice-2-label">S</p>
                                </label>
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="M"
                                        class="sr-only"
                                        aria-labelledby="size-choice-3-label"
                                    />
                                    <p id="size-choice-3-label">M</p>
                                </label>
                                <label
                                    class="flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                                >
                                    <input
                                        type="radio"
                                        name="size-choice"
                                        value="L"
                                        class="sr-only"
                                        aria-labelledby="size-choice-4-label"
                                    />
                                    <p id="size-choice-4-label">L</p>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </form>

                <!-- Product details -->
                <div class="mt-10">
                    <h2 class="text-sm font-medium text-gray-900">
                        Description
                    </h2>

                    <div class="prose prose-sm mt-4 text-gray-500">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit, cumque eveniet ipsum a
                            necessitatibus nostrum ut magnam pariatur ullam
                            culpa doloribus, similique provident excepturi quae
                            aut velit consectetur dolor corporis?
                        </p>
                        <p>
                            <!-- Looking to stock your closet? The Basic tee also
                            comes in a 3-pack or 5-pack at a bundle discount. -->
                        </p>
                    </div>
                </div>
                <section class="mt-10">

                    <dl
                        class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"
                    >
                        <div
                            class="rounded-lg border border-gray-200 bg-gray-50 p-6 flex items-center justify-center"
                        >
                            <dt>
                                <span
                                    class="mt-4 text-sm font-medium text-gray-900"
                                >
                                    Dine In
                                </span>
                            </dt>
                        </div>

                        <div
                            class="rounded-lg border border-gray-200 bg-gray-50 p-6 flex items-center justify-center"
                        >
                            <dt>
                                <span
                                    class="mt-4 text-sm font-medium text-gray-900"
                                >
                                    Take Out
                                </span>
                            </dt>
                        </div>
                    </dl>
                </section>

                <button
                        class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add to cart
                </button>
            </div>
        </div>
    </div>

    <Thefooter/>
</template>

