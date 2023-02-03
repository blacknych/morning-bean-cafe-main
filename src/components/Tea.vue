<script>
import Thefooter from '@/components/Thefooter.vue';
export default {
    components: {
        Thefooter
    },

    data() {
        return {
            tea: [{
                            
                    name: "Green Tea",
                    price: "65",
                    image: '/tea/green.jpg'
                
                },
                {
                    name: "Jasmin Tea",
                    price: "70",
                    image: '/tea/jasmin.jpg'
                },
                {
                    name: "Milk Tea",
                    price: "120",
                    image: '/tea/milktea.jpg'
                },
                {
                    name: "Ginger Tea",
                    price: "50",
                    image: '/tea/ginger.jpg'
                },
                {
                    name: "Honey Lemon",
                    price: "75",
                    image: '/tea/honey.jpg'
                },
            ]
        }
    }
}
</script>
<template>
    <section class="container mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto mt-8 max-w-7xl">
            <div class="md:flex md:items-center md:justify-between">
                <h2
                    class="text-2xl font-extrabold tracking-tight text-[#40250d]"
                >
                    Tea
                </h2>
            </div>

            <div
                class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
            >
                <div class="group relative mb-10"
                v-for="item in tea">
                    <div
                        class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
                    >
                        <img
                            :src="item.image"
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-[#40250d]">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            {{ item.name }}
                        </a>
                    </h3>
                    <p class="mt-1 text-sm font-medium text-[#40250d]">
                        ₱ {{ item.price }}
                    </p>
                </div>
                
            </div>
        </div>
    </section>
    <Thefooter/>
</template>