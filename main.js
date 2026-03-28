const players = [
    {
        id: 2544,
        name: "LeBron James",
        team: "Los Angeles Lakers",
        position: "Forward",
        stats: { ppg: 25.7, rpg: 7.3, apg: 8.3 }
    },
    {
        id: 201939,
        name: "Stephen Curry",
        team: "Golden State Warriors",
        position: "Guard",
        stats: { ppg: 26.4, rpg: 4.5, apg: 5.1 }
    },
    {
        id: 203507,
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        position: "Forward",
        stats: { ppg: 30.4, rpg: 11.5, apg: 6.5 }
    },
    {
        id: 201142,
        name: "Kevin Durant",
        team: "Phoenix Suns",
        position: "Forward",
        stats: { ppg: 27.1, rpg: 6.6, apg: 5.0 }
    },
    {
        id: 203999,
        name: "Nikola Jokic",
        team: "Denver Nuggets",
        position: "Center",
        stats: { ppg: 26.4, rpg: 12.4, apg: 9.0 }
    },
    {
        id: 162902,
        name: "Luka Doncic",
        team: "Dallas Mavericks",
        position: "Guard",
        stats: { ppg: 33.9, rpg: 9.2, apg: 9.8 }
    },
    {
        id: 162836,
        name: "Jayson Tatum",
        team: "Boston Celtics",
        position: "Forward",
        stats: { ppg: 26.9, rpg: 8.1, apg: 4.9 }
    },
    {
        id: 203954,
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        position: "Center",
        stats: { ppg: 34.7, rpg: 11.0, apg: 5.6 }
    }
];

const playerGrid = document.getElementById('player-grid');
const searchInput = document.getElementById('player-search');

function renderPlayers(filter = "") {
    playerGrid.innerHTML = "";
    
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredPlayers.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        
        // Using NBA's official headshot URL pattern
        const imageUrl = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png`;

        card.innerHTML = `
            <img src="${imageUrl}" alt="${player.name}" class="player-image" onerror="this.src='https://via.placeholder.com/1040x760?text=No+Image'">
            <div class="player-info">
                <span class="position-chip">${player.position}</span>
                <h2>${player.name}</h2>
                <p class="team">${player.team}</p>
                <div class="player-stats">
                    <div class="stat-item">
                        <span class="stat-value">${player.stats.ppg}</span>
                        <span class="stat-label">PPG</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${player.stats.rpg}</span>
                        <span class="stat-label">RPG</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${player.stats.apg}</span>
                        <span class="stat-label">APG</span>
                    </div>
                </div>
            </div>
        `;
        playerGrid.appendChild(card);
    });

    if (filteredPlayers.length === 0) {
        playerGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">No players found matching "${filter}"</p>`;
    }
}

searchInput.addEventListener('input', (e) => {
    renderPlayers(e.target.value);
});

// Initial render
renderPlayers();
