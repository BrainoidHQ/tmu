import { CheerioCrawler } from "crawlee";

import { SYLLABUS_START_URLS } from "./lib";
import { router } from "./routes";

const crawler = new CheerioCrawler({
  requestHandler: router,
  maxRequestsPerCrawl: 10,
});

await crawler.run(SYLLABUS_START_URLS);
