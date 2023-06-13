<script>
  async function initKeplr() {
    if (!window.keplr) {
      alert("Please install the Keplr extension.");
      return;
    }

    const chainId = "juno-1"; 
    await window.keplr.enable(chainId);
    const offlineSigner = window.keplr.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();

    // Add your logic for handling Juno token transactions here
    // For example, you can check the user's balance or send a transaction
  }

  // Call the initKeplr function when the page loads
  window.onload = initKeplr;
</script>
