import { CheerioCrawler } from "crawlee";

import { SYLLABUS_START_URLS } from "./lib";
import { router } from "./routes";

const crawler = new CheerioCrawler({
  maxConcurrency: 1,
  maxRequestsPerCrawl: 10,
  requestHandler: router,
});

await crawler.run(SYLLABUS_START_URLS);
