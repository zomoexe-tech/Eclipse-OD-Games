const apps = [
  {
    "name": "Character AI",
    "url": "https://now.gg/iframe/snippet?app_pkg=ai.character.app&partner=interstellar",
    "icon": "assets/appicons/characterai.webp",
    "categories": ["all", "AI"],
    "blank": false
  },
  {
    "name": "ChatGPT Clone",
    "url": "https://108.181.5.242/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9LbXlLV0dlYmVwMElCR1FJL2M0UEdqUlM4NE15WnQrNno2ZVZTa253NXdCQ2JCMVZHMzJPekYwTmwyekl5clJZZjF4Ykl2TWl3cnpqQU1qZEhyNENVU0k9&r=aHR0cHM6Ly8xMDguMTgxLjUuMjQyLz9fX2Nwbz1hSFIwY0hNNkx5OWphR0YwWjNCMExtTnZiUQ%3D%3D&__cpo=1",
    "icon": "assets/appicons/chatgpt.webp",
    "categories": ["all", "AI"],
    "blank": false
  },
  {
    "name": "Flix HQ",
    "url": "https://108.181.12.46/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9LdkVJMzJyMEpuWkJ1QWx4TTk3aE5SRHc0eUtFQmpMZlF3QnZLRVhaL0dBb3cxMXBjcWtFUEVUYUxSWW1VaEdzazZ3SHVxL2taMnBsOUpyVm1yODlxUlU9&r=aHR0cHM6Ly8xMDguMTgxLjEyLjQ2L2hvbWU%2FX19jcG89YUhSMGNITTZMeTltYkdsNGFIRXVkRzg%3D&__cpo=1",
    "icon": "assets/appicons/flixhq.webp",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "FMovies.to",
    "url": "https://fmovies24.to/",
    "icon": "assets/appicons/FM.png",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "Free Media Heck Yeah",
    "url": "https://fmhy.pages.dev",
    "icon": "assets/appicons/fmhy.webp",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "Google Gemini",
    "url": "https://gemini.google.com",
    "icon": "assets/appicons/gemini.webp",
    "categories": ["all", "AI"],
    "blank": false
  },
  {
    "name": "HBO MAX",
    "url": "https://www.hbomax.com/",
    "icon": "assets/appicons/hbo.webp",
    "categories": ["all", "stream"],
    "blank": false
  },
  {
    "name": "HD Today",
    "url": "https://hdtoday.tv",
    "icon": "assets/appicons/hd.webp",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "Movie Web",
    "url": "https://movie-web-me.vercel.app/",
    "icon": "assets/appicons/MW.png",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "Paramount Plus",
    "url": "https://paramountplus.com",
    "icon": "assets/appicons/paramount.webp",
    "categories": ["all", "stream"],
    "blank": false
  },
  {
    "name": "Sudo-Flix.Lol",
    "url": "https://208.87.240.67/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9LdTkzQy9xYzdLbDBLbkcvMjgrOWsxTy9Pa2E4OTRUYlBMUHNsa3ArcVJQQW9ROFBhV08relRGODVWQ2RzQmNNaVYzVVZSaUl5SVZkaEhxUTIyS24yaTg9&r=aHR0cHM6Ly8yMDguODcuMjQwLjY3Lz9fX2Nwbz1hSFIwY0hNNkx5OXpiVzkyTFdacGRtVXVkbVZ5WTJWc0xtRndjQQ%3D%3D&__cpo=1",
    "icon": "assets/appicons/MW.png",
    "categories": ["all", "media"],
    "blank": false
  },
  {
    "name": "TikTok (Proxy)",
    "url": "https://108.181.5.51/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9LZ3hwMFRQVTY1ckx6WHU3Z2tabHZkWE81R00xdFROT2p4ejZ2b0ZHNXpoVzEvREhyeGRTWEpzdmlFQ3JlL1NTMmxHN2VaYjlXZkErWjhjbThBVy93ODA9&r=aHR0cHM6Ly8xMDguMTgxLjUuNTEvZXhwbG9yZT9fX2Nwbz1hSFIwY0hNNkx5OTNkM2N1ZEdscmRHOXJMbU52YlE%3D&__cpo=1",
    "icon": "assets/appicons/tiktok.webp",
    "categories": ["all", "social"],
    "blank": false,
    "proxy": true
  },
  {
    "name": "Twitch",
    "url": "https://twitch.tv",
    "icon": "assets/appicons/twitch.webp",
    "categories": ["all", "stream"],
    "blank": false
  },
  {
    "name": "YouTube (Proxy)",
    "url": "https://108.181.11.39/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9Lb2dJYURCUTBZYkdsSU5mUmpxSkpSRFQxK3RSbTRsWk4vQytHcmVrV0VleXAzOHJrUzhDN21Sa0JFV0JoZEVOWWxVSzFPWENUbWdTNTdLSWZGeTAvNkE9&r=aHR0cHM6Ly8xMDguMTgxLjExLjM5Lz90aGVtZVJlZnJlc2g9MSZfX2Nwbz1hSFIwY0hNNkx5OTNkM2N1ZVc5MWRIVmlaUzVqYjIw&__cpo=1",
    "icon": "assets/appicons/youtube.webp",
    "categories": ["all", "stream"],
    "blank": false,
    "proxy": true
  },
  {
    "name": "YouTube Alternative (Invidious)",
    "url": "https://vid.puffyan.us/",
    "icon": "assets/appicons/youtube.webp",
    "categories": ["all", "stream"],
    "blank": false
  }
];