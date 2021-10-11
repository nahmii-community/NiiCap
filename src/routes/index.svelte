<script>
    import { onMount } from "svelte";
    import numeral from "numeral";
    numeral.localeData().delimiters.thousands = ' ';
    import { getNiiFiCirculatingSupply } from "./../ethereum";

    let price = 0;
    let circulatingSupply = 0;
    let marketCap = 0;
    const priceAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=niifi&vs_currencies=usd";

    onMount(async () => {
        circulatingSupply = await getNiiFiCirculatingSupply();
        const { niifi } = await (await fetch(priceAPI)).json();
        marketCap = numeral(circulatingSupply * niifi.usd).format("0.00a");
        price = numeral(niifi.usd).format("0.000a");
        circulatingSupply = numeral(circulatingSupply).format("0,0.");
    });
</script>

<h1>NiiCap</h1>
<h2>NiiFi</h2>
<p>Price (USD): ${price}</p>
<p>Circulating Supply: {circulatingSupply}</p>
<p>Market Cap: {marketCap}</p>

<style>
    p,
    h1,
    h2 {
        text-align: center;
    }
</style>
