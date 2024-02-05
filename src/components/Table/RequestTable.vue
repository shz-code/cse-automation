<template>
  <div class="container">
    <!-- Filter box container -->
    <div class="filter-container row">
      <q-select
        dense
        v-model="selectedType"
        :options="typeOptions"
        label="Filter by Type"
        @update:model-value="filterEvent"
        class="col-sm-5 col-xs-12"
      />
      <q-select
        dense
        v-model="selectedStatus"
        :options="statusOptions"
        label="Filter by Status"
        @update:model-value="filterEvent"
        class="col-sm-5 col-xs-12"
      />
    </div>
    <!-- Table Header -->
    <div class="table q-mt-md">
      <div class="table-header flex justify-between items-center q-pa-sm">
        <div class="table-title">View Requests</div>
        <div class="table-search">
          <q-input
            dense
            filled
            v-model="searchedId"
            label="Search Student Id"
            @update:model-value="filterEvent"
          />
        </div>
      </div>
      <!-- Table -->
      <table v-if="rows.length">
        <thead>
          <tr class="table-header">
            <th class="table-cell" v-for="col in columns" :key="col.id">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row" v-for="row in rows" :key="row.name">
            <TdData :row="row" :permission="data.editable" />
          </tr>
        </tbody>
      </table>
      <div v-else class="bg-red-1 q-pa-md q-mx-sm">Nothing to show</div>
      <div class="table-footer flex flex-center">
        <q-pagination
          v-model="currentPage"
          :max="(pageCount + maxCount - 1) / maxCount"
          direction-links
          flat
          color="grey"
          active-color="primary"
          class="q-mt-sm"
          @update:model-value="paginate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TdData from "./TdData.vue";
import authStore from "src/stores/auth-store";
import { storeToRefs } from "pinia";

const authStoreInstance = authStore();

export default defineComponent({
  name: "RequestTable",
  data() {
    return {
      selectedType: "",
      typeOptions: ["All", "Course Add", "Course Drop"],
      selectedStatus: "",
      statusOptions: ["All", "Pending", "Processing", "Finished"],
      columns: [
        {
          label: "Serial",
          id: 1,
        },
        {
          label: "ID",
          id: 2,
        },
        {
          label: "Name",
          id: 3,
        },
        {
          label: "Type",
          id: 4,
        },
        {
          label: "Details",
          id: 5,
        },
        {
          label: "Status",
          id: 6,
        },
      ],
      searchedId: "",
      rows: [],
      currentPage: 1,
      pageCount: 0,
      maxCount: 4,
    };
  },
  methods: {
    filterEvent() {
      this.rows = this.data.data
        .filter((row) => {
          if (this.selectedStatus === "All" || !this.selectedStatus) return row;
          else if (row.status === this.selectedStatus) {
            return row;
          }
        })
        .filter((row) => {
          if (this.selectedType === "All" || !this.selectedType) return row;
          else if (row.type === this.selectedType) {
            return row;
          }
        })
        .filter((row) => {
          if (!this.searchedId) return row;
          else if (row.studentId.includes(this.searchedId)) {
            return row;
          }
        });
      this.pageCount = this.rows.length;
    },
    paginate() {
      this.rows = this.data.data.slice(
        this.maxCount * (this.currentPage - 1),
        this.currentPage * this.maxCount
      );
    },
  },
  computed: {},
  components: {
    TdData,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.rows = this.data.data.slice(0, this.maxCount);
    this.pageCount = this.data.data.length;
  },
});
</script>

<style lang="scss">
.filter-container {
  justify-content: space-between;
  label {
    width: 100%;
  }
}
.table,
table {
  width: 100%;
  overflow-x: scroll;
  .table-title {
    font-size: 24px;
    font-weight: bold;
  }
  .table-row {
    &:nth-child(odd) {
      background-color: #f5f5f5;
    }
    &:hover {
      background-color: #e0e0e0;
    }
  }
  .table-cell {
    padding: 10px;
    text-align: center;
  }
  .table-actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<!-- Requirements -->

<!--

  typeOptions should contain label, value
  statusOptions should contain label, value

 -->
