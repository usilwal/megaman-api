const masters = [{
        "id": 0,
        "name": "Proto Man",
        "quote": "You only care about petty things like fighting to be the best. But Mega Man is different. He cares about the future.",
        "description": "The first prototype for a self-aware robot, known as Blues in Japan. He plays an older brother role with Mega Man by helping him out and giving advice, and even saves his life on a few occasions. He is a loner who, similar to his brother, has a strong sense of justice and helps those who need it.",
        "weapon": "Proto Buster",
        "weaknesses": {
            '3': "Hard Knuckle",
            '7': "Charge Shot"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 1,
        "name": "Mega Man",
        "quote": "No, you're wrong! I only fight when I am forced to protect the world from those who would pit machines against man. I believe humans and robots can live in peace!",
        "description": "Mega Man, known as Rockman in Japan, is the main titular protagonist of the original Mega Man series, first debuting in the game of the same name in 1987. He was given the name Rock by his creator, Doctor Thomas Light, creating a pun with the name of his sister Roll, but he was dubbed \"Mega Man\" after being modified into a super fighting robot.",
        "weapon": "Mega Buster",
        "weaknesses": {},
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 2,
        "name": "Roll",
        "quote": "I still have cleaning and laundry to do, so let's make this quick!",
        "description": "Roll is a kind-hearted humanoid robot created by Dr. Light to be a housekeeper, helping around Dr. Light's Laboratory by cleaning and cooking. Roll is like a younger sister to Mega Man. Her dream is to one day open a hospital to help people in need.",
        "weapon": "Roll Buster",
        "weaknesses": {},
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 3,
        "name": "Cut Man",
        "quote": "M-Ms. Roll!! What are you doing here? Although Dr. Wily did say you would come.",
        "description": "Cut Man is a Robot Master created by Dr. Light to be a timber-felling robot. Cut Man debuted in the first Mega Man game, where he was reprogrammed by Dr. Wily to help him conquer the world.",
        "weapon": "Rolling Cutter",
        "weaknesses": {
            "1": "Super Arm",
            "Powered Up": "Super Arm",
            "8": ["Mega Ball", "Flame Sword", "Thunder Claw", "Ice Wave", "Water Balloon"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 4,
        "name": "Guts Man",
        "quote": "It's a foreman's job to look out for everybody, but sometimes, you gotta do what ain't in the blueprints!",
        "description": "Guts Man is a civil engineering Robot Master from the original Mega Man. He was created by Dr. Light to work alongside Bomb Man for the purpose of land reclamation and construction.",
        "weapon": "Super Arm",
        "weaknesses": {
            "1": "Hyper Bomb",
            "Powered Up": "Time Slow"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 5,
        "name": "Ice Man",
        "quote": "There's something dangerous up ahead, sir! Oh? Freeze it at all costs, soldier!",
        "description": "Ice Man is a Robot Master from the original Mega Man. He was created by Dr. Light to perform human-like tasks under extreme climate conditions. This can be done due to the fact he is impervious to chilling sub-zero temperatures. Ice Man is also capable of functioning in hot environments, though he is less powerful there.",
        "weapon": "Ice Slasher",
        "weaknesses": {
            "1": "Thunder Beam",
            "Powered Up": "Hyper Bomb"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 6,
        "name": "Bomb Man",
        "quote": "Idiot! Bombs aren't toys! Timing it right, lighting the fuse -- that's the stuff you gotta leave to pros!",
        "description": "Bomb Man is a Robot Master from the original Mega Man. He was created by Doctor Thomas Light for demolition and land development, blasting away debris so that land could be cleared for construction projects, working in tandem with Guts Man.",
        "weapon": "Hyper Bomb",
        "weaknesses": {
            "1": "Fire Storm",
            "Powered Up": "Rolling Cutter"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 7,
        "name": "Fire Man",
        "quote": "Get closer to me and ya'll get burned!",
        "description": "Fire Man is a Robot Master from the original Mega Man. He was built by Dr. Light to work in an incinerator at a waste management facility and is able to wield flames that can reach 7000-8000 degrees.",
        "weapon": "Fire Storm",
        "weaknesses": {
            "1": "Ice Slasher",
            "Powered Up": "Ice Slasher"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 8,
        "name": "Elec Man",
        "quote": "Do your worst, but I find it hard to believe that such a low-voltage robot like you can defeat me.",
        "description": "Elec Man is a Robot Master from the original Mega Man. He was created by Dr. Light to control the voltage of nuclear power plants. At the time of his creation, Elec Man was often hailed as Dr. Light's greatest creation and boasts razor-sharp judgement, as well as a physical agility that would not be matched until the creation of Quick Man, who is in turn based on his design.",
        "weapon": "Thunder Beam",
        "weaknesses": {
            "1": "Rolling Cutter",
            "Powered Up": "Oil Slider",
            "10": "Wheel Cutter"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 9,
        "name": "Metal Man",
        "quote": "Catch! Hee hee hee...",
        "description": "Metal Man is a Robot Master from Mega Man 2. He was the first Robot Master built by Dr. Wily, created specifically for combat for his revenge against Mega Man. Wily based Metal Man's design on Cut Man.",
        "weapon": "Metal Blade",
        "weaknesses": {
            "2": ["Quick Boomerang", "Metal Blade"],     
            "3": ["Magnet Missile", "Hard Knuckle"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 10,
        "name": "Air Man",
        "quote": "Poor child...you should've known you can't beat me.",
        "description": "Air Man is a Robot Master from the Mega Man series created by Dr. Wily specially for combat, debuting in Mega Man 2. Air Man has his face built into his torso instead of a head - an unusual design, said to be intimidating. This body supposedly worked out so well from a design perspective that it was dubbed the \"Air Man type\" design, and would be used as a basis for future creations such as Needle Man.",
        "weapon": "Air Shooter",
        "weaknesses": {
            "2": "Leaf Shield",     
            "3": ["Magnet Missile", "Spark Shock"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 11,
        "name": "Bubble Man",
        "quote": "Go ahead! Fight your way though every robot I stationed here! Avoid every trap I so carefully laid out. I'll be waiting for you. I'll be here preparing your watery grave! And I'll say 'Welcome to Davy Jones' Locker!'",
        "description": "Bubble Man is a Robot Master from Mega Man 2. He is the first aquatic Robot Master created by Dr. Wily for underwater combat. However, a defect in his systems made him unable to walk on land, being only able to move by jumping (akin to a frog). When Wily noticed this, he couldn't help but laugh. Despite this flaw, Bubble Man is at home in the water, being able to swim at a remarkable speed.",
        "weapon": "Bubble Lead",
        "weaknesses": {
            "2": "Metal Blade",     
            "3": ["Spark Shock", "Shadow Blade"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 12,
        "name": "Quick Man",
        "quote": "Because to destroy you in a glorious battle, that is my aspiration! Then I will be the world's number one robot!",
        "description": "Quick Man is a Robot Master from Mega Man 2. He was created by Dr. Wily using Elec Man's design as a base. His body is made of lightweight materials, allowing him to move at very high speeds, but this can easily cause him to be blown away by weapons like Air Man's Air Shooter.",
        "weapon": "Quick Boomerang",
        "weaknesses": {
            "2": ["Time Stopper", "Crash Bomber"],     
            "3": ["Gemini Laser", "Search Snake"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 13,
        "name": "Crash Man",
        "quote": "You think I'm some knock-off, is that it? I'm all the power of Guts Man and Bomb Man combined, you little punk! Who are you to talk, Mr. Copy-powers-'cause-you-got-none?!",
        "description": "Crash Man, known as Clash Man in Japan, is a Robot Master from Mega Man 2 that was built by Dr. Wily using the designs of Bomb Man and Guts Man as a base with high speed and agility, the use of high explosives as primary weapons, and clad in a thick armor that can effectively withstand explosions.",
        "weapon": "",
        "weaknesses": {
            "2": "Air Shooter",     
            "3": ["Hard Knuckle", "Top Spin"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 14,
        "name": "Flash Man",
        "quote": "Even the clever Rockman can't stand up to my Time Stopper. Sorry, but it ends here, Rockman!",
        "description": "Flash Man is a Robot Master from Mega Man 2 created by Doctor Albert W. Wily to challenge the everlasting idea of controlling time. His Special Weapon is the Time Stopper, a unique system that allows him to stop time in his vicinity for brief periods.",
        "weapon": "Time Stopper",
        "weaknesses": {
            "2": ["Metal Blade", "Crash Bomber"],     
            "3": ["Needle Canyon", "Gemini Laser"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 15,
        "name": "Heat Man",
        "quote": "Does Fire Man complain about how hot he is? Because I'm supposed to be a direct upgrade on his design, and you'd think heat resistance would be a part of that... I don't even want to move... ",
        "description": "Heat Man is a combat Robot Master from Mega Man 2 created by Dr. Wily based on Fire Man's design. His body has a box-like shape which resembles a Zippo lighter, with a lid that Heat Man can use to retract his head into for additional protection, but it can sometimes close down onto him unintentionally.",
        "weapon": "Atomic Fire",
        "weaknesses": {
            "2": "Bubble Lead",     
            "3": ["Top Spin", "Shadow Blade"]
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
    {
        "id": 16,
        "name": "Wood Man",
        "quote": "You killed Shadow Man, didn't you? I heard your voice as he was destroyed. He can't be rebuilt- I tried. But I can still extract vengeance! Fight me! You... you destroyed my friend. My family!",
        "description": "Wood Man is a combat Robot Master created by Doctor Albert W. Wily using natural hinoki cypresses. He has a very unique design due to his body being made almost completely out of wood- including some of his mechanisms, along with a thin coating of metal for extra protection. Because of this, Wood Man has great strength and resistance against physical blows, but is somewhat slow and highly vulnerable to fire and cutting weaponry.",
        "weapon": "Leaf Shield",
        "weaknesses": {
            "2": ["Atomic Fire", "Air Shooter"],     
            "3": ["Needle Cannon", "Search Snake"],
            "8": "Flame Sword",
            "10": "Triple Blade"
        },
        "images": {
            "sprite": "",
            "portrait": ""
        }
    },
]

module.exports = masters;