
var chart = echarts.init(document.getElementById('main'));

var img = new Image();
img.src = 'microphone.png';

var option = {
    tooltip: {},
    series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        keepAspect: true,
        maskImage: img,
        width: '70%',
        height: '80%',
        drawOutOfBound: false,
        shrinkToFit: false,
        textStyle: {
            fontFamily: 'Roboto Condensed',
            color() {
                let colors = ['#fc6c85', '#c75f5f', '#eb9497', '#ffdbdb', '#ffe7e7'];
                return colors[parseInt(Math.random() * 5)]
            }
        },
        emphasis: {
            textStyle: {
                fontFamily: 'Roboto Condensed',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                "name": "speech",
                "value": "84694"
            },
            {
                "name": "language",
                "value": "18600"
            },
            {
                "name": "data",
                "value": "17318"
            },
            {
                "name": "study",
                "value": "16244"
            },
            {
                "name": "model",
                "value": "16129"
            },
            {
                "name": "recognition",
                "value": "14118"
            },
            {
                "name": "learning",
                "value": "10663"
            },
            {
                "name": "performance",
                "value": "10126"
            },
            {
                "name": "method",
                "value": "9788"
            },
            {
                "name": "models",
                "value": "9602"
            },
            {
                "name": "paper",
                "value": "9594"
            },
            {
                "name": "based",
                "value": "9527"
            },
            {
                "name": "proposed",
                "value": "9396"
            },
            {
                "name": "features",
                "value": "8798"
            },
            {
                "name": "children",
                "value": "8424"
            },
            {
                "name": "analysis",
                "value": "8326"
            },
            {
                "name": "training",
                "value": "8199"
            },
            {
                "name": "neural",
                "value": "7374"
            },
            {
                "name": "methods",
                "value": "7336"
            },
            {
                "name": "noise",
                "value": "6358"
            },
            {
                "name": "approach",
                "value": "6346"
            },
            {
                "name": "speaker",
                "value": "6304"
            },
            {
                "name": "network",
                "value": "6186"
            },
            {
                "name": "task",
                "value": "6142"
            },
            {
                "name": "voice",
                "value": "6109"
            },
            {
                "name": "communication",
                "value": "6054"
            },
            {
                "name": "systems",
                "value": "5766"
            },
            {
                "name": "hearing",
                "value": "5735"
            },
            {
                "name": "social",
                "value": "5676"
            },
            {
                "name": "processing",
                "value": "5562"
            },
            {
                "name": "acoustic",
                "value": "5489"
            },
            {
                "name": "accuracy",
                "value": "5478"
            },
            {
                "name": "patients",
                "value": "5445"
            },
            {
                "name": "asr",
                "value": "5372"
            },
            {
                "name": "time",
                "value": "5175"
            },
            {
                "name": "compared",
                "value": "5164"
            },
            {
                "name": "studies",
                "value": "4963"
            },
            {
                "name": "propose",
                "value": "4935"
            },
            {
                "name": "quality",
                "value": "4934"
            },
            {
                "name": "english",
                "value": "4924"
            },
            {
                "name": "deep",
                "value": "4698"
            },
            {
                "name": "audio",
                "value": "4668"
            },
            {
                "name": "development",
                "value": "4591"
            },
            {
                "name": "word",
                "value": "4574"
            },
            {
                "name": "tasks",
                "value": "4567"
            },
            {
                "name": "hate",
                "value": "4548"
            },
            {
                "name": "participants",
                "value": "4536"
            },
            {
                "name": "speakers",
                "value": "4503"
            },
            {
                "name": "dataset",
                "value": "4214"
            },
            {
                "name": "detection",
                "value": "4064"
            },
            {
                "name": "signal",
                "value": "4035"
            },
            {
                "name": "automatic",
                "value": "3942"
            },
            {
                "name": "human",
                "value": "3917"
            },
            {
                "name": "languages",
                "value": "3884"
            },
            {
                "name": "rate",
                "value": "3846"
            },
            {
                "name": "improve",
                "value": "3842"
            },
            {
                "name": "perception",
                "value": "3794"
            },
            {
                "name": "people",
                "value": "3646"
            },
            {
                "name": "emotion",
                "value": "3644"
            },
            {
                "name": "auditory",
                "value": "3630"
            },
            {
                "name": "article",
                "value": "3629"
            },
            {
                "name": "feature",
                "value": "3623"
            },
            {
                "name": "classification",
                "value": "3595"
            },
            {
                "name": "attention",
                "value": "3562"
            },
            {
                "name": "clinical",
                "value": "3545"
            },
            {
                "name": "loss",
                "value": "3533"
            },
            {
                "name": "experiments",
                "value": "3500"
            },
            {
                "name": "including",
                "value": "3490"
            },
            {
                "name": "process",
                "value": "3449"
            },
            {
                "name": "target",
                "value": "3401"
            },
            {
                "name": "age",
                "value": "3336"
            },
            {
                "name": "content",
                "value": "3310"
            },
            {
                "name": "corpus",
                "value": "3274"
            },
            {
                "name": "findings",
                "value": "3248"
            },
            {
                "name": "input",
                "value": "3214"
            },
            {
                "name": "linguistic",
                "value": "3211"
            },
            {
                "name": "evaluation",
                "value": "3174"
            },
            {
                "name": "signals",
                "value": "3169"
            },
            {
                "name": "level",
                "value": "3159"
            },
            {
                "name": "provide",
                "value": "3145"
            },
            {
                "name": "intelligibility",
                "value": "3131"
            },
            {
                "name": "purpose",
                "value": "3115"
            },
            {
                "name": "acts",
                "value": "3090"
            },
            {
                "name": "students",
                "value": "3072"
            },
            {
                "name": "framework",
                "value": "3059"
            },
            {
                "name": "media",
                "value": "3001"
            },
            {
                "name": "conditions",
                "value": "2986"
            },
            {
                "name": "context",
                "value": "2975"
            },
            {
                "name": "trained",
                "value": "2948"
            },
            {
                "name": "approaches",
                "value": "2945"
            },
            {
                "name": "set",
                "value": "2938"
            },
            {
                "name": "control",
                "value": "2928"
            },
            {
                "name": "techniques",
                "value": "2894"
            },
            {
                "name": "sound",
                "value": "2879"
            },
            {
                "name": "differences",
                "value": "2876"
            },
            {
                "name": "measures",
                "value": "2844"
            },
            {
                "name": "experimental",
                "value": "2842"
            },
            {
                "name": "networks",
                "value": "2833"
            },
            {
                "name": "current",
                "value": "2829"
            },
            {
                "name": "types",
                "value": "2826"
            },
            {
                "name": "machine",
                "value": "2815"
            },
            {
                "name": "function",
                "value": "2809"
            },
            {
                "name": "frequency",
                "value": "2808"
            },
            {
                "name": "knowledge",
                "value": "2800"
            },
            {
                "name": "objective",
                "value": "2786"
            },
            {
                "name": "cognitive",
                "value": "2769"
            },
            {
                "name": "error",
                "value": "2667"
            },
            {
                "name": "support",
                "value": "2657"
            },
            {
                "name": "online",
                "value": "2655"
            },
            {
                "name": "design",
                "value": "2638"
            },
            {
                "name": "enhancement",
                "value": "2627"
            },
            {
                "name": "understanding",
                "value": "2618"
            },
            {
                "name": "production",
                "value": "2588"
            },
            {
                "name": "datasets",
                "value": "2552"
            },
            {
                "name": "algorithm",
                "value": "2519"
            },
            {
                "name": "natural",
                "value": "2513"
            },
            {
                "name": "effects",
                "value": "2513"
            },
            {
                "name": "role",
                "value": "2497"
            },
            {
                "name": "therapy",
                "value": "2496"
            },
            {
                "name": "assessment",
                "value": "2477"
            },
            {
                "name": "previous",
                "value": "2452"
            },
            {
                "name": "multiple",
                "value": "2450"
            },
            {
                "name": "terms",
                "value": "2444"
            },
            {
                "name": "state-of-the-art",
                "value": "2414"
            },
            {
                "name": "applications",
                "value": "2411"
            },
            {
                "name": "visual",
                "value": "2405"
            },
            {
                "name": "treatment",
                "value": "2396"
            },
            {
                "name": "spoken",
                "value": "2385"
            },
            {
                "name": "existing",
                "value": "2378"
            },
            {
                "name": "translation",
                "value": "2374"
            },
            {
                "name": "scores",
                "value": "2370"
            },
            {
                "name": "factors",
                "value": "2343"
            },
            {
                "name": "potential",
                "value": "2335"
            },
            {
                "name": "disorders",
                "value": "2326"
            },
            {
                "name": "source",
                "value": "2321"
            },
            {
                "name": "temporal",
                "value": "2321"
            },
            {
                "name": "demonstrate",
                "value": "2315"
            },
            {
                "name": "background",
                "value": "2313"
            },
            {
                "name": "users",
                "value": "2286"
            },
            {
                "name": "ability",
                "value": "2284"
            },
            {
                "name": "listening",
                "value": "2271"
            },
            {
                "name": "main",
                "value": "2260"
            },
            {
                "name": "developed",
                "value": "2256"
            },
            {
                "name": "characteristics",
                "value": "2252"
            },
            {
                "name": "representations",
                "value": "2247"
            },
            {
                "name": "technology",
                "value": "2234"
            },
            {
                "name": "individuals",
                "value": "2225"
            },
            {
                "name": "baseline",
                "value": "2211"
            },
            {
                "name": "effective",
                "value": "2200"
            },
            {
                "name": "form",
                "value": "2197"
            },
            {
                "name": "interaction",
                "value": "2195"
            },
            {
                "name": "identify",
                "value": "2188"
            },
            {
                "name": "addition",
                "value": "2172"
            },
            {
                "name": "result",
                "value": "2159"
            },
            {
                "name": "end-to-end",
                "value": "2158"
            },
            {
                "name": "conducted",
                "value": "2148"
            },
            {
                "name": "outcomes",
                "value": "2148"
            },
            {
                "name": "conclusions",
                "value": "2141"
            },
            {
                "name": "improvement",
                "value": "2132"
            },
            {
                "name": "abstract",
                "value": "2127"
            },
            {
                "name": "improved",
                "value": "2105"
            },
            {
                "name": "health",
                "value": "2105"
            },
            {
                "name": "investigate",
                "value": "2094"
            },
            {
                "name": "speeches",
                "value": "2090"
            },
            {
                "name": "emotional",
                "value": "2071"
            },
            {
                "name": "domain",
                "value": "2068"
            },
            {
                "name": "skills",
                "value": "2058"
            },
            {
                "name": "adults",
                "value": "2058"
            },
            {
                "name": "listeners",
                "value": "2057"
            },
            {
                "name": "impact",
                "value": "2053"
            },
            {
                "name": "specific",
                "value": "2052"
            },
            {
                "name": "representation",
                "value": "2045"
            },
            {
                "name": "applied",
                "value": "2042"
            },
            {
                "name": "complex",
                "value": "2035"
            },
            {
                "name": "performed",
                "value": "2034"
            },
            {
                "name": "public",
                "value": "2033"
            },
            {
                "name": "evidence",
                "value": "2030"
            },
            {
                "name": "aims",
                "value": "2030"
            },
            {
                "name": "strategies",
                "value": "2030"
            },
            {
                "name": "parameters",
                "value": "2020"
            },
            {
                "name": "evaluate",
                "value": "1999"
            },
            {
                "name": "memory",
                "value": "1993"
            },
            {
                "name": "future",
                "value": "1989"
            },
            {
                "name": "tts",
                "value": "1988"
            },
            {
                "name": "intervention",
                "value": "1981"
            },
            {
                "name": "discourse",
                "value": "1968"
            },
            {
                "name": "focus",
                "value": "1959"
            },
            {
                "name": "limited",
                "value": "1952"
            },
            {
                "name": "brain",
                "value": "1948"
            },
            {
                "name": "synthesis",
                "value": "1948"
            },
            {
                "name": "achieved",
                "value": "1931"
            },
            {
                "name": "range",
                "value": "1924"
            },
            {
                "name": "architecture",
                "value": "1921"
            },
            {
                "name": "individual",
                "value": "1919"
            },
            {
                "name": "common",
                "value": "1917"
            },
            {
                "name": "practice",
                "value": "1908"
            },
            {
                "name": "technique",
                "value": "1903"
            },
            {
                "name": "sentences",
                "value": "1895"
            },
            {
                "name": "speech-language",
                "value": "1890"
            },
            {
                "name": "review",
                "value": "1866"
            },
            {
                "name": "political",
                "value": "1860"
            },
            {
                "name": "achieve",
                "value": "1855"
            },
            {
                "name": "levels",
                "value": "1854"
            },
            {
                "name": "activity",
                "value": "1852"
            },
            {
                "name": "speaking",
                "value": "1846"
            },
            {
                "name": "challenge",
                "value": "1836"
            },
            {
                "name": "samples",
                "value": "1829"
            },
            {
                "name": "motor",
                "value": "1823"
            },
            {
                "name": "response",
                "value": "1820"
            },
            {
                "name": "included",
                "value": "1813"
            },
            {
                "name": "score",
                "value": "1794"
            },
            {
                "name": "evaluated",
                "value": "1793"
            },
            {
                "name": "education",
                "value": "1788"
            },
            {
                "name": "responses",
                "value": "1784"
            },
            {
                "name": "observed",
                "value": "1782"
            },
            {
                "name": "reported",
                "value": "1780"
            },
            {
                "name": "algorithms",
                "value": "1779"
            },
            {
                "name": "disease",
                "value": "1779"
            },
            {
                "name": "utterances",
                "value": "1773"
            },
            {
                "name": "structure",
                "value": "1772"
            },
            {
                "name": "aim",
                "value": "1736"
            },
            {
                "name": "relative",
                "value": "1730"
            },
            {
                "name": "application",
                "value": "1723"
            },
            {
                "name": "literature",
                "value": "1723"
            },
            {
                "name": "type",
                "value": "1720"
            },
            {
                "name": "field",
                "value": "1714"
            },
            {
                "name": "increased",
                "value": "1713"
            },
            {
                "name": "noisy",
                "value": "1705"
            },
            {
                "name": "covid-19",
                "value": "1698"
            },
            {
                "name": "reading",
                "value": "1694"
            },
            {
                "name": "life",
                "value": "1688"
            },
            {
                "name": "patterns",
                "value": "1683"
            },
            {
                "name": "vocal",
                "value": "1682"
            },
            {
                "name": "single",
                "value": "1674"
            },
            {
                "name": "analyzed",
                "value": "1672"
            },
            {
                "name": "semantic",
                "value": "1662"
            },
            {
                "name": "convolutional",
                "value": "1662"
            },
            {
                "name": "average",
                "value": "1658"
            },
            {
                "name": "identification",
                "value": "1655"
            },
            {
                "name": "finally",
                "value": "1651"
            },
            {
                "name": "cochlear",
                "value": "1613"
            },
            {
                "name": "collected",
                "value": "1604"
            },
            {
                "name": "functions",
                "value": "1603"
            },
            {
                "name": "environment",
                "value": "1599"
            },
            {
                "name": "experience",
                "value": "1596"
            },
            {
                "name": "standard",
                "value": "1595"
            },
            {
                "name": "sentence",
                "value": "1594"
            },
            {
                "name": "disorder",
                "value": "1577"
            },
            {
                "name": "challenges",
                "value": "1576"
            },
            {
                "name": "effectiveness",
                "value": "1568"
            }
        ]
    }
    ]
};

chart.setOption(option);
window.onresize = chart.resize;