const concepts = {
    1: {
        title: "中心化 vs 去中心化",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p><strong>中心化：</strong>村里只有王会计一个人记账</p>
                <ul>
                    <li>王会计偷偷改账？没人能发现</li>
                    <li>王会计生病了？全村都没法交易</li>
                    <li>村长想冻结谁的钱？说一声就行</li>
                </ul>
            </div>

            <div class="concept-section">
                <h3>[去中心化方案]</h3>
                <p>每个人都有一本一模一样的账本！</p>
                <ul>
                    <li>每次交易全村人都记一笔</li>
                    <li>有人想偷偷改账？和其他人的账本一比，马上发现</li>
                </ul>
            </div>

            <div class="analogy-box">
                <h3>[生活类比]</h3>
                <p><strong>中心化：</strong>银行就是你的管家！钱在银行，银行说了算</p>
                <p><strong>去中心化：</strong>每家都有账本，自己说了算</p>
            </div>

            <div class="feynman-test">
                <h3>[一句话彻底理解]</h3>
                <p><strong>中心化：</strong>有一个"中心老大"控制系统。</p>
                <p><strong>去中心化：</strong>没有单一控制者，而是由全球很多节点共同维护规则。</p>
            </div>

            <div class="analogy-box">
                <h3>[真正高级的一句话（最重要）]</h3>
                <p>加密货币真正革命的地方不是：<br><strong>"数字货币"</strong><br>而是：<br><strong>"第一次把信任从机构转移到了数学和共识机制。"</strong></p>
            </div>

            <div class="feynman-test">
                <h3>[更深层的理解]</h3>
                <p><strong>区块链第一次尝试：</strong>不依赖中心，也能让陌生人建立信任。</p>
                <p><strong>这是非常巨大的变化：</strong></p>
                <ul>
                    <li>互联网改变了：<strong>"信息如何传播"</strong></li>
                    <li>去中心化正在尝试改变：<strong>"信任如何建立"</strong></li>
                </ul>
            </div>
        `
    },
    2: {
        title: "区块链",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>一本所有人共享的、写上去就擦不掉的公共账本，每页都写着"上一页的编号"</p>
            </div>

            <div class="concept-section">
                <h3>[日记本类比]</h3>
                <p>想象一个日记本：</p>
                <ul>
                    <li>第1页写完后，在第2页开头抄上第1页的摘要</li>
                    <li>第2页写完后，在第3页开头抄上第2页的摘要</li>
                    <li>想偷偷改第1页？第2页的摘要不对了，整本乱了</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>区块链 = 一本改不了的公共账本！改一页，后面全对不上</p>
            </div>
        `
    },
    3: {
        title: "加密货币",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>不用纸币、不用银行卡，在区块链上流通的"数字钱"</p>
            </div>

            <div class="concept-section">
                <h3>[游戏币类比]</h3>
                <p>你去游乐场玩：</p>
                <ul>
                    <li>先用人民币换游戏币</li>
                    <li>在各个游戏机上用游戏币</li>
                    <li>加密货币 = 数字世界的游戏币</li>
                </ul>
            </div>

            <div class="concept-section">
                <h3>[比特币的特殊规则]</h3>
                <ul>
                    <li>总量只有2100万枚！永远不会多印</li>
                    <li>每4年"产量减半"</li>
                    <li>已发行约1960万枚（约93.5%）</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>比特币 = 一台永远按固定速度生产金币的机器！总量有限</p>
            </div>
        `
    },
    4: {
        title: "钱包",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>钱包不装钱，钱包装的是钥匙！钱在区块链上，钥匙在你手里</p>
            </div>

            <div class="concept-section">
                <h3>[银行卡类比]</h3>
                <p>你的银行卡里其实没有钱：</p>
                <ul>
                    <li>钱在银行的数据库里</li>
                    <li>银行卡只是一把"钥匙"，证明"这个账户是你的"</li>
                    <li>加密钱包：你自己保管钥匙，谁也替不了你</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>钱包 = 钥匙包！币在链上，不在钱包里！丢了钥匙 = 丢了所有</p>
            </div>
        `
    },
    5: {
        title: "私钥 vs 公钥",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>私钥是你的"超级密码"，公钥是你的"银行账号"</p>
            </div>

            <div class="concept-section">
                <h3>[保险箱类比]</h3>
                <ul>
                    <li>公钥 = 保险箱的地址（所有人能看到，别人能存钱）</li>
                    <li>私钥 = 打开保险箱的唯一钥匙（只有你有，取钱必须用）</li>
                    <li>钥匙能生成地址，但地址推不出钥匙</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>私钥 = 你的命根子！丢了 = 钱没了！泄露了 = 钱被偷！绝不能告诉任何人</p>
            </div>
        `
    },
    6: {
        title: "智能合约",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>一段"自动执行的代码合约"！条件满足了就自动执行，不需要任何人批准</p>
            </div>

            <div class="concept-section">
                <h3>[自动售货机类比]</h3>
                <ol>
                    <li>你投入5元 → 按下"可乐"按钮</li>
                    <li>机器自动掉出一瓶可乐</li>
                    <li>不需要售货员，不需要收银员</li>
                    <li>但是：自动售货机卡住能找客服，智能合约有bug代码严格执行，还改不了</li>
                </ol>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>智能合约 = 自动售货机！好处是不需要人，坏处是bug也自动执行</p>
            </div>
        `
    },
    7: {
        title: "DApp",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>一个"没有老板"的App！没有公司控制，规则写在区块链上，所有人能看到</p>
            </div>

            <div class="concept-section">
                <h3>[微信 vs Uniswap]</h3>
                <p><strong>传统App（微信）：</strong></p>
                <ul>
                    <li>腾讯的服务器控制一切</li>
                    <li>腾讯能封你的账号</li>
                    <li>腾讯能改规则</li>
                </ul>
                <p><strong>DApp（Uniswap）：</strong></p>
                <ul>
                    <li>没有公司控制</li>
                    <li>规则是智能合约，公开透明</li>
                    <li>没人能封你的账号</li>
                    <li>没人能偷偷改规则</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>DApp = 没有老板的App！规则公开，无人能改，自动运行</p>
            </div>
        `
    },
    8: {
        title: "Gas费",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>在区块链上"办事"要付的"手续费"！就像寄信要贴邮票</p>
            </div>

            <div class="concept-section">
                <h3>[快递员类比]</h3>
                <p>区块链网络就像快递公司：</p>
                <ul>
                    <li>你想让它跑，就得加油</li>
                    <li>Gas费 = 给快递员的运费</li>
                    <li>网络不堵油价便宜</li>
                    <li>网络堵的时候油价暴涨</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>Gas费 = 区块链上的"过路费"！不付钱，交易跑不动</p>
            </div>
        `
    },
    9: {
        title: "共识机制",
        content: `
            <div class="concept-section">
                <h3>[大白话解释]</h3>
                <p>一群互不认识的人，如何就"哪本账本是正确的"达成一致的方法</p>
            </div>

            <div class="analogy-box">
                <h3>[三种货币的信用来源]</h3>
                <p><strong>法币</strong>靠国家信用，<strong>黄金</strong>靠人类长期共识，而<strong>加密货币</strong>则尝试用数学、密码学和全球共识机制，去解决"陌生人之间的信用问题"</p>
            </div>

            <div class="concept-section">
                <h3>[示意图]</h3>
                <img src="images/consensus-mechanism.jpg" alt="共识机制示意图" style="max-width:100%; border-radius:8px; margin:10px 0;">
            </div>

            <div class="concept-section">
                <h3>[村庄记账故事]</h3>
                <p>如果两个村民记的账不一样，听谁的？</p>
                <ul>
                    <li><strong>PoW（工作量证明）：</strong>谁算得快听谁的！数学竞赛</li>
                    <li><strong>PoS（权益证明）：</strong>谁押得多听谁的！类似公司投票</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[费曼检验]</h3>
                <p>共识机制 = 一群陌生人如何相信同一本账本！PoW靠"力气"，PoS靠"本钱"</p>
            </div>
        `
    },
    10: {
        title: "阶段一总结",
        content: `
            <div class="concept-section">
                <h3>[一句话总结]</h3>
                <p><strong>中心化 = 黑盒，机构替你管着；去中心化 = 白盒，你自己管着</strong></p>
            </div>

            <div class="concept-section">
                <h3>[10个概念回顾]</h3>
                <ul>
                    <li>中心化 vs 去中心化</li>
                    <li>区块链</li>
                    <li>加密货币</li>
                    <li>钱包</li>
                    <li>私钥 vs 公钥</li>
                    <li>智能合约</li>
                    <li>DApp</li>
                    <li>Gas费</li>
                    <li>共识机制</li>
                    <li>阶段一总结</li>
                </ul>
            </div>

            <div class="feynman-test">
                <h3>[恭喜]</h3>
                <p>阶段一完成！准备好进入阶段二了吗？</p>
            </div>
        `
    }
};

function getReadStatus() {
    const saved = localStorage.getItem('web3-explainer-read');
    return saved ? JSON.parse(saved) : {};
}

function saveReadStatus(status) {
    localStorage.setItem('web3-explainer-read', JSON.stringify(status));
}

function updateReadUI() {
    const readStatus = getReadStatus();
    let readCount = 0;
    
    for (let i = 1; i <= 10; i++) {
        const badge = document.getElementById(`read-${i}`);
        const card = document.querySelector(`[data-concept="${i}"]`);
        
        if (readStatus[i]) {
            if (badge) badge.style.display = 'inline';
            if (card) card.classList.add('read');
            readCount++;
        } else {
            if (badge) badge.style.display = 'none';
            if (card) card.classList.remove('read');
        }
    }
    
    const countEl = document.getElementById('readCount');
    if (countEl) countEl.textContent = readCount;
}

function markAsRead(id) {
    const readStatus = getReadStatus();
    if (!readStatus[id]) {
        readStatus[id] = true;
        saveReadStatus(readStatus);
        updateReadUI();
    }
}

function showConcept(id) {
    const modal = document.getElementById('conceptModal');
    const content = document.getElementById('conceptContent');
    
    if (concepts[id]) {
        content.innerHTML = `<h2>${concepts[id].title}</h2>${concepts[id].content}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        markAsRead(id);
    }
}

function closeModal() {
    const modal = document.getElementById('conceptModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

document.querySelectorAll('.concept-card').forEach(card => {
    card.addEventListener('click', function() {
        const conceptId = this.dataset.concept;
        if (conceptId) {
            showConcept(conceptId);
        }
    });
});

document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    updateReadUI();
});
