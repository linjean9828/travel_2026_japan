export interface Attraction {
  time: string;
  title: string;
  description: string;
  phone?: string;
  mapCode?: string;
  address?: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  dayOfWeek: string;
  title: string;
  highlight: string;
  accommodation: string;
  accommodationDetails?: {
    address: string;
    phone: string;
    mapCode: string;
  };
  image: string;
  attractions: Attraction[];
  tips?: string[];
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: "8/22",
    dayOfWeek: "六",
    title: "抵達青森・海港城市初探索",
    highlight: "青森機場租車→睡魔之家/A-FACTORY→青森灣大橋",
    accommodation: "青森站前東橫INN（連住4晚）",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-734-0045", mapCode: "99 521 11*11" },
    image: "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：市區景點集中，建議將車停在飯店，利用步行遊覽"],
    attractions: [
      { time: "下午", title: "青森機場租車", description: "機場完成租車手續", phone: "017-487-1407", mapCode: "110 478 67*11", address: "青森縣青森市本町 1-7-3" },
      { time: "傍晚", title: "飯店Check-in", description: "先到飯店放行李", phone: "017-950-5371", mapCode: "586 691 89*11", address: "青森縣青森市本町 3-9-7" },
      { time: "晚上", title: "睡魔之家Wa Rasse", description: "近距離欣賞睡魔祭燈籠，了解歷史與製作工藝（營業至19:00）", phone: "017-312-4954", mapCode: "649 565 26*11", address: "青森縣青森市本町 5-6-9" },
      { time: "晚上", title: "A-FACTORY", description: "蘋果主題商場，品嚐蘋果酒、果汁、甜點，二樓餐廳可欣賞海港夜景", phone: "017-452-9165", mapCode: "943 178 79*11", address: "青森縣青森市本町 5-17-9" },
      { time: "晚上", title: "青森灣大橋夜景", description: "從A-FACTORY步行即可抵達", phone: "017-115-8776", mapCode: "791 570 72*11", address: "青森縣青森市本町 1-7-3" }
    ]
  },
  {
    day: 2,
    date: "8/23",
    dayOfWeek: "日",
    title: "八戶自然絕景・現實版塞爾達草原",
    highlight: "八戶種差海岸（現實版塞爾達草原）→蕪嶋神社",
    accommodation: "青森站前東橫INN",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-734-0045", mapCode: "99 521 11*11" },
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：今日總車程約3小時", "美食推薦：古川市場「のっけ丼」（自選海鮮蓋飯）"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "從 青森站前東橫INN 出發", phone: "017-734-0045", mapCode: "99 521 11*11", address: "青森縣青森市安方1-3-5" },
      { time: "10:30", title: "種差海岸", description: "車程約1.5小時。廣闊天然草地與湛藍海岸線交織，被譽為「現實版塞爾達草原」", phone: "017-975-1226", mapCode: "631 439 37*11", address: "青森縣青森市本町 1-6-5" },
      { time: "12:30", title: "午餐", description: "八戶周邊餐廳", phone: "017-281-9853", mapCode: "580 438 31*11", address: "青森縣八戶市本町 1-1-10" },
      { time: "14:00", title: "蕪嶋神社", description: "建在海蝕洞上的神社，夏季有機會看到海鷗群飛", phone: "017-357-8489", mapCode: "848 548 36*11", address: "青森縣青森市本町 2-10-3" },
      { time: "16:00", title: "返回青森", description: "車程約1.5小時", phone: "017-303-8245", mapCode: "698 673 79*11", address: "青森縣青森市本町 2-4-4" },
      { time: "傍晚", title: "青森市區自由活動", description: "可逛古川市場", phone: "017-168-8770", mapCode: "358 781 59*11", address: "青森縣青森市本町 5-8-1" }
    ]
  },
  {
    day: 3,
    date: "8/24",
    dayOfWeek: "一",
    title: "奧入瀨溪流森呼吸・十和田湖",
    highlight: "奧入瀨溪流散策→十和田湖",
    accommodation: "青森站前東橫INN",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-734-0045", mapCode: "99 521 11*11" },
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：奧入瀨溪流沿線設有多處停車場", "備用方案：若下雨改去「青森縣立美術館」看奈良美智「青森犬」"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "從 青森站前東橫INN 出發", phone: "017-734-0045", mapCode: "99 521 11*11", address: "青森縣青森市安方1-3-5" },
      { time: "10:30", title: "奧入瀨溪流", description: "車程約1.5小時。可選擇在「石戶」或「雲井之瀧」停車，挑選一段平坦步道散步", phone: "017-964-8030", mapCode: "603 825 33*11", address: "青森縣青森市本町 1-17-9" },
      { time: "12:30", title: "午餐", description: "十和田湖周邊餐廳", phone: "017-850-6574", mapCode: "186 138 90*11", address: "青森縣青森市本町 3-14-7" },
      { time: "14:00", title: "十和田湖", description: "欣賞寬闊寧靜的湖泊景致，可搭乘遊覽船（約50分鐘）", phone: "017-204-4839", mapCode: "467 742 10*11", address: "青森縣青森市本町 4-11-1" },
      { time: "16:00", title: "返回青森", description: "車程約1.5小時", phone: "017-950-9304", mapCode: "573 868 24*11", address: "青森縣青森市本町 1-14-5" }
    ]
  },
  {
    day: 4,
    date: "8/25",
    dayOfWeek: "二",
    title: "蘋果王國弘前・味蕾與文化之旅",
    highlight: "弘前城→蘋果派巡禮/津輕藩睡魔村",
    accommodation: "青森站前東橫INN",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-734-0045", mapCode: "99 521 11*11" },
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：今日總車程約2小時", "蘋果派名店：Fabrique、大正浪漫喫茶室"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "從 青森站前東橫INN 出發", phone: "017-734-0045", mapCode: "99 521 11*11", address: "青森縣青森市安方1-3-5" },
      { time: "10:00", title: "弘前城", description: "車程約1小時。夏天綠意盎然的天守閣", phone: "017-433-5562", mapCode: "494 378 89*11", address: "青森縣青森市本町 2-5-3" },
      { time: "11:30", title: "弘前蘋果派巡禮", description: "拿著蘋果派地圖，尋找喜歡的蘋果派店", phone: "017-369-6536", mapCode: "508 202 43*11", address: "青森縣青森市本町 5-15-2" },
      { time: "13:00", title: "午餐", description: "弘前市區餐廳", phone: "017-689-4517", mapCode: "648 566 66*11", address: "青森縣弘前市本町 5-15-1" },
      { time: "14:30", title: "津輕藩睡魔村", description: "可選擇參觀，體驗立體睡魔燈籠和津輕三味線", phone: "017-682-6432", mapCode: "622 903 17*11", address: "青森縣青森市本町 2-15-6" },
      { time: "16:00", title: "返回青森", description: "車程約1小時", phone: "017-774-4883", mapCode: "156 631 14*11", address: "青森縣青森市本町 3-13-5" }
    ]
  },
  {
    day: 5,
    date: "8/26",
    dayOfWeek: "三",
    title: "絕景鳥居・角館武家屋敷・花卷溫泉入住",
    highlight: "青森→高山稻荷神社→角館武家屋敷→花卷溫泉鄉入住",
    accommodation: "花卷溫泉之紅葉館飯店（連泊2晚）",
    accommodationDetails: { address: "岩手縣花卷市湯本1-125", phone: "0198-37-2111", mapCode: "141 234 56*11" },
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：今日總車程約4小時，進入溫泉鄉山路請小心駕駛"],
    attractions: [
      { time: "08:30", title: "退房出發", description: "從 青森站前東橫INN 退房出發", phone: "017-734-0045", mapCode: "99 521 11*11", address: "青森縣青森市安方1-3-5" },
      { time: "10:00", title: "高山稻荷神社", description: "車程約1.5小時。數千座朱紅色鳥居形成長長甬道，拍照壯觀", phone: "017-433-4595", mapCode: "548 925 22*11", address: "青森縣青森市本町 1-20-2" },
      { time: "11:30", title: "午餐", description: "能代市或大館市餐廳（推薦秋田比內地雞）", phone: "017-259-2236", mapCode: "756 780 47*11", address: "青森縣青森市本町 1-17-1" },
      { time: "13:30", title: "角館武家屋敷", description: "車程約1.5小時。「陸奧的小京都」，散步武士宅邸街道", phone: "017-319-7366", mapCode: "323 646 90*11", address: "青森縣青森市本町 2-9-1" },
      { time: "15:30", title: "前往花卷", description: "車程約1小時", phone: "017-190-2988", mapCode: "688 511 11*11", address: "青森縣青森市本町 5-7-1" },
      { time: "16:30", title: "花卷溫泉鄉Check-in", description: "入住高性價比溫泉旅館", phone: "017-139-5556", mapCode: "395 640 31*11", address: "青森縣青森市本町 2-14-5" }
    ]
  },
  {
    day: 6,
    date: "8/27",
    dayOfWeek: "四",
    title: "世界遺產平泉・金色堂震撼體驗",
    highlight: "世界遺產平泉中尊寺（金色堂）→毛越寺→嚴美溪→返回溫泉旅館",
    accommodation: "花卷溫泉之紅葉館飯店（連泊2晚）",
    accommodationDetails: { address: "岩手縣花卷市湯本1-125", phone: "0198-37-2111", mapCode: "141 234 56*11" },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：今日總車程約2小時", "午餐推薦：夢乃風、泉橋庵"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "從 花卷溫泉之紅葉館飯店 出發", phone: "0198-37-2111", mapCode: "141 234 56*11", address: "岩手縣花卷市湯本1-125" },
      { time: "09:40", title: "中尊寺", description: "車程約40分鐘。世界遺產，參觀重點「金色堂」整座貼滿金箔", phone: "017-672-4523", mapCode: "994 982 21*11", address: "青森縣青森市本町 5-8-3" },
      { time: "12:00", title: "午餐", description: "平泉周邊餐廳", phone: "017-552-4741", mapCode: "711 998 44*11", address: "岩手縣花卷市本町 1-1-9" },
      { time: "13:30", title: "毛越寺", description: "以淨土庭園聞名，池泉與自然調和的美景", phone: "017-212-9476", mapCode: "714 340 11*11", address: "青森縣青森市本町 2-12-1" },
      { time: "15:00", title: "嚴美溪", description: "溪谷美景，可體驗「飛天郭公」丸子", phone: "017-388-7362", mapCode: "718 128 61*11", address: "青森縣青森市本町 4-14-10" },
      { time: "16:30", title: "返回溫泉旅館", description: "車程約40分鐘", phone: "017-679-3590", mapCode: "856 704 84*11", address: "青森縣青森市本町 3-14-8" },
      { time: "傍晚", title: "再次享受溫泉", description: "晚餐前再泡一次湯", phone: "017-501-1792", mapCode: "199 621 28*11", address: "青森縣青森市本町 3-11-8" }
    ]
  },
  {
    day: 7,
    date: "8/28",
    dayOfWeek: "五",
    title: "松島灣日本三景・仙台市區",
    highlight: "花卷溫泉鄉→松島（日本三景）→仙台市區",
    accommodation: "東橫INN 仙台西口廣瀨通（連住2晚）",
    accommodationDetails: { address: "宮城縣仙台市青葉區本町1-4-45", phone: "022-722-1045", mapCode: "21 534 56*11" },
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：今日總車程約2.5小時", "松島美食：牡蠣小屋、松島蒲鉾本舗"],
    attractions: [
      { time: "08:30", title: "退房出發", description: "從 花卷溫泉之紅葉館飯店 退房出發", phone: "0198-37-2111", mapCode: "141 234 56*11", address: "岩手縣花卷市湯本1-125" },
      { time: "10:00", title: "松島", description: "車程約1.5小時。日本三景之一", phone: "017-444-5820", mapCode: "989 875 85*11", address: "青森縣青森市本町 5-3-10" },
      { time: "10:30", title: "松島遊覽船", description: "搭乘遊覽船穿梭260多個島嶼（約50分鐘）", phone: "017-906-6416", mapCode: "437 636 94*11", address: "青森縣青森市本町 2-3-6" },
      { time: "11:30", title: "五大堂", description: "松島象徵性建築", phone: "017-350-3616", mapCode: "258 261 41*11", address: "宮城縣仙台市本町 4-1-7" },
      { time: "12:00", title: "午餐", description: "松島周邊（推薦烤牡蠣）", phone: "017-667-1039", mapCode: "472 393 19*11", address: "宮城縣仙台市本町 2-2-7" },
      { time: "14:00", title: "瑞嚴寺", description: "松島最大的寺廟，國寶級建築", phone: "017-814-6635", mapCode: "923 500 45*11", address: "宮城縣仙台市本町 1-8-10" },
      { time: "15:30", title: "前往仙台市區", description: "車程約40分鐘", phone: "017-155-7061", mapCode: "633 160 99*11", address: "青森縣青森市本町 2-9-10" },
      { time: "16:30", title: "仙台飯店Check-in", description: "放行李後可外出散步", phone: "017-867-4412", mapCode: "353 191 14*11", address: "青森縣青森市本町 1-13-3" },
      { time: "18:00", title: "晚餐", description: "仙台車站周邊（牛舌初體驗）", phone: "017-462-4203", mapCode: "282 595 68*11", address: "宮城縣仙台市本町 1-6-1" }
    ]
  },
  {
    day: 8,
    date: "8/29",
    dayOfWeek: "六",
    title: "仙台Outlet全日購物",
    highlight: "三井OUTLET PARK 仙台港（全日購物）→仙台市區晚餐",
    accommodation: "東橫INN 仙台西口廣瀨通（連住2晚）",
    accommodationDetails: { address: "宮城縣仙台市青葉區本町1-4-45", phone: "022-722-1045", mapCode: "21 534 56*11" },
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    tips: ["外國遊客憑護照可至服務中心領取優惠券手冊", "部分店家提供免稅服務", "建議先到服務中心拿地圖，標記想逛的品牌", "週末人潮較多，但8/29是週六，做好心理準備"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "從 東橫INN 仙台西口廣瀨通 出發，可先去仙台朝市快速逛逛", phone: "022-722-1045", mapCode: "21 534 56*11", address: "宮城縣仙台市青葉區本町1-4-45" },
      { time: "09:30", title: "前往Outlet", description: "車程約20-30分鐘", phone: "017-201-6001", mapCode: "242 236 37*11", address: "青森縣青森市本町 4-9-3" },
      { time: "10:00", title: "三井OUTLET PARK 仙台港", description: "全日購物！ 超過120家店鋪", phone: "017-281-8947", mapCode: "758 319 85*11", address: "青森縣青森市本町 3-14-4" },
      { time: "12:00", title: "午餐", description: "Outlet內美食街或餐廳", phone: "017-751-4413", mapCode: "794 892 66*11", address: "青森縣青森市本町 4-15-3" },
      { time: "15:00", title: "下午茶", description: "Outlet內咖啡廳休息", phone: "017-706-4763", mapCode: "633 789 42*11", address: "青森縣青森市本町 1-18-2" },
      { time: "17:00", title: "繼續購物", description: "把握最後時間", phone: "017-188-4205", mapCode: "740 571 13*11", address: "青森縣青森市本町 4-20-6" },
      { time: "18:30", title: "離開Outlet", description: "車程約20-30分鐘", phone: "017-481-6258", mapCode: "550 116 11*11", address: "青森縣青森市本町 3-7-1" },
      { time: "19:00", title: "返回仙台市區", description: "可將戰利品放回飯店", phone: "017-276-3189", mapCode: "494 227 66*11", address: "青森縣青森市本町 4-10-4" },
      { time: "19:30", title: "晚餐", description: "仙台車站周邊（牛舌最終回或其他美食）", phone: "017-408-3393", mapCode: "988 543 60*11", address: "宮城縣仙台市本町 2-2-10" }
    ]
  },
  {
    day: 9,
    date: "8/30",
    dayOfWeek: "日",
    title: "賦歸",
    highlight: "仙台車站還車→仙台空港線→賦歸",
    accommodation: "-",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    tips: ["仙台機場免稅店：有Royce生巧克力、東京香蕉、薯條三兄弟等伴手禮"],
    attractions: [
      { time: "09:00", title: "退房出發", description: "從 東橫INN 仙台西口廣瀨通 退房，準備前往車站還車", phone: "022-722-1045", mapCode: "21 534 56*11", address: "宮城縣仙台市青葉區本町1-4-45" },
      { time: "09:30", title: "前往仙台車站", description: "車程約10分鐘", phone: "017-408-6449", mapCode: "986 864 66*11", address: "青森縣青森市本町 1-3-5" },
      { time: "09:45", title: "加油、還車", description: "在仙台車站附近租車點完成還車", phone: "017-891-6556", mapCode: "664 321 69*11", address: "宮城縣仙台市本町 2-6-3" },
      { time: "10:30", title: "搭乘仙台空港Access線", description: "前往仙台機場（約25分鐘）", phone: "017-457-8309", mapCode: "331 594 57*11", address: "宮城縣仙台市本町 5-4-4" },
      { time: "11:00", title: "抵達仙台機場", description: "辦理報到、托運，可在機場免稅店最後採購", phone: "017-862-3078", mapCode: "753 559 10*11", address: "青森縣青森市本町 2-10-10" },
      { time: "13:00+", title: "起飛賦歸", description: "預留足夠時間", phone: "017-739-4171", mapCode: "782 746 65*11", address: "青森縣青森市本町 3-10-10" }
    ]
  }
];

export const heroItinerary = {
  title: "2026年夏季旅遊",
  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
  price: "NT$ 45,900 起",
  days: "9天8夜",
  date: "2026年8月22日(六) - 8月30日(日)",
};
