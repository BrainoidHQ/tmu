import { createCheerioRouter } from "crawlee";

import { getLink, LINK_PATTERN_1, SYLLABUS_PATH } from "./lib";
import { parseRawSyllabusData } from "./syllabus";

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ $, enqueueLinks }) => {
  const urls = $("a")
    .map((_, el) => $(el).attr("onclick"))
    .get()
    .map(getLink(LINK_PATTERN_1, SYLLABUS_PATH))
    .filter(Boolean) as string[];

  await enqueueLinks({
    urls,
    label: "syllabus",
  });
});

router.addHandler("syllabus", async ({ log, request, $, pushData }) => {
  log.info(`processing: ${request.loadedUrl}`);

  const keys = $(".syllabus-head")
    .map((_, el) => $(el).text())
    .toArray();
  const vals = $(".syllabus-normal")
    .map((_, el) => $(el).text())
    .toArray();

  const data = parseRawSyllabusData(keys, vals);
  await pushData(data);
});
