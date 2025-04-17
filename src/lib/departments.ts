import { computed, reactive, ref } from "vue";
import airtable from "./airtable";

export const departments = reactive<{
  loading: boolean;
  data: {
    id: string;
    createdTime: string;
    fields: {
      Name: string;
      DirectorApproval?: string;
      AdminApproval?: string;
      HipaaCompliance?: string;
    };
  }[];
}>({
  loading: true,
  data: [],
});

export async function fetchDepartments() {
  departments.loading = true;
  try {
    const { data } = await airtable.get("/tblMxqAVjhbU8Ck4q", {
      params: {
        view: "AppView",
      },
    });

    departments.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    departments.loading = false;
  }
}

export const selectedDepartmentModel = ref<string | null>(null);

export const selectedDepartment = computed(() =>
  departments.data.find((x) => x.id === selectedDepartmentModel.value),
);
