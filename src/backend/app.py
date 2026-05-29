"""
智能未來進行室 (贏家代理人) - 統一後端入口
整合三個服務：西洋占星、塔羅占卜、易經卜卦
架構：Flask Blueprint，各子模組路由互不干擾
"""

from flask import Flask, jsonify
from flask_cors import CORS
from pathlib import Path
from dotenv import load_dotenv
import os

# 載入環境變數
load_dotenv(Path(__file__).resolve().parent.parent.parent / 'etc' / 'secrets' / '.env')

app = Flask(__name__)
CORS(app)

# ========== 掛載子模組 ==========

try:
    from blueprints.astro.app import astro_bp
    app.register_blueprint(astro_bp, url_prefix='/api/astro')
except ImportError:
    pass

try:
    from blueprints.tarot.app import tarot_bp
    app.register_blueprint(tarot_bp, url_prefix='/api/tarot')
except ImportError:
    pass

from blueprints.divination.api import divination_bp
app.register_blueprint(divination_bp, url_prefix='/api/divination')


@app.route('/health')
def health():
    return jsonify({
        'status': 'ok',
        'services': ['astrology', 'tarot', 'divination']
    })


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    print("Backend starting on port: " + str(port))
    app.run(host='0.0.0.0', port=port, debug=False)
