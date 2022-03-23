const fetch = require("node-fetch");

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
            "x-fb-friendly-name": "CometMarketplaceSearchContentContainerQuery",
            "x-fb-lsd": "AVoUrB3wceA"
        },
        "referrer": "https://www.facebook.com/marketplace/toronto/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "av=0&__user=0&__a=1&__dyn=7xeUmwlE7ibwKBWo2vwAxu13wvoKewSwMwNw9G2S0im3y4o0B-q1ew65xO0FE2awt81sbzoaEd82ly87e2l0Fwqo31wnEfo5m1mxe6E7e58jwGzEao4236222SUbElxm0zK5o4q0GpovU1aUbodEGdwko2QwbS1bw&__csr=h5hsAyKyd9q4arJVlKbKAnrWQmDHFWDGFCbyaKvG9yWCKpQq8yVkcUh-4p9EZ164UKUjy8iAAAKaByHGmWK369UOEeGxa2928-UGh3ock2S8Dyoqw1pK0XJ00w1w7BwmU0939603ra02yO01w8w2aE1ouEZ1bx6hUix6cw2EGBwKg6QE3QG06z84Wq1DwRG0zUow2-o0Gh017u1nw1bN6wFwg808LDgiyEmDwmj2E8Am7UR280qNw0IpwNw2G830xO06JojgkBweS1kx6&__req=l&__hs=19073.HYP%3Acomet_loggedout_pkg.2.0.0.0.&dpr=1.5&__ccg=EXCELLENT&__rev=1005227194&__s=zhjvl2%3A7eisk0%3Ahg2do3&__hsi=7078078126761533683-0&__comet_req=1&lsd=AVoUrB3wceA&jazoest=2962&__spin_r=1005227194&__spin_b=trunk&__spin_t=1647993486&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A43.648%2C%22longitude%22%3A-79.3872%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22marketplaceSearchMetadataCardEnabled%22%3Atrue%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_SEO%22%2C%22query%22%3A%22%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B1834536343472201%2C895487550471874%2C288273351613190%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A43.648%2C%22filter_location_longitude%22%3A-79.3872%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A60%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3Anull%2C%22seo_url%22%3A%22classifieds%22%2C%22surface%22%3A%22TOPIC_PAGE%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3Anull%2C%22scale%22%3A1.5%2C%22shouldIncludePopularSearches%22%3Atrue%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22toronto%22%2C%22url%22%3A%22classifieds%22%7D%2C%22vehicleParams%22%3A%22classifieds%22%7D&server_timestamps=true&doc_id=4733379216787764",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
});

    const data = await response.json();
    var lengthData = Object.keys(data.data.marketplace_search.feed_units.edges).length;
    for(let i =1; i<lengthData;i++){
        console.log(data.data.marketplace_search.feed_units.edges[i].node.listing.marketplace_listing_title);    
    }
    // console.log(lengthData);
};

fetchData();