<script setup lang="ts">
import { api, baseUrl } from '@/api';
import PageHead from '@/components/PageHead.vue';
import { defaultProduct } from '@/interfaces/Product';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const id = useRoute().params.id;
let item = ref(defaultProduct);

function getItem() {
    api.get(`products/${id}`)
    .then(res => {
        console.log(res.data);
        item.value = res.data.product;
    })
    .catch(err => {
        console.log(err.response.data);
    });
}
onMounted(() => {
    getItem();
})
</script>

<template>
    <PageHead title="Product Details" subtitle="Details of product">
        <RouterLink class="btn-outline theme-accent" to="/products"><i class="bi bi-arrow-left"></i> Back</RouterLink>
    </PageHead>
    <section class="section-gap">
        <div class="card">
            <div class="card-body">
                <div class="row g-4">

                    <!-- Left: Product Image -->
                    <div class="col-12 col-md-4">
                        <div class="form-field">
                            <label class="form-label fw-semibold">
                                Product Image
                            </label>

                            <div class="border rounded p-3 text-center">
                                <img v-if="item.image" :src="`${baseUrl}${item.image}`" :alt="item.name" class="img-fluid rounded" style="max-height: 180px;">
                                <img v-else src="https://placehold.co/400x400" alt="Product image" class="img-fluid rounded"
                                    style="max-height: 180px;">
                            </div>
                        </div>

                        <div class="mt-3">
                            <span class="text-muted me-2">Product ID:</span>
                            <strong>#{{ item.id }}</strong>
                        </div>
                    </div>

                    <!-- Right: Product Information Table -->
                    <div class="col-12 col-md-8">
                        <h5 class="mb-3">Product Information</h5>

                        <div class="table-responsive">
                            <table class="table table-striped table-bordered align-middle mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row" style="width: 35%;">
                                            Product Name
                                        </th>
                                        <td>{{ item.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Price (৳)</th>
                                        <td>৳ {{ item.price }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Category</th>
                                        <td>{{ item.category.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Brand</th>
                                        <td>{{ item.brand.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Quantity in Stock</th>
                                        <td>{{ item.quantity }} units</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Reorder Level</th>
                                        <td>{{ item.reorder_level }} units</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Description</th>
                                        <td>{{ item.description ? item.description : 'N/A' }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Product Status</th>
                                        <td>
                                            <span class="badge" :class="item.active ? ' bg-success' : ' bg-danger'">
                                                {{item.active ? 'Active' : 'Inactive'}}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <!-- Back Button -->
                <div class="d-flex flex-wrap gap-2 mt-4">
                    <RouterLink to="/products" class="btn btn-outline-secondary">
                        <i class="bi bi-arrow-left"></i>
                        Back to List
                    </RouterLink>
                </div>

            </div>
        </div>
    </section>
</template>