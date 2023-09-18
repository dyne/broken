<script lang="ts">
	import { Collections } from '$lib/pocketbase-types';
	import RecordsManager from '$lib/schema/recordsManager/recordsManager.svelte';
	import RecordsTable from '$lib/schema/recordsManager/views/recordsTable.svelte';

	export let data;
</script>

<div class="p-4">
	<h1 class="font-semibold text-2xl pb-10 pl-4">Broken links</h1>

	<RecordsManager collection={Collections.BrokenLinks} let:records>
		<RecordsTable
			{records}
			fields={['pathname', 'search', 'created']}
			showCheckboxes={false}
			showEdit={false}
			showDelete={false}
		/>
	</RecordsManager>
</div>
