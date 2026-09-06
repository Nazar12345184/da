/**
 * Bet-King HLTV-Style Decor & Live Match Strip
 * Automatically renders top match ticker and side betting banners on all pages
 */
(function() {
    function initDecor() {
        const path = window.location.pathname.toLowerCase();
        
        // Resolve relative paths
        const isInTemplates = path.includes('/templates/');
        const isInEvents = path.includes('/eventstab/');
        const isInNews = path.includes('/news/');
        const isInZra = path.includes('/zra/');
        
        let betHref = '../zra/bet.html';
        let match1Href = 'match1.html';
        let match2Href = 'match2.html';
        let match3Href = 'match3.html';
        let match4Href = 'match4.html';
        let match5Href = 'match5.html';
        let match6Href = 'match6.html';
        let match7Href = 'match7.html';

        if (isInEvents || isInNews) {
            match1Href = '../templates/match1.html';
            match2Href = '../templates/match2.html';
            match3Href = '../templates/match3.html';
            match4Href = '../templates/match4.html';
            match5Href = '../templates/match5.html';
            match6Href = '../templates/match6.html';
            match7Href = '../templates/match7.html';
        } else if (isInZra) {
            betHref = 'bet.html';
            match1Href = '../templates/match1.html';
            match2Href = '../templates/match2.html';
            match3Href = '../templates/match3.html';
            match4Href = '../templates/match4.html';
            match5Href = '../templates/match5.html';
            match6Href = '../templates/match6.html';
            match7Href = '../templates/match7.html';
        }

        // 1. Top Match Ticker
        if (!document.querySelector('.top-match-ticker')) {
            const header = document.querySelector('header');
            if (header) {
                const ticker = document.createElement('div');
                ticker.className = 'top-match-ticker';
                ticker.innerHTML = `
                    <div class="ticker-track">
                        <a href="${match2Href}" class="ticker-match">
                            <span class="ticker-live">● LIVE</span>
                            <span class="ticker-time">17:00</span>
                            <span class="ticker-teams">BARBOS vs NAVI</span>
                            <span class="odds-badge">1.85</span>
                            <span class="odds-vs">vs</span>
                            <span class="odds-badge">1.95</span>
                        </a>
                        <span class="ticker-sep">|</span>
                        <a href="${match4Href}" class="ticker-match">
                            <span class="ticker-time">18:30</span>
                            <span class="ticker-teams">SPIRIT vs FALCONS</span>
                            <span class="odds-badge">1.64</span>
                            <span class="odds-vs">vs</span>
                            <span class="odds-badge">2.20</span>
                        </a>
                        <span class="ticker-sep">|</span>
                        <a href="${match5Href}" class="ticker-match">
                            <span class="ticker-time">20:00</span>
                            <span class="ticker-teams">NAVI vs VITALITY</span>
                            <span class="odds-badge">2.10</span>
                            <span class="odds-vs">vs</span>
                            <span class="odds-badge">1.75</span>
                        </a>
                        <span class="ticker-sep">|</span>
                        <a href="${match6Href}" class="ticker-match">
                            <span class="ticker-badge-gold">GRAND FINAL</span>
                            <span class="ticker-teams">BARBOS vs BC.GAME</span>
                            <span class="odds-badge">1.70</span>
                        </a>
                    </div>
                `;
                header.insertAdjacentElement('afterend', ticker);
            }
        }

        // 2. Left Side Decor Banner
        if (!document.querySelector('.side-decor-left')) {
            const leftDecor = document.createElement('aside');
            leftDecor.className = 'side-decor side-decor-left';
            leftDecor.innerHTML = `
                <div class="side-decor-inner">
                    <div class="side-decor-tag">BET-KING</div>
                    <div class="side-decor-header">LIVE ODDS</div>
                    
                    <div class="side-card">
                        <div class="side-card-match">fnatic vs Drama</div>
                        <div class="side-odds-row">
                            <span>fnatic</span>
                            <span class="odds-badge">1.08</span>
                        </div>
                        <div class="side-odds-row">
                            <span>Drama</span>
                            <span class="odds-badge">6.40</span>
                        </div>
                        <a href="${betHref}" class="side-bet-btn">BET NOW</a>
                    </div>

                    <div class="side-team-list">
                        <div class="side-team-row">
                            <span class="side-team-name">MOUZ</span>
                            <span class="odds-badge">2.67</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">Drama</span>
                            <span class="odds-badge">6.25</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">Nemiga</span>
                            <span class="odds-badge">1.87</span>
                        </div>
                    </div>

                    <a href="${betHref}" class="side-action-banner">СТАВКА</a>
                </div>
            `;
            document.body.appendChild(leftDecor);
        }

        // 3. Right Side Decor Banner
        if (!document.querySelector('.side-decor-right')) {
            const rightDecor = document.createElement('aside');
            rightDecor.className = 'side-decor side-decor-right';
            rightDecor.innerHTML = `
                <div class="side-decor-inner">
                    <div class="side-decor-tag">ARENA BETS</div>
                    <div class="side-decor-header">TOP MATCHES</div>

                    <div class="side-team-list">
                        <div class="side-team-row">
                            <span class="side-team-name">Spirit</span>
                            <span class="odds-badge">1.47</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">FOKUS</span>
                            <span class="odds-badge">1.87</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">fnatic</span>
                            <span class="odds-badge">1.07</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">Vitality</span>
                            <span class="odds-badge">1.55</span>
                        </div>
                        <div class="side-team-row">
                            <span class="side-team-name">FaZe</span>
                            <span class="odds-badge">2.35</span>
                        </div>
                    </div>

                    <a href="${betHref}" class="side-action-banner">ЗРОБИТИ СТАВКУ</a>
                </div>
            `;
            document.body.appendChild(rightDecor);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDecor);
    } else {
        initDecor();
    }
})();