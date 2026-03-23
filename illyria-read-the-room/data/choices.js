const choicesData = {
    s1_a: {
        text: "Smile and join the expected group.",
        effects: { c: 10, a: -10, p: -10 },
        reaction: {
            male: { text: "Good lad. You understand the lay of the land.", exp: "happy" },
            female: { text: "Excellent. A proper, agreeable student.", exp: "happy" }
        }
    },
    s1_b: {
        text: "Politely question why everyone is sorted immediately.",
        effects: { c: -10, a: 10, p: 0 },
        reaction: {
            male: { text: "We value order here, son. Try not to overthink it.", exp: "putoff" },
            female: { text: "Let's not be difficult on day one.", exp: "putoff" }
        }
    },
    s1_c: {
        text: "Make a joke to dodge the pressure entirely.",
        effects: { c: 0, a: 0, p: 10 },
        reaction: {
            male: { text: "A joker. Just don't disrupt the others.", exp: "neutral" },
            female: { text: "Very spirited. Keep it contained.", exp: "neutral" }
        }
    },
    s2_a: {
        text: "Stay quiet and wait to be picked.",
        effects: { c: 10, a: -10, p: -10 },
        reaction: {
            male: { text: "Speak up, son! Sport requires aggression!", exp: "putoff" },
            female: { text: "Good to see someone waiting their turn nicely.", exp: "happy" }
        }
    },
    s2_b: {
        text: "Back yourself loudly. Demand a spot.",
        effects: { c: -10, a: 10, p: 10 },
        reaction: {
            male: { text: "That's the fire I want! Get on the pitch!", exp: "happy" },
            female: { text: "Whoa, calm down. Let's not get too intense.", exp: "putoff" }
        }
    },
    s3_a: {
        text: "Join the dominant tone to protect yourself.",
        effects: { c: 10, a: -10, p: -10 },
        reaction: {
            male: { text: "Exactly. You get it. Image is everything.", exp: "happy" },
            female: { text: "Right? It's all about who you are seen with.", exp: "happy" }
        }
    },
    s3_b: {
        text: "Defend the outsider they are mocking.",
        effects: { c: -10, a: 10, p: 10 },
        reaction: {
            male: { text: "Wow. Social suicide, man.", exp: "putoff" },
            female: { text: "Are you serious? You're ruining the vibe.", exp: "putoff" }
        }
    },
    s4_a: {
        text: "Tell a lie to cover for him.",
        effects: { c: 0, a: -10, p: 10 },
        reaction: {
            male: { text: "Thanks, man. Bros stick together.", exp: "happy" },
            female: { text: "Thanks. Didn't know you were so chill.", exp: "happy" }
        }
    },
    s4_b: {
        text: "Tell the truth. I'm not risking my neck.",
        effects: { c: 10, a: 10, p: -10 },
        reaction: {
            male: { text: "Wow. Cold.", exp: "putoff" },
            female: { text: "Geez, remind me not to ask you for anything.", exp: "putoff" }
        }
    },
    s5_a: {
        text: "Play the part perfectly. Smile and comply.",
        effects: { c: 10, a: -10, p: -10 },
        reaction: {
            male: { text: "A fine young gentleman. Impeccable.", exp: "happy" },
            female: { text: "A lovely young lady. Very elegant.", exp: "happy" }
        }
    },
    s5_b: {
        text: "Participate, but do it entirely on your own terms.",
        effects: { c: -10, a: 10, p: 10 },
        reaction: {
            male: { text: "A bit rough around the edges, but confident.", exp: "neutral" },
            female: { text: "Highly unorthodox behavior for this venue.", exp: "putoff" }
        }
    },
    s6_a: {
        text: "Tell the public truth and let the chips fall.",
        effects: { c: -10, a: 10, p: 10 },
        reaction: {
            male: { text: "That took guts. I respect it.", exp: "happy" },
            female: { text: "Wow. You really just owned exactly who you are.", exp: "happy" }
        }
    },
    s6_b: {
        text: "Back the accepted version of events.",
        effects: { c: 10, a: -10, p: -10 },
        reaction: {
            male: { text: "Smart play. Keep the peace.", exp: "neutral" },
            female: { text: "Makes sense. Why complicate things?", exp: "neutral" }
        }
    }
};
