import { createCheerioRouter, sleep } from "crawlee";

import {
  decodeHtmlEntities,
  getLink,
  LINK_PATTERN_1,
  SYLLABUS_PATH,
} from "./lib";
import { parseRawSyllabusData } from "./syllabus";

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ $, log, enqueueLinks }) => {
  const urls = $("a")
    .map((_, el) => $(el).attr("onclick"))
    .get()
    .map(getLink(LINK_PATTERN_1, SYLLABUS_PATH))
    .filter(Boolean) as string[];

  log.info(`enqueue: ${urls.length.toString()} urls`);
  await enqueueLinks({ urls, label: "syllabus" });
});

router.addHandler("syllabus", async ({ log, request, $, pushData }) => {
  await sleep(500);
  log.info(`processing: ${request.loadedUrl}`);

  const keys = $(".syllabus-head")
    .map((_, el) => $(el).text())
    .toArray();
  const vals = $(".syllabus-normal")
    .map((_, el) => $(el).html())
    .map((_, s) => s.replaceAll("<br>", "\n"))
    .map((_, s) => decodeHtmlEntities(s))
    .toArray();

  const data = parseRawSyllabusData(keys, vals);
  await pushData(data);
});
