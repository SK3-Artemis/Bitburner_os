//Trade Stocks for extra Money Generation
export async function main(ns) {
  
  //get all stocks already owned
  let portfolio = [];
  const stockNames = ns.stock.getSymbols();
  for(let i in stockNames){
    portfolio.push(
      {name: stockNames[i], long: ns.stock.getPosition(stockNames[i])[0], short: ns.stock.getPosition(stockNames[i])[2]})
  }
  while (true) {
      //Buy a stock if the ForeCast is over 0.7, sell a stock if the ForeCast falls under 0.55
      for(let i in stockNames){
        const foreCast = ns.stock.getForecast(stockNames[i]);
        if(foreCast > 0.6 && ns.getServerMoneyAvailable('home')> 1_000_000_000_000){
          ns.stock.buyStock(stockNames[i], ns.stock.getMaxShares(stockNames[i]));
        }
        if(foreCast < 0.55){
          ns.stock.sellStock(stockNames[i], ns.stock.getMaxShares(stockNames[i]));
        }
      }

    await ns.asleep(10000);
  }
}