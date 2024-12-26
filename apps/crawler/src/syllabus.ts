export interface 基本情報 {
  科目種別: string | null;
  授業番号: string | null;
  学期: string | null;
  曜日: string | null;
  科目: string | null;
  時限: string | null;
  担当教員: string | null;
  単位数: string | null;
  科目ナンバリング: string | null;
}

export interface 担当教員 {
  教員: string | null;
  所属: string | null;
}

export interface 詳細情報 {
  授業方針・テーマ: string | null;
  習得できる知識・能力や授業の目的・到達目標: string | null;
  授業計画・内容授業方法: string | null;
  授業外学習: string | null;
  テキスト・参考書等: string | null;
  成績評価方法: string | null;
  質問受付方法: string | null;
  特記事項: string | null;
  備考: string | null;
}

export interface RawSyllabusData {
  基本情報: 基本情報;
  担当教員: 担当教員[];
  詳細情報: 詳細情報;
}

const NULL_基本情報: 基本情報 = {
  科目種別: null,
  授業番号: null,
  学期: null,
  曜日: null,
  科目: null,
  時限: null,
  担当教員: null,
  単位数: null,
  科目ナンバリング: null,
};

const NULL_担当教員: 担当教員 = {
  教員: null,
  所属: null,
};

const NULL_詳細情報: 詳細情報 = {
  授業方針・テーマ: null,
  習得できる知識・能力や授業の目的・到達目標: null,
  授業計画・内容授業方法: null,
  授業外学習: null,
  テキスト・参考書等: null,
  成績評価方法: null,
  質問受付方法: null,
  特記事項: null,
  備考: null,
};

const isKeyOf基本情報 = (key: string): key is keyof 基本情報 =>
  Object.keys(NULL_基本情報).includes(key);

const isKeyOf担当教員 = (key: string): key is keyof 担当教員 =>
  Object.keys(NULL_担当教員).includes(key);

const isKeyOf詳細情報 = (key: string): key is keyof 詳細情報 =>
  Object.keys(NULL_詳細情報).includes(key);

const isKeyOfSyllabus = (key: string): boolean =>
  isKeyOf基本情報(key) || isKeyOf担当教員(key) || isKeyOf詳細情報(key);

const normalizeKey = (key: string | undefined): string => {
  if (key === undefined) {
    return "";
  }

  const targets = ["※", "("];
  for (const target of targets) {
    const index = key.indexOf(target);
    if (index !== -1) {
      return key.slice(0, index);
    }
  }
  return key;
};

const normalizeVal = (val: string | undefined | null): string | null => {
  if (val === undefined || val === null || val.trim() === "") {
    return null;
  }
  return val.trim();
};

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
