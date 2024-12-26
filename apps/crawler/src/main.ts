// For more information, see https://crawlee.dev/
import { CheerioCrawler } from "crawlee";

import { router } from "./routes";

const startUrls = ["https://crawlee.dev"];

const crawler = new CheerioCrawler({
  // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
  requestHandler: router,
  // Comment this option to scrape the full website.
  maxRequestsPerCrawl: 20,
});

await crawler.run(startUrls);
