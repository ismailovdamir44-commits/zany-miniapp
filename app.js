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

    if (page === 'history') {
        renderHistory();
    }

    if (page === 'profile') {
    renderProfile();
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

            <div onclick="renderFreeFire()">
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
function renderMobile() {
    shell('Mobile Legends', `
        <div class="bonus">
            <div class="gift">💎</div>
            <div>
                <b>Mobile Legends</b>
                <small>Пополнение алмазами</small>
            </div>
        </div>

        <div class="list-card" style="margin-top:12px">

            <div>
                <b>ID игрока</b>
                <input
                    id="mlPlayerId"
                    type="number"
                    placeholder="Введите ID"
                    style="width:100%;margin-top:10px;padding:12px;border-radius:10px;border:1px solid #27304b;background:#0b1020;color:white;font-size:16px"
                >
            </div>

            <div>
                💎 86 алмазов
                <button class="primary"
                    onclick="orderMobile(86, 1200)"
                    style="float:right;padding:7px 12px">
                    1 200 сум
                </button>
            </div>

            <div>
                💎 172 алмаза
                <button class="primary"
                    onclick="orderMobile(172, 2300)"
                    style="float:right;padding:7px 12px">
                    2 300 сум
                </button>
            </div>

            <div>
                💎 257 алмазов
                <button class="primary"
                    onclick="orderMobile(257, 3400)"
                    style="float:right;padding:7px 12px">
                    3 400 сум
                </button>
            </div>

        </div>
    `);
}
function orderMobile(diamonds, price) {
    const playerId = document.getElementById('mlPlayerId')?.value;

    if (!playerId) {
        alert('Введите ID игрока');
        return;
    }

    shell('Подтверждение заказа', `
        <div class="bonus">
            <div class="gift">💎</div>
            <div>
                <b>Mobile Legends</b>
                <small>Проверьте данные перед заказом</small>
            </div>
        </div>

        <div class="list-card" style="margin-top:12px">

            <div>
                <small>ID игрока</small>
                <b style="display:block;margin-top:5px">${playerId}</b>
            </div>

            <div>
                <small>Товар</small>
                <b style="display:block;margin-top:5px">
                    💎 ${diamonds} алмазов
                </b>
            </div>

            <div>
                <small>К оплате</small>
                <b style="display:block;margin-top:5px">
                    ${price.toLocaleString()} сум
                </b>
            </div>

        </div>

        <button class="primary"
            onclick="confirmMobileOrder('${playerId}', ${diamonds}, ${price})"
            style="width:100%;margin-top:15px">
            Подтвердить заказ
        </button>

        <button
            onclick="renderMobile()"
            style="width:100%;margin-top:10px;padding:12px;border-radius:12px;border:1px solid #27304b;background:#11182b;color:white">
            ← Вернуться
        </button>
    `);
}

function confirmMobileOrder(playerId, diamonds, price) {
    alert(
        'Заказ подтверждён!\\n\\n' +
        'Mobile Legends\\n' +
        'ID: ' + playerId + '\\n' +
        'Алмазы: ' + diamonds + '\\n' +
        'Сумма: ' + price.toLocaleString() + ' сум'
    );
}
function renderFreeFire() {
    shell('Free Fire', `
        <div class="bonus">
            <div class="gift">🔥</div>
            <div>
                <b>Free Fire</b>
                <small>Пополнение алмазами</small>
            </div>
        </div>

        <div class="list-card" style="margin-top:12px">

            <div>
                <b>ID игрока</b>
                <input
                    id="ffPlayerId"
                    type="text"
                    inputmode="numeric"
                    placeholder="Введите ID"
                    style="width:100%;margin-top:10px;padding:14px;border-radius:12px;border:1px solid #27304b;background:#080d1d;color:white;font-size:16px"
                >
            </div>

            <div>
                💎 100 алмазов
                <button class="primary"
                    onclick="orderFreeFire(100, 3500)"
                    style="float:right;padding:7px 12px">
                    3 500 сум
                </button>
            </div>

            <div>
                💎 310 алмазов
                <button class="primary"
                    onclick="orderFreeFire(310, 9500)"
                    style="float:right;padding:7px 12px">
                    9 500 сум
                </button>
            </div>

            <div>
                💎 520 алмазов
                <button class="primary"
                    onclick="orderFreeFire(520, 15000)"
                    style="float:right;padding:7px 12px">
                    15 000 сум
                </button>
            </div>

        </div>
    `);
}

function orderFreeFire(diamonds, price) {
    const playerId = document.getElementById('ffPlayerId').value.trim();

    if (!playerId) {
        alert('Введите ID игрока');
        return;
    }

    if (!/^\d+$/.test(playerId)) {
        alert('ID должен содержать только цифры');
        return;
    }

    shell('Подтверждение заказа', `
        <div class="bonus">
            <div class="gift">🔥</div>
            <div>
                <b>Free Fire</b>
                <small>Проверьте данные перед заказом</small>
            </div>
        </div>

        <div class="list-card" style="margin-top:12px">

            <div>
                <small>ID игрока</small>
                <b style="display:block;margin-top:5px">${playerId}</b>
            </div>

            <div>
                <small>Товар</small>
                <b style="display:block;margin-top:5px">
                    💎 ${diamonds} алмазов
                </b>
            </div>

            <div>
                <small>К оплате</small>
                <b style="display:block;margin-top:5px">
                    ${price.toLocaleString()} сум
                </b>
            </div>

        </div>

        <button class="primary"
            onclick="confirmFreeFireOrder('${playerId}', ${diamonds}, ${price})"
            style="width:100%;margin-top:15px">
            Подтвердить заказ
        </button>

        <button
            onclick="renderFreeFire()"
            style="width:100%;margin-top:10px;padding:12px">
            ← Вернуться
        </button>
    `);
}
function confirmFreeFireOrder(playerId, diamonds, price) {
    const orders = JSON.parse(localStorage.getItem('zanyOrders') || '[]');

    orders.unshift({
        game: 'Free Fire',
        playerId: playerId,
        diamonds: diamonds,
        price: price,
        status: 'Новый заказ',
        date: new Date().toLocaleString()
    });

    localStorage.setItem('zanyOrders', JSON.stringify(orders));

    alert(
        'Заказ принят!\n\n' +
'Free Fire\n' +
'ID: ' + playerId + '\n' +
'Алмазы: ' + diamonds + '\n' +
'Сумма: ' + price.toLocaleString() + ' сум'
);
}
function renderHistory() {
    const orders = JSON.parse(localStorage.getItem('zanyOrders') || '[]');

    if (orders.length === 0) {
        shell('История', `
            <div class="bonus" style="margin-top:15px">
                <div class="gift">📋</div>
                <div>
                    <b>История пуста</b>
                    <small>Здесь будут отображаться ваши заказы</small>
                </div>
            </div>
        `);
        return;
    }

    let html = '<div class="list-card" style="margin-top:12px">';

    orders.forEach(order => {
        html += `
            <div>
                <b>${order.game}</b>
                <small>ID: ${order.playerId}</small>
                <small>💎 ${order.diamonds} алмазов</small>
                <small>${order.price.toLocaleString()} сум · ${order.status}</small>
                <small>${order.date}</small>
            </div>
        `;
    });

    html += '</div>';

    shell('История', html);
}
function renderProfile() {
    shell('Профиль', `
        <div class="balance-card" style="margin-top:15px">
            <small>Профиль ZANY</small>
            <div class="balance">👤 Пользователь</div>
        </div>

        <div class="list-card" style="margin-top:12px">
            <div>
                <b>💰 Баланс</b>
                <small>12 450 сум</small>
            </div>
            <div>
                <b>🎁 Бонус</b>
                <small>Бонус для новых пользователей</small>
            </div>
            <div>
                <b>📋 Мои заказы</b>
                <small>История покупок и пополнений</small>
            </div>
        </div>
    `);
}
