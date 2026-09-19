import { DayItinerary, HeroItinerary } from "../types";

const JASMINE_CITY_HOTEL = {
  address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110",
  phone: "+66 2 204-5888",
  mapCode: "",
};

export const thailandItinerary: DayItinerary[] = [
  {
    day: 1,
    date: "2/5",
    dayOfWeek: "五",
    title: "抵達曼谷・自由活動・The Local Bangkok米其林晚餐",
    highlight: "桃園機場出發→抵達素萬那普機場→Jasmine City Hotel入住→Baan Khanitha午餐→自由活動→The Local Bangkok晚餐",
    accommodation: "Jasmine City Hotel Bangkok（連住5晚）",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/16167720/pexels-photo-16167720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["曼谷時間比台灣慢1小時，抵達後記得調整手錶", "Jasmine City Hotel步行2-3分鐘可達BTS Asok站與MRT Sukhumvit站，是往返各景點的絕佳基地", "大型購物中心：Emporium、EmQuartier、Terminal 21 全都位於Sukhumvit/Asok一帶，適合晚間在飯店附近逛街放鬆", "今天不安排景點，讓大家調整時差、輕鬆熟悉飯店周邊環境"],
    attractions: [
      { time: "09:00", title: "桃園機場出發", description: "【出發】搭機飛往曼谷素萬那普機場，飛行時間約3.5小時" },
      { time: "12:30", title: "抵達素萬那普機場", description: "【入境】辦理入境手續、提領行李，可選擇機場快線（Airport Rail Link）或計程車前往市區", address: "999 Moo 1, Nong Prue, Bang Phli District, Samut Prakan 10540" },
      { time: "14:00", title: "Jasmine City Hotel Check-in", description: "【飯店入住】辦理入住、放行李休息，步行2-3分鐘即達BTS Asok站", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "14:45", title: "Baan Khanitha 午餐", purpose: "道地泰式料理初體驗", activities: ["泰式綠咖哩、大頭蝦料理", "涼拌柚子沙拉、椰奶加良薑雞湯", "芒果糯米飯"], description: "【飯店旁老字號】1993年開業的曼谷第一間泰式精緻料理餐廳、同樣位於Sukhumvit 23巷內，步行3-5分鐘可達", story: "Baan Khanitha是1993年開業的曼谷泰式料理老字號，被視為曼谷第一間精緻泰式餐廳。就在飯店所在的Sukhumvit 23巷內，剛下飛機放完行李、還沒完全清醒時，不用跑遠就能吃到道地水準的泰式料理，是抵達第一天最省力的午餐選擇。", mustEat: "泰式綠咖哩、大頭蝦料理、芒果糯米飯", dessert: "芒果糯米飯", phone: "+66 2 128 0906", address: "14 Soi Sukhumvit 23, Khlong Toei Nuea, Wattana, Bangkok 10110" },
      { time: "16:00", title: "自由活動", description: "【輕鬆首日】無安排行程，可在飯店泳池放鬆、或於Sukhumvit巷弄間隨興散步" },
      { time: "18:30", title: "【米其林推薦】The Local Bangkok 晚餐", purpose: "米其林推薦・曼谷家常菜初體驗", activities: ["品嚐米其林指南推薦的傳統泰式家常料理", "老宅改建的用餐空間、感受曼谷道地生活感"], description: "【米其林推薦】獲米其林指南推薦，就在飯店所在的Sukhumvit 23巷內、步行10分鐘可達", story: "The Local Bangkok位於一棟老宅改建的空間裡，主打逐漸消失的傳統泰式家常菜，獲米其林指南推薦。最大的優點是離Jasmine City Hotel非常近，第一晚不用長途奔波，就能吃到道地水準的泰式料理，是抵達當天最順路的晚餐選擇。", mustEat: "傳統泰式家常菜、泰式咖哩、酸辣湯", address: "32/1 Soi Sukhumvit 23, Khlong Toei Nuea, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 2,
    date: "2/6",
    dayOfWeek: "六",
    title: "洽圖洽假日市集・紅樓古著商場・朱拉隆功夜市晚餐",
    highlight: "洽圖洽假日市集（Chatuchak）尋寶→The Red Building紅樓古著商場→班塔通路（朱拉隆功夜市）必吃美食晚餐→Jae Wan仙草甜品",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/35324198/pexels-photo-35324198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["洽圖洽只有週六日開放，攤位超過15,000個，建議先鎖定1-2個想逛的分區（服飾/雜貨/家具），才不會迷路逛不完", "大型購物中心：MBK Center、Siam Paragon、CentralWorld 都在Siam/Chatuchak一帶，若想補足購物時間，午後可直接轉往Siam區", "Or Tor Kor Market就在洽圖洽正對面，逛累了也可以進去吹冷氣、買點熟食當點心，不一定要正式安排時間", "紅樓有冷氣、逛起來比露天市集涼爽，適合安排在下午天氣最熱的時段", "班塔通路（Banthat Thong Road）又稱朱拉隆功夜市，傍晚後才是真正熱鬧的時段，正好接在紅樓逛完之後", "從Chatuchak到班塔通路建議直接搭Grab/計程車（約30-40分鐘，視週六交通狀況），比轉乘MRT+BTS更省事", "Jeh O Chula與龍龍魚蛋粉用餐尖峰都容易排隊，可以兩家分食、多嚐幾樣再吃甜點"],
    attractions: [
      { time: "10:00", title: "從飯店出發", description: "【出發點】搭MRT前往Kamphaeng Phet站（約30-35分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "10:45", title: "洽圖洽假日市集 Chatuchak Weekend Market", purpose: "全球最大假日市集尋寶", activities: ["服飾、家飾雜貨、手作藝品分區挖寶", "泰式小吃、椰子冰淇淋邊逛邊吃", "體力有限可鎖定1-2分區深度逛，其餘走馬看花"], description: "【假日限定】全球最大週末市集之一、超過15,000個攤位、週六日09:00-18:00營業", story: "洽圖洽是曼谷人假日尋寶的第一首選，佔地廣達35英畝，服飾、古董、家飾、寵物、手作藝品應有盡有，逛起來像走迷宮一樣，也因此才特別有尋寶的樂趣。天氣炎熱建議多補充水分，體力抓緊重點分區逛即可，不必求逛完全部。", address: "Kamphaeng Phet Rd, Chatuchak, Bangkok 10900" },
      { time: "14:30", title: "The Red Building 紅樓古著商場", purpose: "室內復古淘寶", activities: ["1、2樓古董雜貨、相機、黑膠唱片挖寶", "樓上復古服飾、配件、玩具，最早可追溯至1950年代", "冷氣開放空間，逛起來比露天市集涼爽舒適"], description: "【室內尋寶】泰文暱稱「ตึกแดง」（紅樓），正式名稱Bangsue Junction、鄰近MRT Kamphaeng Phet站、週六日10:00-21:00營業", story: "紅樓是曼谷古著迷公認的挖寶聖地，一整棟樓從古董收藏到復古服飾應有盡有，且是冷氣開放空間，逛完悶熱的洽圖洽後特別適合來這裡吹冷氣慢慢淘。最上層服飾樓層假日甚至營業到晚上10點，喜歡挖寶的青少年很容易一待就是好幾個小時。", phone: "02 108 5555", address: "511 Bangsue Junction, Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900" },
      { time: "16:30", title: "前往班塔通路（朱拉隆功夜市）", description: "【路上轉移】搭Grab/計程車前往Banthat Thong Road（約30-40分鐘，視週六交通狀況）" },
      { time: "17:15", title: "【必吃】Jeh O Chula 酸辣海鮮河粉", purpose: "排隊名店・酸辣海鮮河粉", activities: ["招牌酸辣海鮮河粉", "海鮮份量十足，適合多人分食", "尖峰時段容易排隊，建議預留等候時間"], description: "【Google Maps】朱拉隆功夜市排隊名店，位於Banthat Thong Road，傍晚後最熱鬧", story: "Jeh O Chula是班塔通路的人氣排隊名店，酸辣海鮮河粉是招牌，適合全家人分食、多嚐幾樣道地滋味。", mustEat: "酸辣海鮮河粉", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "17:45", title: "【米其林推薦・必吃】Longleng Lookchin Pla 龍龍魚蛋粉", purpose: "米其林推薦・Yentafo粉紅酸辣魚蛋麵", activities: ["米其林推薦Yentafo（粉紅酸辣魚蛋麵）", "魚丸、魚餅每日現做", "可與其他夜市美食分食"], description: "【Google Maps】米其林推薦魚蛋粉，位於Banthat Thong Road朱拉隆功夜市美食街", story: "Longleng Lookchin Pla以粉紅酸辣湯底的Yentafo聞名，魚丸與魚餅每日現做，是朱拉隆功夜市值得特別標記的米其林推薦小吃。", mustEat: "Yentafo粉紅酸辣魚蛋麵", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "18:15", title: "【必吃】Aey Seafood Barattong 冬瓜蝦煲", purpose: "在地海鮮・冬瓜蝦煲", activities: ["招牌冬瓜蝦煲", "生猛海鮮快炒", "多人分食更適合一次品嚐多道菜"], description: "【Google Maps】Banthat Thong Road在地海鮮餐廳，招牌冬瓜蝦煲鮮甜濃郁", story: "Aey Seafood Barattong主打生猛海鮮快炒，冬瓜蝦煲鮮甜濃郁，適合和夜市其他美食一起分食。", mustEat: "冬瓜蝦煲、生猛海鮮快炒", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "18:45", title: "【必吃】Mookata 泰式烤肉火鍋", purpose: "泰式烤肉火鍋・平價聚餐", activities: ["邊烤邊吃的泰式烤肉火鍋", "曼谷學生喜愛的平價聚餐選擇", "適合多人一起分食"], description: "【Google Maps】Banthat Thong Road朱拉隆功夜市人氣聚餐選擇", story: "Mookata是曼谷學生常吃的平價聚餐料理，結合烤肉與火鍋，很適合家人一起邊烤邊吃。", mustEat: "泰式烤肉火鍋（Mookata）", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "19:00", title: "【Lisa造訪】Jae Wan 仙草豆花甜品", purpose: "Lisa造訪・順路網紅甜點", activities: ["招牌「火山仙草奶」（Volcano Grass Jelly in Fresh Milk）", "Bua Loy湯圓椰奶甜湯", "customized豆花配料自由選擇"], description: "【Lisa造訪】Blackpink成員Lisa曾造訪的仙草甜品店，就在班塔通路上，晚餐吃完直接走過去，營業至23:30、65-160泰銖親民價", story: "Jae Wan是班塔通路上的仙草豆花甜品店，招牌「火山仙草奶」造型吸睛、口感綿密，因為Blackpink成員Lisa造訪而爆紅。跟Jeh O Chula在同一條路上，吃完晚餐正好順路走過去吃甜點收尾，不需要額外繞路。", mustEat: "火山仙草奶、Bua Loy湯圓椰奶甜湯、豆花", dessert: "火山仙草奶、Bua Loy湯圓椰奶甜湯、豆花", address: "1700 Banthat Thong Rd, Rong Muang, Pathum Wan, Bangkok 10330" },
      { time: "20:00", title: "返回飯店", description: "【返程休息】搭BTS經Siam站轉乘Sukhumvit線返回Asok站（約30分鐘），或直接搭Grab/計程車返回", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 3,
    date: "2/7",
    dayOfWeek: "日",
    title: "臥佛寺・鄭王廟・Asiatique河岸海鮮吃到飽",
    highlight: "主線：臥佛寺Wat Pho→TANA在地午餐→鄭王廟Wat Arun→Kodtalay海鮮吃到飽晚餐；選擇性：ViVi The Coffee Place河景咖啡可依興趣與當天節奏安排",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/30970845/pexels-photo-30970845.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["臥佛寺與鄭王廟皆有穿著規定，需著長褲/過膝裙、不可露肩，建議提早準備薄外套或圍巾備用", "主線與選擇性行程可依家人興趣、體力與當天節奏自由取捨；若想放慢腳步，可省略ViVi The Coffee Place或縮短Asiatique逛街時間，保留Wat Pho、Wat Arun、Kodtalay作主節目", "大型購物中心：ICONSIAM、Siam Paragon、MBK 都在河畔與Siam商圈一帶，若想補購物時間，這天最適合在晚餐後轉往Siam區", "TANA只收現金，記得先備妥泰銖", "Tha Tien碼頭往返鄭王廟的渡輪僅需5-7泰銖/人、5分鐘即達，05:00-19:00營運", "【米其林推薦小吃】Kor Panich芒果糯米飯老店（431-433 Tanao Rd）就在老城區內，離臥佛寺車程約10分鐘，可順道外帶當點心；【米其林一星】Jay Fai蟹肉蛋包飯（327 Maha Chai Rd）也在同一區，但需提前上網訂位或現場排隊2-3小時，時間允許再考慮", "Asiatique免費接駁船從Sathorn（Central）碼頭出發，每25-30分鐘一班、航程約10分鐘，營運時間16:00-23:30", "Kodtalay是露天炭烤海鮮吃到飽、沒有冷氣，建議訂晚一點的場次，太陽下山後用餐比較舒適，可先透過官方Facebook/Instagram私訊「reservation」預約"],
    attractions: [
      { time: "09:30", title: "從飯店出發", description: "【出發點】搭計程車前往Rattanakosin老城區（約30-40分鐘，視交通狀況）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "10:15", title: "臥佛寺 Wat Pho", purpose: "古都信仰巡禮", activities: ["參觀長46公尺、高15公尺的鎏金臥佛", "108個銅缽祈福體驗", "泰式古法按摩發源地，可體驗正宗泰式按摩"], description: "【古都地標】曼谷歷史最悠久的寺廟之一、巨型鎏金臥佛、泰式按摩發源地", story: "臥佛寺是大城王朝時期就已存在的古剎，殿內長達46公尺的鎏金臥佛是曼谷最具代表性的景象之一。這裡同時也是泰式古法按摩的發源地，逛累了正好能在寺內按摩房體驗一場道地的泰式按摩。", address: "2 Sanam Chai Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200" },
      { time: "12:00", title: "TANA 在地午餐", purpose: "泰式潮州家常菜午餐", activities: ["招牌炸鱸魚（Fried Sea Bass）", "經典泰式酸辣蝦湯（Tom Yum）", "老屋改建的用餐空間，感受老城區日常氛圍"], description: "【在地美食】臥佛寺旁窄巷老屋餐廳、泰式潮州家常菜、僅收現金", story: "TANA藏身在臥佛寺附近Maha Rat路一條窄巷裡的老屋店面，主打道地泰式潮州家常菜，招牌炸鱸魚外酥內嫩、酸辣蝦湯湯頭濃郁，是逛完臥佛寺後最順路的在地午餐選擇，用餐氣氛也很有老城區日常生活感。", mustEat: "炸鱸魚、泰式酸辣蝦湯（Tom Yum）", address: "117 Thanon Maha Rat, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200" },
      { time: "13:30", title: "搭渡輪過河", description: "【交通接駁】Tha Tien碼頭搭乘橫渡渡輪前往鄭王廟（5-7泰銖/人，約5分鐘航程）" },
      { time: "13:45", title: "鄭王廟 Wat Arun", purpose: "河畔地標巡禮", activities: ["攀爬瓷片鑲嵌的大尖塔（Prang）", "近距離欣賞貝殼與瓷器拼貼工藝", "河岸邊拍攝以曼谷天際線為背景的經典角度"], description: "【河畔地標】曼谷代表性地標黎明寺、以彩色瓷片鑲嵌的高聳尖塔聞名", story: "鄭王廟又稱黎明寺，以泰皇鄭信命名，最引人注目的是以中國瓷片與貝殼拼貼裝飾的高聳尖塔，在陽光下閃耀著繽紛色澤。爬上尖塔中層平台可俯瞰昭披耶河與對岸的臥佛寺，是曼谷最具代表性的河畔剪影之一。", address: "158 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600" },
      { time: "15:00", title: "ViVi The Coffee Place 河景午茶", purpose: "河畔咖啡歇腳", activities: ["露台座位正對鄭王廟河景", "招牌ViVi特調咖啡與泰式奶茶", "藍莓起司蛋糕等甜點小憩"], description: "【河景咖啡】臥佛寺旁河畔咖啡廳、露台可正對鄭王廟拍照，鄰近MRT Sanam Chai站", story: "ViVi The Coffee Place坐落在昭披耶河畔，露台座位正對著鄭王廟的尖塔，是逛完老城區兩大寺廟後最理想的歇腳處，一邊喝咖啡一邊欣賞河景與來往船隻，特別適合帶著走了大半天的青少年稍作休息。", mustEat: "ViVi特調咖啡、泰式奶茶、藍莓起司蛋糕", dessert: "藍莓起司蛋糕", address: "394/29 Maha Rat Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200" },
      { time: "16:15", title: "前往Sathorn碼頭轉乘接駁船", description: "【路上轉移】搭計程車或昭披耶河觀光船前往Sathorn（Central）碼頭（約20-30分鐘），再轉搭Asiatique免費接駁船前往對岸（約10分鐘航程）" },
      { time: "17:30", title: "Kodtalay The Riverfront 海鮮吃到飽晚餐", purpose: "河岸炭烤海鮮吃到飽", activities: ["生猛炭烤蝦、蟹、魷魚、貝類吃到飽", "泰式風味海鮮鍋物與熱炒小菜", "餐後步行逛Asiatique河岸夜市、摩天輪拍照"], description: "【河岸吃到飽】Asiatique The Riverfront內傳統炭烤海鮮吃到飽、693泰銖含飲料稅金、每日14:00-23:00營業", story: "Kodtalay是Asiatique河岸夜市裡的露天炭烤海鮮吃到飽，蝦蟹魷魚貝類新鮮現烤，搭配開放式河岸用餐氣氛特別熱鬧。結束一整天的古都寺廟巡禮後來到這裡大快朵頤，飯後還能直接在Asiatique夜市逛街、拍摩天輪夜景，是很豐盛的收尾。", mustEat: "炭烤蝦、螃蟹、魷魚、貝類、泰式海鮮鍋", address: "11, 3 Charoen Krung 58 Alley, Yan Nawa, Sathon, Bangkok 10120" }
    ]
  },
  {
    day: 4,
    date: "2/8",
    dayOfWeek: "一",
    title: "龍蓮寺過年參拜・Talad Noi街藝巷弄・Jodd Fairs火山排骨夜市",
    highlight: "主線：Wat Mangkon Kamalawat龍蓮寺過年參拜→耀華力路美食（陳億粿條店＋Nai Mong蚵仔煎）→中華門→Wat Traimit金佛寺→新嘉坡餐室珍多冰→Talad Noi街藝巷弄→965bkk老宅咖啡下午茶→Phitthaya Sathian Bridge百年鐵橋→Jodd Fairs Ratchada夜市；選擇性：Talad Noi可依興趣調整停留時間",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/38337464/pexels-photo-38337464.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["2027年農曆新年是2/6（Day2當天），今天雖已過除夕，但仍在新年期間，龍蓮寺香火依然鼎盛", "今天走法改成從北邊龍蓮寺一路往南走到Talad Noi、最後在Hua Lamphong站搭車返回，全程單一方向不用走回頭路", "本日步行與景點較多，可依家人興趣自由取捨Talad Noi的停留時間，保留宗教參拜與Jodd Fairs夜市作主要行程即可", "Wat Mangkon Kamalawat週一至週五08:00-16:00開放，記得抓時間", "陳億粿條店與Nai Mong蚵仔煎都在龍蓮寺附近，建議兩家分食少量嘗鮮，不用只選一家", "Talad Noi巷弄狹窄曲折，建議穿好走的鞋，跟著地圖或導覽慢慢逛", "965bkk週二公休、營業至19:00，若剛好遇到公休日可改往同巷內La Cabra - Talad Noi喝咖啡", "Jodd Fairs已搬遷至Ratchada現址（近MRT Thailand Cultural Centre站），營業至凌晨1點"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "【出發點】搭MRT前往Wat Mangkon站（約25-30分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "09:45", title: "Wat Mangkon Kamalawat 龍蓮寺", purpose: "過年參拜・曼谷最重要華人廟宇", activities: ["參拜曼谷規模最大、最重要的華人廟宇", "感受農曆新年期間香火鼎盛的氣氛", "祈求新的一年平安順利"], description: "【過年參拜】曼谷最大最重要的華人廟宇、1871年創建、每年農曆新年最熱鬧、鄰近MRT Wat Mangkon站，是今天南下路線的起點", story: "Wat Mangkon Kamalawat（龍蓮寺）是曼谷規模最大、最重要的華人廟宇，1871年由中國僧人創建，後獲拉瑪五世賜名。每年農曆新年期間這裡是曼谷華人社群最重要的參拜地點，香火鼎盛、人潮絡繹不絕，正好搭上今年2/6除夕剛過、新年氣氛依然濃厚的時機前來祈福。從這裡開始一路往南走到Talad Noi，全程不用走回頭路。", address: "423 Charoen Krung Rd, Pom Prap Sattru Phai, Bangkok 10100" },
      { time: "11:00", title: "【午餐推薦】Nai Ek Roll Noodle 陳億粿條店", purpose: "米其林必比登推薦・粿汁豬血湯", activities: ["招牌粿汁（Kuay Jub）胡椒湯頭", "酥炸豬肉、豬血湯配料自由加點", "位於耀華力路巷內，緊鄰龍蓮寺"], description: "【米其林必比登】1960年代路邊攤起家、耀華力路排隊名店，位於442 Yaowarat Soi 9，每日08:00-24:00營業", story: "陳億粿條店以胡椒味濃郁的粿汁湯聞名，搭配酥炸豬肉相當對味，是耀華力路上排隊人潮最多的老字號之一，連續多年獲得米其林必比登推薦。距離龍蓮寺只有幾分鐘路程，參拜後直接順路來吃碗粿汁，跟下一站的Nai Mong蚵仔煎剛好可以分食嘗鮮，不用只選一家。", mustEat: "粿汁（Kuay Jub）、酥炸豬肉、豬血湯", address: "442 Yaowarat Soi 9, Samphanthawong, Bangkok 10100", phone: "02 226 4651" },
      { time: "11:30", title: "【午餐推薦】Nai Mong Fry Oyster นายหมงหอยทอด", purpose: "中國城海鮮小吃・蚵仔煎", activities: ["招牌泰式蚵仔煎（Hoi Tod）", "炸淡菜煎餅與脆皮蚵仔", "緊鄰龍蓮寺，與陳億粿條店分食嘗鮮"], description: "【Google Maps】Nai Mong Fry Oyster（นายหมงหอยทอด），位於539 Phlap Phla Chai Rd、Pom Prap，地址可直接開啟 Google Maps 導航", story: "Nai Mong Fry Oyster是中國城一帶的人氣海鮮小吃店，招牌是泰式蚵仔煎與炸淡菜煎餅，外酥內嫩、適合多人分食。位置緊鄰Wat Mangkon Kamalawat龍蓮寺，跟陳億粿條店同一區，兩家各點一些剛好嚐遍耀華力路的招牌小吃，再一路南下走向金佛寺與Talad Noi。", mustEat: "泰式蚵仔煎（Hoi Tod）、炸淡菜煎餅、脆皮蚵仔", address: "539 Phlap Phla Chai Rd, Pom Prap, Pom Prap Sattru Phai, Bangkok 10100, Thailand", phone: "+66 89 773 3133", mapCode: "PGR6+V7 Bangkok, Thailand" },
      { time: "12:15", title: "中華門 Chinatown Gate（Odeon Circle）", purpose: "唐人街地標牌樓拍照", activities: ["紅色牌樓中式吉祥雕飾拍照", "牌樓上鑲有1,500公克純金打造的泰皇徽章", "位於耀華力路、石龍軍路與三美路交會的圓環中央"], description: "【地標牌樓】1999年為慶祝泰皇蒲美蓬72歲壽誕興建、耀華力路南端入口意象，鄰近Wat Traimit", story: "中華門是曼谷唐人街最具代表性的地標牌樓，坐落於耀華力路、石龍軍路與三美路交會的Odeon圓環正中央，融合泰式與潮州建築工藝。從龍蓮寺、耀華力路一路吃喝著往南走，經過圓環正好順路拍照，再往南走幾步就是金佛寺。", address: "322 Tri Mit Rd, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "12:30", title: "Wat Traimit 金佛寺", purpose: "過年參拜・世界最大純金佛像", activities: ["瞻仰高5.5公尺、重5.5噸的純金佛像", "了解佛像曾被石膏偽裝數百年的傳奇故事", "四樓博物館認識潮州移民歷史"], description: "【過年參拜】世界最大純金坐佛、鄰近Hua Lamphong站、每日08:00-17:00開放", story: "Wat Traimit最著名的是那尊高5.5公尺、重達5.5噸的純金佛像，曾被厚厚的石膏包覆數百年，直到1950年代搬運時意外摔裂才發現真身是純金打造。地理位置就在中華門南側、Talad Noi街區的入口，一路往南走剛好順路參拜。", address: "661 Charoen Krung Rd, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "13:00", title: "新嘉坡餐室 珍多椰奶冰", purpose: "泰式珍多冰始創老店", activities: ["招牌珍多椰奶冰（Lod Chong Singapore）", "60多年老店、泰式珍多冰發源地", "就在金佛寺往Talad Noi的路上，順路清涼一下"], description: "【始創老店】開業60多年的泰式珍多冰始祖店，位於Charoen Krung Rd、鄰近Wat Traimit，每日10:00-22:00（週四公休）", story: "新嘉坡餐室因早年開在新嘉坡戲院旁而得名，是泰式珍多冰（Lod Chong Singapore）的發源老店，招牌把班蘭粉條、椰奶、椰糖漿與碎冰一起端上桌，清涼消暑。地理位置就在金佛寺通往Talad Noi巷弄的路上，参拜後順路吃碗珍多冰再繼續往南走。", mustEat: "珍多椰奶冰（Lod Chong Singapore）", dessert: "珍多椰奶冰", phone: "02 221 5794", address: "680 Charoen Krung Rd, Samphanthawong, Bangkok 10100" },
      { time: "13:30", title: "San Chao Rong Kueak 廟與壁畫巷口", purpose: "老城街頭藝術巡禮起點", activities: ["參拜巷口小廟、感受華人社區信仰日常", "Soi San Chao Rong Kueak巷口繽紛街藝壁畫", "Squid Brand魚露工廠外牆巨型彩繪壁畫"], description: "【散步起點】Talad Noi街藝散步的起點、巷口小廟與最密集的壁畫群聚集於此", story: "San Chao Rong Kueak是整條壁畫巷弄的起點，小廟香火不斷，巷口牆面就是整個Talad Noi最密集的塗鴉聚集地，魚露工廠外牆的巨幅彩繪更是遊客必拍的地標，從這裡開始一路散步探索最順。", address: "Soi San Chao Rong Kueak, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "14:00", title: "So Heng Tai 百年老宅", purpose: "沿路特色小憩", activities: ["參觀四合院式百年中式古宅天井", "老宅庭院內罕見的潛水學校（樓下泳池）", "喝杯飲品在天井中稍作歇息"], description: "【沿路特色】1800年代潮州商人古宅、四合院天井建築、樓下意外藏著一間潛水學校", story: "So Heng Tai是Talad Noi保存最完整的中式四合院古宅之一，天井灑落的自然光線相當好拍。最特別的是宅邸地下室的蓄水池，如今被改成一間小小的潛水學校，古宅配潛水課程的反差感常讓遊客會心一笑，也是散步途中最適合喝杯飲料歇腳的地方。", address: "282 Soi Wanit 2, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "14:30", title: "Hong Sieng Kong 河畔拍照收尾", purpose: "河岸拍照收尾", activities: ["河畔老屋建築拍照打卡", "眺望昭披耶河對岸風景", "散步巷弄的最後一站，接著轉往同巷內的下午茶咖啡廳"], description: "【河畔收尾】河岸邊修復的老屋建築群、Talad Noi巷弄散步的終點", story: "Hong Sieng Kong是整條Talad Noi散步路線的尾聲，河岸邊的老屋建築保留了原始的紅磚牆與木窗，最適合作為壁畫巷弄探索後的收尾拍照點。原本可從旁邊碼頭搭船前往對岸的Lhong 1919，但該園區已永久歇業，改往同一條巷子裡的965bkk喝下午茶即可，不用再搭船過河。", address: "Soi Wanit 2, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "14:50", title: "965bkk 老宅咖啡下午茶", purpose: "老宅咖啡廳・下午茶歇腳", activities: ["200年老宅改建的複合式咖啡空間，挑高天井拍照很好看", "手沖咖啡、招牌特調飲品", "輕食蛋糕搭配咖啡，全家歇腳的午後休息點"], description: "【網美打卡】Talad Noi近年最熱門的老宅咖啡廳，就在Soi Wanit 2巷內、從Hong Sieng Kong步行即達，週二公休、營業至19:00", story: "965bkk由一棟200年歷史的中式老宅改建而成，結合咖啡、輕食與選物空間，是近年Talad Noi討論度最高的咖啡廳之一。因為對岸的Lhong 1919已永久歇業不再開放，改在同一條巷弄裡的965bkk喝咖啡歇腳，省去搭船過河的時間，行程動線也更順。", mustEat: "手沖咖啡、招牌特調、輕食蛋糕", dessert: "當日供應蛋糕與甜點", address: "965 Soi Wanit 2, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "15:45", title: "Phitthaya Sathian Bridge 百年鐵橋", purpose: "維多利亞哥德式鐵橋收尾", activities: ["維多利亞哥德式風格百年鋼構鐵橋拍照", "橫跨拍鵬功嘉森運河（Khlong Padung Krung Kasem）", "今天南下路線的最終點，步行即達MRT Hua Lamphong站"], description: "【百年地標】拉瑪六世時期建成的哥德式鋼構鐵橋、橫跨Charoen Krung Rd上的運河，是Talad Noi巷弄最南端、鄰近Hua Lamphong站", story: "Phitthaya Sathian Bridge是曼谷少見的維多利亞哥德式鋼構鐵橋，由義大利建築師設計、拉瑪六世時期建成，橫跨拍鵬功嘉森運河、劃分Talad Noi與Bang Rak兩區。作為今天一路從龍蓮寺往南走的最後一站，在這裡拍完照就能直接步行到MRT Hua Lamphong站搭車返回飯店，全程只走一個方向、不用走回頭路。", address: "Charoen Krung Rd, Talat Noi, Samphanthawong, Bangkok 10100" },
      { time: "16:00", title: "返回飯店", description: "【返程休息】步行至MRT Hua Lamphong站，搭藍線直接返回Sukhumvit站（無需轉乘），回飯店稍作休息整理", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "17:30", title: "前往Jodd Fairs Ratchada", description: "【路上轉移】搭MRT藍線前往Thailand Cultural Centre站（同一條線無需轉乘，Exit 4），步行約2-3分鐘即達夜市入口" },
      { time: "18:00", title: "Jodd Fairs Ratchada 火山排骨夜市", purpose: "夜市美食體驗・全家分食", activities: ["Leng Zabb「火山排骨」堆疊如山的辣燉排骨奇景", "現烤蝦、烤魷魚與烤貝類海鮮", "泰式烤豬肉串（Moo Ping）與烤雞翅", "泰式船麵、打拋飯等小份量主食", "椰子冰淇淋、芒果糯米飯與泰式奶茶甜點", "文創攤位選購曼谷夜市限定商品"], description: "【夜市美食】火山排骨、炭烤海鮮、Moo Ping烤豬肉串與泰式甜點，鄰近MRT Thailand Cultural Centre站、營業至凌晨01:00", story: "「Joddi」正是曼谷人氣夜市Jodd Fairs的暱稱，原Rama 9分店已於2025年中搬遷至Ratchada現址，規模更大、動線也更清楚好逛。除了招牌火山排骨，建議全家採取少量多樣的吃法：先分食烤蝦、烤魷魚與Moo Ping，再補一份泰式主食，最後用椰子冰淇淋或芒果糯米飯收尾。", mustEat: "火山排骨、炭烤蝦與魷魚、Moo Ping烤豬肉串、泰式船麵", dessert: "椰子冰淇淋、芒果糯米飯、泰式奶茶", address: "129 Ratchadaphisek Rd, Din Daeng, Bangkok 10400" }
    ]
  },
  {
    day: 5,
    date: "2/9",
    dayOfWeek: "二",
    title: "輕鬆購物日・Mahanakhon SkyWalk夕陽",
    highlight: "主線：Chuan Kitchen海南雞飯午餐→CentralWorld／Siam商圈輕鬆購物→King Power Mahanakhon SkyWalk高空玻璃夕陽；晚餐先不預排，依當下狀況自由安排",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/31026303/pexels-photo-31026303.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["今天不趕早，上午先在飯店悠閒吃完早餐再出發即可", "大型購物中心：CentralWorld、Siam Paragon、Siam Center、MBK、Gaysorn 全都集中在Siam與Chit Lom一帶，這天就是正式購物日", "今天BTS動線：Asok（出發）→Chit Lom（午餐・購物）→Chong Nonsi（SkyWalk）→Asok（返回飯店，同線直達不用轉乘）", "晚餐先不預排，看完夕陽後可依當下體力與胃口，在Chong Nonsi／Silom周邊自由選擇，避免硬排一家順不順路", "Mahanakhon SkyWalk建議提前上網訂票，14:30就先進場慢慢逛，才能抓準18:15左右的日落時刻到戶外平台", "日落場人潮多、常常會客滿，建議出發前1-2週就先在官網或Klook/KKday訂好日落場門票，避免現場排隊或買不到", "玻璃透明地板體驗需換穿專用鞋套，且不能攜帶手機/相機上去（工作人員會協助拍照）"],
    attractions: [
      { time: "10:30", title: "從飯店出發", description: "【出發點】搭BTS Sukhumvit線直達Chit Lom站（無需轉乘，約15-20分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "11:00", title: "【米其林推薦】Chuan Kitchen 海南雞飯午餐", purpose: "米其林推薦・新加坡風味午餐", activities: ["招牌新加坡式海南雞飯，雞肉軟嫩多汁", "三種特調沾醬自由搭配", "CentralWorld 6樓Atrium Zone，用餐環境舒適"], description: "【米其林推薦】連續入選米其林指南推薦餐廳的新加坡風味海南雞飯、CentralWorld 6樓，每日10:00-21:00營業", story: "Chuan Kitchen主打新加坡街頭美食風味的海南雞飯，雞肉滑嫩、米飯吸飽雞油香氣，連續多年入選米其林指南推薦名單，就在CentralWorld商場內用餐環境舒適，很適合作為今天悠閒的第一餐，吃飽直接開始逛街。", mustEat: "新加坡式海南雞飯、三種特調沾醬", address: "4/1-4/2 Thanon Phra Ram 1, CentralWorld 6F Atrium Zone, Pathum Wan, Bangkok 10330" },
      { time: "12:15", title: "CentralWorld／Siam商圈自由購物", purpose: "輕鬆購物", activities: ["CentralWorld逛街、伴手禮採購", "經BTS空中步道步行至Siam Paragon／Siam Center", "咖啡廳小憩、按摩放鬆"], description: "【輕鬆步調】CentralWorld與Siam商圈由BTS空中步道相連、不趕行程慢慢逛", story: "今天特別放慢腳步，不安排緊湊景點，CentralWorld與Siam商圈之間有空中步道相連，全家人可以依自己的步調隨興閒逛，累了就找間咖啡廳坐坐。" },
      { time: "14:00", title: "前往Mahanakhon SkyWalk", description: "【路上轉移】搭BTS經Siam站轉乘Silom線至Chong Nonsi站，出站即達King Power Mahanakhon大樓（約20-25分鐘）" },
      { time: "14:30", title: "King Power Mahanakhon SkyWalk", purpose: "高空玻璃夕陽體驗", activities: ["74樓室內觀景台360度俯瞰曼谷市區", "78樓「Glass Tray」離地310公尺玻璃透明地板體驗", "戶外Skywalk露天平台欣賞日落與夜景交替（2月曼谷日落約18:15）"], description: "【曼谷最高地標】314公尺泰國第二高樓、78樓玻璃透明地板、每日10:00-19:00開放（末班入場18:30），停留時間拉長才能等到18:15左右的日落", story: "King Power Mahanakhon是曼谷天際線最醒目的地標之一，以「像素化」的階梯狀外觀聞名。78樓的玻璃透明地板懸空310公尺，直接踩在腳下的曼谷市景相當震撼。停留時間拉長，先逛74樓室內觀景台、體驗玻璃地板，再抓準18:15左右的日落時刻到戶外Skywalk平台，同時欣賞日落金光與華燈初上的雙重景色，是全家人拍照留念的絕佳制高點。", address: "114 Narathiwas Road, Silom, Bang Rak, Bangkok 10500" },
      { time: "18:45", title: "晚餐自由安排", description: "【自由用餐】看完夕陽後晚餐先不預排，可在Chong Nonsi／Silom周邊依當下狀況與胃口自由選擇" },
      { time: "20:30", title: "返回飯店", description: "【返程休息】搭BTS經Siam站轉乘Sukhumvit線直達Asok站（約20-25分鐘），步行回飯店", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 6,
    date: "2/10",
    dayOfWeek: "三",
    title: "曼谷賦歸",
    highlight: "自由活動→飯店退房→素萬那普機場→返程",
    accommodation: "-",
    image: "https://images.pexels.com/photos/3693017/pexels-photo-3693017.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["國際航班建議提早3小時抵達機場辦理登機", "機場免稅店有泰式零食、乳膠製品、皇家牌保養品等伴手禮"],
    attractions: [
      { time: "09:00", title: "自由活動", description: "【輕鬆賦歸】不安排景點，可到附近咖啡廳簡單用餐、最後散步或小憩" },
      { time: "11:00", title: "飯店退房", description: "【退房】辦理退房手續，行李可先寄放櫃檯", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "13:00", title: "前往機場", description: "【機場接駁】搭機場快線（Airport Rail Link）或計程車前往素萬那普機場" },
      { time: "14:30", title: "抵達素萬那普機場", description: "【機場入境】辦理登機、退稅手續，機場免稅店最後採購", address: "999 Moo 1, Nong Prue, Bang Phli District, Samut Prakan 10540" },
      { time: "17:00+", title: "起飛賦歸", description: "【飛行返鄉】預留足夠時間通關與登機，返回溫暖的家" }
    ]
  }
];

export const thailandHero: HeroItinerary = {
  title: "2027年泰國曼谷・家庭輕旅行",
  image: "https://images.pexels.com/photos/30970845/pexels-photo-30970845.jpeg?auto=compress&cs=tinysrgb&w=2070",
  price: "NT$ 32,900 起",
  days: "6天5夜",
  date: "2027年2月5日(五) - 2月10日(三)",
  description: "6天5夜曼谷家庭輕旅行，洽圖洽假日市集、班塔通路朱拉隆功夜市必吃美食、臥佛寺與鄭王廟古都巡禮、龍蓮寺過年參拜、Talad Noi街藝巷弄與Lhong 1919河岸老屋，加上Jodd Fairs火山排骨與Mahanakhon SkyWalk高空夕陽美景，步調輕鬆不趕行程。",
};
