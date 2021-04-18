const textElem = document.getElementById('text');
const btnElem = document.getElementById('Buttons');
let state = {}
const Diapers = 1;
const CryForMommy = 1;
const nunchakuPacifier=1;
function startGame(){
    state={}
    showText(1)

}
function showText(textNodeIndex){
    const textNode= text.find(textNode => textNode.id === textNodeIndex)
    textElem.innerHTML = textNode.text;  
    while(btnElem.firstChild){
        btnElem.removeChild(btnElem.firstChild)
    }
    textNode.options.forEach(option =>{
        if(showOption(option)){
            const btn = document.createElement('button')
            btn.innerHTML = option.text
            btn.classList.add('btn')
            btn.addEventListener('click', () => Options(option))
            btnElem.appendChild(btn)

        }
    })
}

function showOption(option){
    return true;
}

function Options(option){
    const nextTextId = option.nextText
    if(nextTextId <= 0){
        return startGame()
    }
    showText(nextTextId)

}

const text = [
    {   id:1,
        text: 'In the next minutes you are going to experience the adventure of Bob. Bob is in his room playing with Shyla, the family dog. Suddenly, he realizes that Ted, his plush bear, is missing. It is up to you to find his dearest friend.<br /> Do you want to start the adventure?',

       
        options: [
    {
        text :'1. Let&#8217;s go!',
        nextText: 2

    },
    {
        text:'I got more important things to do!( end )',
        nextText: 3
    }
]
},
{
    id:3,
    text:'Press the top right X to exit the game',
    options:[
        {
            text:'1.Go back to the first room!',
            nextText: 1
        }
    ]
},
{
    id:2,
    text:'Well done! You did the right thing. Bob is a baby. He does not know too much, but when it comes to his toys, especially Ted, he may get a little aggressive. Currently, Bob has in his inventory the following weapons: 1x Dirty Diapers and a Nunchaku pacifier ( one time use ). Anyway, Bob, like any other baby on this planet, has an unbeatable perk; let&#8217;s call it an ability: Cry for Mommy x 1. This is his ultimate power. You can use it once the whole game and this power will act like the ultimate weapon. If you get caught your mommy will take care of the problem or she will take you to the previous room.',
    options:[
        {
            text:'1.Proceed!',
            nextText: 4
        }
    ]
},
{
    id:4,
    text:'A last thing to know is that Bob has attributes. Like most babies, his charisma levels are off the charts. 80 Charisma, 10 Strength, 2 Intelligence. Based on these attributes it is decided if the choice you make will take you to the right room or make you lose the game early. Now that everything you have to know has been shared with you, let&#8217;s start the ADVENTURE!',
    options:[
        {
            text:'1.Start!',
            nextText: 5
        }
    ]
},
{
    id:5,
    text:'You are in your room playing with Shyla. Out of nowhere you realize that Ted is missing.</br>What are you going to do?',
    options:[
        {
            text:'1.Open the door and go to the hallway.',
            nextText: 6
        },
        { 
            text: '2.Pet Shyla one more time.',
            nextText: 6
        },
        {
           text:' 3.Finish your "Match the colors game!"',
           nextText: 6
        }
    ]
},
{
    id:6,
    text:'You are now in the hallway. You see 3 doors. First one looks like a door that will take you outside of your house. The second one, is the Bathroom door and the last one looks like your parents bedroom door. Oh, wait! The hallway is not ending here...',
    options:[
        {
            text:'1.Go outside! ',
            nextText: 7
        },
        { 
            text: '2. Go to the bathroom',
            nextText: 8
        },
    
       {
          text:' 3.Go into the parent&#8217;s bedroom"',
          nextText: 9
       },

        {
           text:' 3.Go down the hallway"',
           nextText: 10
        }
    ]
},
{
    id:7,
    text:'I forgot to tell you. Your nanny is a ferocious beast and  you can&#8217;t get caught by her under any circumstances, because you will lose.</br> As you close the door behind you the nanny finds you. Be fast! ',
    options:[
        {
            text:'1.Hit her with a diaper',
            nextText: 7.1
        },
        { 
            text: '2.Use the Nunchaku pacifier',
            nextText: 7.2
        },
        {
           text:' 3.Cry for Mommy"',
           nextText: 7.3
        }
    ]
},
{
    id:7.1,
    text:'Good aim. You hit her in the head. Now go back inside before she wakes up!',
    options:[
        {
            text:'Go Back!',
            nextText: 6
        }
       
        
    ]
},
{
    id:7.2,
    text:'You fought her like a Viking. Now go back into the house before she wakes up!',
    options:[
        {
            text:'Go Back!',
            nextText: 6
        }
       
        
    ]
},
{
    id:7.3,
    text:'Your mother comes to your help! Go back inisde!',
    options:[
        {
            text:'Go Back!',
            nextText: 6
        }
       
        
    ]
},
{
    id:8,
    text:'You are in the bathroom. Well done! Another Dirty Diaper for your collection.',
    options:[
        {
            text:'Go Back!',
            nextText: 6
        }
       
        
    ]
},
{
    id:9,
    text:'As you enter your parents bedroom you find Ted&#8217;s T-Shirt. Looks like he is close.',
    options:[
        {
            text:'Look for him!',
            nextText: 9.1
        },
        {
            text:'Go Back!',
            nextText: 6
        }
       
       
        
    ]
},
{
    id:9.1,
    text:'It looks like Ted was here. Someone must have taken him hostage. I will keep looking for him!',
    options:[
        {
            text:'Go Back!',
            nextText: 6
        } 
        
    ]
},
{
    id:10,
    text:'As you follow the corridor you find two more doors. The first one looks like the kitchen door. As for the second one, you don&#8217;t recall seeing it in your 2 years of living.',
    options:[
        {
            text:'Enter the kitchen ',
            nextText: 11
        },
        {
            text:'Enter the mysterious door.',
            nextText: 13
        } 
         
        
    ]
},
{
    id:11,
    text:'Once you enter the kitchen you feel the powerful smell of the substance you love as much as you love Ted. You find your baby bottle that is full of warm milk. You realize it may be a trap, set by the nanny, but will you really give up the opportunity to drink some warm milk?',
    options:[
        {
            text:'Drink the milk  ',
            nextText: 11.1
        },
        {
            text:'Go back!',
            nextText: 10
        } 
         
        
    ]
},
{
    id:11.1,
    text:'As you drink from the milk you feel sleepy. You realize that the milk was a trap placed by the nanny to stop you from finding your old friend. As you go to sleep you feel like your strength has slightly improved. At the cost of your charisma and intelligence, you become a Super Baby.',
    options:[
        {
            text:'Go to sleep!',
            nextText: 11.2
        },
        {
            text:'Cry for mommy!',
            nextText: 10
        } 
         
        
    ]
},
{
    id:11.2,
    text:'It feels like days have passed since you had that beloved deep sleep. You wake up 5 minutes later. As you open your eyes you see Ted and, in the blink of an eye, you burst into tears of happiness. You try to hug him but your hands are handcuffed.</br> The nanny enters the room with an evil smile on her face.</br> Nanny : Ted is mine! You can&#8217;t stop me!</br>Bob : Boo-boo, uppie!</br> Since you drank the milk, your body became as strong as the metal handcuffs you are in.',
    options:[
        {
            text:'Release the beast!',
            nextText: 11.3
        }
        
    ]
},
{
    id:11.3,
    text:'Seconds later your tears evaporate. You feel unlimited power. In a fraction of a second you break the handcuffs and start fighting the nanny. This fight will be legendary.',
    options:[
        {
            text:'Start fight.',
            nextText: 11.4
        }
        
    ]
},
{
    id:11.4,
    text:'Make your move:',
    options:[
        {
            text:'Leg kick!',
            nextText: 11.5
        },
        {
            text:'Diaper bomb! ',
            nextText: 11.5
        },
        {
            text:'Baby punch! ',
            nextText: 11.5
        }
        
        
        
    ]
},
{
    id:11.5,
    text:'You missed the nanny.</br> In an attempt to hit you the nanny stumbles down.</br>This is your chance.',
    options:[
        {
            text:'Leg kick!',
            nextText: 11.6
        },
        {
            text:'Diaper bomb! ',
            nextText: 11.7
        },
        {
            text:'Baby punch! ',
            nextText: 11.8
        }
        
        
    ]
},
{
    id:11.6,
    text:'Your leg kick did devastating damage to the nanny. She won&#8217;t wake up in the near future.',
    options:[
        {
            text:'Take Ted and lock up the nanny!',
            nextText: 12
        }
        
    ]
},
{
    id:11.7,
    text:'The Diaper bomb exploded with such a power that it threw the nanny out of the house. ',
    options:[
        {
            text:'Take Ted and leave the room!',
            nextText: 12
        }
        
    ]
},
{
    id:11.8,
    text:'Your Baby punch had no effect on the nanny. She managed to beat you. </br>When you open your eyes you see Ted in your arms. After some time you realize that everything was just a dream, and that you have never had a nanny.',
    options:[
        {
            text:'Continue!',
            nextText: 12
        }
        
    ]
},
{
    id:12,
    text:'Congratulations! You have finished the game. You are in your room with Ted and Shyla! Your parents will never find out what happened. The nanny managed to escape but she never returned. </br> Who knows, maybe she is just working on another plan to steal Ted from you.',
    options:[
        {
            text:'Play Again!',
            nextText: 5
        },
        {
            text:'End!',
            nextText: 3
        }
        
        
    ]
},
{
    id:13,
    text:'As you try to open the door, the nanny grabs you!',
    options:[
        {
            text:'Continue!',
            nextText: 13.1
        },
        {
            text:' Cry for mommy! ',
            nextText: 13.2
        }
        
        
    ]
},
{
    id:13.1,
    text:'You wake up in your room. When you try to get out of your crib you realize it is locked. You lost Ted.',
    options:[
        {
            text:'Try Again!',
            nextText: 5
        },
        {
            text:'End!',
            nextText: 3
        }
        
        
    ]
},
{
    id:13.2,
    text:'As your mother comes to you, the nanny hides. </br> Your mother opens the misteryous door.',
    options:[
        {
            text:'Go inside!',
            nextText: 13.3
        },
        {
            text:'Enter the kitchen ',
            nextText: 11
        }
        
        
    ]
},
{
    id:13.3,
    text:'As you enter the room, the door colses behind you. </br> You follow the corridor. </br> After two minutes you see Ted. ',
    options:[
        {
            text:'Hug Ted!',
            nextText: 13.4
        }
        
    ]
},
{
    id:13.4,
    text:'When you are trying to hug Ted, you hear heavy steps from behind.</br> When you turn around you see the nanny with an evil smile on her face.</br> What are you going to do! ',
    options:[
        {
            text:'1.Hit her with a diaper',
            nextText: 13.5
        },
        { 
            text: '2.Use the Nunchaku pacifier',
            nextText: 13.5
        },
        {
            text:'3.Try to run!',
            nextText:13.6
        }
    ]
},
{
    id:13.5,
    text:'You missed the nanny. ',
    options:[
        {
            text:'Continue!',
            nextText: 13.9
        }
        
    ]
},
{
    id:13.9,
    text:'Out of nothing, the nanny hits you so hard that it puts you to sleep.',
    options:[
        {
            text:'Try to wake up!',
            nextText: 13.1
        }
        
    ]
},
{
    id:13.6,
    text:'You stumble down and hit your head. Imeddiatly, you fell to sleep!',
    options:[
        {
            text:'Try to wake up!',
            nextText: 13.7
        }
        
    ]
},
{
    id:13.7,
    text:'When you open your eyes you see Ted in your arms. After some time you realize that everything was just a dream, and that you have never had a nanny.',
    options:[
        {
            text:'Continue!',
            nextText: 12
        }
        
        
    ]
},
{
    id:12,
    text:'Congratulations! You have finished the game. You are in your room with Ted and Shyla! Your parents will never find out what happened. The nanny managed to escape but she never returned. </br> Who knows, maybe she is just working on another plan to steal Ted from you.',
    options:[
        {
            text:'Play Again!',
            nextText: 5
        },
        {
            text:'End!',
            nextText: 3
        }
        
        
    ]
}

]

startGame()

