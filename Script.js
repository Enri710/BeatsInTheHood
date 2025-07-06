document.querySelectorAll('.buy-paypal').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.dataset.item;
    const amount = btn.dataset.amount;
    const paypalUrl = new URL('https://www.paypal.com/cgi-bin/webscr');
    const params = {
      cmd: '_xclick',
      business: 'tvojpaypal@email.com',
      item_name: item,
      amount: amount,
      currency_code: 'EUR'
    };
    Object.entries(params).forEach(([k,v]) => paypalUrl.searchParams.append(k, v));
    window.open(paypalUrl.toString(), '_blank');
  });
});

