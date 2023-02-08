<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	import ChartLanguage from '$lib/charts/language/ChartLanguage.svelte';
	import TableOfContents from '$lib/layout/TableOfContents.svelte';
	import Introduction from '$lib/layout/Introduction.svelte';
	import Conclusion from '$lib/layout/Conclusion.svelte';
	import Stat from '$lib/charts/templates/Stat.svelte';
	import BuysSells from '$lib/charts/BuysSells.svelte';
	import BuyersSellers from '$lib/charts/BuyersSellers.svelte';
	import SwapVolume from '$lib/charts/SwapVolume.svelte';
	import SwapVolumeUSD from '$lib/charts/SwapVolumeUSD.svelte';
	import NativeBuysSells from '$lib/charts/NativeBuysSells.svelte';
	import NativeBuyersSellers from '$lib/charts/NativeBuyersSellers.svelte';
	import NativeSwapVolume from '$lib/charts/NativeSwapVolume.svelte';
	import NativeSwapVolumeUSD from '$lib/charts/NativeSwapVolumeUSD.svelte';
	import BuysDistribution from '$lib/charts/BuysDistribution.svelte';

	export let data: PageData;

	let view: string = 'Go to Swaps on Avalanche Summary';

	function handleClick() {
		if (view == 'Go to Swaps on Avalanche Summary') {
			view = 'Go to Swaps on Osmosis Summary';
		} else {
			view = 'Go to Swaps on Avalanche Summary';
		}
	}
</script>

<body>
	<div class="flex justify-center">
		<div class="2xl:max-w-[85vw]">
			<div class="grid grid-cols-4">
				<header class="col-start-2 col-span-2">
					<Header />
				</header>
			</div>
			<div class="grid grid-cols-4 justify-items-start">
				<div class="col-start-2 col-span-2">
					<Introduction />
				</div>
			</div>
			<div class="grid grid-cols-4 gap-2 justify-items-center">
				<div class="col-start-2 col-span-2 mt-5">
					<button
						class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100
					 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 
					   
					 "
						on:click={handleClick}>{view}</button
					>
				</div>
			</div>
			<div class="grid grid-cols-6 gap-2 pt-5">
				{#if view == 'Go to Swaps on Avalanche Summary'}
					<div class="col-start-2 col-span-4 grid grid-cols-4 gap-1">
						<Chart
							title={'Swapppers'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SWAPPER_COUNT} />
							</div>
						</Chart>
						<Chart
							title={'Swaps'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SWAP_COUNT} />
							</div>
						</Chart>
						<Chart
							title={'Buys'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SWAP_COUNT_TO_WAVAX} />
							</div>
						</Chart>
						<Chart
							title={'Sells'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SWAP_COUNT_FROM_WAVAX} />
							</div>
						</Chart>
					</div>
					<div class="col-start-1 col-span-6 grid grid-cols-6 gap-1">
						<Chart
							title={'Swap Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SWAP_VOLUME} />
							</div>
						</Chart>
						<Chart
							title={'Buy Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.BUY_VOLUME} />
							</div>
						</Chart>
						<Chart
							title={'Sell Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.SELL_VOLUME} />
							</div>
						</Chart>

						<Chart
							title={'Swap Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.WAVAX_SUMMARY.SWAP_VOL_USD} />
							</div>
						</Chart>
						<Chart
							title={'Buy Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.WAVAX_SUMMARY.BUY_VOLUME_USD} />
							</div>
						</Chart>
						<Chart
							title={'Sell Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.WAVAX_SUMMARY.SELL_VOLUME_USD} />
							</div>
						</Chart>
					</div>
					<div class="col-start-2 col-span-4 grid grid-cols-4 gap-1">
						<Chart
							title={'Max Swap'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.MAX_SWAP} />
							</div>
						</Chart>
						<Chart
							title={'Avg Swap'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.WAVAX_SUMMARY.AVG_SWAP} />
							</div>
						</Chart>
						<Chart
							title={'Max Swap ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.WAVAX_SUMMARY.MAX_SWAP_USD} />
							</div>
						</Chart>
						<Chart
							title={'Avg Swap ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.WAVAX_SUMMARY.AVG_SWAP_USD} />
							</div>
						</Chart>
					</div>
				{/if}
				{#if view == 'Go to Swaps on Osmosis Summary'}
					<div class="col-start-2 col-span-4 grid grid-cols-4 gap-1">
						<Chart
							title={'Swapppers'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.SWAPPERS} />
							</div>
						</Chart>
						<Chart
							title={'Swaps'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.SWAPS} />
							</div>
						</Chart>
						<Chart
							title={'Buys'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.BUYS} />
							</div>
						</Chart>
						<Chart
							title={'Sells'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.SELLS} />
							</div>
						</Chart>
					</div>
					<div class="col-start-1 col-span-6 grid grid-cols-6 gap-1">
						<Chart
							title={'Swap Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.SWAP_AMOUNT} />
							</div>
						</Chart>
						<Chart
							title={'Buy Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.BUY_AMOUNT} />
							</div>
						</Chart>
						<Chart
							title={'Sell Volume'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.SELL_AMOUNT} />
							</div>
						</Chart>
						<Chart
							title={'Swap Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.NATIVE_WAVAX_SUMMARY.SWAP_AMOUNT_USD} />
							</div>
						</Chart>
						<Chart
							title={'Buy Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.NATIVE_WAVAX_SUMMARY.BUY_AMOUNT_USD} />
							</div>
						</Chart>
						<Chart
							title={'Sell Volume ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.NATIVE_WAVAX_SUMMARY.SELL_AMOUNT_USD} />
							</div>
						</Chart>
					</div>
					<div class="col-start-2 col-span-4 grid grid-cols-4 gap-1">
						<Chart
							title={'Max Swap'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.MAX_SWAP_AMOUNT} />
							</div>
						</Chart>
						<Chart
							title={'Avg Swap'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={data.item.NATIVE_WAVAX_SUMMARY.AVG_SWAP_AMOUNT} />
							</div>
						</Chart>
						<Chart
							title={'Max Swap ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.NATIVE_WAVAX_SUMMARY.MAX_AMOUNT_USD} />
							</div>
						</Chart>
						<Chart
							title={'Avg Swap ($USD)'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/f71f3eec-5798-4bf6-a1b0-72dbff1bff14'}
						>
							<div class="h-36" slot="figure">
								<Stat chart_data={'$' + data.item.NATIVE_WAVAX_SUMMARY.AVG_AMOUNT_USD} />
							</div>
						</Chart>
					</div>
				{/if}
			</div>
			<div class="grid grid-cols-4 gap-2 justify-items-center">
				<div class="col-start-1 col-span-2">
					<div class="grid grid-cols-1 gap-2 max-w-[956px]">
						<div class="col-span-1 pt-5" id="Buys & Sells">
							<Chart
								title={'wAVAX Buys & Sells on Osmosis'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/a5fb6988-36c1-4196-81d2-d73e1f44f197'}
							>
								<div class="h-96" slot="figure">
									<BuysSells chart_data={data.item.WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators1">
							<Chart
								title={'Buyers & Sellers'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/a5fb6988-36c1-4196-81d2-d73e1f44f197'}
							>
								<div class="h-96" slot="figure">
									<BuyersSellers chart_data={data.item.WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators1">
							<Chart
								title={'Swap Volume'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/a5fb6988-36c1-4196-81d2-d73e1f44f197'}
							>
								<div class="h-96" slot="figure">
									<SwapVolume chart_data={data.item.WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators1">
							<Chart
								title={'Swap Volume ($USD)'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/a5fb6988-36c1-4196-81d2-d73e1f44f197'}
							>
								<div class="h-96" slot="figure">
									<SwapVolumeUSD chart_data={data.item.WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
					</div>
				</div>
				<div class="col-start-3 col-span-2">
					<div class="grid grid-cols-1 gap-2 max-w-[956px]">
						<div class="col-span-1 pt-5" id="Buys & Sells">
							<Chart
								title={'wAVAX Buys & Sells on Avalanche'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/abf38891-831a-4e43-a4b3-42e31fd55838'}
							>
								<div class="h-96" slot="figure">
									<NativeBuysSells chart_data={data.item.NATIVE_WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators1">
							<Chart
								title={'Buyers & Sellers'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/abf38891-831a-4e43-a4b3-42e31fd55838'}
							>
								<div class="h-96" slot="figure">
									<NativeBuyersSellers chart_data={data.item.NATIVE_WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators2">
							<Chart
								title={'Swap Volume on Avalanche'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/abf38891-831a-4e43-a4b3-42e31fd55838'}
							>
								<div class="h-96" slot="figure">
									<NativeSwapVolume chart_data={data.item.NATIVE_WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
						<div class="col-span-1 pt-5" id="Validators2">
							<Chart
								title={'Swap Volume ($USD) on Avalanche'}
								query_link={'https://next.flipsidecrypto.xyz/edit/queries/abf38891-831a-4e43-a4b3-42e31fd55838'}
							>
								<div class="h-96" slot="figure">
									<NativeSwapVolumeUSD chart_data={data.item.NATIVE_WAVAX_TIMESERIES} />
								</div>
							</Chart>
						</div>
						<ChartLanguage />
					</div>
				</div>
			</div>
			<div class="grid grid-cols-4 gap-2 justify-items-center">
				<div class="col-start-2 col-span-2 grid grid-cols-1 gap-2 max-w-[956px]">
					<div class="col-span-1 pt-5">
						<Chart
							title={'wAVAX Buy Distribution on Osmosis'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/e0d68eff-3b37-47e2-9c69-59abb4cc526e'}
						>
							<div class="h-96" slot="figure">
								<BuysDistribution chart_data={data.item.BUY_DISTRIBUTION} />
							</div>
						</Chart>
					</div>
					<ChartLanguage />
					<div class="col-span-1 pt-5">
						<Chart
							title={'wAVAX Sell Distribution on Osmosis'}
							query_link={'https://next.flipsidecrypto.xyz/edit/queries/a756c847-c6ce-49db-8dc3-fe1ff7b01699'}
						>
							<div class="h-96" slot="figure">
							</div>
						</Chart>
					</div>
					<ChartLanguage />
					<Conclusion />
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	</div>
</body>
