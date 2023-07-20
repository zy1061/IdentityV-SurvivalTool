type hunterDatum = {
  nameJa: string;
  nameEn: string;
  primaryNameJa: string;
  primaryNameEn: string;
  primaryCoolTime: number[];
  secondaryNameJa?: string;
  secondaryNameEn?: string;
  secondaryCoolTime?: number[];
  tertiaryNameJa?: string;
  tertiaryNameEn?: string;
  tertiaryCoolTime?: number[];
};
export const hunterData: readonly hunterDatum[] = [
  {
    nameJa: "復讐者",
    nameEn: "Hell Ember",
    primaryNameJa: "黄パペット\n位置交換",
    primaryNameEn: "Yellow\nPuppet",
    primaryCoolTime: [20],
    secondaryNameJa: "赤パペット\n位置交換",
    secondaryNameEn: "Red\nPuppet",
    secondaryCoolTime: [20],
  },
  {
    nameJa: "道化師",
    nameEn: "Smiley Face",
    primaryNameJa: "ロケット\nダッシュ",
    primaryNameEn: "Rocket Dash",
    primaryCoolTime: [12],
    secondaryNameJa: "ロケット\nダッシュ\n《抵抗》",
    secondaryNameEn: 'Rocket Dash\n"Resistance"',
    secondaryCoolTime: [6],
  },
  {
    nameJa: "断罪狩人",
    nameEn: "Gamekeeper",
    primaryNameJa: "チェーン\nクロウ",
    primaryNameEn: "Chain Hook",
    primaryCoolTime: [14],
    secondaryNameJa: "トラバサミ",
    secondaryNameEn: "Trap",
    secondaryCoolTime: [8, 5],
  },
  {
    nameJa: "リッパー",
    nameEn: "The Ripper",
    primaryNameJa: "寒霧",
    primaryNameEn: "Freezing Fog",
    primaryCoolTime: [20],
  },
  {
    nameJa: "結魂者",
    nameEn: "Soul Weaver",
    primaryNameJa: "糸を吐く",
    primaryNameEn: "Spinning",
    primaryCoolTime: [10],
  },
  {
    nameJa: "芸者",
    nameEn: "Geisha",
    primaryNameJa: "刹那生滅",
    primaryNameEn: "Dash Hit",
    primaryCoolTime: [8],
    secondaryNameJa: "アゲハ\nチャージ",
    secondaryNameEn: "Butterfly\ncharge",
    secondaryCoolTime: [17],
  },
  {
    nameJa: "白黒無常",
    nameEn: "Wu Chang",
    primaryNameJa: "諸行無常",
    primaryNameEn: "Summon",
    primaryCoolTime: [30],
    secondaryNameJa: "吸魂",
    secondaryNameEn: "Siphon\nSoul",
    secondaryCoolTime: [5, 20],
    tertiaryNameJa: "揺魄",
    tertiaryNameEn: "Wavering\nSoul",
    tertiaryCoolTime: [15],
  },
  {
    nameJa: "写真家",
    nameEn: "Photographer",
    primaryNameJa: "写真世界",
    primaryNameEn: "Camera\nWorld",
    primaryCoolTime: [60, 45],
    secondaryNameJa: "痕跡記録",
    secondaryNameEn: "move record",
    secondaryCoolTime: [15],
  },
  {
    nameJa: "狂眼",
    nameEn: "Mad Eyes",
    primaryNameJa: "仕掛け壁\n消失",
    primaryNameEn: "fence\ndisap-\npearance",
    primaryCoolTime: [40],
    secondaryNameJa: "未解読\n暗号機\n付近",
    secondaryNameEn: "nearby\nundecoded\nMachines",
    secondaryCoolTime: [20],
    tertiaryNameJa: "オーバー\nクロック",
    tertiaryNameEn: "Overclock",
    tertiaryCoolTime: [10, 20],
  },
  {
    nameJa: "黄衣の王",
    nameEn: "The Feaster",
    primaryNameJa: "悪夢浸蝕",
    primaryNameEn: "Nightmare\nAttack",
    primaryCoolTime: [5],
    secondaryNameJa: "悪夢凝視",
    secondaryNameEn: "Nightmare\nGaze",
    secondaryCoolTime: [20, 5],
  },
  {
    nameJa: "夢の魔女",
    nameEn: "Dream Witch",
    primaryNameJa: "寄生\n（存在感０）",
    primaryNameEn: "Leech\n(presence 0)",
    primaryCoolTime: [75], // オリジナル信者（寄生信者は含まない）で殴るたびにクールタイムが40%短くなる（例えば残り時間が60秒のときに殴れば残り時間が60×0.6=36秒になる）
    secondaryNameJa: "同化\n（存在感１）",
    secondaryNameEn: "Assimilation\n(presence 1)",
    secondaryCoolTime: [45], // 上に同じ
  },
  {
    nameJa: "泣き虫",
    nameEn: "Axe Boy",
    primaryNameJa: "怨霊消滅",
    primaryNameEn: "Dispel\nSouls",
    primaryCoolTime: [15],
    secondaryNameJa: "怨霊の\n巡回",
    secondaryNameEn: "Resentful\nSouls\nrevolving",
    secondaryCoolTime: [30],
    tertiaryNameJa: "安息の道",
    tertiaryNameEn: "Restful\nRoad",
    tertiaryCoolTime: [18],
  },
  {
    nameJa: "魔トカゲ",
    nameEn: "Evil Reptilian",
    primaryNameJa: "ハンタージャンプ",
    primaryNameEn: "Preying Leap",
    primaryCoolTime: [11],
  },
  {
    nameJa: "血の女王",
    nameEn: "Bloody Queen",
    primaryNameJa: "鏡影",
    primaryNameEn: "Mirror Image",
    primaryCoolTime: [13, 15],
  },
  {
    nameJa: "ガードNo.26",
    nameEn: "Guard 26",
    primaryNameJa: "リモコン爆弾",
    primaryNameEn: "Remote-Controlled Bomb",
    primaryCoolTime: [40, 35],
  },
  {
    nameJa: "｢使徒｣",
    nameEn: '"Disciple"',
    primaryNameJa: "急襲",
    primaryNameEn: "Swoop",
    primaryCoolTime: [10],
    secondaryNameJa: "ランウェイ",
    secondaryNameEn: "Catwalk",
    secondaryCoolTime: [16],
  },
  {
    nameJa: "ヴァイオリニスト",
    nameEn: "Violinist",
    primaryNameJa: "奏鳴曲",
    primaryNameEn: "Sonata",
    primaryCoolTime: [13],
    secondaryNameJa: "狂想曲",
    secondaryNameEn: "Rhapsody",
    secondaryCoolTime: [9, 14],
  },
  {
    nameJa: "彫刻師",
    nameEn: "Sculptor",
    primaryNameJa: "彫像\nチャージ",
    primaryNameEn: "Sculptures\ncharge",
    primaryCoolTime: [16],
    secondaryNameJa: "象形墓場",
    secondaryNameEn: "Hieroglyphic\nGraveyard",
    secondaryCoolTime: [12, 15],
  },
  {
    nameJa: "｢アンデッド｣",
    nameEn: '"Undead"',
    primaryNameJa: "溜め重叩き",
    primaryNameEn: "Charged\nStrike",
    primaryCoolTime: [14],
    secondaryNameJa: "エネルギー\n変換",
    secondaryNameEn: "Energy\nConversion",
    secondaryCoolTime: [35],
  },
  {
    nameJa: "破輪",
    nameEn: "The Breaking Wheel",
    primaryNameJa: "悲観",
    primaryNameEn: "Pessimistic",
    primaryCoolTime: [32],
    secondaryNameJa: "突刺の輪",
    secondaryNameEn: "Wheel of\nImpalement",
    secondaryCoolTime: [6, 14],
    tertiaryNameJa: "道化",
    tertiaryNameEn: "Ridicule",
    tertiaryCoolTime: [30],
  },
  {
    nameJa: "漁師",
    nameEn: "Naiad",
    primaryNameJa: "漁狩",
    primaryNameEn: "Spearfishing",
    primaryCoolTime: [19, 9],
    secondaryNameJa: "驚波",
    secondaryNameEn: "Surging\nTides",
    secondaryCoolTime: [18],
  },
  {
    nameJa: "蝋人形師",
    nameEn: "Wax Artist",
    primaryNameJa: "蝋付着\n操作不能\n時間",
    primaryNameEn: "Wax-coated\nunusable\ntime",
    primaryCoolTime: [15],
    secondaryNameJa: "硬化",
    secondaryNameEn: "Solid Wax",
    secondaryCoolTime: [18],
    tertiaryNameJa: "熔蝋",
    tertiaryNameEn: "Molten Wax",
    tertiaryCoolTime: [25, 25],
  },
  {
    nameJa: "｢悪夢｣",
    nameEn: '"Nightmare"',
    primaryNameJa: "渡鴉",
    primaryNameEn: "Raven",
    primaryCoolTime: [20],
    secondaryNameJa: "凶兆",
    secondaryNameEn: "Bad Omen",
    secondaryCoolTime: [50],
  },
  {
    nameJa: "書記官",
    nameEn: "Clerk",
    primaryNameJa: "審査",
    primaryNameEn: "Inspect",
    primaryCoolTime: [6, 6],
    secondaryNameJa: "記録・無効",
    secondaryNameEn: "Record\n& Invalid",
    secondaryCoolTime: [10, 9],
  },
  {
    nameJa: "隠者",
    nameEn: "Hermit",
    primaryNameJa: "奇跡",
    primaryNameEn: "Miracle",
    primaryCoolTime: [12],
    secondaryNameJa: "感知",
    secondaryNameEn: "Meditation",
    secondaryCoolTime: [60],
    tertiaryNameJa: "寄託",
    tertiaryNameEn: "Attachment",
    tertiaryCoolTime: [40],
  },
  {
    nameJa: "夜の番人",
    nameEn: "Night Watch",
    primaryNameJa: "風域",
    primaryNameEn: "Tempest",
    primaryCoolTime: [13],
    secondaryNameJa: "風行",
    secondaryNameEn: "WindWalk",
    secondaryCoolTime: [5],
  },
  {
    nameJa: "オペラ歌手",
    nameEn: "Opera Singer",
    primaryNameJa: "暗影の\n跳躍",
    primaryNameEn: "Shadow\nLeap",
    primaryCoolTime: [8],
    secondaryNameJa: "影の追想",
    secondaryNameEn: "Shadow\nDance",
    secondaryCoolTime: [17],
    tertiaryNameJa: "影襲",
    tertiaryNameEn: "Shadow-\nstrike",
    tertiaryCoolTime: [15, 5],
  },
];
