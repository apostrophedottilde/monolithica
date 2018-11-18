<template>
  <div class="col-6">
    <div class="form-group">
      <label>Sale type</label>
      <select v-model="listingType" class="form-control" formControlName="listingType">
        <option value="BUY_NOW">Buy-Now</option>
        <option value="AUCTION">Auction</option>
        <option value="SILENT_AUCTION">Silent Auction</option>
        <option value="TRADE">Trade-it</option>
        <option value="GIVAWAY">Givaway</option>
        <option value="WANTED">Wanted</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listing-type-picker',
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
