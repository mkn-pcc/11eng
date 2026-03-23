// Expanded to 18 interactions (3 per scene). 
// Each choice strictly follows: 1 Happy (+Conform), 1 Putoff (+Authentic/Resist), 1 Neutral (0 effect).
const scenesData = [
    {
        id: "scene1",
        bg: "assets/backgrounds/corridor_orientation.png",
        nodes: [
            {
                npcId: "teacher",
                narrative: "Illyria High has cultural assumptions we take for granted as 'normal' without questioning them.",
                dialogue: "You look like you'll fit in quickly. Just find your people and stick to the script.",
                choices: [
                    { text: "Smile and join the expected group.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Good lad. You understand the lay of the land.", female: "Excellent. A proper, agreeable student." } },
                    { text: "Politely question why everyone is sorted immediately.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "We value order here, son. Try not to overthink it.", female: "Let's not be difficult on day one." } },
                    { text: "Make a joke to dodge the pressure entirely.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "A joker. Just don't disrupt the others.", female: "Very spirited. Keep it contained." } }
                ]
            },
            {
                npcId: "monique",
                narrative: "Identities here are about how you are seen by others. Status is everything.",
                dialogue: "We value equality in theory, but you still need to look the part. You understand, right?",
                choices: [
                    { text: "Agree completely. Image is vital.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Exactly. Look good, and we'll get along.", female: "Perfect. We need more people who get it." } },
                    { text: "Argue that looking the part shouldn't matter.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Ugh, don't be exhausting.", female: "Are you serious? It absolutely matters." } },
                    { text: "Shrug vaguely to avoid agreeing or disagreeing.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Whatever. Just don't embarrass us.", female: "I guess we'll see." } }
                ]
            },
            {
                npcId: "duke",
                narrative: "First impressions set your trajectory. Do you challenge the hierarchy, or feed it?",
                dialogue: "Hey. New kid. You going to be useful around here, or are you just taking up space?",
                choices: [
                    { text: "Tell him you're a team player ready to help.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "That's what I like to hear.", female: "Cool. Good to have you on board." } },
                    { text: "Tell him you don't answer to him.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Whoa. Watch your tone, buddy.", female: "Jeez, someone woke up angry." } },
                    { text: "Ask him what 'useful' even means.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "You'll figure it out.", female: "Depends on what you're good at." } }
                ]
            }
        ]
    },
    {
        id: "scene2",
        bg: "assets/backgrounds/soccer_field.png",
        nodes: [
            {
                npcId: "coach",
                narrative: "The soccer field is a place that shapes characters' experiences. Sport is a major social currency.",
                dialogue: "Alright, tryouts! I want to see your attitude towards competition.",
                choices: [
                    { text: "Wait politely and follow all instructions strictly.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Good discipline. I like that.", female: "Excellent, wait your turn nicely." } },
                    { text: "Demand a spot immediately and loudly.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Settle down, hotshot! Don't overstep.", female: "Whoa, calm down. Let's not get too intense." } },
                    { text: "Stretch quietly in the back.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Don't fall asleep back there.", female: "Alright, whenever you're ready." } }
                ]
            },
            {
                npcId: "duke",
                narrative: "Beliefs here dictate that gender doesn't determine ability, but people still hold biases.",
                dialogue: "If you make the team, you're one of us. You better not let us down.",
                choices: [
                    { text: "Assure him you won't let the team down.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Good man. Bros stick together.", female: "Awesome. We need solid players." } },
                    { text: "Tell him you play for yourself, not for his approval.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Wow. Not a team player, huh?", female: "Ouch. Okay then." } },
                    { text: "Say you'll just do your best.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "I guess we'll see if your best is enough.", female: "Yeah, you and everyone else." } }
                ]
            },
            {
                npcId: "coach",
                narrative: "Ability is publicly judged, enforcing social boundaries.",
                dialogue: "Okay, time to show what you've got. Let's see some real aggression!",
                choices: [
                    { text: "Perform exactly the drills he asked for.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Textbook form! Great job.", female: "Very clean technique." } },
                    { text: "Ignore the drill and try a flashy, unauthorized trick.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "What was that garbage? Stick to the plan!", female: "This isn't a circus. Focus!" } },
                    { text: "Do a decent, unmemorable job.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Passable. Next!", female: "Okay, moving on." } }
                ]
            }
        ]
    },
    {
        id: "scene3",
        bg: "assets/backgrounds/cafeteria.png",
        nodes: [
            {
                npcId: "monique",
                narrative: "The cafeteria maps out the concepts of power and inclusion.",
                dialogue: "You can sit here... as long as you promise not to talk to the weird kids. Image matters.",
                choices: [
                    { text: "Agree. Image is everything.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Exactly. You're catching on fast.", female: "Right? It's all about who you are seen with." } },
                    { text: "Tell her you'll talk to whoever you want.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Enjoy social suicide, then.", female: "Are you serious? You're ruining the vibe." } },
                    { text: "Sit down without making any promises.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Quiet type. I can work with that.", female: "I'll take that as a yes." } }
                ]
            },
            {
                npcId: "gossip",
                narrative: "Attitudes are shared loudly to reinforce who belongs and who doesn't.",
                dialogue: "Did you see what that 'Outsider' kid is wearing? So embarrassing.",
                choices: [
                    { text: "Laugh along with the gossip to fit in.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Haha, right? Tragic.", female: "So glad you agree. Hideous." } },
                    { text: "Defend the outsider publicly.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Yikes. Defensive much?", female: "Okay, weird flex, but sure." } },
                    { text: "Change the subject completely.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Anyway... yeah.", female: "Huh. Moving on, I guess." } }
                ]
            },
            {
                npcId: "olivia",
                narrative: "Identity can be flexible and self-constructed, but only if you're brave enough.",
                dialogue: "Do you ever feel like everyone here is just pretending to be someone else?",
                choices: [
                    { text: "Tell her everyone performs, it's just how you survive.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "You're very practical. I appreciate that.", female: "Exactly. It's just a survival tactic." } },
                    { text: "Insist that you refuse to pretend. Honesty is better.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "A bit naive, don't you think?", female: "Must be nice to not care what people think." } },
                    { text: "Make a vague, philosophical joke.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Very funny.", female: "You always deflect, don't you?" } }
                ]
            }
        ]
    },
    {
        id: "scene4",
        bg: "assets/backgrounds/dorm_hallway.png",
        nodes: [
            {
                npcId: "duke",
                narrative: "Deception can be humorous when used for empowerment, but it tests your values.",
                dialogue: "Hey, cover for me? If the RA asks, tell them I was studying with you all night.",
                choices: [
                    { text: "Lie to protect him. Loyalty first.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Thanks, man. Bros stick together.", female: "Thanks! Knew you were cool." } },
                    { text: "Refuse. You aren't risking your neck for a lie.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Wow. Cold.", female: "Geez, remind me not to ask you for anything." } },
                    { text: "Say you'll 'forget' where you were if asked.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "I guess that works.", female: "Better than nothing." } }
                ]
            },
            {
                npcId: "teacher",
                narrative: "Authority relies on obedience to maintain the social order.",
                dialogue: "I'm doing a spot check. Can you confirm Duke's whereabouts last night?",
                choices: [
                    { text: "Tell the teacher exactly what they want to hear.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Thank you. Good to see responsible behavior.", female: "Thank you for your cooperation." } },
                    { text: "Tell the teacher to stop interrogating students.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Excuse me? Watch your tone.", female: "That is highly disrespectful." } },
                    { text: "Claim you fell asleep early and saw nothing.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Hmm. Very well.", female: "Convenient. Fine." } }
                ]
            },
            {
                npcId: "duke",
                narrative: "Relationships should be based on authenticity, but peer culture rewards performance.",
                dialogue: "So... how did it go with the teacher?",
                choices: [
                    { text: "Tell him you handled it perfectly.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "You're a legend.", female: "I owe you one, big time." } },
                    { text: "Tell him you blew his cover because he deserved it.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Are you kidding me?!", female: "I can't believe you did that!" } },
                    { text: "Tell him you kept it vague and confusing.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Well, hopefully they bought it.", female: "Fingers crossed." } }
                ]
            }
        ]
    },
    {
        id: "scene5",
        bg: "assets/backgrounds/formal_event.png",
        nodes: [
            {
                npcId: "chaperone",
                narrative: "Modern freedom exists alongside very traditional public scripts at formal events.",
                dialogue: "Ah, the formal. A time-honored tradition. Please ensure you behave appropriately.",
                choices: [
                    { text: "Act perfectly traditional and compliant.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "A fine young gentleman. Impeccable.", female: "A lovely young lady. Very elegant." } },
                    { text: "Mock the outdated traditions loudly.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Have some respect, boy!", female: "How entirely unladylike!" } },
                    { text: "Nod politely and sneak away to the snack table.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Don't eat too fast.", female: "Mind your manners over there." } }
                ]
            },
            {
                npcId: "monique",
                narrative: "Gendered expectations change the meaning of the same action in public spaces.",
                dialogue: "You actually wore that? It's not really the standard for this kind of event.",
                choices: [
                    { text: "Apologize and say you didn't know the rules.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "It's fine, I'll fix your tie later.", female: "It's fine, you can borrow my gloss." } },
                    { text: "Tell her you don't care about her standards.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Ugh, you're impossible.", female: "Whatever. Be tragic." } },
                    { text: "Compliment her outfit to deflect the criticism.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Well, obviously I look good.", female: "True. I did try." } }
                ]
            },
            {
                npcId: "olivia",
                narrative: "Some believe that individuals should pursue their passions over social approval.",
                dialogue: "I hate these rules. I just want to skip the dancing and go play soccer.",
                choices: [
                    { text: "Tell her to follow the rules for tonight, just in case.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "You're right. Better to be safe.", female: "Yeah, probably for the best." } },
                    { text: "Encourage her to break the rules and leave.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "You're crazy. I can't do that.", female: "They would literally end me." } },
                    { text: "Joke about playing soccer in formal wear.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Haha, I'd probably trip.", female: "That would be a disaster." } }
                ]
            }
        ]
    },
    {
        id: "scene6",
        bg: "assets/backgrounds/final_public_scene.png",
        nodes: [
            {
                npcId: "olivia",
                narrative: "A public event forces a decision when reputation, truth, and power collide.",
                dialogue: "Everyone is watching. The rumors are crazy right now. It's time to tell the truth. Who are you, really?",
                choices: [
                    { text: "Tell them exactly what they expect to hear.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Right. That makes perfect sense.", female: "Of course. Very standard." } },
                    { text: "Tell the complete, unvarnished truth, exposing everything.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Wow. You really just blew this up.", female: "I can't believe you just said that out loud." } },
                    { text: "Give a vague, diplomatic answer that avoids the question.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Very political.", female: "Smooth talking, as usual." } }
                ]
            },
            {
                npcId: "teacher",
                narrative: "Institutions prioritize maintaining social stability through hierarchy.",
                dialogue: "Quiet down! We need to maintain order here. Are you deliberately trying to cause a scene?",
                choices: [
                    { text: "Apologize and promise to behave.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Good. Return to your place.", female: "Thank you for settling down." } },
                    { text: "Challenge the teacher's authority publicly.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Detention! Immediately!", female: "Unacceptable behavior!" } },
                    { text: "Stay completely silent.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "That's better.", female: "I thought so." } }
                ]
            },
            {
                npcId: "duke",
                narrative: "The final judgment from your peers. Your path reveals your true values.",
                dialogue: "So, after all that... where do we stand?",
                choices: [
                    { text: "Assure him you are still on his side.", effects: {c: 10, a: -10, p: -10}, exp: "happy", reaction: { male: "Glad to hear it. We're solid.", female: "Good. We need you." } },
                    { text: "Tell him you are done playing by his rules.", effects: {c: -10, a: 10, p: 10}, exp: "putoff", reaction: { male: "Your loss, buddy.", female: "Fine. Walk away." } },
                    { text: "Offer a fist bump and walk away.", effects: {c: 0, a: 0, p: 0}, exp: "neutral", reaction: { male: "Catch you later.", female: "See ya around." } }
                ]
            }
        ]
    }
];
