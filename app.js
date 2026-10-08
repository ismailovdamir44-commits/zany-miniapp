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
                <input
                    id="topupAmount"
                    type="number"
                    placeholder="50 000"
                    min="1000"
                    style="width:100%;margin-top:10px;padding:14px;border-radius:12px;border:1px solid #303856;background:#11182b;color:white;font-size:18px;box-sizing:border-box;"
                >
            </div>
        </div>

        <div class="section-title" style="margin-top:15px">
            Быстрый выбор
        </div>

        <div class="list-card">
            <div onclick="setTopupAmount(10000)">10 000 сум</div>
            <div onclick="setTopupAmount(25000)">25 000 сум</div>
            <div onclick="setTopupAmount(50000)">50 000 сум</div>
            <div onclick="setTopupAmount(100000)">100 000 сум</div>
            <div onclick="setTopupAmount(0)">✏️ Своя сумма</div>
        </div>

        <div class="section-title" style="margin-top:15px">
            Выберите способ оплаты
        </div>

        <div class="list-card">
    <div onclick="selectPayment('Uzcard')">
        💳 Uzcard <small>Комиссия 0%</small>
    </div>

    <div onclick="selectPayment('Humo')">
        💳 Humo <small>Комиссия 0%</small>
    </div>
    
    <div onclick="selectPayment('Visa')">
        💳 Visa <small>Комиссия 0%</small>
    </div>
</div>

        <button
            class="primary"
            onclick="startTopup()"
            style="width:100%;margin-top:15px">
            Пополнить
        </button>
    `);
}
let selectedPayment = '';

function selectPayment(method) {
    selectedPayment = method;

    alert('Вы выбрали: ' + method);
}
function setTopupAmount(amount) {
    const input = document.getElementById('topupAmount');

    if (amount === 0) {
        input.value = '';
        input.focus();
        return;
    }

    input.value = amount;
}

function startTopup() {
    const input = document.getElementById('topupAmount');
    const amount = Number(input.value);
    
    if (!selectedPayment) {
        alert('Сначала выберите способ оплаты');
        return;
}
    if (!amount || amount < 1000) {
        alert('Введите сумму не менее 1 000 сум');
        return;
    }

    shell('Подтверждение пополнения', `
        <div class="balance-card" style="margin-top:15px">
            <small>Сумма пополнения</small>
            <div class="balance">
                ${amount.toLocaleString()} <span>сум</span>
            </div>
        </div>

        <div class="list-card" style="margin-top:15px">
    <div>
        <b>💳 Способ оплаты</b>
        <small>${selectedPayment}</small>
    </div>
</div>

        <button
            class="primary"
            onclick="confirmTopup(${amount})"
            style="width:100%;margin-top:15px">
            Перейти к оплате
        </button>
    `);
}

function confirmTopup(amount) {
    const orderId = 'ZNY-' + Date.now();

    shell('Оплата', `
        <div class="balance-card" style="margin-top:15px">
            <small>Сумма к оплате</small>
            <div class="balance">
                ${amount.toLocaleString()} <span>сум</span>
            </div>
        </div>

        <div class="list-card" style="margin-top:15px">
            <div>
                <b>💳 Способ оплаты</b>
                <small>${selectedPayment}</small>
            </div>

            <div style="margin-top:15px">
                <b>🧾 Номер заказа</b>
                <small>${orderId}</small>
            </div>
        </div>
        
<div class="list-card" style="margin-top:15px">
    <b>📋 Инструкция</b>
    <p style="margin-top:10px">
        ${
            selectedPayment === 'Uzcard'
                ? '💳 Uzcard: после перехода к оплате будет показана инструкция для перевода.'
                : selectedPayment === 'Humo'
                ? '💳 Humo: после перехода к оплате будет показана инструкция для перевода.'
                : selectedPayment === 'Visa'
                ? '💳 Visa: после перехода к оплате будет показана инструкция для оплаты.'
                : 'Выберите способ оплаты.'
        }
    </p>
</div>

        <button
            class="primary"
            onclick="demoPayment('${orderId}', ${amount})"
            style="width:100%;margin-top:15px">
            Оплатить
        </button>
    `);
}

function demoPayment(orderId, amount) {
    alert(
        'Демо-оплата\n\n' +
        'Заказ: ' + orderId + '\n' +
        'Сумма: ' + amount.toLocaleString() + ' сум\n\n' +
        'Реальная оплата пока не подключена.'
    );
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
