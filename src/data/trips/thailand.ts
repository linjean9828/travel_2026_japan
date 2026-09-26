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
    title: "抵達曼谷・按摩放鬆・自由活動",
    highlight: "桃園機場出發→抵達素萬那普機場→Jasmine City Hotel入住→按摩放鬆→自由活動（午、晚餐已於機上用餐）",
    accommodation: "Jasmine City Hotel Bangkok（連住5晚）",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/16167720/pexels-photo-16167720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["曼谷時間比台灣慢1小時，抵達後記得調整手錶", "Jasmine City Hotel步行2-3分鐘可達BTS Asok站與MRT Sukhumvit站，是往返各景點的絕佳基地", "大型購物中心：Emporium、EmQuartier、Terminal 21 全都位於Sukhumvit/Asok一帶，適合晚間在飯店附近逛街放鬆", "今天不安排景點，讓大家調整時差、輕鬆熟悉飯店周邊環境", "飯店附近按摩店：May Massage（24, 12-13 Soi Sukhumvit 23，與飯店同巷，步行1-2分鐘，09:00-23:00）、Health Land Asoke（55/5 Sukhumvit 21 Rd，連鎖品牌品質穩定、鄰近BTS Asok與MRT Sukhumvit站，步行約10分鐘，09:00-23:00），下飛機後舒緩一下很適合", "其他按摩選擇：Ayothaya Massage（33/1 Sukhumvit 19，步行約10-12分鐘，08:00-22:00）、Ayothaya@18（3/3 Sukhumvit 18，同品牌分店，步行約12-15分鐘，08:00-00:00）、Dao Massage（近BTS Asok站、Sukhumvit路上，步行約10分鐘），都在飯店周邊步行可達範圍"],
    attractions: [
      { time: "09:00", title: "桃園機場出發", description: "【出發】搭機飛往曼谷素萬那普機場，飛行時間約3.5小時" },
      { time: "12:30", title: "抵達素萬那普機場", description: "【入境】辦理入境手續、提領行李，可選擇機場快線（Airport Rail Link）或計程車前往市區", address: "999 Moo 1, Nong Prue, Bang Phli District, Samut Prakan 10540" },
      { time: "14:00", title: "Jasmine City Hotel Check-in", description: "【飯店入住】辦理入住、放行李休息，步行2-3分鐘即達BTS Asok站", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "14:30", title: "按摩放鬆", purpose: "飯店周邊按摩推薦", activities: ["May Massage：Sukhumvit 23巷內、與飯店同一條巷子，步行1-2分鐘即達", "Health Land Asoke：連鎖老字號、品質穩定、環境乾淨，步行約10分鐘", "Ayothaya Massage、Ayothaya@18、Dao Massage：都在飯店周邊步行可達範圍，可依當下有位子的店家彈性選擇"], description: "【放鬆首站】午餐、晚餐都已於機上用餐，放完行李後直接安排一場泰式按摩，舒緩長途飛行的疲勞" },
      { time: "16:30", title: "自由活動", description: "【輕鬆首日】按摩結束後無其他安排，可在飯店泳池放鬆、或於Sukhumvit巷弄間隨興散步，早點休息調整時差" }
    ]
  },
  {
    day: 2,
    date: "2/6",
    dayOfWeek: "六",
    title: "龍蓮寺過年參拜・Talad Noi街藝巷弄・Rajadamnern泰拳觀賽",
    highlight: "主線：Wat Mangkon Kamalawat龍蓮寺過年參拜→耀華力路美食（陳億粿條店＋Nai Mong蚵仔煎）→中華門→Wat Traimit金佛寺→新嘉坡餐室珍多冰→Talad Noi街藝巷弄→965bkk老宅咖啡下午茶→Phitthaya Sathian Bridge百年鐵橋→Likhit Kai Yang烤雞晚餐→Rajadamnern Stadium泰拳觀賽；選擇性：Talad Noi可依興趣調整停留時間",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/38337464/pexels-photo-38337464.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["2027年農曆新年除夕就是2/6（今天），龍蓮寺過年氣氛與香火最為鼎盛，記得提早出發避開參拜人潮", "今天走法改成從北邊龍蓮寺一路往南走到Talad Noi、最後在Hua Lamphong站搭車返回，全程單一方向不用走回頭路", "本日步行與景點較多，可依家人興趣自由取捨Talad Noi的停留時間，保留宗教參拜與晚上的泰拳觀賽作主要行程即可", "Wat Mangkon Kamalawat除夕過年期間可能延長開放時間迎接參拜人潮，實際時間建議出發前再確認", "陳億粿條店與Nai Mong蚵仔煎都在龍蓮寺附近，建議兩家分食少量嘗鮮，不用只選一家", "Talad Noi巷弄狹窄曲折，建議穿好走的鞋，跟著地圖或導覽慢慢逛", "965bkk週二公休、營業至19:00，若剛好遇到公休日可改往同巷內La Cabra - Talad Noi喝咖啡", "週六場是Rajadamnern World Series、是評價最好的場次之一，建議提前上網訂票，一般座位約1,600泰銖起、View seat 2,500泰銖起"],
    attractions: [
      { time: "09:00", title: "從飯店出發", description: "【出發點】搭MRT前往Wat Mangkon站（約25-30分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "09:45", title: "Wat Mangkon Kamalawat 龍蓮寺", purpose: "過年參拜・曼谷最重要華人廟宇", activities: ["參拜曼谷規模最大、最重要的華人廟宇", "感受農曆新年期間香火鼎盛的氣氛", "祈求新的一年平安順利"], description: "【過年參拜】曼谷最大最重要的華人廟宇、1871年創建、每年農曆新年最熱鬧、鄰近MRT Wat Mangkon站，是今天南下路線的起點", story: "Wat Mangkon Kamalawat（龍蓮寺）是曼谷規模最大、最重要的華人廟宇，1871年由中國僧人創建，後獲拉瑪五世賜名。每年農曆新年期間這裡是曼谷華人社群最重要的參拜地點，香火鼎盛、人潮絡繹不絕，正好搭上今年2/6除夕當天前來祈福。從這裡開始一路往南走到Talad Noi，全程不用走回頭路。", address: "423 Charoen Krung Rd, Pom Prap Sattru Phai, Bangkok 10100" },
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
      { time: "17:30", title: "前往老城區晚餐", description: "【路上轉移】搭計程車前往Ratchadamnoen老城區（約20-25分鐘，視交通狀況）" },
      { time: "18:00", title: "Likhit Kai Yang 烤雞晚餐", purpose: "拳擊館旁50年烤雞老店", activities: ["招牌炭烤雞（Kai Yang）", "青木瓜沙拉（Som Tum）", "糯米飯、東北料理配菜"], description: "【拳前老店】就在Rajadamnern Stadium旁、開業超過50年的烤雞老店，觀賽前用餐最順路", story: "Likhit Kai Yang緊鄰Rajadamnern Stadium，超過半世紀以來都是拳迷看賽前的固定用餐選擇，招牌炭烤雞外皮焦香、肉質多汁，配上酸辣夠味的青木瓜沙拉與糯米飯，簡單道地又不會太飽，很適合接著進場看拳賽。", mustEat: "炭烤雞（Kai Yang）、青木瓜沙拉（Som Tum）、糯米飯", phone: "02 281 1094", address: "74/1 Ratchadamnoen Nok Rd, Wat Somanat, Pom Prap Sattru Phai, Bangkok 10100" },
      { time: "19:00", title: "Rajadamnern Stadium 泰拳觀賽", purpose: "世界第一座泰拳體育館・現場觀賽", activities: ["現場觀賞正統泰拳對戰、拳台儀式Wai Kru", "感受泰拳迷熱烈的加油氣氛", "週六場是Rajadamnern World Series，賽事精彩度最高的場次之一"], description: "【世界第一座泰拳館】1945年開幕的世界第一座泰拳體育館，週六19:00-22:00 Rajadamnern World Series場次，建議提前上網訂票", story: "Rajadamnern Stadium是全球第一座專門的泰拳體育館，1945年開幕至今始終是泰拳界最具代表性的殿堂。週六場的Rajadamnern World Series是評價最好的場次之一，現場感受拳台上的Wai Kru拜師禮、鼓樂伴奏與觀眾熱烈的加油聲，是全家人體驗泰國國粹最直接的方式，逛完一整天的老城區後剛好就近觀賽，不用再跑遠。", address: "1 Ratchadamnoen Nok Ave, Pom Prap Sattru Phai, Bangkok 10100" },
      { time: "22:00", title: "返回飯店", description: "【返程休息】搭計程車直接返回飯店（約25-30分鐘，視交通狀況）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 3,
    date: "2/7",
    dayOfWeek: "日",
    title: "王朗市場・鄭王廟泰服體驗・昭披耶河遊船晚餐",
    highlight: "主線：王朗市場在地午餐→搭船跨河→鄭王廟Wat Arun泰服體驗拍照→ICONSIAM碼頭搭乘昭披耶公主號遊船晚餐",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/30970845/pexels-photo-30970845.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["鄭王廟有穿著規定，不可露肩短褲，不過現場租借的泰服本身就符合規定，換裝後直接入內參觀即可", "王朗市場下午14:00-18:00最熱鬧、攤位陸續開齊，中午去用餐人潮較少、比較好逛好拍", "王朗市場必吃：Wang Lang Bakery爆漿麵包（27種口味、45泰銖起）、หมูทอดชาววัง炸豬肉（招牌辣味炸豬肉約60泰銖/100克）", "從王朗碼頭（Tha Wang Lang／N10）搭橘旗昭披耶河觀光船南下至Tha Tien碼頭（N8），船程約15-20分鐘，再轉搭橫渡渡輪至鄭王廟（5-7泰銖/人、約5分鐘）", "鄭王廟後方「泰服一條街」有多間租借店，一套約150-300泰銖，體驗時間3-4小時，記得在店家關門（約18:00）前歸還", "昭披耶公主號遊船晚餐建議提前1-2週在官網或Klook/KKday訂位，官網優惠價約1,200泰銖/人，含buffet、迎賓飲料與現場樂團表演", "登船地點在ICONSIAM正對面碼頭，找紫色「Chao Phraya Princess」招牌，建議提前30分鐘抵達報到"],
    attractions: [
      { time: "09:30", title: "從飯店出發", description: "【出發點】搭計程車前往王朗市場（約40-50分鐘，視交通狀況跨河）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "11:00", title: "王朗市場 Wang Lang Market", purpose: "在地市場午餐尋味", activities: ["Wang Lang Bakery招牌爆漿麵包，27種口味任選", "หมูทอดชาววัง炸豬肉，辣味／原味／排骨三種選擇", "巷弄內小吃、蔬果、雜貨隨興逛"], description: "【在地市場】昭披耶河畔日常市場、鄰近Siriraj醫院，Wang Lang碼頭與Prannok碼頭之間，以平價道地小吃聞名", story: "王朗市場是曼谷人日常採買的市場，不是觀光化的夜市，價格實在、沒有觀光溢價。招牌Wang Lang Bakery爆漿麵包開業25年多、口味多達27種，隊伍常常排得很長；หมูทอดชาววัง炸豬肉外酥內嫩，是市場裡另一個必吃招牌。中午時段人潮較少，反而更適合悠閒吃吃逛逛。", mustEat: "爆漿麵包、炸豬肉（หมูทอดชาววัง）、椰漿糕", dessert: "爆漿麵包、椰漿糕", address: "Phran Nok Rd, Siriraj, Bangkok Noi, Bangkok 10700" },
      { time: "13:00", title: "搭船跨河前往鄭王廟", description: "【交通接駁】從王朗碼頭（Tha Wang Lang／N10）搭橘旗昭披耶河觀光船南下至Tha Tien碼頭（N8，約15-20分鐘），再轉搭橫渡渡輪至鄭王廟（5-7泰銖/人、約5分鐘航程）" },
      { time: "13:30", title: "鄭王廟泰服租借體驗", purpose: "換裝拍照・泰服一條街", activities: ["鄭王廟後方泰服一條街選購套裝、加購髮飾配件", "專人協助著裝、簡易髮型造型", "換裝完成後直接入內參觀拍照"], description: "【泰服體驗】鄭王廟售票處附近多間租借店，一套約150-300泰銖，體驗時間3-4小時，記得關門前（約18:00）歸還", story: "鄭王廟後方聚集了多間泰服租借店，形成一條「泰服一條街」，價格從平價到冷氣專業攝影方案都有。換上傳統泰服後，本身就符合寺廟的穿著規定，不用額外準備長褲或圍巾，直接進去參觀拍照最方便，也是全家人最好拍的一站。", address: "231 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600" },
      { time: "14:15", title: "鄭王廟 Wat Arun", purpose: "河畔地標巡禮・泰服拍照", activities: ["穿著泰服攀爬瓷片鑲嵌的大尖塔（Prang）", "近距離欣賞貝殼與瓷器拼貼工藝", "河岸邊拍攝以曼谷天際線為背景的經典角度"], description: "【河畔地標】曼谷代表性地標黎明寺、以彩色瓷片鑲嵌的高聳尖塔聞名，每日08:00-18:00開放", story: "鄭王廟又稱黎明寺，以泰皇鄭信命名，最引人注目的是以中國瓷片與貝殼拼貼裝飾的高聳尖塔，在陽光下閃耀著繽紛色澤。穿著剛租借的泰服在尖塔前拍照，是全家曼谷之旅最有紀念價值的畫面之一，爬上尖塔中層平台還能俯瞰昭披耶河景色。", address: "158 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600" },
      { time: "16:00", title: "歸還泰服，前往ICONSIAM", description: "【路上轉移】回泰服店換回便服、歸還服裝，搭計程車前往ICONSIAM碼頭（約20-30分鐘）" },
      { time: "17:00", title: "ICONSIAM 自由活動", purpose: "碼頭周邊輕鬆等待", activities: ["ICONSIAM商場內逛街、伴手禮採購", "河岸戶外廣場拍照休息", "提前熟悉登船地點，避免報到時找不到碼頭"], description: "【自由活動】昭披耶公主號登船碼頭就在ICONSIAM正對面，提早抵達可先逛商場、吃點輕食墊胃", story: "距離晚上遊船登船還有一段時間，先到ICONSIAM逛逛，這裡是曼谷河岸最新的地標商場，逛累了就在河岸廣場吹風看船，順便確認一下登船碼頭的確切位置，晚點報到更安心。", address: "299 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600" },
      { time: "19:00", title: "昭披耶公主號 報到登船", description: "【交通接駁】ICONSIAM正對面碼頭找紫色「Chao Phraya Princess」招牌報到，建議提前30分鐘抵達" },
      { time: "19:30", title: "Chao Phraya Princess 昭披耶河遊船晚餐", purpose: "河岸夜景遊船晚餐", activities: ["泰式與國際料理buffet吃到飽", "現場樂團演奏、河岸夜景巡遊", "沿途經過鄭王廟、大皇宮、Rama系列大橋等曼谷地標夜景"], description: "【遊船晚餐】19:30-21:30晚餐航班、含迎賓飲料與buffet，官網優惠價約1,200泰銖/人，建議提前1-2週訂位", story: "昭披耶公主號是曼谷入門款遊船晚餐首選，邊享用泰式與國際料理buffet，邊欣賞兩岸華燈初上的夜景，現場樂團演奏讓氣氛更加分。船隻會沿著昭披耶河經過鄭王廟、大皇宮等地標，把白天走過的景點在夜晚從河上再看一次，替今天的曼谷古都與河岸行程畫下完美句點。", mustEat: "泰式與國際料理buffet", address: "299 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600" },
      { time: "21:45", title: "返回飯店", description: "【返程休息】搭計程車直接返回飯店（約30-40分鐘，視交通狀況）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 4,
    date: "2/8",
    dayOfWeek: "一",
    title: "朱拉隆功大學校園巡禮・朱拉隆功夜市晚餐",
    highlight: "主線：Chulalongkorn University校園巡禮（大講堂・兩王紀念碑・百年紀念公園）→Siam Square／MBK自由購物→班塔通路（朱拉隆功夜市）必吃美食晚餐→Jae Wan仙草甜品",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/35324198/pexels-photo-35324198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["Chulalongkorn University校園全年開放、免費參觀，平日上午人潮較少，很適合悠閒散步拍照", "校園內有免費粉紅色接駁車繞行主要景點，體力有限可多加利用，不用整個校園走透透", "兩王紀念碑（Monument of Kings Chulalongkorn and Vajiravudh）就在大講堂正前方，是校園最經典的拍照點", "Siam Square、Siam Paragon、MBK Center都在校園旁邊、步行可達，購物餐飲選擇多，可以補足原本洽圖洽的購物時間", "班塔通路（朱拉隆功夜市）就在Chula校園旁邊，從Siam商圈步行約10-15分鐘即達，不需要再搭車，傍晚後才是真正熱鬧的時段", "Jeh O Chula與龍龍魚蛋粉用餐尖峰都容易排隊，可以兩家分食、多嚐幾樣再吃甜點"],
    attractions: [
      { time: "09:30", title: "從飯店出發", description: "【出發點】搭BTS Sukhumvit線轉Silom線至National Stadium站（約25-30分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "10:15", title: "Chulalongkorn University 校園巡禮", purpose: "百年名校建築巡禮・拍照打卡", activities: ["大講堂（Auditorium）前兩王紀念碑拍照", "百年紀念公園（Centenary Park）散步", "免費粉紅接駁車繞行校園主要景點"], description: "【校園景點】泰國第一所大學、1917年創立，古典與現代建築並存，全年開放免費參觀", story: "Chulalongkorn University是泰國歷史最悠久、排名第一的高等學府，校園內融合古典泰式建築與現代建築，隨處都是好拍的角落。大講堂前的兩王紀念碑是校園最經典的拍照地標，2017年落成的百年紀念公園則是散步歇腳的好去處，體力有限可搭乘免費粉紅接駁車代步。", address: "254 Phayathai Rd, Wang Mai, Pathum Wan, Bangkok 10330" },
      { time: "12:00", title: "Samyan Mitrtown 午餐", purpose: "校園周邊用餐・輕鬆午餐", activities: ["商場美食街多樣選擇，全家人各自點餐", "24小時營業的Samyan Co-Op美食區", "用餐後可順路逛逛商場店家"], description: "【校園周邊】Chula校園南側的複合式商場，鄰近MRT Samyan站，美食選擇豐富", story: "Samyan Mitrtown就在Chula校園南側，是曼谷近年新開的複合式商場，美食街選擇多元、適合全家人各自選擇想吃的料理，用餐環境舒適，也能順道吹冷氣休息。", address: "944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330" },
      { time: "13:30", title: "Siam Square／MBK 自由購物", purpose: "輕鬆購物", activities: ["Siam Square潮牌小店挖寶", "MBK Center平價伴手禮採購", "咖啡廳小憩、按摩放鬆"], description: "【輕鬆步調】Siam Square、Siam Paragon、MBK Center都在校園步行範圍內，補足原本洽圖洽的購物時間", story: "從Chula校園步行就能到Siam商圈，Siam Square有很多年輕潮牌小店，MBK Center則是平價伴手禮的好去處，全家人可以依自己的步調隨興閒逛，補足這天原本安排在洽圖洽的購物時光。" },
      { time: "16:30", title: "步行前往班塔通路（朱拉隆功夜市）", description: "【路上轉移】從Siam商圈步行前往Banthat Thong Road（約10-15分鐘），就在Chula校園旁邊不需要搭車" },
      { time: "17:15", title: "【必吃】Jeh O Chula 酸辣海鮮河粉", purpose: "排隊名店・酸辣海鮮河粉", activities: ["招牌酸辣海鮮河粉", "海鮮份量十足，適合多人分食", "尖峰時段容易排隊，建議預留等候時間"], description: "【Google Maps】朱拉隆功夜市排隊名店，位於Banthat Thong Road，傍晚後最熱鬧", story: "Jeh O Chula是班塔通路的人氣排隊名店，酸辣海鮮河粉是招牌，適合全家人分食、多嚐幾樣道地滋味。", mustEat: "酸辣海鮮河粉", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "17:45", title: "【米其林推薦・必吃】Longleng Lookchin Pla 龍龍魚蛋粉", purpose: "米其林推薦・Yentafo粉紅酸辣魚蛋麵", activities: ["米其林推薦Yentafo（粉紅酸辣魚蛋麵）", "魚丸、魚餅每日現做", "可與其他夜市美食分食"], description: "【Google Maps】米其林推薦魚蛋粉，位於Banthat Thong Road朱拉隆功夜市美食街", story: "Longleng Lookchin Pla以粉紅酸辣湯底的Yentafo聞名，魚丸與魚餅每日現做，是朱拉隆功夜市值得特別標記的米其林推薦小吃。", mustEat: "Yentafo粉紅酸辣魚蛋麵", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "18:15", title: "【必吃】Aey Seafood Barattong 冬瓜蝦煲", purpose: "在地海鮮・冬瓜蝦煲", activities: ["招牌冬瓜蝦煲", "生猛海鮮快炒", "多人分食更適合一次品嚐多道菜"], description: "【Google Maps】Banthat Thong Road在地海鮮餐廳，招牌冬瓜蝦煲鮮甜濃郁", story: "Aey Seafood Barattong主打生猛海鮮快炒，冬瓜蝦煲鮮甜濃郁，適合和夜市其他美食一起分食。", mustEat: "冬瓜蝦煲、生猛海鮮快炒", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "18:45", title: "【必吃】Mookata 泰式烤肉火鍋", purpose: "泰式烤肉火鍋・平價聚餐", activities: ["邊烤邊吃的泰式烤肉火鍋", "曼谷學生喜愛的平價聚餐選擇", "適合多人一起分食"], description: "【Google Maps】Banthat Thong Road朱拉隆功夜市人氣聚餐選擇", story: "Mookata是曼谷學生常吃的平價聚餐料理，結合烤肉與火鍋，很適合家人一起邊烤邊吃。", mustEat: "泰式烤肉火鍋（Mookata）", address: "Banthat Thong Rd, Pathum Wan, Bangkok（鄰近BTS National Stadium站）" },
      { time: "19:00", title: "【Lisa造訪】Jae Wan 仙草豆花甜品", purpose: "Lisa造訪・順路網紅甜點", activities: ["招牌「火山仙草奶」（Volcano Grass Jelly in Fresh Milk）", "Bua Loy湯圓椰奶甜湯", "customized豆花配料自由選擇"], description: "【Lisa造訪】Blackpink成員Lisa曾造訪的仙草甜品店，就在班塔通路上，晚餐吃完直接走過去，營業至23:30、65-160泰銖親民價", story: "Jae Wan是班塔通路上的仙草豆花甜品店，招牌「火山仙草奶」造型吸睛、口感綿密，因為Blackpink成員Lisa造訪而爆紅。跟Jeh O Chula在同一條路上，吃完晚餐正好順路走過去吃甜點收尾，不需要額外繞路。", mustEat: "火山仙草奶、Bua Loy湯圓椰奶甜湯、豆花", dessert: "火山仙草奶、Bua Loy湯圓椰奶甜湯、豆花", address: "1700 Banthat Thong Rd, Rong Muang, Pathum Wan, Bangkok 10330" },
      { time: "20:00", title: "返回飯店", description: "【返程休息】搭BTS經Siam站轉乘Sukhumvit線返回Asok站（約30分鐘），或直接搭Grab/計程車返回", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
    ]
  },
  {
    day: 5,
    date: "2/9",
    dayOfWeek: "二",
    title: "輕鬆購物日・Terminal 21晚餐",
    highlight: "主線：Chuan Kitchen海南雞飯午餐→CentralWorld／Siam商圈輕鬆購物一整天→Terminal 21 Pier 21美食街晚餐",
    accommodation: "Jasmine City Hotel Bangkok",
    accommodationDetails: JASMINE_CITY_HOTEL,
    image: "https://images.pexels.com/photos/31026303/pexels-photo-31026303.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tips: ["今天不趕早，上午先在飯店悠閒吃完早餐再出發即可", "大型購物中心：CentralWorld、Siam Paragon、Siam Center、MBK、Gaysorn 全都集中在Siam與Chit Lom一帶，這天就是正式購物日", "今天BTS動線：Asok（出發）→Chit Lom（午餐・購物）→Asok（Terminal 21晚餐），同一條線不用轉乘", "沒有安排景點，全天彈性購物，晚餐安排在飯店旁的Terminal 21，逛完直接走回飯店最省力"],
    attractions: [
      { time: "10:30", title: "從飯店出發", description: "【出發點】搭BTS Sukhumvit線直達Chit Lom站（無需轉乘，約15-20分鐘）", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" },
      { time: "11:00", title: "【米其林推薦】Chuan Kitchen 海南雞飯午餐", purpose: "米其林推薦・新加坡風味午餐", activities: ["招牌新加坡式海南雞飯，雞肉軟嫩多汁", "三種特調沾醬自由搭配", "CentralWorld 6樓Atrium Zone，用餐環境舒適"], description: "【米其林推薦】連續入選米其林指南推薦餐廳的新加坡風味海南雞飯、CentralWorld 6樓，每日10:00-21:00營業", story: "Chuan Kitchen主打新加坡街頭美食風味的海南雞飯，雞肉滑嫩、米飯吸飽雞油香氣，連續多年入選米其林指南推薦名單，就在CentralWorld商場內用餐環境舒適，很適合作為今天悠閒的第一餐，吃飽直接開始逛街。", mustEat: "新加坡式海南雞飯、三種特調沾醬", address: "4/1-4/2 Thanon Phra Ram 1, CentralWorld 6F Atrium Zone, Pathum Wan, Bangkok 10330" },
      { time: "12:15", title: "CentralWorld／Siam商圈自由購物", purpose: "輕鬆購物", activities: ["CentralWorld逛街、伴手禮採購", "經BTS空中步道步行至Siam Paragon／Siam Center", "咖啡廳小憩、按摩放鬆"], description: "【輕鬆步調】CentralWorld與Siam商圈由BTS空中步道相連、不趕行程慢慢逛，全天彈性安排", story: "今天特別放慢腳步，不安排緊湊景點，CentralWorld與Siam商圈之間有空中步道相連，全家人可以依自己的步調隨興閒逛一整天，累了就找間咖啡廳坐坐，晚餐也不特別預排。" },
      { time: "19:00", title: "前往Terminal 21", description: "【路上轉移】搭BTS Sukhumvit線直達Asok站（無需轉乘，約15-20分鐘），出站即達Terminal 21" },
      { time: "19:30", title: "Terminal 21 晚餐", purpose: "平價美食街晚餐", activities: ["5樓Pier 21美食街，各國小吃選擇多、價格親民", "各樓層以世界城市為主題拍照打卡", "飯後可直接步行回飯店，不用再移動"], description: "【飯店旁商場】鄰近BTS Asok與MRT Sukhumvit站，步行即達飯店，逛累了最省力的晚餐選擇", story: "Terminal 21就在飯店旁邊，5樓Pier 21美食街以平價聞名，各國小吃、泰式料理選擇豐富，全家人可以各自選喜歡的餐點，價格也比一般餐廳親民。逛了一整天街，這裡吃完飯直接走回飯店最省力，不用再折騰交通。", address: "88 Sukhumvit Soi 19, Khlong Toei Nuea, Watthana, Bangkok 10110" },
      { time: "20:30", title: "返回飯店", description: "【返程休息】步行約5-8分鐘返回飯店", phone: "+66 2 204-5888", address: "2 Sukhumvit 23, Klongtoey-nue, Wattana, Bangkok 10110" }
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
  description: "6天5夜曼谷家庭輕旅行，洽圖洽假日市集、班塔通路朱拉隆功夜市必吃美食、王朗市場在地小吃與鄭王廟泰服體驗、昭披耶河遊船晚餐、龍蓮寺過年參拜與Talad Noi街藝巷弄、Rajadamnern Stadium泰拳觀賽，加上朱拉隆功大學校園巡禮與Siam商圈輕鬆購物日，步調輕鬆不趕行程。",
};
