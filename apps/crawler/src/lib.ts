import path from "path";

export const decodeHtmlEntities = (encoded: string): string =>
  encoded.replace(/&#(x?)([0-9a-fA-F]+);/g, (_, hex, code: string) =>
    String.fromCodePoint(parseInt(code, hex ? 16 : 10)),
  );

export const BASE_URL = "http://www.kyouikujouhou.eas.tmu.ac.jp/";

export const SYLLABUS_PATH = "syllabus/2024/";
export const SYLLABUS_START_URLS = [
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_1.html"),
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_2.html"),
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_3.html"),
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_4.html"),
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_5.html"),
  path.join(BASE_URL, SYLLABUS_PATH, "YobiIchiran_0_9.html"),
];

export const LINK_PATTERN_0 = "');";
export const LINK_PATTERN_1 = "return OpenInfo('";

export const getLink =
  (pattern: string, base: string) =>
  (target: string): string | null => {
    if (target.startsWith(pattern)) {
      return path.join(
        base,
        target.slice(pattern.length, -LINK_PATTERN_0.length),
      );
    }
    return null;
  };
