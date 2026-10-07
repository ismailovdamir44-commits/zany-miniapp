const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function showPage(page) {
    if (page === 'home') {
        location.reload();
    }

    if (page === 'shop') {
        renderShop();
    }

    if (page === 'mobile') {
        renderMobile();
    }

    if (page === 'topup') {
        renderTopup();
    }
}

function shell(title, body) {
    document.getElementById('content').innerHTML =
        `<div class="section-title" style="font-size:20px;margin-top:12px">
            ‹ ${title}
        </div>${body}`;
}

function renderShop() {
    shell('Магазин', `
        <div class="list-card">
            <div onclick="renderMobile()">
                🎮 Mobile Legends
                <small>Алмазы · Скин · Валюта</small>
            </div>

            <div>
                🔥 Free Fire
                <small>Алмазы · Пакеты · Подписки</small>
            </div>

            <div>
                🪖 PUBG Mobile
                <small>UC · Royale Pass</small>
            </div>

            <div>
                ⭐ Telegram Stars
                <small>Звёзды для Telegram</small>
            </div>

            <div>
                ◉ Roblox
                <small>Робуксы · Подписки</small>
            </div>

            <div>
                ⚫ Steam
                <small>Кошелёк · Игры</small>
            </div>
        </div>
    `);
}

function renderMobile() {
    shell('Mobile Legends', `
        <div class="bonus">
            <div>
                <b>Mobile Legends</b>
                <small>Алмазы для вашего аккаунта</small>
            </div>
        </div>

        <div class="list-card" style="margin-top:12px">

            <div>
                <b>ID аккаунта</b>
                <small>12345678 (необязательно)</small>
            </div>

            <div>
                💎 86 алмазов
                <button class="primary"
                    style="float:right;padding:7px 12px">
                    1 200 сум
                </button>
            </div>

            <div>
                💎 172 алмаза
                <button class="primary"
                    style="float:right;padding:7px 12px">
                    2 300 сум
                </button>
            </div>

            <div>
                💎 257 алмазов
                <button class="primary"
                    style="float:right;padding:7px 12px">
                    3 400 сум
                </button>
            </div>

        </div>
    `);
}

function renderTopup() {
    shell('Пополнение баланса', `
        <div class="balance-card">
            <div>
                <small>Введите сумму</small>
                <div class="balance">
                    50 000 <span>сум</span>
                </div>
            </div>
        </div>

        <div class="section-title">
            Выберите способ оплаты
        </div>

        <div class="list-card">

            <div>
                💳 Uzcard
                <small>Комиссия 0%</small>
            </div>

            <div>
                💳 Humo
                <small>Комиссия 0%</small>
            </div>

            <div>
                💳 Click
                <small>Комиссия 0%</small>
            </div>

            <div>
                💳 Payme
                <small>Комиссия 0%</small>
            </div>

        </div>

        <button class="primary"
            style="width:100%;margin-top:15px">
            Оплатить
        </button>
    `);
}
