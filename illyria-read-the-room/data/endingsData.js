const endingsData = [
    {
        id: "belongs",
        title: "Belongs by the Rules",
        badge: "assets/ui/badge_belongs_by_rules.png",
        condition: (c, a, p) => c >= 60 && p <= 50,
        summary: "You learned quickly what Illyria rewarded and moved comfortably within those lines.",
        reflection: "Illyria talks like a place of freedom, but it still rewards people who stay legible. This exposes how gendered norms are taken for granted as 'normal'."
    },
    {
        id: "strategic",
        title: "Strategic Performer",
        badge: "assets/ui/badge_strategic_performer.png",
        condition: (c, a, p) => c > 40 && a <= 50 && p > 40,
        summary: "You played the game. You knew when to conform publicly while keeping your real thoughts hidden.",
        reflection: "You learned deception can be used for empowerment. Identity here is fluid and performed, revealing how individuals adapt to how they are seen by others."
    },
    {
        id: "challenger",
        title: "Open Challenger",
        badge: "assets/ui/badge_open_challenger.png",
        condition: (c, a, p) => c <= 50 && a >= 50 && p >= 50,
        summary: "You refused to bend to expectations, pushing back against the school's subtle sorting mechanisms.",
        reflection: "You challenged the attitudes that maintain social boundaries. By prioritising individual freedom, you forced the world to react to a self-constructed identity."
    },
    {
        id: "caught",
        title: "Caught Between Worlds",
        badge: "assets/ui/badge_caught_between_worlds.png",
        condition: (c, a, p) => true, // Fallback
        summary: "You bounced between compliance and resistance, leaving your social standing ambiguous.",
        reflection: "Navigating modern social spaces often results in contradictory performances. The physical and cultural setting shapes characters' experiences, proving identity is rarely simple."
    }
];
