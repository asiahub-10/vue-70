<script setup lang="ts">
import PageHead from '@/components/PageHead.vue';
import { api, baseUrl } from '@/api.ts';
import { onMounted, ref } from 'vue';
import { type Product } from '@/interfaces/Product';

let products = ref<Product[]>([]);
let pageLinks = ref<any[]>([]);
// console.log(products);
function getAllProducts(url: string) {
    api.get(url)
        .then((res: any) => {
            // console.log(res.data.products);
            products.value = res.data.products.data;
            pageLinks.value = res.data.products.links;
            // console.log(links);
        })
        .catch((err: any) => {
            console.log(err.response.data);
        });
}
onMounted(() => {
    getAllProducts('products');
});
</script>

<template>
    <PageHead title="Product" subtitle="Manage your products">
        <RouterLink class="btn-solid theme-accent" to="/products/create"><i class="bi bi-plus-lg"></i> Add New
        </RouterLink>
    </PageHead>

    <section class="section-gap">
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in products" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>
                                    <div class="d-flex align-items-center gap-3">
                                        <img v-if="item.image" :src="`${baseUrl}${item.image}`" width="40" height="40"
                                            class="rounded" :alt="item.name" />
                                        <img v-else src="https://placehold.co/40" width="40" height="40" class="rounded"
                                            :alt="item.name" />
                                        {{ item.name }}
                                    </div>
                                </td>
                                <td>৳ {{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>
                                    <span class="badge badge-subtle"
                                        :class="item.active ? 'theme-success' : 'theme-danger'">
                                        {{ item.active ? 'Active' : 'Inactive' }}
                                    </span>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Accent theme example">
                                        <button type="button" class="btn-outline theme-secondary">
                                            <i class="bi bi-eye"></i>
                                        </button>
                                        <RouterLink to="/products/update" class="btn-outline theme-secondary">
                                            <i class="bi bi-pencil"></i>
                                        </RouterLink>
                                        <button type="button" class="btn-outline theme-secondary">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm theme-accent justify-content-end mb-0">
                                            <li v-for="link in pageLinks" class="page-item" :class="link.active ? 'active' : ''">
                                                <button type="button" class="page-link" :class="link.page == null ? 'disabled' : ''" @click="getAllProducts(link.url)">
                                                    <span v-html="link.label"></span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>