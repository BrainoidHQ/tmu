import {
  基本情報,
  担当教員,
  詳細情報,
  RawSyllabusData,
} from "@brainoid-tmu/domain/model/syllabus";
import {
  NULL_基本情報,
  NULL_詳細情報,
  isKeyOf基本情報,
  isKeyOf詳細情報,
  isKeyOfSyllabus,
  normalizeKey,
  normalizeVal,
} from "@brainoid-tmu/domain/service/syllabus";

const checkKey = (key: string) => {
  if (!isKeyOfSyllabus(normalizeKey(key))) {
    throw new Error(`Invalid key: ${key}`);
  }
};

const checkKeys = (keys: string[]) => {
  for (const key of keys) {
    if (key === "") {
      continue;
    }
    checkKey(key);
  }
};

const parse基本情報 = (keys: string[], vals: string[]): 基本情報 => {
  const data = { ...NULL_基本情報 };
  for (let i = 0; i < Object.keys(NULL_基本情報).length; i++) {
    const key = normalizeKey(keys[i]);
    if (isKeyOf基本情報(key)) {
      data[key] = normalizeVal(vals[i]);
    }
  }
  return data;
};

const parse担当教員 = (vals: string[]): 担当教員[] => {
  const data: 担当教員[] = [];
  const targets = vals.slice(
    Object.keys(NULL_基本情報).length + 1,
    -Object.keys(NULL_詳細情報).length,
  );
  for (let i = 0; i < targets.length; i += 2) {
    data.push({
      教員: normalizeVal(targets[i]),
      所属: normalizeVal(targets[i + 1]),
    });
  }
  return data;
};

const parse詳細情報 = (keys: string[], vals: string[]): 詳細情報 => {
  const data = { ...NULL_詳細情報 };
  for (let i = 0; i < Object.keys(NULL_詳細情報).length; i++) {
    const key = normalizeKey(keys[keys.length - 1 - i]);
    if (isKeyOf詳細情報(key)) {
      data[key] = normalizeVal(vals[vals.length - 1 - i]);
    }
  }
  return data;
};

export const parseRawSyllabusData = (
  keys: string[],
  vals: string[],
): RawSyllabusData => {
  checkKeys(keys);
  const 基本情報 = parse基本情報(keys, vals);
  const 担当教員 = parse担当教員(vals);
  const 詳細情報 = parse詳細情報(keys, vals);
  return { 基本情報, 担当教員, 詳細情報 };
};
