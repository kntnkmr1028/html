const models = [ //モデルデータ
    { name: "iPhone17ProMax", camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6S", inch:6.9 },
    { name: "iPhone17Pro",    camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6S", inch:6.3 },
    { name: "iPhone17",       camera: "縦2眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6V", inch:6.3 },
    { name: "iPhoneAir",      camera: "一眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6a", inch:6.5 },
    { name: "iPhone16ProMax", camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6c", inch:6.9 },
    { name: "iPhone16Pro",    camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6c", inch:6.3 },
    { name: "iPhone16Plus",   camera: "縦2眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6o", inch:6.7 },
    { name: "iPhone16",       camera: "縦2眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6o", inch:6.1 },
    { name: "iPhone16e",      camera: "一眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd6t", inch:6.1 },
    { name: "iPhone15ProMax", camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/7cxh", inch:6.7 },
    { name: "iPhone15Pro",    camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/7cxh", inch:6.1},
    { name: "iPhone15Plus",   camera: "斜め2眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6x", inch:6.7 },
    { name: "iPhone15",       camera: "斜め2眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd6x", inch:6.1 },
    { name: "iPhone14ProMax", camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd72", inch:6.7 },
    { name: "iPhone14Pro",    camera: "三眼", edge: "角", notch: "Dynamic Island", wp:"https://w.wiki/Hd72", inch:6.1 },
    { name: "iPhone14Plus",   camera: "斜め2眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd74", inch:6.7 },
    { name: "iPhone14",       camera: "斜め2眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd74", inch:6.1 },
    { name: "iPhone13ProMax", camera: "三眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd77", inch:6.7 },
    { name: "iPhone13Pro",    camera: "三眼", edge: "角", notch: "ノッチ",wp:"https://w.wiki/Hd77", inch:6.1 },
    { name: "iPhone13",       camera: "斜め2眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd79", inch:6.1 },
    { name: "iPhone13mini",   camera: "斜め2眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd79", inch:5.4 },
    { name: "iPhone12ProMax", camera: "三眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd7B", inch:6.7 },
    { name: "iPhone12Pro",    camera: "三眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/Hd7B", inch:6.1 },
    { name: "iPhone12",       camera: "縦2眼", edge: "角", notch: "ノッチ", wp:"https://w.wiki/5Erg", inch:6.1},
    { name: "iPhone12mini",   camera: "縦2眼", edge: "角", notch: "ノッチ",wp:"https://w.wiki/5Erg", inch:5.4 },
    { name: "iPhone11ProMax", camera: "三眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/5Erg", inch:6.5 },
    { name: "iPhone11Pro",    camera: "三眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/5Erg", inch:5.8 },
    { name: "iPhone11",       camera: "縦2眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/Hd7J", inch:6.1 },
    { name: "iPhoneXsMax",    camera: "縦2眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/Hd7K", inch:6.5 },
    { name: "iPhoneXs",       camera: "縦2眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/Hd7K", inch:5.8 },
    { name: "iPhoneX",        camera: "縦2眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/47Mi", inch:5.8 },
    { name: "iPhoneXR",       camera: "一眼", edge: "丸", notch: "ノッチ", wp:"https://w.wiki/Hd7Q", inch:6.1 },
    { name: "iPhone8Plus",    camera: "横2眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/Hd7t", inch:5.5 },
    { name: "iPhone8",        camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/3GiT", inch:4.7 },
    { name: "iPhone7Plus",    camera: "横2眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/47E$", inch:5.5 },
    { name: "iPhone7",        camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/3J3t", inch:4.7 },
    { name: "iPhone6sPlus",   camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/Hd7w", inch:5.5 },
    { name: "iPhone6s",       camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/3Eo$", inch:4.7 },
    { name: "iPhone6Plus",    camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/Hd7z", inch:5.5 },
    { name: "iPhone6",        camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/3HKa", inch:4.7 },
    { name: "iPhoneSE3", camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/5Sm9", inch:4.7 },
    { name: "iPhoneSE2", camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/4kqv", inch:4.7 },
    { name: "iPhoneSE",  camera: "一眼", edge: "角", notch: "ホームボタン", wp:"https://w.wiki/5AC7", inch:4 },
    { name: "iPhone5c",  camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/44te", inch:4 },
    { name: "iPhone5s",  camera: "一眼", edge: "角", notch: "ホームボタン", wp:"https://w.wiki/43rV", inch:4 },
    { name: "iPhone5",   camera: "一眼", edge: "角", notch: "ホームボタン", wp:"https://w.wiki/Hd85", inch:4 },
    { name: "iPhone4s",  camera: "一眼", edge: "角", notch: "ホームボタン", wp:"https://w.wiki/4ZNr", inch:3.5 },
    { name: "iPhone4",   camera: "一眼", edge: "角", notch: "ホームボタン", wp:"https://w.wiki/5E8H", inch:3.5 },
    { name: "iPhone3Gs", camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/5E8D", inch:3.5 },
    { name: "iPhone3G",  camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/Hd88", inch:3.5 },
    { name: "iPhone",    camera: "一眼", edge: "丸", notch: "ホームボタン", wp:"https://w.wiki/4Jzj", inch:3.5 }
];

let filters = { camera: null, notch: null, edge: null, "screen-size": [] };

document.querySelectorAll('.subsection-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subsection = btn.dataset.subsection;
        const content = document.getElementById(subsection + '-content');
        const arrow = btn.querySelector('.arrow');
        content.classList.toggle('expanded');
        arrow.textContent = content.classList.contains('expanded') ? '▲' : '▼';
    });
});

document.querySelectorAll('.option').forEach(el => { //フィルター適用？
    el.addEventListener('click', () => {
        const type = el.dataset.type;
        const val = el.dataset.value || el.dataset.inch;
        const valNum = type === "screen-size" ? parseFloat(val) : val;

        if (type === "screen-size") {
            // 複数選択対応
            const index = filters[type].indexOf(valNum);
            if (index > -1) {
                filters[type].splice(index, 1);
                el.classList.remove('active');
            } else {
                filters[type].push(valNum);
                el.classList.add('active');
            }
        } else {
            // 単一選択
            if (filters[type] === valNum) {
                filters[type] = null;
                el.classList.remove('active');
            } else {
                document.querySelectorAll(`.option[data-type="${type}"]`).forEach(opt => opt.classList.remove('active'));
                filters[type] = valNum;
                el.classList.add('active');
            }
        }
        render();
    });
});

function render() {
    const resDiv = document.getElementById('results');
    resDiv.innerHTML = '';

    const filtered = models.filter(m => {
        return (!filters.camera || m.camera === filters.camera) &&
               (!filters.notch || m.notch === filters.notch) &&
               (!filters.edge || m.edge === filters.edge) &&
               (filters["screen-size"].length === 0 || filters["screen-size"].includes(m.inch));
    });

    if (filtered.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'no-result';
        noResult.textContent = '該当する機種がありません';
        resDiv.appendChild(noResult);
        return;
    }

    filtered.forEach(m => {
        const card = document.createElement('div');
        card.className = 'model-card';

        const title = document.createElement('div');
        title.className = 'model-name';
        title.textContent = m.name;

        const link = document.createElement('a');
        link.className = 'wiki-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.href = m.wp;
        link.textContent = 'Wikipedia';

        card.appendChild(title);
        card.appendChild(link);
        resDiv.appendChild(card);
    });
}

function resetAll() { //リセット
    filters = { camera: null, notch: null, edge: null, "screen-size": [] };
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
    render();
}

(function() { //テーマ切り替え
    const btn = document.getElementById('theme-toggle');
    function applyTheme(theme) {
        document.documentElement.classList.remove('theme-light', 'theme-dark');
        document.documentElement.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
        if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    let theme = localStorage.getItem('theme') || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(theme);
    if(btn) btn.addEventListener('click', () => {
        theme = document.documentElement.classList.contains('theme-dark') ? 'light' : 'dark';
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    });
})();

render();
