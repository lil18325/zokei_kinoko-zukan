// ====================================
// 1. データ定義 (キノコの詳細情報)
// ====================================
const KINOKO_DATA = {
    'kinoko-01': { name: 'タマゴタケ', image: 'images/kinoko_img/zokei_kinoko-01.webp', alt: 'タマゴタケ', attribute: 'テングタケ科', season: '夏～秋', edible: '食', detail_url: 'detail-01.html', description: '色は赤色で傘の縁には放射状の条線があります。柄もヒダも黄色く、柄の基部に大きな卵形の白いツボを持つのが特徴です。非常に美味な食用キノコです。', tag_class: 'tag-食' },
    'kinoko-02': { name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-02.webp', alt: '不明なキノコ', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-02.html', description: '画像のみのデータです。属性や時期、食用毒性は不明です。野生のキノコの判断には十分ご注意ください。', tag_class: 'tag-不明' },
    'kinoko-03': { name: 'ハリガネオチバタケ', image: 'images/kinoko_img/zokei_kinoko-03.webp', alt: 'ハリガネオチバタケ', attribute: 'ホウライタケ科', season: '夏～秋', edible: '不食', detail_url: 'detail-03.html', description: '枯れ葉や落葉層に生える非常に小さなキノコで、柄が細く針金のようです。', tag_class: 'tag-不食' },
    'kinoko-04': { name: 'カワラタケ', image: 'images/kinoko_img/zokei_kinoko-04.webp', alt: 'カワラタケ', attribute: 'タマキク科', season: '通年', edible: '不食', detail_url: 'detail-04.html', description: '扇形や半円形で、広葉樹の切り株や倒木などに重なり合って群生する。大変苦く食用にはならないが、抗がん剤の原料が得られる。', tag_class: 'tag-不食' },
    'kinoko-05': { name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-05.webp', alt: '不明', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-05.html', description: '属性や時期、食用毒性は不明です。', tag_class: 'tag-不明' },
    'kinoko-06': { name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-06.webp', alt: '不明', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-06.html', description: '属性や時期、食用毒性は不明です。', tag_class: 'tag-不明' },
    'kinoko-07': { name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-07.webp', alt: '不明', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-07.html', description: '属性や時期、食用毒性は不明です。', tag_class: 'tag-不明' },
    'kinoko-08': { name: 'カワラタケ', image: 'images/kinoko_img/zokei_kinoko-08.webp', alt: 'カワラタケ', attribute: 'タマキク科', season: '通年', edible: '不食', detail_url: 'detail-08.html', description: '食用には適しません。', tag_class: 'tag-不食' },
    'kinoko-09': { name: 'カワラタケ', image: 'images/kinoko_img/zokei_kinoko-09.webp', alt: 'カワラタケ', attribute: 'タマキク科', season: '通年', edible: '不食', detail_url: 'detail-09.html', description: '食用には適しません。', tag_class: 'tag-不食' },
    'kinoko-10': { name: 'スエヒロタケ', image: 'images/kinoko_img/zokei_kinoko-10.webp', alt: 'スエヒロタケ', attribute: 'スエヒロタケ科', season: '通年', edible: '不食', detail_url: 'detail-10.html', description: '白くて小さな貝殻のような形。広葉樹の枯れ木に群生する。', tag_class: 'tag-不食' },
    'kinoko-11': { name: 'アラゲキクラゲ', image: 'images/kinoko_img/zokei_kinoko-11.webp', alt: 'アラゲキクラゲ', attribute: 'キクラゲ科', season: '通年', edible: '食', detail_url: 'detail-11.html', description: '広葉樹の倒木に群生する。ゼラチン質で歯応えも良いが、キクラゲよりはやや硬い。', tag_class: 'tag-食' },
    'kinoko-12':{ name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-12.webp', alt: '不明', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-12.html', description: '属性や時期、食用毒性は不明です。', tag_class: 'tag-不明' },
    'kinoko-13': { name: 'アカゴタケ属の幼菌', image: 'images/kinoko_img/zokei_kinoko-13.webp', alt: 'アカゴタケ属', attribute: 'テングタケ科', season: '夏～秋', edible: '食', detail_url: 'detail-13.html', description: '幼菌は硬球のような丸い形をしており、安全に食べられます。', tag_class: 'tag-食' },
    'kinoko-14': { name: '不明なキノコ', image: 'images/kinoko_img/zokei_kinoko-14.webp', alt: '不明', attribute: '？？？', season: '？？？', edible: '？', detail_url: 'detail-14.html', description: '野生のキノコの判断には十分ご注意ください。', tag_class: 'tag-不明' },
    'kinoko-15': { name: 'ツルタケ', image: 'images/kinoko_img/zokei_kinoko-15.webp', alt: 'ツルタケ', attribute: 'テングタケ科', season: '夏～秋', edible: '食', detail_url: 'detail-15.html', description: 'ツルの首のような細長い柄が特徴です。', tag_class: 'tag-食' },
    'kinoko-16': { name: 'ドクベニタケ', image: 'images/kinoko_img/zokei_kinoko-16.webp', alt: 'ドクベニタケ', attribute: 'ベニタケ科', season: '秋', edible: '毒', detail_url: 'detail-16.html', description: '鮮やかな赤色の傘を持つ。強い毒性があり、胃腸系の中毒を引き起こす。', tag_class: 'tag-毒' },
    'kinoko-17': { name: 'ヒラタケ', image: 'images/kinoko_img/zokei_kinoko-17.webp', alt: 'ヒラタケ', attribute: 'キシメジ科', season: '晩秋～春', edible: '食', detail_url: 'detail-17.html', description: '表面の色は、黒から白色に変化する。切り株などに重なり合って群生する。人気の食用キノコです。', tag_class: 'tag-食' }
};

// ====================================
// 2. 初期表示データ
// ====================================
const INITIAL_MAP_CONTENT = `
    <h3>東京造形大学 周辺の植生</h3>
    <div class="initial-info">
        <p>13号館・金属工房の裏は、クヌギやコナラ、ブナが主体の「雑木林エリア」と「竹林エリア」に分かれます。森へ入る際は十分に注意してください。</p>
        <h4>雑木林エリア</h4>
        <p>ブナ科の広葉樹の倒木や落葉層は、多様なきのこの活動を支える重要なエリアです。</p>
        <h4>竹林エリア</h4>
        <p>竹林へ向かう道にはおがくずが撒かれており、地図ではおがくずがまかれた道を示しています。</p>
        <p class="guide-message">地図上のピンをクリックするか、ナビゲーションボタンでキノコの詳細が表示されます。</p>
    </div>
`;

// ====================================
// 3. 管理用変数
// ====================================
const MAX_INDEX = 17;
let currentIndex = 0; 

const PIN_LOCATIONS = {
    'kinoko-01': { top: '68%', left: '63%' }, 
    'kinoko-02': { top: '73%', left: '65%' }, 
    'kinoko-03': { top: '70%', left: '68%' }, 
    'kinoko-04': { top: '60%', left: '66%' }, 
    'kinoko-05': { top: '56%', left: '74%' }, 
    'kinoko-06': { top: '57%', left: '71%' }, 
    'kinoko-07': { top: '49%', left: '65%' }, 
    'kinoko-08': { top: '52%', left: '67%' }, 
    'kinoko-09': { top: '41%', left: '41%' }, 
    'kinoko-10': { top: '35%', left: '44%' }, 
    'kinoko-11': { top: '23%', left: '70%' }, 
    'kinoko-12': { top: '26%', left: '65%' }, 
    'kinoko-13': { top: '19%', left: '68%' }, 
    'kinoko-14': { top: '31%', left: '40%' }, 
    'kinoko-15': { top: '54%', left: '80%' }, 
    'kinoko-16': { top: '32%', left: '37%' }, 
    'kinoko-17': { top: '22%', left: '67%' }
};

// ====================================
// 4. マップ関連の関数
// ====================================
function initializeMap() {
    const detailPanel = document.getElementById('map-detail-panel');
    const pinWrappers = document.querySelectorAll('.pin-wrapper');
    const pinIcons = document.querySelectorAll('.pin-icon');
    
    pinWrappers.forEach(wrapper => {
        const kinokoId = wrapper.querySelector('.pin-icon').getAttribute('data-id');
        if (PIN_LOCATIONS[kinokoId]) {
            wrapper.style.top = PIN_LOCATIONS[kinokoId].top;
            wrapper.style.left = PIN_LOCATIONS[kinokoId].left;
        }
    });

    resetMapState(detailPanel, pinIcons);
    setupNavigation(detailPanel, pinIcons);

    pinIcons.forEach(pin => {
        pin.addEventListener('click', () => {
            const kinokoId = pin.getAttribute('data-id'); 
            const index = parseInt(kinokoId.split('-')[1]);
            const data = KINOKO_DATA[kinokoId];

            if (index === currentIndex) {
                resetMapState(detailPanel, pinIcons);
            } else if (data) {
                currentIndex = index;
                updateDetailPanel(detailPanel, data);
                setActivePin(pin, pinIcons);
            }
        });
    });
}

function setupNavigation(panel, allPins) {
    const existingNav = panel.querySelector('.map-nav-inner');
    if (existingNav) existingNav.remove();

    const navHTML = `
        <div class="map-nav-inner">
            <button id="prev-kinoko" aria-label="前へ">&lt;</button>
            <button id="next-kinoko" aria-label="次へ">&gt;</button>
        </div>
    `;
    panel.insertAdjacentHTML('beforeend', navHTML);
    
    const prevButton = document.getElementById('prev-kinoko');
    const nextButton = document.getElementById('next-kinoko');
    
    if (prevButton && nextButton) {
        // ここで navigate を呼び出す際、必ず最新の allPins を渡すようにします
        prevButton.onclick = (e) => {
            e.stopPropagation(); // 念のためイベントの伝播を止める
            navigate(-1, panel, document.querySelectorAll('.pin-icon'));
        };
        nextButton.onclick = (e) => {
            e.stopPropagation();
            navigate(1, panel, document.querySelectorAll('.pin-icon'));
        };
    }
}

function navigate(direction, panel, allPins) {
    // 初期状態(0)から「次へ」なら1、「前へ」なら最大値へ
    if (currentIndex === 0) {
        currentIndex = direction === 1 ? 1 : MAX_INDEX; 
    } else {
        currentIndex += direction;
    }

    // ループ処理
    if (currentIndex > MAX_INDEX) currentIndex = 1;
    else if (currentIndex < 1) currentIndex = MAX_INDEX;

    const kinokoId = `kinoko-${String(currentIndex).padStart(2, '0')}`;
    const data = KINOKO_DATA[kinokoId];

    if (data) {
        updateDetailPanel(panel, data);
        // data-id 属性でピンを探してアクティブにする
        const newActivePin = document.querySelector(`.pin-icon[data-id="${kinokoId}"]`);
        setActivePin(newActivePin, allPins);
    }
}

function updateDetailPanel(panel, data) {
    panel.innerHTML = `
        <div class="pin-detail-view">
            <h3>${data.name}</h3>
            <img src="${data.image}" alt="${data.alt}" class="popup-image">
            <div class="popup-info">
                <p><strong>属性：</strong> ${data.attribute}</p>
                <p><strong>時期：</strong> ${data.season}</p>
                <p><strong>食用：</strong> <span class="edible-tag ${data.tag_class}">${data.edible}</span></p>
            </div>
            <div class="detail-description-wrapper">
                <h4>概説</h4>
                <p>${data.description}</p>
            </div>
            <a href="${data.detail_url}" class="more-button">もっと見る ></a>
        </div>
    `;
    setupNavigation(panel, document.querySelectorAll('.pin-icon'));
}

function setActivePin(currentPin, allPins) {
    allPins.forEach(pin => pin.classList.remove('active'));
    if (currentPin) currentPin.classList.add('active');
}

function resetMapState(panel, allPins) {
    panel.innerHTML = INITIAL_MAP_CONTENT;
    setActivePin(null, allPins);
    currentIndex = 0;
    setupNavigation(panel, allPins);
}

// ====================================
// 5. スクロールアニメーション関数
// ====================================
function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視をやめる（何度もふわふわさせないため）
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// ====================================
// 6. 全体の初期化実行
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    initializeMap(); // マップ機能の開始
    initFadeIn();    // スクロールアニメーションの開始
});

