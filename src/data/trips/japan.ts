import { DayItinerary, HeroItinerary } from "../types";

export const japanItinerary: DayItinerary[] = [
  {
    day: 1,
    date: "8/22",
    dayOfWeek: "六",
    title: "抵達青森・灣邊夜景",
    highlight: "青森機場租車→晚餐函太郎→青森灣大橋夜景",
    accommodation: "青森站前東橫INN（連住3晚）",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-735-1045", mapCode: "99 306 629*85" },
    image: "https://images.unsplash.com/photo-NEGNNz67l28?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：市區景點集中，建議將車停在飯店，利用步行遊覽"],
    attractions: [
      { time: "下午", title: "青森機場租車", description: "【租車手續】機場完成租車手續、領取車鑰匙", phone: "017-739-2000", mapCode: "99 248 242*76", address: "青森縣青森市大谷字小谷1-5" },
      { time: "14:30", title: "飯店Check-in", description: "【飯店入住】抵達青森站前東橫INN放行李、領鑰匙", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "18:30", title: "晚餐・函太郎", purpose: "在地迴轉壽司", description: "【美食】青森知名迴轉壽司連鎖店「函太郎」、新鮮海鮮握壽司", address: "青森縣青森市" },
      { time: "20:00", title: "青森灣大橋夜景", purpose: "夜景攝影", activities: ["棧橋夜景拍攝", "藍白燈光拱橋倒影構圖", "漫步海港步道收尾"], description: "【攝影打卡】藍白燈光的跨灣拱橋、絕美夜景倒影", story: "這座跨越青森灣的拱橋全長約655公尺，入夜後藍白燈光倒映海面，被當地人暱稱為「青森的夜冠」。最佳拍攝點就在海港棧橋，不需走遠，舉起手機就是明信片等級的構圖。", mapCode: "99 306 629*85", address: "青森縣青森市安方1丁目" }
    ]
  },
  {
    day: 2,
    date: "8/23",
    dayOfWeek: "日",
    title: "睡魔之家祭典體驗・A-FACTORY蘋果市集",
    highlight: "睡魔之家WA RASSE（睡魔祭文化）→A-FACTORY蘋果市集購物→古川市場のっけ丼午餐→麦藁帽子下午茶→晚餐煮干拉麵",
    accommodation: "青森站前東橫INN",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-735-1045", mapCode: "99 306 629*85" },
    image: "https://images.unsplash.com/photo-F0yjJuDXBcg?q=80&w=1200&auto=format&fit=crop",
    tips: ["睡魔之家WA RASSE與A-FACTORY皆在青森站徒步圈內，本日行程以步行為主，無需長途開車", "睡魔之家建議上午前往，人潮較少", "A-FACTORY可順道採購蘋果伴手禮，行李較多建議傍晚再返回飯店"],
    attractions: [
      { time: "09:30", title: "從飯店出發", description: "【出發點】早餐後從 青森站前東橫INN 步行前往睡魔之家WA RASSE（約5分鐘）", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "10:00", title: "睡魔之家 WA RASSE", purpose: "文化體驗・節慶認識", activities: ["近距離繞行4噸重巨型睡魔燈籠", "觀看睡魔製作工藝影片與展示", "體驗跳人（ハネト）舞蹈動作"], description: "【展示欣賞】近距離欣賞4座巨型睡魔祭燈籠・學習製作工藝・感受東北三大祭典現場震撼（營業至19:00）", story: "青森睡魔祭每年8月吸引逾300萬人，名稱「睡魔（ねぶた）」源自古老的「眠流し」儀式——人們相信將紙燈籠放流河中，能驅走夏日的睡意與懶惰。館內4座巨型燈籠重達4噸，製作師傅耗時半年才能完成一座。就算沒碰上祭典期間，這裡也能感受到滿滿的現場氣息。", phone: "017-752-1311", mapCode: "99 306 629*77", address: "青森縣青森市安方1-1-1" },
      { time: "11:30", title: "A-FACTORY", purpose: "在地美食體驗", activities: ["試飲青森蘋果氣泡酒CRAFT CIDRE", "購買蘋果甜點與果醬伴手禮", "海港周邊散步拍照"], description: "【美食體驗】蘋果主題商場試飲蘋果酒/果汁/甜點、伴手禮採購", story: "青森縣年產蘋果佔全日本六成，A-FACTORY就是這個「蘋果王國」的驕傲展示台。館內的「CRAFT CIDRE」用當地蘋果現釀蘋果氣泡酒，含酒精濃度只有3%，甜而不膩，連不喝酒的人都大喊好喝。", phone: "017-752-1890", address: "青森縣青森市柳川1-4-2" },
      { time: "13:00", title: "午餐・古川市場のっけ丼", description: "【美食體驗】青森魚菜センター（古川市場）自選海鮮のっけ丼、新鮮握壽司", phone: "017-777-7583", address: "青森縣青森市古川1-11-16" },
      { time: "15:00", title: "麦藁帽子", purpose: "咖啡廳下午茶", description: "【下午茶】青森知名老牌喫茶店、招牌鬆餅、懷舊復古裝潢", story: "麦藁帽子是青森在地相當有人氣的喫茶店，以厚實鬆軟的招牌鬆餅聞名，用餐時段經常需要排隊等候。店內走復古喫茶風格，很適合走累一段路後坐下來慢慢享用甜點、喘口氣。" },
      { time: "17:00", title: "返回飯店", description: "【休息恢復】返回青森站前東橫INN、整理戰利品稍作休息", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "19:00", title: "晚餐・煮干拉麵", purpose: "在地美食體驗", description: "【美食】青森知名煮干拉麵、鮮甜魚粉高湯" }
    ]
  },
  {
    day: 3,
    date: "8/24",
    dayOfWeek: "一",
    title: "奧入瀨溪流秘境",
    highlight: "自備午餐→奧入瀨溪流深林散策→晚餐藏壽司",
    accommodation: "青森站前東橫INN",
    accommodationDetails: { address: "青森縣青森市安方1-3-5", phone: "017-735-1045", mapCode: "99 306 629*85" },
    image: "https://images.unsplash.com/photo-HtKosDpL5to?q=80&w=1200&auto=format&fit=crop",
    tips: ["中午自備午餐，可在山區或奧入瀨溪流沿線的休憩區享用", "奧入瀨溪流沿線設有多處停車場，方便沿途停靠拍照"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "【出發點】早餐後從 青森站前東橫INN 出發前往奧入瀨溪流", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "12:00", title: "自備午餐", purpose: "野餐休息", description: "【自備午餐】山區自備輕食午餐、稍作休息" },
      { time: "13:00", title: "奧入瀨溪流", purpose: "自然健行・攝影", activities: ["選2〜3個停車點沿岸邊步道散策", "使用慢速快門拍攝絲絹感流水", "阿修羅の流れ・雲井の滝等名景拍攝"], description: "【溪谷散策】14公里深林溪谷、沿線停點欣賞絲般流水", story: "全長14公里的溪流是十和田湖唯一的出水口，因地勢平緩水流終年不斷。溪邊巨石與苔蘚共生，相機光圈開小一點就能拍出如絲般的流水效果。宮澤賢治曾在此寫下詩句，稱這裡是「神的花園」。", phone: "0176-74-2355", mapCode: "482 843 210*55", address: "青森縣十和田市奥瀬惣辺山1" },
      { time: "16:30", title: "返回飯店", description: "【休息恢復】返回青森站前東橫INN休息", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "19:00", title: "晚餐・藏壽司", purpose: "迴轉壽司", description: "【美食】連鎖迴轉壽司「藏壽司」、種類豐富、CP值高" }
    ]
  },
  {
    day: 4,
    date: "8/25",
    dayOfWeek: "二",
    title: "十和田市現代美術館",
    highlight: "青森出發→十和田市現代美術館（草間彌生・奈良美智）→返回青森Richmond Hotel→晚餐TORANO-IE",
    accommodation: "Richmond Hotel青森",
    accommodationDetails: { address: "青森縣青森市長島1-6-6", phone: "017-732-7655", mapCode: "" },
    image: "https://images.unsplash.com/photo-tJgglPFw4e4?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：青森市區→十和田市約1.5〜2小時車程，當晚需再開回青森市區過夜"],
    attractions: [
      { time: "10:00", title: "從飯店出發", description: "【出發點】早餐後從 青森站前東橫INN 出發前往十和田市", phone: "017-735-1045", address: "青森縣青森市安方1-3-5" },
      { time: "12:30", title: "午餐・司蒙古烤肉", description: "【地方美食】十和田市「司」蒙古烤肉、鐵板炭燒風味" },
      { time: "14:00", title: "十和田市現代美術館", purpose: "當代藝術欣賞", activities: ["Ron Mueck巨型嬰兒雕塑拍攝", "草間彌生南瓜裝置互動", "官廳街通戶外裝置藝術巡禮"], description: "【當代藝術】草間彌生・奈良美智等國際藝術家戶外裝置與室內展覽（14:00抵達・開館至17:00，可悠閒參觀3小時）", story: "美術館由西澤立衛設計，建築本身就是一件藝術品——白色方盒群落散佈在十和田市中心「官廳街通」兩側，室內外藝術作品渾然一體。Ron Mueck的巨型嬰兒雕塑、草間彌生的南瓜裝置與奈良美智的作品都在此常設展出，是全日本評價最高的地方型現代美術館之一。", phone: "0176-20-1127", mapCode: "482 741 704*74", address: "青森縣十和田市西二番町10-9" },
      { time: "17:30", title: "返回青森市區", description: "【路上轉移】十和田市現代美術館→青森市區（約1.5〜2小時）" },
      { time: "19:30", title: "Richmond Hotel青森 Check-in", description: "【飯店入住】辦理入住、放行李", phone: "017-732-7655", address: "青森縣青森市長島1-6-6" },
      { time: "20:00", title: "晚餐・TORANO-IE", purpose: "Poke Soup Ramen", description: "【美食】Poke Soup Ramen 專門店「TORANO-IE（虎の家）」" }
    ],
    lunchRecommendations: [
      {
        name: "司バラ焼き大衆食堂",
        cuisine: "十和田バラ焼き（牛バラ肉・玉ねぎ鐵板燒）",
        tabelogScore: 3.48,
        phone: "080-6059-8015",
        address: "青森縣十和田市稲生町15-41",
        priceRange: "¥1,000〜¥1,999",
        hours: "週二〜六 11:00〜14:30 / 17:30〜22:30，週日 11:00〜15:30（週一公休）",
        recommendation: "B-1大賽出名的十和田名物專賣店。牛五花肉與洋蔥用特製醬汁鐵板燒，沾生蛋食用，奧入瀨溪流回程途中在市區用餐的最佳選擇。"
      },
      {
        name: "御食事処 神田川",
        cuisine: "十和田バラ焼き・桃豚丼・煮干しラーメン",
        tabelogScore: 3.09,
        phone: "0176-75-2515",
        address: "青森縣十和田市奥瀬休屋16",
        priceRange: "¥1,000〜¥1,999",
        hours: "08:30〜17:00",
        recommendation: "十和田湖畔休屋遊船碼頭旁，可一邊逛湖一邊直接步行用餐。十和田バラ焼き、比内地雞料理、「桃豚」丼三種名物一店吃齊，营業時間長且方便停車。"
      }
    ]
  },
  {
    day: 5,
    date: "8/26",
    dayOfWeek: "三",
    title: "弘前採蘋果・花卷溫泉街散策",
    highlight: "Richmond Hotel青森退房→弘前採蘋果體驗→花卷溫泉Check-in→溫泉街漫步",
    accommodation: "花卷溫泉之紅葉館飯店（連泊2晚）",
    accommodationDetails: { address: "岩手縣花卷市湯本1-125", phone: "0198-37-2111", mapCode: "141 234 56*11" },
    image: "https://images.unsplash.com/photo-6nvVHHBWhu4?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：青森→弘前約40分鐘、弘前→花卷約2.5〜3小時，本日駕車時間較長", "採蘋果建議事先確認果樹園開放時段與是否需預約", "花卷溫泉街有足湯可免費泡、伴手禮店集中在湯本通"],
    attractions: [
      { time: "09:00", title: "退房出發", description: "【出發點】早餐後從 Richmond Hotel青森 退房出發前往弘前", phone: "017-732-7655", address: "青森縣青森市長島1-6-6" },
      { time: "09:40", title: "弘前採蘋果", purpose: "產地採果體驗", activities: ["果園導覽了解蘋果品種", "親手採摘新鮮蘋果", "現場品嚐、選購蘋果伴手禮"], description: "【產地體驗】弘前蘋果園採摘新鮮蘋果、現場品嚐" },
      { time: "12:00", title: "午餐・壽司郎", purpose: "迴轉壽司", description: "【美食】連鎖迴轉壽司「壽司郎」、新鮮壽司輕鬆用餐" },
      { time: "13:00", title: "出發花卷溫泉", description: "【路上轉移】驅車前往花卷溫泉（約2.5〜3小時）" },
      { time: "16:00", title: "花卷溫泉 Check-in", description: "【溫泉入住】抵達紅葉館飯店辦理入住・放行李泡湯", phone: "0198-37-2111", address: "岩手縣花卷市湯本1-125" },
      { time: "16:30", title: "花卷溫泉街散策", purpose: "溫泉文化體驗・購物", activities: ["湯本通免費足湯泡腳休息", "宮澤賢治主題甜點店選購伴手禮", "溫泉饅頭試吃比較各家口味"], description: "【溫泉街漫步】湯本通伴手禮巡禮・免費足湯體驗・宮澤賢治相關商品・溫泉饅頭試吃", story: "花卷溫泉街沿著豐沢川兩岸延伸，一側是飯店旅館、一側是溫泉老鋪與土產商店。街上有免費足湯供遊客歇腳，賢治甜點店販售以《銀河鐵道之夜》為主題的餅乾與饅頭。傍晚光線柔和，非常適合慢慢逛、慢慢買。", phone: "0198-37-2111", mapCode: "141 234 56*11", address: "岩手縣花卷市湯本" },
      { time: "18:00", title: "返回飯店泡湯", description: "【溫泉享受】返回紅葉館飯店泡溫泉・準備晚餐・享受連泊第一夜", phone: "0198-37-2111", address: "岩手縣花卷市湯本1-125" }
    ]
  },
  {
    day: 6,
    date: "8/27",
    dayOfWeek: "四",
    title: "花卷東高校・大谷翔平田んぼアート・花卷神社",
    highlight: "花卷東高等學校（大谷翔平母校）→奧州市大谷翔平稻田藝術→傍晚花卷神社",
    accommodation: "花卷溫泉之紅葉館飯店（連泊2晚）",
    accommodationDetails: { address: "岩手縣花卷市湯本1-125", phone: "0198-37-2111", mapCode: "141 234 56*11" },
    image: "https://images.unsplash.com/photo-985DmR-rX4A?q=80&w=1200&auto=format&fit=crop",
    tips: ["花卷東高校是現役學校，參觀請保持安靜、僅在校園外圍拍照，勿打擾學生上課", "建議上午前往，避開學生放學時段人潮", "稻田藝術最佳觀賞期為6月下旬〜8月下旬，記得爬上物見櫓展望台俯瞰全景"],
    attractions: [
      { time: "09:30", title: "從飯店出發", description: "【出發點】早餐後從 花卷溫泉之紅葉館飯店 出發前往花卷東高等學校（約20分鐘）", phone: "0198-37-2111", address: "岩手縣花卷市湯本1-125" },
      { time: "10:00", title: "花卷東高等學校", purpose: "朝聖景點・棒球聖地", activities: ["校門口周邊拍照留念", "棒球場外圍參觀大谷翔平母校", "校內福利社若開放可選購紀念商品"], description: "【朝聖景點】大谷翔平・菊池雄星母校、日本高校棒球聖地之一", story: "花卷東高等学校是大谷翔平、菊池雄星等多位職棒好手的母校，因大谷翔平在此展開「二刀流」傳奇而聲名大噪，校門口與棒球場周邊經常吸引球迷造訪拍照留念。由於是現役高中，參觀時請保持安靜、尊重學生上課。", phone: "0198-41-1135", address: "岩手縣花卷市松園町55-1" },
      { time: "12:00", title: "午餐・橫濱拉麵", description: "【美食】橫濱家系拉麵、濃厚豚骨醬油湯底（花卷→奧州市途中用餐）" },
      { time: "13:30", title: "跡呂井田んぼアート（大谷翔平稻田藝術）", purpose: "打卡景點・稻田藝術", activities: ["物見櫓展望台俯瞰整片稻田圖案", "大谷翔平主題稻田藝術拍照", "周邊農產小舖選購伴手禮"], description: "【稻田藝術】奧州市在地農民手工種植・以大谷翔平為主題的巨型稻田畫", story: "奧州市水沢地區的農民每年用不同顏色的稻苗在田間拼出巨型圖案，2026年主題延續「野球しようぜ！」以大谷翔平為主角。爬上會場旁的物見櫓展望台，才能看清整片稻田拼出的完整畫面，是當地農民與居民合力完成的季節限定藝術。", address: "岩手縣奧州市水沢佐倉河字北田地內" },
      { time: "15:30", title: "前往花卷神社", description: "【路上轉移】驅車返回花卷市區前往花卷神社（約40分鐘）" },
      { time: "16:30", title: "花卷神社", purpose: "傍晚參拜・高台夕景", activities: ["石階步道緩步登上神社本殿", "高台眺望花卷市區與早池峰山方向", "御朱印/御守選購（若社務所開放）"], description: "【傍晚參拜】JR花卷站步行5分鐘可達的高台神社、能眺望花卷市區與早池峰山", story: "花巻神社當地人暱稱「花巻の愛宕さん」，座落於俯瞰花卷市區的高台上，傍晚時分階梯步道與林木間光線柔和，是在地人散步參拜的日常景點，也能遠眺早池峰山方向的山景。", address: "岩手縣花卷市愛宕町384-1" },
      { time: "17:30", title: "返回溫泉旅館", description: "【返程休息】返回花卷溫泉紅葉館飯店・泡湯準備晚餐", phone: "0198-37-2111", address: "岩手縣花卷市湯本1-125" }
    ]
  },
  {
    day: 7,
    date: "8/28",
    dayOfWeek: "五",
    title: "仙台抵達・善治郎牛舌午餐",
    highlight: "花卷溫泉退房→直達仙台→善治郎牛舌午餐→仙台Check-in→晚餐鳥貴族",
    accommodation: "東橫INN 仙台西口廣瀨通（連住2晚）",
    accommodationDetails: { address: "宮城縣仙台市青葉區本町1-4-45", phone: "022-721-1045", mapCode: "21 534 56*11" },
    image: "https://images.unsplash.com/photo-P0f7XeeNiZ4?q=80&w=1200&auto=format&fit=crop",
    tips: ["自駕提醒：花卷→仙台約1.5〜2小時車程"],
    attractions: [
      { time: "09:00", title: "退房出發", description: "【出發點】早餐後從 花卷溫泉之紅葉館飯店 退房出發前往仙台", phone: "0198-37-2111", address: "岩手縣花卷市湯本1-125" },
      { time: "12:00", title: "午餐・善治郎牛舌", purpose: "仙台名物美食", description: "【仙台名物】牛たん善治郎、厚切炭燒牛舌・麥飯・牛尾湯", story: "仙台牛舌文化起源於1948年，當時為了利用美軍丟棄的牛舌而誕生。善治郎的職人手工選肉、鹽漬熟成後炭火燒烤，厚切、炭燒是招牌吃法。套餐必配的麥飯和牛尾湯是靈魂所在，牛尾湯用牛骨熬超過8小時，鮮甜到最後一口都不剩。", phone: "022-723-5087", address: "宮城縣仙台市青葉區中央1-1-1 仙台站3樓" },
      { time: "14:00", title: "仙台飯店Check-in", description: "【飯店入住】抵達東橫INN仙台西口廣瀨通・放行李・輕裝探索市區", phone: "022-721-1045", address: "宮城縣仙台市青葉區本町1-4-45" },
      { time: "19:00", title: "晚餐・鳥貴族", purpose: "居酒屋串燒", description: "【美食】連鎖居酒屋「鳥貴族」、串燒與小菜、CP值高" }
    ]
  },
  {
    day: 8,
    date: "8/29",
    dayOfWeek: "六",
    title: "三井Outlet海邊購物・仙台美食謝幕",
    highlight: "三井OUTLET PARK 仙台港（全日購物）→利久牛舌午餐→一蘭拉麵晚餐",
    accommodation: "東橫INN 仙台西口廣瀨通（連住2晚）",
    accommodationDetails: { address: "宮城縣仙台市青葉區本町1-4-45", phone: "022-721-1045", mapCode: "21 534 56*11" },
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    tips: ["外國遊客憑護照可至服務中心領取優惠券手冊", "部分店家提供免稅服務", "建議先到服務中心拿地圖，標記想逛的品牌", "週末人潮較多，但8/29是週六，做好心理準備"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "【出發點】早餐後從 東橫INN 仙台西口廣瀨通 出發、先逛仙台朝市", phone: "022-721-1045", address: "宮城縣仙台市青葉區本町1-4-45" },
      { time: "09:30", title: "前往Outlet", description: "【路上轉移】駕車前往仙台港（約20-30分鐘）、為購物做好準備" },
      { time: "10:00", title: "三井OUTLET PARK 仙台港", description: "【全日購物】120+家品牌、外國遊客護照優惠券、海邊購物體驗", story: "仙台港Outlet緊鄰太平洋，是日本少數能邊購物邊看海的Outlet。外國遊客憑護照可在服務中心領取專屬優惠冊，部分品牌折扣再疊加，等於在已打折的商品上又多扣一輪，很多人說這裡比市區免稅店還劃算。", phone: "022-355-8800", mapCode: "21 689 575*24", address: "宮城縣仙台市宮城野區中野3-7-2" },
      { time: "12:00", title: "午餐・利久牛舌", description: "【美食】Outlet內「利久」牛舌專門店、不中斷購物時間" },
      { time: "15:00", title: "下午茶", description: "【休息充電】Outlet內咖啡廳小憩、恢復體力回血" },
      { time: "17:00", title: "繼續購物", description: "【最後衝刺】把握Outlet營業時間最後時段、掃尾採購紀念品" },
      { time: "18:30", title: "離開Outlet", description: "【返城準備】驅車返仙台市區（約20-30分鐘）、準備晚餐" },
      { time: "19:00", title: "返回仙台市區", description: "【物品整理】將戰利品放回飯店房間、輕裝出門用餐" },
      { time: "19:30", title: "晚餐・一蘭拉麵", description: "【美食謝幕】仙台車站周邊「一蘭」豚骨拉麵、最後一餐" }
    ]
  },
  {
    day: 9,
    date: "8/30",
    dayOfWeek: "日",
    title: "返程・仙台空港起飛",
    highlight: "仙台車站還車→仙台空港線→賦歸",
    accommodation: "-",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    tips: ["仙台機場免稅店：有Royce生巧克力、東京香蕉、薯條三兄弟等伴手禮"],
    attractions: [
      { time: "09:00", title: "退房出發", description: "【出發點】含早餐、打包行李從 東橫INN 仙台西口廣瀨通 退房", phone: "022-721-1045", address: "宮城縣仙台市青葉區本町1-4-45" },
      { time: "09:30", title: "前往仙台車站", description: "【路上轉移】駕車前往仙台車站（約10分鐘）、準備還車" },
      { time: "09:45", title: "加油、還車", description: "【租車歸還】在仙台車站附近租車點加油、完成還車手續", mapCode: "21 616 391*73", address: "宮城縣仙台市青葉區中央4-9-8（仙台站西口附近）" },
      { time: "10:30", title: "搭乘仙台空港Access線", description: "【機場通勤】搭乘鐵路前往仙台機場（約25分鐘）、享受電車風景", address: "宮城縣仙台市青葉區中央1-1-1（仙台站）" },
      { time: "11:00", title: "抵達仙台機場", description: "【機場入境】辦理報到/託運、可在機場免稅店最後採購紀念品", phone: "022-382-0080", mapCode: "21 202 180*04", address: "宮城縣名取市下增田字南原" },
      { time: "13:00+", title: "起飛賦歸", description: "【飛行返鄉】預留足夠時間辦理登機、享受飛行餐點、返回溫暖的家", phone: "022-382-0080", mapCode: "21 202 180*04", address: "宮城縣名取市下增田字南原" }
    ]
  }
];

export const japanHero: HeroItinerary = {
  title: "2026年夏季旅遊・日本東北巡禮",
  image: "https://images.unsplash.com/photo-tJgglPFw4e4?q=80&w=2070&auto=format&fit=crop",
  price: "NT$ 45,900 起",
  days: "9天8夜",
  date: "2026年8月22日(六) - 8月30日(日)",
  description: "9天8夜深度體驗八甲田火山秘境、奧入瀨溪流、世界遺產平泉，享受花卷溫泉與東北在地美食。",
};
