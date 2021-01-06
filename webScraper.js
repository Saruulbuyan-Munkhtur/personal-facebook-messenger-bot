const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.basketball-reference.com/leaders/ws_per_48_season_p.html';

rp(url)
  .then(function(html){
    //success!
    const playerUrls = [];
    for (let i = 0; i<25; i++) {
      playerUrls.push($('tbody> strong > a', html)[i].attribs.href);
    }
    console.log(playerUrls);

  })
  .catch(function(err){
    //handle error
  });
  // all_stats_TOT tr