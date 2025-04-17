<script setup lang="ts">
import { computed } from "vue";
import { selectedDepartment } from "../lib/departments";

const tables = computed(() =>
  [
    "Department Liaison",
    "COOP Committee Member",
    selectedDepartment.value?.fields.HipaaCompliance,
    selectedDepartment.value?.fields.DirectorApproval,
    selectedDepartment.value?.fields.AdminApproval,
    "Chair, COOP Committee",
  ].filter(Boolean),
);
</script>

<template>
  <section>
    <div id="print-sheet">
      <h1>COOP Approval Form</h1>

      <p>
        This Continuity of Operations Plan (Plan) was prepared by
        <strong>{{ selectedDepartment?.fields.Name }}</strong> to develop,
        implement and maintain a viable continuity capability. This Plan
        complies with applicable internal department policy, County policy,
        local and state regulations, and supports recommendations provided in
        the Federal Continuity Guidance Circular 1 (CGC1), National Fire
        Protection Association Standard on Disaster/Emergency Management and
        Business Continuity Programs (NFPA 1600), Emergency Management
        Accreditation Program (EMAP), and industry accepted "best practices".
      </p>

      <p>
        This Plan has been distributed internally within
        <strong>{{ selectedDepartment?.fields.Name }}</strong> and to other
        departments and agencies that might be affected by its implementation.
      </p>

      <p>
        This Plan shall be reviewed annually. The annual review shall include,
        at a minimum, an updated risk assessment for alternate facilities, vital
        records assessment, mission critical systems and equipment assessment,
        updated staff roster and contact information, and assessment of
        essential functions.
      </p>

      <p>
        By their signatures below, the following senior level officials certify
        that they approve this continuity plan and fully understand the
        continuity of operations procedures that are to be followed as the
        result of an event that impacts the facilities and employees for which
        they are responsible.
      </p>

      <div v-for="table in tables">
        <table class="table table-striped">
          <tbody>
            <tr>
              <td width="20%" class="fw-bold">Approved:</td>
              <td width="55%"></td>
              <td width="10%" class="fw-bold">Date:</td>
              <td width="15%"></td>
            </tr>
            <tr>
              <td class="fw-bold">Title:</td>
              <td colspan="3">{{ table }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style>
#print-sheet {
  font-family: "Times New Roman", Times, serif !important;
  font-size: 12pt;
}
</style>
