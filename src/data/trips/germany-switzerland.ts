import { DayItinerary, HeroItinerary } from "../types";

export const germanySwitzerlandItinerary: DayItinerary[] = [
  {
    day: 1,
    date: "6/5",
    dayOfWeek: "五",
    title: "啟程・航向巴伐利亞",
    highlight: "桃園機場（TPE）／ 慕尼黑（MUC）直飛體驗",
    accommodation: "機上豪華客艙",
    image: "/images/itinerary/bmw.png",
    tips: ["長途飛行提醒：建議穿著舒適衣物，適時補充水分", "機上娛樂：準備好喜愛的影集或交通時間閱讀的書籍"],
    attractions: [
      {
        time: "晚上",
        title: "桃園國際機場集合",
        description: "【出發準備】辦理行李託運與登機手續，帶著期待的心情準備展開歐洲德瑞之行。",
        foundedYear: "1979",
        mustEat: "精緻商務/經濟級機上餐點",
        address: "桃園市大園區航站南路9號"
      },
      {
        time: "23:55",
        title: "長榮航空 BR071 起飛",
        description: "【出發】台北桃園（TPE）→ 慕尼黑（MUC），長榮航空 BR071 準時起飛。",
        address: "桃園市大園區航站南路9號"
      },
      {
        time: "深夜",
        title: "航向慕尼黑",
        description: "【直飛航班】約14小時的飛行時間，在萬呎高空享受豐盛餐點與短暫休息。",
        story: "慕尼黑是德國巴伐利亞州的首府，也是通往阿爾卑斯山的門戶。這段漫長的航程是為了更壯麗的風景，閉上眼想像著明日即將見到的壁畫村與雪山。"
      }
    ]
  },
  {
    day: 2,
    date: "6/6",
    dayOfWeek: "六",
    title: "壁畫童話與洛可可藝術之巔",
    highlight: "慕尼黑→奧伯拉瑪高（壁畫村）→威斯教堂 (世界遺產)→南德小鎮",
    accommodation: "南德風情景觀飯店",
    image: "/images/itinerary/wieskirche.png",
    tips: ["步行提醒：奧伯拉瑪高適合慢慢散步，穿雙好走的鞋", "防曬注意：戶外活動時間較長，注意阿爾卑斯地區的陽光"],
    attractions: [
      { 
        time: "上午", 
        title: "抵達慕尼黑機場", 
        description: "【抵達德國】順利通關取件，與領隊會合展開德瑞之旅。",
        address: "Nordallee 25, 85356 München, Germany"
      },
      { 
        time: "下午", 
        title: "奧伯拉瑪高 (Oberammergau)", 
        description: "【必做：尋找濕壁畫小紅帽】漫步在充滿格林童話彩繪的街道，尋找牆上的「小紅帽」與「糖果屋」故事，並參觀當地傳承數百年的木雕工藝工坊。",
        story: "奧伯拉瑪高以每十年一次的「耶穌受難劇」聞名全球。這裡的建築風格極具特色，牆面彩繪著聖經故事或經典童話（如小紅帽、糖果屋），每一扇窗戶背後都藏著傳承數百年的工匠靈魂。",
        foundedYear: "1634 (首演)",
        keyPerson: "中世紀木雕工匠",
        keyPersonDeeds: "以『黑死病誓言』聞名，每十年演出一次耶穌受難劇的傳承者。",
        image: "/images/itinerary/oberammergau.png",
        mustEat: "手工德式軟椒鹽捲餅 (Brezel)",
        souvenir: "傳統木雕工藝品",
        address: "Oberammergau, 82487, Germany"
      },
      { 
        time: "傍晚", 
        title: "威斯教堂 (Wieskirche) (H)", 
        description: "【洛可可之珠】南德洛可可建築的最高傑作。以「純白中的燦爛金飾」震撼世人，和諧交織了建築、繪畫與雕塑藝術。",
        story: "這座教堂的誕生源於一個神蹟。1738年，當地農婦在「受鞭打的耶穌」木雕像眼中看見了淚水，消息傳開後，成千上萬的朝聖者湧入這片鄉間牧場。為了安置神像，天才建築師齊默曼耗時九年打造了這座教堂。教堂外部樸實無華，為的是讓踏入內部的信徒在見到那如天堂般璀璨的金色裝飾與天頂畫《天堂之門》時，能感受到最強烈的神聖震撼。",
        foundedYear: "1745",
        keyPerson: "Dominikus Zimmermann",
        keyPersonDeeds: "洛可可建築大師，打造世上最美教堂標竿。",
        image: "/images/itinerary/wieskirche.png",
        souvenir: "受鞭打耶穌小神像 (朝聖者紀念)",
        guideNote: {
          story: "1633年瘟疫誓言的延續，奧伯拉瑪高與威斯教堂共同見證了信仰如何讓小鎮在崩解的時代中重生。",
          celebrity: "Dominikus Zimmermann (建築大師)",
          novel: "《朝聖者之路》(相關歷史記載)"
        },
        address: "Wies 12, 86989 Steingaden, Germany"
      }
    ]
  },
  {
    day: 3,
    date: "6/7",
    dayOfWeek: "日",
    title: "迪士尼夢幻城堡與蘇黎世湖畔散策",
    highlight: "新天鵝堡→波登湖渡輪→蘇黎世湖→蘇黎世市區觀光",
    accommodation: "蘇黎世精品飯店",
    image: "/images/itinerary/neuschwanstein.png",
    tips: ["預約提醒：新天鵝堡遊客眾多，需配合預約時間提早抵達", "跨境提醒：今日將由德國進入瑞士，注意貨幣與電壓的細微差異"],
    attractions: [
      { 
        time: "上午", 
        title: "新天鵝堡 (Neuschwanstein Castle)", 
        description: "【必做：瑪莉恩橋取景】進入城堡內部參觀華麗的「吟唱者大廳」，並在瑪莉恩鐵橋上拍攝最經典的銀白城堡全景地標。",
        story: "路德維希二世稱其為「夢幻城堡」，他在極致孤獨中建成了這座矗立於絕壁上的銀白城堡部。從瑪莉恩鐵橋上俯視，城堡如同鑲嵌在蒼翠山林間的寶石，是世界上最受歡迎的取景地。",
        foundedYear: "1869",
        keyPerson: "路德維希二世",
        keyPersonDeeds: "巴伐利亞夢幻國王，新天鵝堡與豪奢宮殿的催生者。",
        image: "/images/itinerary/neuschwanstein.png",
        mustEat: "巴伐利亞白香腸 (Weisswurst)",
        mustEatLink: "https://www.schwangau.de/gastronomie/",
        souvenir: "新天鵝堡精緻模型",
        guideNote: {
          story: "路德維希二世是華格納的頭號信徒，整座城堡其實是一座立體的歌劇舞台，每一間房都對應著華格納的一個劇本。",
          celebrity: "路德維希二世 (Ludwig II)、華格納 (Richard Wagner)",
          movie: "迪士尼《睡美人》、經典老片《飛天萬能車》",
          novel: "《路德維希二世：巴伐利亞的天鵝國王》"
        },
        address: "Neuschwansteinstraße 20, 87645 Schwangau, Germany"
      },
      { 
        time: "下午", 
        title: "波登湖渡輪 (Constance-Meersburg Ferry)", 
        description: "【跨境體驗】搭乘渡輪橫跨德、瑞、奧三國交界的波登湖，享受微風薰影。",
        story: "波登湖是中歐第三大湖，搭乘渡輪能縮短路程，更能以最優美的角度欣賞湖光山色。看著對岸的阿爾卑斯山輪廓逐漸清晰，預示著即將進入瑞士境內。",
        mustEat: "鮮美湖魚料理",
        address: "Meersburg, Bodensee"
      },
      { 
        time: "晚上", 
        title: "蘇黎世市區觀光 (Zürich)", 
        description: "【必吃：瑞士薯餅與高級巧克力】在利馬特河畔漫步，品嚐 Sprüngli 十九世紀傳承至今的頂級巧克力，並在著名的軍火庫餐廳享用最道地的瑞士薯餅 (Rösti)。",
        story: "蘇黎世不僅是全球金融中心，更有著深厚的文化底蘊。在蘇黎世湖畔看著天鵝悠遊，夕陽映照在雙塔大教堂的尖端，感受這份結合頂尖繁榮與古老寧靜的獨特氛圍。",
        foundedYear: "西元15年 (羅馬時期)",
        keyPerson: "獅子亨利 (發展期)",
        keyPersonDeeds: "中歐最具權勢的公爵之一，推動了蘇黎世從貿易站向城市的轉型。",
        mustEat: "瑞士薯餅 (Rösti) & 蘇黎世小牛肉",
        mustEatLink: "https://www.zeughauskeller.ch",
        souvenir: "瑞士軍刀、Läderach 巧克力",
        address: "Bahnhofstrasse, 8001 Zürich, Switzerland"
      }
    ],
    lunchRecommendations: [
      {
        name: "Zeughauskeller (軍火庫餐廳)",
        cuisine: "精緻瑞士料理 / 傳統香腸",
        recommendation: "建於1487年的古代軍火庫，氛圍強烈。必點蘇黎世小牛肉佐瑞士薯餅 (Rösti)，是台灣旅客最推崇的道地滋味。",
        priceRange: "CHF 30 - 50",
        address: "Bahnhofstrasse 28A, 8001 Zürich",
        phone: "+41 44 220 15 15"
      }
    ]
  },
  {
    day: 4,
    date: "6/8",
    dayOfWeek: "一",
    title: "阿爾卑斯萬年冰川與垂影獅子之淚",
    highlight: "蘇黎世→鐵力士山 (360度旋轉纜車)→盧森 (卡貝爾橋 / 獅子紀念碑)",
    accommodation: "瑞士山城小鎮旅館",
    image: "/images/itinerary/jungfraujoch.png",
    tips: ["低溫提醒：鐵力士山山頂即便夏季也十分寒冷，請準備厚外套", "墨鏡必備：雪地陽光反射強烈，請務必佩戴墨鏡保護眼睛"],
    attractions: [
      { 
        time: "上午", 
        title: "鐵力士山 (Mt. Titlis)", 
        description: "【必做：360度旋轉纜車與冰川吊橋】搭乘全球首創旋轉纜車，漫步在歐洲最高懸空吊橋 Titlis Cliff Walk，並走入終年不化的神祕冰川洞穴。",
        story: "在鐵力士山頂，除了壯闊的群山環繞，還能挑戰歐洲最高的吊橋「Titlis Cliff Walk」或進入神祕的冰川洞穴。那種手摸萬年冰川的觸感，是旅途中最純粹的寒意與深刻。",
        foundedYear: "1913 (纜車)",
        keyPerson: "Konrad von Sellenbüren",
        keyPersonDeeds: "英格堡修道院代表人物，開啟了此區千年的文化與信仰傳承。",
        image: "/images/itinerary/jungfraujoch.png",
        mustEat: "阿爾卑斯起司與熱可可",
        mustEatLink: "https://www.titlis.ch",
        souvenir: "瑞士手工牛鈴",
        address: "Poststrasse 3, 6390 Engelberg, Switzerland"
      },
      { 
        time: "下午", 
        title: "盧森 (Lucerne) 散策", 
        description: "【必做：木橋漫步與向傷心獅子致敬】走過歐洲最古老木質廊橋「卡貝爾橋」，並探訪馬克吐溫筆下「世界上最令人哀傷且動人的石雕\"獅子紀念碑\"。",
        story: "卡貝爾橋橫跨盧森湖出口，是歐洲最古老的有蓋木橋。橋內頂部的彩繪板講述著盧森的歷史。而不遠處的「垂死獅子紀念碑」則被馬克吐溫譽為「世界上最令人哀傷且動人的石雕」。",
        foundedYear: "1333 (木橋)",
        keyPerson: "Bertel Thorvaldsen",
        keyPersonDeeds: "丹麥國寶級雕刻家，創作了盧森地標《垂死獅子紀念碑》。",
        image: "/images/itinerary/lucerne.png",
        mustEat: "瑞士起司火鍋 (Fondue)",
        mustEatLink: "https://www.stadtkeller.ch",
        souvenir: "瑞士名錶、維氏軍刀",
        address: "Chapel Bridge, 6002 Luzern, Switzerland"
      },
      {
        time: "晚上",
        title: "晚餐 自理",
        description: "【自由用餐】盧森市區自由選擇餐廳，推薦卡貝爾橋周邊的湖畔餐廳或老城區小館。"
      }
    ],
    lunchRecommendations: [
      {
        name: "Stadtkeller (盧森傳統民俗餐廳)",
        cuisine: "瑞士傳統料理",
        recommendation: "一邊享用起司火鍋，一邊欣賞瑞士傳統的阿爾卑斯長號與搖鈴表演，是台灣旅行團最推崇的文化饗宴。",
        priceRange: "CHF 40 - 65",
        address: "Sternenplatz 3, 6004 Luzern",
        phone: "+41 41 410 47 33"
      }
    ]
  },
  {
    day: 5,
    date: "6/9",
    dayOfWeek: "二",
    title: "歐洲之巔與噴泉之都的邂逅",
    highlight: "格林德瓦→少女峰 (登山火車)→茵特拉根→伯恩 (世界遺產老城)",
    accommodation: "瑞德邊境景觀飯店",
    image: "/images/itinerary/lucerne.png",
    tips: ["高山症預防：在少女峰頂行動宜緩慢，多喝水，避免劇烈運動", "購物提醒：茵特拉根是購買瑞士名錶與纪念品的首選站"],
    attractions: [
      { 
        time: "上午", 
        title: "少女峰 (Jungfraujoch) (H)", 
        description: "【必做：歐洲最高郵局寄明信片】搭乘艾格快線(Eiger Express)登頂，在海拔3454公尺寄出明信片，並在高海拔瑞士蓮巧克力店挑選伴手禮。",
        story: "除了壯麗的自然景觀，這裡最迷人的是「少女峰鐵路」的故事。1896年，工業家古耶澤勒啟動了這項被視為不可能的任務：在海拔三千公尺以上的艾格峰與僧侶峰山體內開鑿隧道。工人們在極寒與稀薄氧氣中苦戰16年，終於建成了世界最高的火車站。當您站在斯芬克斯觀景台眺望長達23公里的「阿萊奇冰河」時，別忘了這背後百年前的探險雄心。",
        foundedYear: "1912",
        keyPerson: "Adolf Guyer-Zeller",
        keyPersonDeeds: "瑞士鐵路大亨，構思並啟動了艱難的少女峰鐵道工程。",
        image: "/images/itinerary/jungfraujoch.png",
        mustEat: "艾格峰特製餅乾 & 景觀餐廳料理",
        mustEatLink: "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/food-drinks/",
        souvenir: "高原限定瑞士蓮巧克力",
        guideNote: {
          story: "J.R.R. 托爾金19歲時曾在此健行，這裡的山谷與冰瀑直接啟發了他對中土世界「瑞文戴爾」的想像。",
          celebrity: "J.R.R. 托爾金 (Tolkien)",
          movie: "《魔戒》三部曲 (靈感來源)",
          novel: "《哈比人歷險記》、《精靈寶鑽》"
        },
        address: "Jungfraujoch, 3801, Switzerland"
      },
      { 
        time: "下午", 
        title: "茵特拉根 (Interlaken)", 
        description: "【必做：雙湖超市掃貨】在圖恩湖與布里恩茨湖之間的小鎮享受自由時光，眺望遠方的雪山景緻，並前往 Coop 或 Migros 超市採購瑞士必買伴手禮。",
        souvenir: "瑞士超市必掃：Kambly 餅乾、Coop 巧克力豆餅乾、Prix Garantie 護手霜、Aromat 雞精調味粉、Ultrasun 防曬霜",
        address: "Interlaken, 3800, Switzerland"
      },
      { 
        time: "傍晚", 
        title: "伯恩 (Bern) (H)", 
        description: "【必做：噴泉長廊漫步與鐘塔報時表演】走過伯恩百年騎樓長廊，在整點時刻守候天文鐘 Zytglogge 的機關人偉與公雞報時表演，感受這座瑞士首都的中世紀氣息。",
        story: "伯恩老城是聯合國教科文組織的世界遐産，超過6公里的騎樓（Lauben）連結各式商店。1405年大火後，市民以砂岩重建整座城市，那橘紅色屋頂在阿勒河的環抄下展現絕美中世紀風貌。相對論之父愛因斯坦曾在此生活工作，其故居至今仍完整保存。",
        foundedYear: "1191",
        keyPerson: "貝托爾德五世",
        keyPersonDeeds: "扎林根家族末代公爵，伯恩城市奠基者，城名》Bern「相傳源自他獄到的第一頪熊。",
        mustEat: "伯恩馬卡龍 & 阿爾卑斯花草茶",
        souvenir: "伯恩熊周邊紀念品",
        address: "Kornhausplatz, 3011 Bern, Switzerland"
      },
      {
        time: "晚上",
        title: "晚餐 自理",
        description: "【自由用餐】伯恩老城區自由選擇餐廳，推薦騎樓長廊周邊的特色小館。"
      }
    ],
    lunchRecommendations: [
      {
        name: "Restaurant Harmonie (伯恩傳統小館)",
        cuisine: "傳統瑞士料理",
        recommendation: "伯恩老城區的家常料理代表，必點伯恩燉牛肉 (Bernerplatte)，份量十足，是感受首都庶民風情的最佳選擇。",
        priceRange: "CHF 25 - 45",
        address: "Hotelgasse 3, 3011 Bern",
        phone: "+41 31 313 11 41"
      }
    ]
  },
  {
    day: 6,
    date: "6/10",
    dayOfWeek: "三",
    title: "黑森林翠湖與亞爾薩斯古蹟響宴",
    highlight: "黑森林蒂蒂湖→史特拉斯堡 (主教座堂 / 卡梅澤爾府邸)",
    accommodation: "德法邊境古典飯店",
    image: "/images/itinerary/strasbourg.png",
    tips: ["美食推薦：蒂蒂湖必嚐黑森林蛋糕，史特拉斯堡推薦法式燉肉鍋", "免稅提醒：史特拉斯堡是法國境內，可注意不同國家的退稅門檻"],
    attractions: [
      { 
        time: "上午", 
        title: "蒂蒂湖 (Titisee)", 
        description: "【必吃與必做：黑森林蛋糕與手工咕咕鐘】在翠綠湖畔品嚐一份正宗「黑森林櫻桃蛋糕」，並挑選一座擁有工匠簽名的手工木製咕咕鐘。",
        story: "深邃隱密的黑森林區孕育了無數格林童話。蒂蒂湖清測試見底，湖畔商家林立著各式手工木製咕咕鐘。在這裡，連空氣都彷彿帶著淡淡的松木與榛果香氣。",
        mustEat: "正宗黑森林蛋糕",
        mustEatLink: "https://www.cafe-am-see.de",
        souvenir: "名家手工咕咕鐘",
        address: "Strandbadstraße, 79822 Titisee-Neustadt, Germany"
      },
      { 
        time: "下午", 
        title: "史特拉斯堡 (Strasbourg) (H)", 
        description: "【必吃與必看：火焰薄餅與粉紅大教堂】品嚐亞爾薩斯特色「火焰薄餅」(Flammekueche)，並進入聖母大教堂觀賞古老天文鐘與壯麗彩色花窗。",
        story: "史特拉斯堡的粉紅砂岩主教座堂曾連續227年蟬聯世界最高建築，其精巧的雕刻讓雨果驚嘆為「巨大的、精緻的石質奇蹟」。教堂內的天文鐘是16世紀數學與機關藝術的結晶，至今仍能在每日12:30準時重演「基督與使徒」的報時劇。這裡也是現代印刷術發明者古騰堡工作的地方，更是法國國歌《馬賽曲》的誕生地，每塊石磚都刻滿了決定歐洲命運的故事。",
        foundedYear: "1015",
        keyPerson: "Erwin von Steinbach & 古騰堡",
        keyPersonDeeds: "大教堂傳奇建築師與活字印刷術發明先驅。",
        mustEat: "亞爾薩斯火焰薄餅 (Flammekueche)",
        mustEatLink: "https://www.maison-kammerzell.com",
        souvenir: "鸛鳥幸運娃娃",
        guideNote: {
          story: "史特拉斯堡主教座堂的高塔曾是世界之巔，雨果稱其為『雲端上的粉紅巨人』。",
          celebrity: "約翰·古騰堡 (Johannes Gutenberg)",
          movie: "《福爾摩斯2：詭影遊戲》",
          novel: "《馬賽曲》歷史考據"
        },
        address: "Place de la Cathédrale, 67000 Strasbourg, France"
      },
      { 
        time: "晚上", 
        title: "卡梅澤爾府邸 (Maison Kammerzell)", 
        description: "【遺產餐廳】在建於1427年的「世界最美半木造建築」之一，享受極致的傳統晚宴。",
        foundedYear: "1427",
        address: "16 Pl. de la Cathédrale, 67000 Strasbourg, France"
      }
    ]
  },
  {
    day: 7,
    date: "6/11",
    dayOfWeek: "四",
    title: "海德堡之戀與中世紀的中世紀",
    highlight: "海德堡古堡→羅騰堡 (中世紀古城區體驗)",
    accommodation: "羅騰堡老城特色旅館",
    image: "/images/itinerary/heidelberg.png",
    tips: ["攝影點推薦：海德堡古堡大平台可俯瞰内卡河全景", "羅騰堡提醒：老城區石板路不平整，大型行李盡量留在車上"],
    attractions: [
      { 
        time: "上午", 
        title: "海德堡古堡 (Heidelberg Castle)", 
        description: "【必做：參觀大酒桶與俯瞰全景】造訪持有 22 萬公升容積的「世界最大大酒桶」，並在古堡露台俯瞰內卡河與舊橋交疊的絕美城市全景。",
        story: "歌德曾將心遺失在海德堡。這座深受戰火洗禮的紅褐色城堡，雖僅餘斷垣殘壁，卻美得令人沉醉。巨大的酒桶展現了往昔貴族的豪邁，下方的舊橋則是通往大學城的浪漫入口。",
        foundedYear: "1214",
        keyPerson: "選帝侯魯普萊希特一世",
        keyPersonDeeds: "海德堡大學創辦者，奠定了這座城市『德國學術之巔』的地位。",
        image: "/images/itinerary/heidelberg.png",
        mustEat: "學生之吻巧克力 (Studentenkuss)",
        mustEatLink: "https://www.studentenkuss.com",
        souvenir: "Lamy 經典鋼筆",
        guideNote: {
          story: "馬克·吐溫在這裡居住時，曾對德國繁瑣的語法感到絕望，但海德堡的霧中城堡治癒了他。他說：『海德堡是世界上最美的一個地方。』",
          celebrity: "馬克·吐溫 (Mark Twain)、歌德 (Goethe)",
          movie: "《學生王子》",
          novel: "《流浪者在國外》(A Tramp Abroad)"
        },
        address: "Schlosshof 1, 69117 Heidelberg, Germany"
      },
      { 
        time: "下午", 
        title: "羅騰堡 (Rothenburg ob der Tauber)", 
        description: "【必吃與必做：雪球點心與城牆散步】在完整的中世紀古城牆上漫步，並嚐一口當地特色炸餅「雪球」(Schneeball)，感受時光倒流的童話感。",
        story: "羅騰堡是德國保存最完整的中古世紀城鎮，完全不見電線桿與現代建築。那色彩斑斕的半木質房屋、童話般的噴泉，在夜幕降臨時更有一種被時光遺忘的寂靜感。今晚，我們將入住這座歷史現場。",
        foundedYear: "1142",
        keyPerson: "康拉德三世",
        keyPersonDeeds: "神聖羅馬帝國國王，奠定了羅騰堡作為帝國重鎮的基礎。",
        image: "/images/itinerary/rothenburg.png",
        mustEat: "羅騰堡雪球餅 (Schneeball)",
        mustEatLink: "https://www.schneeballen.eu",
        souvenir: "Käthe Wohlfahrt 聖誕飾品",
        guideNote: {
          story: "在三十年戰爭中，羅騰堡幾乎被攻陷。當時的神聖羅馬帝國將軍挑戰市長，若能一口氣喝下3.25公升的葡萄酒，便放過這座城。市長成功了，這就是著名的『勝負一飲』。",
          celebrity: "盧德市長 (Mayor Nusch)",
          movie: "《哈利波特：死神的聖物》(格林德沃巢穴原型參考)、《飛天萬能車》"
        },
        address: "Marktplatz, 91541 Rothenburg ob der Tauber, Germany"
      }
    ]
  },
  {
    day: 8,
    date: "6/12",
    dayOfWeek: "五",
    title: "帝國遺產與現代工藝巔峰",
    highlight: "羅騰堡→紐倫堡→慕尼黑 (BMW 世界 / 市區觀光)",
    accommodation: "德法邊境精品飯店",
    image: "/images/itinerary/rothenburg.png",
    tips: ["購物最後衝刺：慕尼黑瑪麗恩廣場附近有各大名牌百貨", "參觀提醒：BMW 世界主要為靜態展示，對汽車愛好者是朝聖之地"],
    attractions: [
      { 
        time: "上午", 
        title: "紐倫堡 (Nuremberg)", 
        description: "【神聖羅馬帝國重鎮】參觀皇帝堡與這座充滿歷史重量的巴伐利亞第二大城。",
        foundedYear: "1050",
        mustEat: "紐倫堡小香腸 (Drei im Weggla)",
        mustEatLink: "https://www.die-nuernberger-bratwurst.de",
        souvenir: "胡桃鉗娃娃、Elisen 蜂蜜薑餅",
        address: "Burg 17, 90403 Nürnberg, Germany"
      },
      { 
        time: "下午", 
        title: "BMW 世界 (BMW Welt)", 
        description: "【必做：科技與美學的最佳體驗】親手操作 BMW 最新流線設計跑車的駕駛模擬，觀賞未來概念車，領略德國最頂尖的機械美學工藝。",
        story: "德國是汽車的故鄉，而 BMW 則是慕尼黑的驕傲。這座充滿未來感的建築，展示了從復古摩托車到最前線概念車的所有夢想。這是在德國旅途結束前，對其強大工業實力的最後巡禮。",
        foundedYear: "2007",
        keyPerson: "Karl Rapp",
        keyPersonDeeds: "BMW 品牌間接創始人，專精飛機引擎研發的工程天才。",
        mustEat: "BMW Cafe 經典特調",
        souvenir: "BMW 原廠精緻模型車",
        guideNote: {
          story: "BMW的藍白圓形標誌並非螺旋槳，而是巴伐利亞州的旗幟顏色。這裡展示了德國人對『極致工藝』近乎偏執的追求。",
          celebrity: "卡爾·拉普 (Karl Rapp)"
        },
        address: "Am Olympiapark 1, 80809 München, Germany"
      },
      { 
        time: "傍晚", 
        title: "慕尼黑市區觀光 (Munchen)", 
        description: "【必做：觀賞鐘琴表演與瑪麗恩廣場漫步】在巴伐利亞最繁華的中心點觀看 Glockenspiel 歷史人偶鐘錶表演，並在附近名店區為旅程做最後的購物衝刺。",
        foundedYear: "1158",
        keyPerson: "獅子亨利",
        keyPersonDeeds: "強大的巴伐利亞與薩克森公爵，慕尼黑城市的奠基者。",
        mustEat: "皇家啤酒屋豬腳 (Hofbräuhaus)",
        mustEatLink: "https://www.hofbraeuhaus.de",
        souvenir: "1L 豪華陶瓷啤酒杯",
        guideNote: {
          story: "瑪麗恩廣場的鐘琴 (Glockenspiel) 每天都會演出兩場歷史劇：16世紀的皇室婚禮與令人聞之喪膽的『木桶匠之舞』——這是為了慶祝黑死病結束。",
          celebrity: "威廉五世公爵",
          movie: "《蘇菲亞的最後一刻》(Sophie Scholl: The Final Days)"
        },
        address: "Marienplatz, 80331 München, Germany"
      },
      {
        time: "晚上",
        title: "晚餐 自理",
        description: "【自由用餐】慕尼黑市區自由選擇餐廳，推薦瑪麗恩廣場周邊的啤酒屋或巴伐利亞料理。"
      }
    ]
  },
  {
    day: 9,
    date: "6/13",
    dayOfWeek: "六",
    title: "珍重再見・帶著回憶賦歸",
    highlight: "慕尼黑機場（MUC）／ 桃園機場（TPE）",
    accommodation: "溫暖的家",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
    tips: ["退稅提醒：請預留充足時間在機場辦理海關蓋章與退稅手續"],
    attractions: [
      { 
        time: "上午", 
        title: "慕尼黑購物最終衝刺", 
        description: "【超市與藥妝掃貨】把握最後機會前往 dm、Rossmann 或 EDEKA 超市，帶走台灣人最愛的德國必買清單。",
        story: "除了 Balea 時空膠囊 (安瓶替代品) 與 Ajona 牙膏，Ritter Sport 巧克力與 Haribo 小熊軟糖的新奇口味也是超市必敗清單。德國超市特色的 Pom-Bär 小熊餅乾與 Hanuta 榴果威化餅也是行家必帶回台的隱藏版零食；瑞士段若還沒買到的 Kambly 餅乾、Coop 巧克力豆餅乾、Prix Garantie 護手霜、Aromat 雞精調味粉與 Ultrasun 防曬霜，機場超市是最後的補貨防線。",
        mustEat: "機場限定巴伐利亞啤酒點心",
        souvenir: "Balea 精華、發泡錠、Kambly 餅乾",
        address: "Nordallee 25, 85356 München, Germany"
      },
      {
        time: "12:00",
        title: "長榮航空 BR072 起飛",
        description: "【返航】慕尼黑（MUC）→ 台北桃園（TPE），長榮航空 BR072 準時起飛。",
        address: "Nordallee 25, 85356 München, Germany"
      },
      {
        time: "下午",
        title: "帶著回憶起飛 & 退稅攻略",
        description: "【返航任務】前往機場辦理行李寄送，並預留時間處理 Global Blue 或 Planet 的百貨退稅手續。",
        story: "從阿爾卑斯山的積雪到羅騰堡的石板路，這 9 天看過的每一場風景，都將成為人生中不可磨滅的養分。記得在機場找海關蓋章(ZOLL)，確保您的退稅金額順利入袋。歐洲，我們下次再見。",
        mustEat: "最後一餐精緻機上料理"
      }
    ]
  }
];

export const germanySwitzerlandHero: HeroItinerary = {
  title: "2026德瑞・最美少女峰、全覽鐵力士山、夢幻新天鵝堡、童話亞爾薩斯10日",
  image: "/images/itinerary/neuschwanstein.png",
  price: "NT$ 115,900 起",
  days: "9天8夜",
  date: "2026年6月5日(五) - 6月13日(六)",
  description: "深入體驗少女峰的阿爾卑斯壯麗，探訪迪士尼城堡原型的童話世界，漫步中世紀老城。",
};
