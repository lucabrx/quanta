<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
  import {
    Card,
    CardFooter,
  } from "$components/ui/card";
  import {
    Tabs,
    TabsList,
    TabsTrigger
  } from "$components/ui/tabs";

  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ prices, interval } = data);
  </script>
  
 
  <div class="py-20 container ">
    <div class="mx-auto  max-w-2xl text-center">
      <h1 class="mb-2 text-base font-semibold text-pink-600">Pricing</h1>
      <p class="mb-2 text-3xl font-bold">Choose what works for you</p>
      <p class="text-base">
        Quanta offers flexible pricing plans for your needs. Choose from our range of
        affordable options and get started today.
      </p>
    </div>

    <div class="flex justify-center">
      <Tabs value="monthly" class="w-[320px] pt-4">
        <TabsList class="grid w-full grid-cols-2">
          <a href="/pricing" class="w-full ">
          <TabsTrigger  value="monthly" class="w-full">
            Monthly
          </TabsTrigger>
          </a>
          <a href="/pricing?interval=year" class="w-full">
          <TabsTrigger value="yearly" class="w-full">
            Yearly
          </TabsTrigger>
        </a>
        </TabsList>
      </Tabs>
    </div>
      <div class="isolate mx-auto mt-8 grid max-w-6xl grid-cols-1 justify-items-center gap-8 lg:grid-cols-3">
        {#each prices as price, _i (price.id)}
        <Card  class="w-full p-4">
          <h5 class="mb-4 text-xl font-medium text-gray-500">
            {price.product.name}
          </h5>
          <div class="flex items-baseline text-gray-900 ">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">{price.unit_amount}</span>
            <span class="ml-1 text-xl font-normal text-gray-500"
              >/{price.unit_amount > 0 ? interval : "forever"}</span>
          </div>
          <ul class="my-7 space-y-6">
            {#each price.product.features as feature}
              <li class="flex space-x-2">
                <span class="text-base font-normal leading-tight text-gray-500">{feature}</span>
              </li>
            {/each}
          </ul>
          <Button class="w-full">{price.product.call_to_action}</Button>
        </Card>
      {/each}  
    </div>

  </div>