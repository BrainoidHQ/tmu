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
