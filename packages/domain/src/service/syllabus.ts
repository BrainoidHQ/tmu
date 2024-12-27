import { 基本情報, 担当教員, 詳細情報 } from "../model/syllabus";

export const NULL_基本情報: 基本情報 = {
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

export const NULL_担当教員: 担当教員 = {
  教員: null,
  所属: null,
};

export const NULL_詳細情報: 詳細情報 = {
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

export const isKeyOf基本情報 = (key: string): key is keyof 基本情報 =>
  Object.keys(NULL_基本情報).includes(key);

export const isKeyOf担当教員 = (key: string): key is keyof 担当教員 =>
  Object.keys(NULL_担当教員).includes(key);

export const isKeyOf詳細情報 = (key: string): key is keyof 詳細情報 =>
  Object.keys(NULL_詳細情報).includes(key);

export const isKeyOfSyllabus = (key: string): boolean =>
  isKeyOf基本情報(key) || isKeyOf担当教員(key) || isKeyOf詳細情報(key);

export const normalizeKey = (key: string | undefined): string => {
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

export const normalizeVal = (val: string | undefined | null): string | null => {
  if (val === undefined || val === null || val.trim() === "") {
    return null;
  }
  return val.trim();
};
