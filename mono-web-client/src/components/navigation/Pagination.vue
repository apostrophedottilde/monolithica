<template>
    <div class="row">
        <div class="col-8">
            <b-pagination class="" align="center" size="lg" :total-rows="100" :per-page="10"></b-pagination>
        </div>
        <div class="col-4">
            <select class="form-control" formControlName="listingType" >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped>
    select{
        width: 100px;
        text-overflow: ellipsis;
    }
</style>