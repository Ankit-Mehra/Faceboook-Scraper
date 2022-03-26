const fetch = require("node-fetch");
const fs = require('fs');
const path = './ads.json';

const fetchData =  async() =>{
    const response = await fetch("https://www.facebook.com/api/graphql/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-fb-friendly-name": "CometMarketplaceSearchContentPaginationQuery",
        "x-fb-lsd": "AVopOQwh440"
      },
      "referrer": "https://www.facebook.com/marketplace/106262189412553/search?sortBy=creation_time_descend&query=foosball%20table&exact=false",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "av=0&__user=0&__a=1&__dyn=7xeUmwlE7ibwKBWo2vwAxu13wvoKewSwMwNw9G2S0im3y4o0B-q1ew65xO0FE2awt81sbzoaEd82ly87e2l0Fwqo31wnEfo5m1mxe6E7e58jwGzEao7a222SUbEaU2eUlwhE2FBx_w4HwJwSyES0gq0Lo4K2e&__csr=hJ8h-yp9GQQaGGCLAu9Qqm5eC9DHyoC7UiKczWxSqayF8oybz8dpEiDwFzEKcy8aU5eUeoa9EgQA2S1Dwi8OfG02muE09X200dxC09Mw5RwIkHwBx2y02LE1Bo0qcwhFo7y0xo0RS09Jg0iDwoE0jlw0NWw0HbwgE3uw2qE0ckUlnw&__req=3&__hs=19077.HYP%3Acomet_loggedout_pkg.2.0.0.0.&dpr=1&__ccg=EXCELLENT&__rev=1005252236&__s=pk6apy%3Abzu0v2%3A3yi0rn&__hsi=7079533353406581494-0&__comet_req=1&lsd=AVopOQwh440&jazoest=2909&__spin_r=1005252236&__spin_b=trunk&__spin_t=1648332306&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentPaginationQuery&variables=%7B%22count%22%3A24%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A0%2C%5C%22b2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22%5C%22%2C%5C%22it%5C%22%3A0%2C%5C%22hmsr%5C%22%3Afalse%2C%5C%22tbi%5C%22%3A0%7D%2C%5C%22c2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22AboY_0XUrDG14bUHeLNF3ugv4K9c8UEKZJCEnP6ZlLOM61xiuozK1jfGbRmMGCSYb98ILe8aK39Ewjhtybw4OhslNhFUpW1O5AD82vfYamNBQT88QXVxkmlCx6cvZszNjpuaAMuyHydikk5-WP5rW_QmWi_L-ZxPCLYYMbk0V4bu8DSSgNKyhRa3gITH6vIsqtxGODGfiTjIUDdjUs8yOhFiqYo7SMHVOw8-3KFL9gB-giBiG-DM4UZyouIDevM9J4f1ruDXshEMV99-l9yApwOwxvsWyIprjtV0NORWzwbYrjMUQxKVLnO3NPK8cEAw8lrrB-6azIWDXH9QOitnG8l_4y_0iFHodEk_AQaLNi5R0ac5y17xh9aJ4T7XpPs-3DyDy1yh-BmZNQuXPGyb-5w8q0IsWu_nQTYwKL4p9GkAHqRsEO277SQymU-DigAsttimufAMBTGgzniti90vkzARWGUw73KwR5tn88nVvyUDKgsnImaDSWsuui5BNN5kszqMIKXlfRjYIG7U4U3cEPi40N9lsVBLlfn2mHdNfm63FbhmCg8VMyo3gbU-E90icvM%5C%22%2C%5C%22it%5C%22%3A7%2C%5C%22rpbr%5C%22%3A%5C%22%5C%22%2C%5C%22rphr%5C%22%3Afalse%7D%2C%5C%22irr%5C%22%3Afalse%2C%5C%22rui%5C%22%3A%5B%5D%7D%22%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22foosball%20table%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A43.6%2C%22filter_location_longitude%22%3A-79.65%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A60%2C%22commerce_search_sort_by%22%3A%22CREATION_TIME_DESCEND%22%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22scale%22%3A1%7D&server_timestamps=true&doc_id=7148819335190201",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
    const data = await response.json();
    var lengthData = Object.keys(data.data.marketplace_search.feed_units.edges).length;
    // for(let i =1; i<lengthData;i++){
    //     console.log(data.data.marketplace_search.feed_units.edges[i].node.listing.marketplace_listing_title);    
    //     // console.log(i);    
    // }
    var json_data = JSON.stringify(data,null,2);
    // fs.readFile(path,(error, data) => {
    //   if (error) {
    //     console.log(error);
    //     return;
    //   }
    //   const parsedData = JSON.parse(data);
    //   parsedData.data = json_data;
    //   fs.writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
    //     if (err) {
    //       console.log('Failed to write updated data to file');
    //       return;
    //     }
    //     console.log('Updated file successfully');
    //   });
    // });
    //https://www.facebook.com/marketplace/106262189412553/search?sortBy=creation_time_descend&query=foosball%20table&exact=false
    fs.writeFile(path,json_data,(err)=>{
      if(err) throw err;
      console.log('Data written to file')
    });
    // console.log(JSON.parse(data));
    console.log(lengthData);
};

fetchData();

