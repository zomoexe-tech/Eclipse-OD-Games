const apps = [
  {
    "name": "Amazon",
    "url": "https://amazon.com/",
    "icon": "assets/appicons/amazon.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Amazon Luna",
    "url": "https://luna.amazon.com/",
    "icon": "assets/appicons/amazon-luna.webp",
    "categories": [
      "all",
      "game",
      "cloud"
    ],
    "blank": "true"
  },
  {
    "name": "Android",
    "url": "https://now.gg/iframe/snippet?app_pkg=com.uncube.launcher3&partner=interstellar",
    "icon": "assets/appicons/android.webp",
    "categories": [
      "all",
      "emu",
      "android"
    ],
    "blank": false
  },
  {
    "name": "Aptoide",
    "url": "https://now.gg/iframe/snippet?app_pkg=com.aptoide.partners.nowgg.store&partner=interstellar",
    "icon": "assets/appicons/aptoide.webp",
    "categories": [
      "all",
      "emu",
      "android"
    ],
    "blank": false
  },
  {
    "name": "BuzzFeed Quizzes",
    "url": "https://buzzfeed.com/quizzes",
    "icon": "assets/appicons/buzzfeed.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Canva",
    "url": "https://canva.com",
    "icon": "assets/appicons/canva.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Character AI",
    "url": "https://now.gg/iframe/snippet?app_pkg=ai.character.app&partner=interstellar",
    "icon": "assets/appicons/characterai.webp",
    "categories": [
      "all",
      "emu",
      "android"
    ],
    "blank": false
  },
  {
    "name": "ChatGPT Clone",
    "url": "https://chat.shuttleai.app/",
    "icon": "assets/appicons/chatgpt.webp",
    "categories": [
      "all",
      "AI"
    ],
    "blank": false
  },
  {
    "name": "Chess.com",
    "url": "https://chess.com",
    "icon": "assets/appicons/chess.webp",
    "categories": [
      "all",
      "game"
    ],
    "blank": false
  },
  {
    "name": "Cool Math Games",
    "url": "https://coolmathgames.com",
    "icon": "assets/appicons/coolmath.webp",
    "categories": [
      "all",
      "game"
    ],
    "blank": false
  },
  {
    "name": "DuckDuckGo",
    "url": "https://start.duckduckgo.com/",
    "icon": "assets/appicons/duckduckgo.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "ESPN",
    "url": "https://www.espn.com/watch/",
    "icon": "assets/appicons/espn.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Fifa Rosters",
    "url": "https://fifarosters.com/",
    "icon": "assets/appicons/fifa.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Firefox Web Browser",
    "url": "https://replit.com/@cooleddie001/Firefox-Legacy?v=1",
    "icon": "assets/appicons/firefox.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Flix HQ",
    "url": "https://flixhq.to",
    "icon": "assets/appicons/flixhq.webp",
    "categories": [
      "all",
      "media"
    ],
    "blank": false
  },
  {
    "name": "FMovies.to",
    "url": "https://fmovies24.to/",
    "icon": "assets/appicons/FM.png",
    "categories": [
      "all",
      "media"
    ],
    "blank": false
  },
  {
    "name": "Free Media Heck Yeah",
    "url": "https://fmhy.pages.dev",
    "icon": "assets/appicons/fmhy.webp",
    "categories": [
      "all",
      "media"
    ],
    "blank": false
  },
  {
    "name": "Geforce NOW",
    "url": "https://play.geforcenow.com",
    "icon": "assets/appicons/geforce-now.webp",
    "categories": [
      "all",
      "stream",
      "cloud"
    ],
    "blank": false
  },
  {
    "name": "Gidd.io Games",
    "url": "https://gidd.io",
    "icon": "assets/appicons/gidd.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Github",
    "url": "https://github.com",
    "icon": "assets/appicons/github.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "GOAL",
    "url": "https://goal.com",
    "icon": "assets/appicons/goal.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Google",
    "url": "https://google.com",
    "icon": "assets/appicons/google.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Google Gemini",
    "url": "https://gemini.google.com",
    "icon": "assets/appicons/gemini.webp",
    "categories": [
      "all",
      "ai"
    ],
    "blank": false
  },
  {
    "name": "Google Mail (Gmail)",
    "url": "https://mail.google.com/",
    "icon": "assets/appicons/gmail.webp",
    "categories": [
      "all",
      "mail"
    ],
    "blank": "true"
  },
  {
    "name": "Guilded",
    "url": "https://guilded.gg",
    "icon": "assets/appicons/guilded.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "HBO MAX",
    "url": "https://www.hbomax.com/",
    "icon": "assets/appicons/hbo.webp",
    "categories": [
      "all",
      "stream"
    ],
    "blank": false
  },
  {
    "name": "HD Today",
    "url": "https://hdtoday.tv",
    "icon": "assets/appicons/hd.webp",
    "categories": [
      "all",
      "stream",
      "media"
    ],
    "blank": false
  },
  {
    "name": "Messenger",
    "url": "https://messenger.com/",
    "icon": "assets/appicons/messenger.webp",
    "categories": [
      "all",
      "social",
      "message"
    ],
    "blank": false
  },
  {
    "name": "MLB",
    "url": "https://mlb.com",
    "icon": "assets/appicons/mlb.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Movie Web",
    "url": "https://movie-web-me.vercel.app/",
    "icon": "assets/appicons/MW.png",
    "categories": [
      "all",
      "media"
    ],
    "blank": false
  },
  {
    "name": "NBA",
    "url": "https://nba.com",
    "icon": "assets/media/icons/nba.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Newgrounds",
    "url": "https://www.newgrounds.com",
    "icon": "assets/appicons/newgrounds.webp",
    "categories": [
      "all",
      "social",
      "game"
    ],
    "blank": false
  },
  {
    "name": "NFL",
    "url": "https://nfl.com",
    "icon": "assets/appicons/nfl.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Now.GG",
    "url": "https://now.gg",
    "icon": "assets/appicons/now-gg.webp",
    "categories": [
      "all",
      "emu",
      "android"
    ],
    "blank": false
  },
  {
    "name": "Now.GG (NowGG.me) [Working]",
    "url": "https://nowgg.me",
    "icon": "assets/appicons/shuttle.webp",
    "categories": [
      "all",
      "emu",
      "android"
    ],
    "blank": false
  },
  {
    "name": "Outlook",
    "url": "https://outlook.live.com/",
    "icon": "assets/appicons/outlook.webp",
    "categories": [
      "all",
      "mail"
    ],
    "blank": false
  },
  {
    "name": "Paramount Plus",
    "url": "https://paramountplus.com",
    "icon": "assets/appicons/paramount.webp",
    "categories": [
      "all",
      "stream"
    ],
    "blank": false
  },
  {
    "name": "Pinterest",
    "url": "https://pinterest.com",
    "icon": "assets/appicons/pinterest.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Pixlr",
    "url": "https://pixlr.com/",
    "icon": "assets/appicons/pix.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Poki",
    "url": "https://poki.com",
    "icon": "assets/appicons/poki.webp",
    "categories": [
      "all",
      "game"
    ],
    "blank": false
  },
  {
    "name": "Premier League",
    "url": "https://premierleague.com",
    "icon": "assets/appicons/pl.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Scratch",
    "url": "https://scratch.mit.edu",
    "icon": "assets/appicons/scratch.webp",
    "categories": [
      "all",
      "social",
      "game"
    ],
    "blank": false
  },
  {
    "name": "Soundcloud",
    "url": "https://soundcloud.com",
    "icon": "assets/appicons/soundcloud.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "SpaceHey",
    "url": "https://www.spacehey.com",
    "icon": "assets/appicons/spacehey.png",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Steam",
    "url": "https://steampowered.com/",
    "icon": "assets/appicons/steam.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Sudo-Flix.Lol (Movie Web Clone)",
    "url": "https://sudo-flix.lol/",
    "icon": "assets/appicons/MW.png",
    "categories": [
      "all",
      "media"
    ],
    "blank": false
  },
  {
    "name": "Telegram",
    "url": "https://web.telegram.org/",
    "icon": "assets/appicons/telegram.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Temu",
    "url": "https://temu.com",
    "icon": "assets/appicons/temu.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Tiktok",
    "url": "https://tiktok.com",
    "icon": "assets/appicons/tiktok.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Trello",
    "url": "https://trello.com",
    "icon": "assets/appicons/trello.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Tumblr",
    "url": "https://tumblr.com/",
    "icon": "assets/appicons/tumblr.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Twitch",
    "url": "https://twitch.tv",
    "icon": "assets/appicons/twitch.webp",
    "categories": [
      "all",
      "stream"
    ],
    "blank": false
  },
  {
    "name": "Twitter",
    "url": "https://twitter.com",
    "icon": "assets/appicons/twitter.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Vercel",
    "url": "https://vercel.com",
    "icon": "assets/appicons/vercel.webp",
    "categories": [
      "all",
      "tool"
    ],
    "blank": false
  },
  {
    "name": "VS Code",
    "url": "https://vscode.dev",
    "icon": "assets/appicons/vscode.webp",
    "categories": [
      "all",
      "tool"
    ],
    "blank": false
  },
  {
    "name": "W3Schools",
    "url": "https://www.w3schools.com",
    "icon": "assets/appicons/W3Schools.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Wattpad",
    "url": "https://wattpad.com/",
    "icon": "assets/appicons/wattpad.webp",
    "categories": [
      "all",
      "social"
    ],
    "blank": false
  },
  {
    "name": "Wikipedia",
    "url": "https://en.wikipedia.org",
    "icon": "assets/appicons/wiki.webp",
    "categories": [
      "all"
    ],
    "blank": false
  },
  {
    "name": "Y8 Games",
    "url": "https://y8.com/",
    "icon": "assets/appicons/y8.webp",
    "categories": [
      "all",
      "game"
    ],
    "blank": false
  },
  {
    "name": "YouTube",
    "url": "https://youtube.com",
    "icon": "assets/appicons/youtube.webp",
    "categories": [
      "all",
      "social",
      "stream"
    ],
    "blank": false
  },
  {
    "name": "YouTube Alternative (Invidious)",
    "url": "https://vid.puffyan.us/",
    "icon": "assets/appicons/youtube.webp",
    "categories": [
      "all",
      "social",
      "stream"
    ],
    "blank": false
  }
];