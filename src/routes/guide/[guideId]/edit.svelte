<svelte:head>
  {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}
    <title>{$guide.data.getGuide.name} - SMR</title>
  {/if}
</svelte:head>

<script lang="ts" context="module">
  import {paramsToProps} from "$lib/utils/routing";

  export const load = paramsToProps();
</script>

<script lang="ts">
  import {mutation, operationStore, query} from '@urql/svelte';
  import {EditGuideDocument, GetGuideDocument} from "$lib/generated";
  import Toast from "$lib/components/general/Toast.svelte";
  import {goto} from '$app/navigation';
  import GuideForm from "$lib/components/guides/GuideForm.svelte";
  import type {GuideData} from "$lib/models/guides";
  import {base} from "$app/paths";

  export let guideId!: string;

  let errorMessage = '';
  let errorToast = false;

  const guide = operationStore(
    GetGuideDocument,
    {guide: guideId}
  );

  const editGuide = mutation({
    query: EditGuideDocument
  });

  const onSubmit = (data: GuideData) => {
    editGuide({
      guideId: guideId,
      guide: data
    }).then(value => {
      if (value.error) {
        console.error(value.error.message);
        errorMessage = 'Error editing guide: ' + value.error.message;
        errorToast = true;
      } else {
        // TODO Toast or something
        goto(base + '/guide/' + value.data.updateGuide.id);
      }
    });
  }

  $: if (!errorToast) errorMessage = '';

  query(guide);
</script>

<h1 class="text-4xl my-4 font-bold">Edit Guide</h1>

{#if $guide.fetching}
  <p>Loading...</p>
{:else if $guide.error}
  <p>Oh no... {$guide.error.message}</p>
{:else}
  <GuideForm onSubmit={onSubmit} initialValues={$guide.data.getGuide} submitText="Save"/>
{/if}

<Toast bind:running={errorToast}>
  <span>{errorMessage}</span>
</Toast>
