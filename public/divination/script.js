// ========================================
// API URL 設定說明：
// ========================================
// 自動判斷環境並設定正確的 API URL
// 1. 本地開發 (file:// 或 Live Server): http://localhost:5001
// 2. Zeabur 生產環境: 使用相對路徑 (同源)
// ========================================

let API_URL = '';

// 判斷是否為本地開發環境
const isFileProtocol = window.location.protocol === 'file:';
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const isFlaskPort = window.location.port === '5001';

if (isFileProtocol) {
    // 檔案直接開啟
    API_URL = 'http://localhost:5000';
    console.log('🔧 環境: 檔案直接開啟 (file://)');
} else if (isLocalhost && !isFlaskPort) {
    // Live Server 或其他本地開發服務器
    API_URL = 'http://localhost:5000';
    console.log('🔧 環境: 本地開發服務器 (Live Server)');
} else {
    // 生產環境 (Zeabur) 或 Flask 直接服務
    API_URL = '';
    console.log('🔧 環境: 生產環境或 Flask 服務器');
}

console.log('🔗 API URL 設定為:', API_URL || '(同源相對路徑)');

// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ DOM 已載入，開始初始化...');

    // DOM 元素
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const exampleBtns = document.querySelectorAll('.example-btn');

    // 檢查關鍵元素是否存在
    if (!chatContainer || !userInput || !sendBtn) {
        console.error('❌ 關鍵 DOM 元素未找到！');
        console.error('chatContainer:', chatContainer);
        console.error('userInput:', userInput);
        console.error('sendBtn:', sendBtn);
        alert('系統錯誤：頁面元素載入失敗，請重新整理頁面');
        return;
    }

    console.log('✅ 所有 DOM 元素已找到');

    // 檢查 divinationDrawer 是否存在
    if (typeof divinationDrawer === 'undefined') {
        console.error('❌ divinationDrawer 未定義！');
    } else {
        console.log('✅ divinationDrawer 已載入');
    }

    // 全域變數
    let currentQuestion = '';
    let isWaitingForDraw = false;

    // 發送訊息
    async function sendMessage() {
        console.log('📤 sendMessage 函數被調用');

        const message = userInput.value.trim();
        console.log('📝 用戶輸入:', message);

        if (!message) {
            console.log('⚠️ 訊息為空，返回');
            return;
        }

        // 顯示用戶訊息
        addMessage(message, 'user');
        currentQuestion = message;
        userInput.value = '';

        // 檢查是否為資訊類問題（不需要占卜）
        if (isInformationalQuestion(message)) {
            // 直接調用 API 獲取答案，不需要抽籤
            getDirectAnswer(message);
        } else {
            // 顯示抽籤介面
            showDrawingInterface(message);
        }
    }

    // 判斷是否為資訊類問題
    function isInformationalQuestion(question) {
        const infoKeywords = [
            '聯絡', '聯繫', '聯系', '電話', '地址', '信箱', 'email',
            '背景', '介紹', '是誰', '專長', '經歷', '學歷',
            '工作室', '營業時間', '服務時間', '收費', '費用'
        ];

        const questionLower = question.toLowerCase();
        return infoKeywords.some(keyword => questionLower.includes(keyword));
    }

    // 直接獲取答案（不需要抽籤）
    async function getDirectAnswer(question) {
        const loadingDiv = addMessage('正在查詢中...', 'bot');

        try {
            const response = await fetch(`${API_URL}/api/divination/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: question,
                    numbers: null  // 不傳遞數字
                })
            });

            if (!response.ok) {
                throw new Error('API 請求失敗');
            }

            const data = await response.json();
            loadingDiv.remove();
            addMessage(data.response, 'bot');

        } catch (error) {
            console.error('Error:', error);
            loadingDiv.textContent = '抱歉，發生錯誤。請確認後端 API 是否正在運行。';
        }
    }

    // 顯示抽籤介面
    function showDrawingInterface(question) {
        console.log('🔮 準備顯示抽籤介面，問題:', question);

        // 檢查 divinationDrawer 是否存在
        if (typeof divinationDrawer === 'undefined') {
            console.error('❌ divinationDrawer 未定義！請檢查 divination.js 是否正確載入');
            addMessage('系統錯誤：抽籤模組未載入。請重新整理頁面（Ctrl+F5）', 'bot');
            return;
        }

        try {
            const drawHTML = divinationDrawer.showDrawInterface(question);
            console.log('✅ 抽籤 HTML 已生成');
            console.log('📄 HTML 長度:', drawHTML.length);

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = drawHTML.trim(); // 移除前後空白

            // 使用 querySelector 確保獲取元素節點
            const drawContainer = tempDiv.querySelector('.divination-draw-container');

            if (!drawContainer) {
                console.error('❌ 找不到 .divination-draw-container 元素');
                console.error('tempDiv 內容:', tempDiv.innerHTML.substring(0, 200));
                addMessage('系統錯誤：抽籤介面生成失敗', 'bot');
                return;
            }

            console.log('✅ 找到抽籤容器元素');

            // 強制添加可見性樣式
            drawContainer.style.display = 'block';
            drawContainer.style.visibility = 'visible';
            drawContainer.style.opacity = '1';
            drawContainer.style.position = 'relative';
            drawContainer.style.zIndex = '1000';
            drawContainer.style.minHeight = '500px';

            chatContainer.appendChild(drawContainer);
            chatContainer.classList.add('has-messages');

            console.log('✅ 抽籤介面已添加到頁面');
            console.log('📊 chatContainer 高度:', chatContainer.offsetHeight);
            console.log('📊 抽籤容器高度:', drawContainer.offsetHeight);

            // 滾動到底部
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 100);
        } catch (error) {
            console.error('❌ 顯示抽籤介面時發生錯誤:', error);
            addMessage('系統錯誤：無法顯示抽籤介面。錯誤：' + error.message, 'bot');
        }
    }

    // 當抽籤完成後調用此函數
    window.onDrawingComplete = async function (numbers) {
        // 顯示載入中
        const loadingDiv = addMessage('正在解卦中...', 'bot');

        try {
            const response = await fetch(`${API_URL}/api/divination/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: currentQuestion,
                    numbers: numbers  // 傳遞抽到的數字
                })
            });

            if (!response.ok) {
                throw new Error('API 請求失敗');
            }

            const data = await response.json();

            // 移除載入訊息
            loadingDiv.remove();

            // 顯示 AI 回應（不自動滾動）
            addMessage(data.response, 'bot', false);

            // 延遲後滾動到聊天容器頂部，讓用戶從頭閱讀
            setTimeout(() => {
                chatContainer.scrollTop = 0;
            }, 300);

        } catch (error) {
            console.error('Error:', error);
            loadingDiv.textContent = '抱歉，發生錯誤。請確認後端 API 是否正在運行。';
        }
    };

    // 添加訊息到聊天容器
    function addMessage(text, type, autoScroll = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        // 使用 marked 解析 Markdown 並以 innerHTML 插入
        // 如果是 bot 訊息才解析，user 訊息維持純文字
        if (type === 'bot' && typeof marked !== 'undefined') {
            messageDiv.innerHTML = marked.parse(text);
        } else {
            messageDiv.textContent = text;
        }

        chatContainer.appendChild(messageDiv);

        // 顯示聊天容器
        chatContainer.classList.add('has-messages');

        // 更新按鈕顯示狀態
        updateChatControls();

        // 可選的自動滾動到底部
        if (autoScroll) {
            setTimeout(() => {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 100);
        }

        return messageDiv;
    }

    // 更新對話管理按鈕的顯示狀態
    function updateChatControls() {
        const chatControls = document.querySelector('.chat-controls');
        const messages = chatContainer.querySelectorAll('.message');

        // 只有當有真正的對話訊息時才顯示按鈕
        if (messages.length > 0) {
            chatControls.style.display = 'flex';
        } else {
            chatControls.style.display = 'none';
        }
    }

    // 事件監聽
    console.log('🔗 綁定事件監聽器...');

    sendBtn.addEventListener('click', function () {
        console.log('🖱️ 送出按鈕被點擊');
        sendMessage();
    });

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log('⌨️ Enter 鍵被按下');
            sendMessage();
        }
    });

    // 範例按鈕
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            userInput.value = btn.dataset.text;
            userInput.focus();
        });
    });

    // 對話管理按鈕
    const clearChatBtn = document.getElementById('clearChatBtn');
    const downloadChatBtn = document.getElementById('downloadChatBtn');

    // 清除對話
    clearChatBtn.addEventListener('click', () => {
        if (confirm('確定要清除所有對話記錄嗎？')) {
            chatContainer.innerHTML = '';
            chatContainer.classList.remove('has-messages');
            updateChatControls(); // 更新按鈕狀態
            console.log('✅ 對話已清除');
        }
    });

    // 下載對話
    downloadChatBtn.addEventListener('click', () => {
        const messages = chatContainer.querySelectorAll('.message');
        if (messages.length === 0) {
            alert('目前沒有對話記錄可下載');
            return;
        }

        let content = '易經占卜陳老師 - 對話記錄\n';
        content += '='.repeat(50) + '\n';
        content += `下載時間：${new Date().toLocaleString('zh-TW')}\n`;
        content += '='.repeat(50) + '\n\n';

        messages.forEach((msg, index) => {
            const type = msg.classList.contains('user') ? '【用戶】' : '【陳老師】';
            // 使用 innerText 而非 textContent，因為 innerText 會保留網頁上視覺的換行與空白（例如 p 標籤產生的換行）
            const text = msg.innerText.trim();
            content += `${type}\n${text}\n\n`;
            content += '-'.repeat(50) + '\n\n';
        });

        // 創建下載
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `易經占卜對話記錄_${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        console.log('✅ 對話已下載');
    });

    console.log('✅ 事件監聽器綁定完成');

    // 頁面載入時檢查 API 狀態
    (async () => {
        try {
            const response = await fetch(`${API_URL}/api/divination/health`);
            const data = await response.json();
            console.log('✅ API 狀態:', data);
        } catch (error) {
            console.warn('⚠️ 無法連接到後端 API');
            addMessage('⚠️ 警告：無法連接到後端 API。請確認後端服務器是否正在運行（python backend/api.py）', 'bot');
        }
    })();

    console.log('🎉 初始化完成！');
});
