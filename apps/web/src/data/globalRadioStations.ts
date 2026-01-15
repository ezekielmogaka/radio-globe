// Comprehensive global radio station database inspired by Radio Garden
import { RadioStation } from "../types";

export const globalRadioStations: RadioStation[] = [
  // NORTH AMERICA
  // United States - Major Cities
  {
    id: "kcrw-santa-monica",
    name: "KCRW 89.9 FM",
    location: {
      lat: 34.0195,
      lng: -118.4912,
      country: "United States",
      city: "Santa Monica",
      timezone: "America/Los_Angeles",
    },
    url: "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air_internet",
    genre: "Alternative",
    language: "English",
    listeners: 850000,
    description:
      "Eclectic music and cultural programming from Santa Monica College.",
    website: "https://kcrw.com",
    bitrate: 192,
  },

  {
    id: "wnyc-new-york",
    name: "WNYC 93.9 FM",
    location: {
      lat: 40.7589,
      lng: -73.9851,
      country: "United States",
      city: "New York",
      timezone: "America/New_York",
    },
    url: "https://fm939.wnyc.org/wnycfm",
    genre: "News",
    language: "English",
    listeners: 1200000,
    description:
      "New York Public Radio - news, talk, and cultural programming.",
    website: "https://wnyc.org",
    bitrate: 128,
  },

  {
    id: "kqed-san-francisco",
    name: "KQED 88.5 FM",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      country: "United States",
      city: "San Francisco",
      timezone: "America/Los_Angeles",
    },
    url: "https://streams.kqed.org/kqedradio",
    genre: "News",
    language: "English",
    listeners: 750000,
    description: "Northern California Public Broadcasting.",
    website: "https://kqed.org",
    bitrate: 128,
  },

  {
    id: "wxpn-philadelphia",
    name: "WXPN 88.5 FM",
    location: {
      lat: 39.9526,
      lng: -75.1652,
      country: "United States",
      city: "Philadelphia",
      timezone: "America/New_York",
    },
    url: "https://wxpnhi.xpn.org/xpnhi",
    genre: "Alternative",
    language: "English",
    listeners: 420000,
    description: "The premier destination for music discovery.",
    website: "https://xpn.org",
    bitrate: 128,
  },

  // Canada
  {
    id: "cbc-radio-one-toronto",
    name: "CBC Radio One",
    location: {
      lat: 43.6532,
      lng: -79.3832,
      country: "Canada",
      city: "Toronto",
      timezone: "America/Toronto",
    },
    url: "https://cbc_r1_tor.akacast.akamaistream.net/7/560/451661/v1/rc.akacast.akamaistream.net/cbc_r1_tor",
    genre: "News",
    language: "English",
    listeners: 890000,
    description: "CBC Radio One Toronto - Canadian national public radio.",
    website: "https://cbc.ca/radio",
    bitrate: 128,
  },

  {
    id: "ckua-alberta",
    name: "CKUA Radio",
    location: {
      lat: 53.5461,
      lng: -113.4938,
      country: "Canada",
      city: "Edmonton",
      timezone: "America/Edmonton",
    },
    url: "https://live.ckua.com/live",
    genre: "Variety",
    language: "English",
    listeners: 125000,
    description: "Alberta's original public broadcaster since 1927.",
    website: "https://ckua.com",
    bitrate: 128,
  },

  // EUROPE
  // United Kingdom
  {
    id: "bbc-radio-1",
    name: "BBC Radio 1",
    location: {
      lat: 51.5074,
      lng: -0.1278,
      country: "United Kingdom",
      city: "London",
      timezone: "Europe/London",
    },
    url: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one",
    genre: "Pop",
    language: "English",
    listeners: 9800000,
    description: "The UK's leading contemporary music and entertainment.",
    website: "https://bbc.co.uk/radio1",
    bitrate: 128,
  },

  {
    id: "bbc-6-music",
    name: "BBC 6 Music",
    location: {
      lat: 51.5074,
      lng: -0.1278,
      country: "United Kingdom",
      city: "London",
      timezone: "Europe/London",
    },
    url: "https://stream.live.vc.bbcmedia.co.uk/bbc_6music",
    genre: "Alternative",
    language: "English",
    listeners: 2400000,
    description: "Alternative music from the cutting edge to the classics.",
    website: "https://bbc.co.uk/6music",
    bitrate: 128,
  },

  // France
  {
    id: "fip-paris",
    name: "FIP Radio",
    location: {
      lat: 48.8566,
      lng: 2.3522,
      country: "France",
      city: "Paris",
      timezone: "Europe/Paris",
    },
    url: "https://stream.radiofrance.fr/fip/fip_hifi.m3u8",
    genre: "Jazz",
    language: "French",
    listeners: 650000,
    description: "Jazz, world music, and eclectic sounds from Radio France.",
    website: "https://fip.fr",
    bitrate: 128,
  },

  {
    id: "radio-nova-paris",
    name: "Radio Nova",
    location: {
      lat: 48.8566,
      lng: 2.3522,
      country: "France",
      city: "Paris",
      timezone: "Europe/Paris",
    },
    url: "https://novazz.ice.infomaniak.ch/novazz-128.mp3",
    genre: "Alternative",
    language: "French",
    listeners: 420000,
    description: "Alternative and world music from Paris.",
    website: "https://nova.fr",
    bitrate: 128,
  },

  // Germany
  {
    id: "fritz-berlin",
    name: "Fritz Radio",
    location: {
      lat: 52.52,
      lng: 13.405,
      country: "Germany",
      city: "Berlin",
      timezone: "Europe/Berlin",
    },
    url: "https://fritz.de/live.m3u",
    genre: "Alternative",
    language: "German",
    listeners: 380000,
    description: "Alternative music and youth programming from Berlin.",
    website: "https://fritz.de",
    bitrate: 128,
  },

  // Netherlands
  {
    id: "radio-1-netherlands",
    name: "NPO Radio 1",
    location: {
      lat: 52.3676,
      lng: 4.9041,
      country: "Netherlands",
      city: "Amsterdam",
      timezone: "Europe/Amsterdam",
    },
    url: "https://icecast.omroep.nl/radio1-bb-mp3",
    genre: "News",
    language: "Dutch",
    listeners: 950000,
    description: "Dutch public radio - news and current affairs.",
    website: "https://nporadio1.nl",
    bitrate: 192,
  },

  // ASIA
  // Japan
  {
    id: "nhk-world-japan",
    name: "NHK World Radio",
    location: {
      lat: 35.6762,
      lng: 139.6503,
      country: "Japan",
      city: "Tokyo",
      timezone: "Asia/Tokyo",
    },
    url: "https://radio-stream.nhk.jp/hls/live/2023229/nhkradiruakr1/master.m3u8",
    genre: "News",
    language: "Japanese",
    listeners: 1200000,
    description: "NHK World Radio Japan - international broadcasting.",
    website: "https://nhk.or.jp",
    bitrate: 128,
  },

  // South Korea
  {
    id: "kbs-seoul",
    name: "KBS Cool FM",
    location: {
      lat: 37.5665,
      lng: 126.978,
      country: "South Korea",
      city: "Seoul",
      timezone: "Asia/Seoul",
    },
    url: "https://cfm.kbs.co.kr/live_web.mp3",
    genre: "Pop",
    language: "Korean",
    listeners: 850000,
    description: "K-pop and contemporary music from Seoul.",
    website: "https://kbs.co.kr",
    bitrate: 128,
  },

  // Singapore
  {
    id: "cna938-singapore",
    name: "CNA 938",
    location: {
      lat: 1.3521,
      lng: 103.8198,
      country: "Singapore",
      city: "Singapore",
      timezone: "Asia/Singapore",
    },
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/938NOWFMAAC.aac",
    genre: "News",
    language: "English",
    listeners: 680000,
    description: "Singapore's premier English news and talk radio.",
    website: "https://cna.com.sg",
    bitrate: 192,
  },

  // AFRICA
  // South Africa
  {
    id: "safm-johannesburg",
    name: "SAfm",
    location: {
      lat: -26.2041,
      lng: 28.0473,
      country: "South Africa",
      city: "Johannesburg",
      timezone: "Africa/Johannesburg",
    },
    url: "https://sabcliveaudio.akamaized.net/hls/live/2013101/safm/master.m3u8",
    genre: "News",
    language: "English",
    listeners: 420000,
    description: "South African news and current affairs.",
    website: "https://sabcnews.com",
    bitrate: 128,
  },

  // SOUTH AMERICA
  // Brazil
  {
    id: "jovem-pan-sao-paulo",
    name: "Jovem Pan FM",
    location: {
      lat: -23.5505,
      lng: -46.6333,
      country: "Brazil",
      city: "São Paulo",
      timezone: "America/Sao_Paulo",
    },
    url: "https://r4.ciclano.io:15029/stream",
    genre: "Pop",
    language: "Portuguese",
    listeners: 1100000,
    description: "Brazil's leading contemporary music station.",
    website: "https://jovempan.com.br",
    bitrate: 128,
  },

  // Argentina
  {
    id: "radio-nacional-buenos-aires",
    name: "Radio Nacional",
    location: {
      lat: -34.6118,
      lng: -58.396,
      country: "Argentina",
      city: "Buenos Aires",
      timezone: "America/Argentina/Buenos_Aires",
    },
    url: "https://sa.mp3.icecast.magma.edge-access.net:7200/sc_rad40",
    genre: "News",
    language: "Spanish",
    listeners: 750000,
    description: "Argentina's national public radio service.",
    website: "https://radionacional.com.ar",
    bitrate: 128,
  },

  // OCEANIA
  // Australia
  {
    id: "triple-j-sydney",
    name: "Triple J",
    location: {
      lat: -33.8688,
      lng: 151.2093,
      country: "Australia",
      city: "Sydney",
      timezone: "Australia/Sydney",
    },
    url: "https://live-radio01.mediahubaustralia.com/2TJW/mp3/",
    genre: "Alternative",
    language: "English",
    listeners: 1800000,
    description: "Australia's national youth radio network.",
    website: "https://abc.net.au/triplej",
    bitrate: 128,
  },

  // RELIABLE CORS-FREE STREAMS
  // SomaFM - Known working streams
  {
    id: "soma-groove-salad",
    name: "SomaFM: Groove Salad",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      country: "United States",
      city: "San Francisco",
      timezone: "America/Los_Angeles",
    },
    url: "https://ice1.somafm.com/groovesalad-256-mp3",
    genre: "Ambient",
    language: "English",
    listeners: 125000,
    description: "Downtempo ambient groove, perfect for working.",
    website: "https://somafm.com",
    bitrate: 256,
  },

  {
    id: "soma-drone-zone",
    name: "SomaFM: Drone Zone",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      country: "United States",
      city: "San Francisco",
      timezone: "America/Los_Angeles",
    },
    url: "https://ice1.somafm.com/dronezone-256-mp3",
    genre: "Ambient",
    language: "English",
    listeners: 95000,
    description: "Served best chilled. Safe with most medications.",
    website: "https://somafm.com",
    bitrate: 256,
  },

  {
    id: "soma-space-station",
    name: "SomaFM: Space Station",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      country: "United States",
      city: "San Francisco",
      timezone: "America/Los_Angeles",
    },
    url: "https://ice1.somafm.com/spacestation-128-mp3",
    genre: "Ambient",
    language: "English",
    listeners: 75000,
    description: "Tune in, turn on, space out. Spaced-out ambient.",
    website: "https://somafm.com",
    bitrate: 128,
  },

  {
    id: "soma-def-con",
    name: "SomaFM: DEF CON Radio",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      country: "United States",
      city: "San Francisco",
      timezone: "America/Los_Angeles",
    },
    url: "https://ice1.somafm.com/defcon-256-mp3",
    genre: "Electronic",
    language: "English",
    listeners: 85000,
    description: "Music for Hacking. The DEF CON Year-Round Radio Station.",
    website: "https://somafm.com",
    bitrate: 256,
  },

  // Radio Swiss - Reliable European streams
  {
    id: "radio-swiss-jazz",
    name: "Radio Swiss Jazz",
    location: {
      lat: 46.8182,
      lng: 8.2275,
      country: "Switzerland",
      city: "Bern",
      timezone: "Europe/Zurich",
    },
    url: "https://stream.srg-ssr.ch/m/rsj/mp3_128",
    genre: "Jazz",
    language: "Multilingual",
    listeners: 45000,
    description: "The finest jazz music from Switzerland.",
    website: "https://radioswissjazz.ch",
    bitrate: 128,
  },

  {
    id: "radio-swiss-classic",
    name: "Radio Swiss Classic",
    location: {
      lat: 46.8182,
      lng: 8.2275,
      country: "Switzerland",
      city: "Bern",
      timezone: "Europe/Zurich",
    },
    url: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128",
    genre: "Classical",
    language: "German",
    listeners: 65000,
    description: "Classical music around the clock.",
    website: "https://radioswissclassic.ch",
    bitrate: 128,
  },

  {
    id: "radio-swiss-pop",
    name: "Radio Swiss Pop",
    location: {
      lat: 46.8182,
      lng: 8.2275,
      country: "Switzerland",
      city: "Bern",
      timezone: "Europe/Zurich",
    },
    url: "https://stream.srg-ssr.ch/m/rsp/mp3_128",
    genre: "Pop",
    language: "Multilingual",
    listeners: 55000,
    description: "The best pop music from five decades.",
    website: "https://radioswispop.ch",
    bitrate: 128,
  },
];

// Export for backward compatibility
// export const radioStations = globalRadioStations
